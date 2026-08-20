import Bone from "./Bone";

export default function SkeletonHeader() {
  return (
    <header className="bg-surface-container-lowest w-full h-18 border-b border-on-surface-variant/10">
      <div className="flex justify-between items-center w-full h-full px-6 md:px-margin-desktop max-w-container-container-max mx-auto">
        <Bone className="h-6 w-32" />
        <div className="hidden md:flex items-center gap-gutter">
          <Bone className="h-4 w-16" />
          <Bone className="h-4 w-16" />
          <Bone className="h-4 w-12" />
        </div>
        <Bone className="h-9 w-9 rounded-full" />
      </div>
    </header>
  );
}
