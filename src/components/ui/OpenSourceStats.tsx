"use client";

import { useEffect, useState } from "react";
import { GitPullRequest } from "lucide-react";

type Stats = {
  publicRepos: number | null;
  followers: number | null;
  pullRequests: number | null;
  issues: number | null;
};

const initialStats: Stats = {
  publicRepos: null,
  followers: null,
  pullRequests: null,
  issues: null,
};

function StatValue({ value, loading }: { value: number | null; loading: boolean }) {
  if (loading) {
    return (
      <span className="inline-block h-8 w-10 animate-pulse rounded bg-surface-variant align-middle" />
    );
  }
  return <>{value === null ? "—" : value.toLocaleString()}</>;
}

export function OpenSourceStats() {
  const [stats, setStats] = useState<Stats>(initialStats);
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/github-stats");
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        if (!cancelled) setStats(data);
      } catch {
        if (!cancelled) setErrored(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="glow-border rounded-xl bg-surface/40 p-8">
      <div className="mb-6 flex items-center gap-2 text-text-secondary">
        <GitPullRequest className="h-4 w-4" strokeWidth={1.5} />
        <span className="font-mono text-xs uppercase tracking-wider">
          live from github
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="text-center">
          <p className="font-display text-3xl font-semibold text-text-primary">
            <StatValue value={stats.publicRepos} loading={loading} />
          </p>
          <p className="mt-1 text-xs text-text-secondary">Public Repos</p>
        </div>
        <div className="text-center">
          <p className="font-display text-3xl font-semibold text-text-primary">
            <StatValue value={stats.pullRequests} loading={loading} />
          </p>
          <p className="mt-1 text-xs text-text-secondary">Pull Requests</p>
        </div>
        <div className="text-center">
          <p className="font-display text-3xl font-semibold text-text-primary">
            <StatValue value={stats.issues} loading={loading} />
          </p>
          <p className="mt-1 text-xs text-text-secondary">Issues</p>
        </div>
        <div className="text-center">
          <p className="font-display text-3xl font-semibold text-text-primary">
            <StatValue value={stats.followers} loading={loading} />
          </p>
          <p className="mt-1 text-xs text-text-secondary">Followers</p>
        </div>
      </div>

      <p className="mt-6 border-t border-line/70 pt-5 text-xs leading-relaxed text-text-muted">
        {errored
          ? "Live numbers are temporarily unavailable — GitHub's API may be rate-limited. Refresh to try again."
          : "Pulled live from the GitHub API, cached for up to an hour."}
      </p>
    </div>
  );
}
