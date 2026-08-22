import SkeletonHeader from "@/components/skeletons/SkeletonHeader";
import Bone from "@/components/skeletons/Bone";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkeletonHeader />

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-section-gap">
        <div className="max-w-2xl flex flex-col gap-2">
          <Bone className="h-10 w-56" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-2/3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <Bone className="aspect-4/3 w-full rounded-xl" />
              <Bone className="h-5 w-32 mt-2" />
              <Bone className="h-4 w-24" />
              <Bone className="h-4 w-full" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
