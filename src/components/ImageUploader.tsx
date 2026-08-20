"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { upload } from "@vercel/blob/client";

type ImageItem = {
  id: string;
  previewUrl: string;
  status: "uploading" | "done" | "error";
  url?: string;
};

export default function ImageUploader({
  onImagesChange,
}: {
  onImagesChange: (urls: string[]) => void;
}) {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    onImagesChange(
      images.filter((img) => img.status === "done" && img.url).map((img) => img.url as string),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  async function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    const files = Array.from(fileList);

    const newItems: ImageItem[] = files.map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      previewUrl: URL.createObjectURL(file),
      status: "uploading",
    }));

    setImages((prev) => [...prev, ...newItems]);

    await Promise.all(
      files.map(async (file, index) => {
        const item = newItems[index];
        try {
          const blob = await upload(file.name, file, {
            access: "public",
            handleUploadUrl: "/api/upload",
          });
          setImages((prev) =>
            prev.map((img) =>
              img.id === item.id ? { ...img, status: "done", url: blob.url } : img,
            ),
          );
        } catch {
          setImages((prev) =>
            prev.map((img) => (img.id === item.id ? { ...img, status: "error" } : img)),
          );
        }
      }),
    );
  }

  function removeImage(id: string) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  const doneCount = images.filter((img) => img.status === "done").length;

  return (
    <div className="flex flex-col gap-stack-sm">
      <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-outline-variant rounded-lg py-8 cursor-pointer hover:border-primary transition-colors text-on-surface-variant">
        <span className="material-symbols-outlined text-[32px]">add_photo_alternate</span>
        <span className="text-body-md">Click to upload photos</span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            handleFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </label>

      {images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {images.map((img, index) => (
            <div
              key={img.id}
              className="relative aspect-square rounded-lg overflow-hidden border border-outline-variant"
            >
              <Image src={img.previewUrl} alt="" fill unoptimized className="object-cover" />
              {img.status === "uploading" && (
                <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary animate-spin text-[20px]">
                    progress_activity
                  </span>
                </div>
              )}
              {img.status === "error" && (
                <div className="absolute inset-0 bg-error/80 flex items-center justify-center text-on-error text-[11px] font-semibold text-center px-1">
                  Failed
                </div>
              )}
              {index === 0 && img.status === "done" && (
                <div className="absolute top-1 left-1 bg-primary text-on-primary text-[10px] font-semibold px-1.5 py-0.5 rounded">
                  Cover
                </div>
              )}
              <button
                type="button"
                onClick={() => removeImage(img.id)}
                aria-label="Remove photo"
                className="absolute top-1 right-1 w-5 h-5 rounded-full bg-primary/80 text-on-primary flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </div>
          ))}
        </div>
      )}

      <p className="text-label-md text-on-surface-variant">
        {doneCount} photo{doneCount === 1 ? "" : "s"} uploaded. First photo becomes the cover
        image.
      </p>
    </div>
  );
}
