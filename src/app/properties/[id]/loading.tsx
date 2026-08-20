import SkeletonHeader from "@/components/skeletons/SkeletonHeader";
import Bone from "@/components/skeletons/Bone";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkeletonHeader />

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-stack-lg md:py-section-gap flex flex-col gap-section-gap">
        <Bone className="h-4 w-28" />

        <section className="flex flex-col gap-stack-md">
          <div className="flex flex-col md:flex-row justify-between items-start gap-stack-sm md:gap-0">
            <div className="flex flex-col gap-2">
              <Bone className="h-10 w-72" />
              <Bone className="h-5 w-48" />
            </div>
            <div className="flex flex-col items-end gap-2">
              <Bone className="h-8 w-32" />
              <Bone className="h-6 w-20 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[400px] md:h-[600px] rounded-xl overflow-hidden">
            <Bone className="md:col-span-2 md:row-span-2 rounded-none h-full w-full" />
            <Bone className="hidden md:block rounded-none h-full w-full" />
            <Bone className="hidden md:block rounded-none h-full w-full" />
            <Bone className="hidden md:block rounded-none h-full w-full" />
            <Bone className="hidden md:block rounded-none h-full w-full" />
          </div>

          <div className="flex items-center gap-gutter py-stack-md border-b border-outline-variant">
            {[0, 1, 2, 3].map((i) => (
              <Bone key={i} className="h-4 w-16" />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <div className="lg:col-span-2 flex flex-col gap-stack-lg">
            <div className="flex flex-col gap-2">
              <Bone className="h-7 w-40" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-2/3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              <Bone className="h-32" />
              <Bone className="h-32" />
            </div>
            <Bone className="h-64" />
          </div>
          <div className="lg:col-span-1 flex flex-col gap-stack-lg">
            <Bone className="h-80" />
            <Bone className="h-64" />
          </div>
        </div>
      </main>
    </div>
  );
}
