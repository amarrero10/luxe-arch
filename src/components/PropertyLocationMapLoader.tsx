"use client";

import dynamic from "next/dynamic";

const PropertyLocationMap = dynamic(() => import("./PropertyLocationMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-surface-container-high animate-pulse" />,
});

export default PropertyLocationMap;
