import SkeletonHeader from "@/components/skeletons/SkeletonHeader";
import Bone from "@/components/skeletons/Bone";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkeletonHeader />

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-section-gap">
        <section className="flex flex-col md:flex-row gap-gutter items-start">
          <div className="w-full md:w-1/3 shrink-0">
            <Bone className="aspect-3/4 w-full rounded-lg" />
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-stack-lg pt-4 md:pt-12">
            <div className="flex flex-col gap-2 border-b border-outline-variant/30 pb-6">
              <Bone className="h-10 w-64" />
              <Bone className="h-5 w-48" />
            </div>
            <div className="flex flex-col gap-2">
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-2/3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <Bone key={i} className="h-24" />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-stack-lg">
          <Bone className="h-8 w-48" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[0, 1, 2].map((i) => (
              <Bone key={i} className="h-72" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
