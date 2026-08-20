import SkeletonHeader from "@/components/skeletons/SkeletonHeader";
import Bone from "@/components/skeletons/Bone";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkeletonHeader />

      <div className="hidden md:flex items-center gap-stack-md px-6 md:px-margin-desktop py-4 border-b border-on-surface-variant/10 h-18">
        <Bone className="h-10 w-64 rounded-full" />
        <Bone className="h-10 w-36 rounded-full" />
        <Bone className="h-10 w-36 rounded-full" />
      </div>

      <main className="flex-1 flex items-start">
        <div className="w-full lg:w-[40%] xl:w-[35%] bg-background p-6 md:p-8">
          <Bone className="h-8 w-40 mb-2" />
          <Bone className="h-4 w-32 mb-stack-lg" />

          <div className="flex flex-col gap-stack-lg">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-outline-variant/30">
                <Bone className="h-64 w-full rounded-none" />
                <div className="p-4 flex flex-col gap-2">
                  <Bone className="h-7 w-32" />
                  <Bone className="h-4 w-48" />
                  <div className="flex gap-4 pt-4 border-t border-surface-variant mt-2">
                    <Bone className="h-4 w-10" />
                    <Bone className="h-4 w-10" />
                    <Bone className="h-4 w-14" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:w-[60%] xl:w-[65%] bg-surface-container-high animate-pulse" />
      </main>
    </div>
  );
}
