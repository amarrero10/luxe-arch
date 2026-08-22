import SkeletonHeader from "@/components/skeletons/SkeletonHeader";
import Bone from "@/components/skeletons/Bone";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkeletonHeader />

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-stack-lg">
        <div className="border-b border-outline-variant pb-4 flex flex-col gap-2">
          <Bone className="h-8 w-48" />
          <Bone className="h-4 w-64" />
        </div>

        <div className="flex flex-col gap-stack-sm">
          <Bone className="h-6 w-32" />
          <Bone className="h-12 w-full" />
          <div className="grid grid-cols-3 gap-4">
            <Bone className="h-12" />
            <Bone className="h-12" />
            <Bone className="h-12" />
          </div>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <Bone className="h-6 w-24" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <Bone key={i} className="h-12" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <Bone className="h-6 w-40" />
          <Bone className="h-28 w-full" />
        </div>

        <div className="flex flex-col gap-stack-sm">
          <Bone className="h-6 w-56" />
          <Bone className="h-16 w-full" />
        </div>

        <div className="flex flex-col gap-stack-sm">
          <Bone className="h-6 w-24" />
          <Bone className="h-40 w-full" />
        </div>

        <Bone className="h-14 w-40 rounded-lg" />
      </main>
    </div>
  );
}
