import SkeletonHeader from "@/components/skeletons/SkeletonHeader";
import Bone from "@/components/skeletons/Bone";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkeletonHeader />

      <div className="relative h-105 md:h-140 w-full overflow-hidden">
        <Bone className="absolute inset-0 rounded-none" />
      </div>

      <main className="w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-section-gap flex flex-col gap-section-gap">
        <div className="max-w-3xl mx-auto w-full flex flex-col items-center gap-2">
          <Bone className="h-8 w-48" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-2/3" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <Bone key={i} className="h-24" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          {[0, 1, 2].map((i) => (
            <Bone key={i} className="h-40" />
          ))}
        </div>
      </main>
    </div>
  );
}
