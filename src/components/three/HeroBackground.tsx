"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const NodeNetwork = dynamic(() => import("./NodeNetwork"), {
  ssr: false,
});

// This value never changes after mount, so a no-op subscription is
// intentional — useSyncExternalStore lets us read a client-only capability
// (viewport width + reduced-motion preference) without the extra render
// pass that a useEffect + setState pattern would cause.
function subscribe() {
  return () => {};
}

function getSnapshot() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const isSmallScreen = window.innerWidth < 640;
  return !prefersReducedMotion && !isSmallScreen;
}

function getServerSnapshot() {
  return false;
}

export function HeroBackground() {
  const shouldRender = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (!shouldRender) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial-fade opacity-70"
      />
    );
  }

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <NodeNetwork />
    </div>
  );
}
