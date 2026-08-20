import SkeletonHeader from "@/components/skeletons/SkeletonHeader";
import Bone from "@/components/skeletons/Bone";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkeletonHeader />

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-section-gap">
        <div className="flex justify-between items-end border-b border-outline-variant pb-4">
          <div className="flex flex-col gap-2">
            <Bone className="h-8 w-40" />
            <Bone className="h-4 w-56" />
          </div>
          <div className="flex gap-stack-sm">
            <Bone className="h-10 w-32 rounded-full" />
            <Bone className="h-10 w-24 rounded-full" />
          </div>
        </div>

        <div className="flex flex-col gap-stack-md">
          <Bone className="h-6 w-40" />
          {[0, 1, 2].map((i) => (
            <Bone key={i} className="h-24" />
          ))}
        </div>

        <div className="flex flex-col gap-stack-md">
          <Bone className="h-6 w-40" />
          {[0, 1].map((i) => (
            <Bone key={i} className="h-28" />
          ))}
        </div>
      </main>
    </div>
  );
}
