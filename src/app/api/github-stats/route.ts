import { NextResponse } from "next/server";

const GITHUB_USERNAME = "anasqadri-dev";

// Revalidates hourly — a small ISR cache in front of the GitHub API so the
// site stays fast and doesn't burn through GitHub's rate limits on every
// visitor. Set a GITHUB_TOKEN env var (a plain read-only PAT is enough) to
// raise the rate limit from 60/hr to 5,000/hr; the route works without one.
export const revalidate = 60;

type GithubStatsResponse = {
  publicRepos: number | null;
  followers: number | null;
  pullRequests: number | null;
  issues: number | null;
  fetchedAt: string;
};

async function githubFetch(url: string) {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, { headers, next: { revalidate: 60 } });
  if (!res.ok) return null;
  return res.json();
}

export async function GET() {
  const [user, prs, issues] = await Promise.all([
    githubFetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
    githubFetch(
      `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr&per_page=1`
    ),
    githubFetch(
      `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:issue&per_page=1`
    ),
  ]);

  const payload: GithubStatsResponse = {
    publicRepos: user?.public_repos ?? null,
    followers: user?.followers ?? null,
    pullRequests: prs?.total_count ?? null,
    issues: issues?.total_count ?? null,
    fetchedAt: new Date().toISOString(),
  };

  return NextResponse.json(payload, {
    headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
  });
}
