"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Coffee’s the perfect kickstart for discussing new ideas. Let’s grab a cup and talk about some cool project ideas we can work on together.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
