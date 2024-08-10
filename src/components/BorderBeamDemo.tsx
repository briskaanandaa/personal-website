import { BorderBeam } from "@/components/magicui/border-beam";

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-fit w-fit px-4 py-2 flex-col items-center justify-center overflow-hidden rounded-full border bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-slate-900 bg-clip-text text-center text-sm font-semibold leading-none text-transparent">
        Please do not click on my name
      </span>
      <BorderBeam size={50} duration={3} delay={0} />
    </div>
  );
}
