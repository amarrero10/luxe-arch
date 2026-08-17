"use client";

import dynamic from "next/dynamic";

const MapPanel = dynamic(() => import("./MapPanel"), {
  ssr: false,
  loading: () => (
    <div className="hidden lg:block lg:w-[60%] xl:w-[65%] bg-surface-container-high animate-pulse" />
  ),
});

export default MapPanel;
