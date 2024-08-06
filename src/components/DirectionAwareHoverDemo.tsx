"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl = "/briskaanandaa.svg";
  return (
    <div className="h-full relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p></p>
      </DirectionAwareHover>
    </div>
  );
}
