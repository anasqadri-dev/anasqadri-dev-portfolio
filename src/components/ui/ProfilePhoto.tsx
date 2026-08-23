"use client";

import { useState } from "react";
import Image from "next/image";
import { profileImage } from "@/data/site-config";

export function ProfilePhoto() {
  const [errored, setErrored] = useState(false);
  const src = errored ? "/images/profile-placeholder.svg" : profileImage.src;

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px]">
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-primary/25 via-transparent to-transparent blur-2xl" />
      <div className="glow-border relative h-full w-full overflow-hidden rounded-2xl bg-surface">
        <Image
          src={src}
          alt={profileImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 80vw, 340px"
          className="object-cover"
          unoptimized={errored}
          onError={() => setErrored(true)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
      </div>
    </div>
  );
}
