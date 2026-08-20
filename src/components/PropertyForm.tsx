"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ImageUploader from "./ImageUploader";
import type { Property } from "@/lib/types";

type FeatureRow = {
  icon: string;
  label: string;
  items: string;
};

type FieldErrors = Partial<
  Record<
    "address" | "city" | "state" | "zip" | "price" | "beds" | "baths" | "sqft" | "yearBuilt" | "images",
    string
  >
>;

function newFeatureRow(): FeatureRow {
  return { icon: "", label: "", items: "" };
}

const fieldClass = (hasError: boolean) =>
  `w-full bg-surface border rounded-lg px-4 py-3 text-body-md outline-none transition-colors ${
    hasError
      ? "border-error focus:border-error focus:ring-1 focus:ring-error"
      : "border-outline-variant focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container"
  }`;

export default function PropertyForm({
  agentId,
  property,
}: {
  agentId: string;
  property?: Property;
}) {
  const router = useRouter();
  const isEdit = Boolean(property);

  const [address, setAddress] = useState(property?.address ?? "");
  const [city, setCity] = useState(property?.city ?? "");
  const [state, setState] = useState(property?.state ?? "");
  const [zip, setZip] = useState(property?.zip ?? "");
  const [price, setPrice] = useState(property ? String(property.price) : "");
  const [beds, setBeds] = useState(property ? String(property.beds) : "");
  const [baths, setBaths] = useState(property ? String(property.baths) : "");
  const [sqft, setSqft] = useState(property ? String(property.sqft) : "");
  const [yearBuilt, setYearBuilt] = useState(
    property ? String(property.yearBuilt) : String(new Date().getFullYear()),
  );
  const [status, setStatus] = useState(property?.status ?? "For Sale");
  const [badge, setBadge] = useState(property?.badge ?? "");
  const [description, setDescription] = useState(property?.description.join("\n\n") ?? "");
  const [features, setFeatures] = useState<FeatureRow[]>(() =>
    property && property.features.length > 0
      ? property.features.map((f) => ({
          icon: f.icon,
          label: f.label,
          items: f.items.join("\n"),
        }))
      : [newFeatureRow()],
  );
  const [images, setImages] = useState<string[]>(property?.gallery ?? []);

  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!address.trim()) errors.address = "Street address is required.";
    if (!city.trim()) errors.city = "City is required.";
    if (!state.trim()) errors.state = "State is required.";
    if (!zip.trim()) errors.zip = "ZIP code is required.";
    if (!price || Number(price) <= 0) errors.price = "Enter a valid price.";
    if (beds === "" || Number(beds) < 0) errors.beds = "Enter the number of beds.";
    if (baths === "" || Number(baths) < 0) errors.baths = "Enter the number of baths.";
    if (!sqft || Number(sqft) <= 0) errors.sqft = "Enter the square footage.";
    if (!yearBuilt || Number(yearBuilt) < 1800) errors.yearBuilt = "Enter a valid year.";
    if (images.length === 0) errors.images = "Upload at least one photo.";
    return errors;
  }

  // Once the user has attempted a submit, field errors stay live on every render
  // so they clear as soon as each field becomes valid, not just on the next submit.
  const fieldErrors = attempted ? validate() : {};

  function updateFeature(index: number, patch: Partial<FeatureRow>) {
    setFeatures((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  }

  function removeFeature(index: number) {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setAttempted(true);

    const errors = validate();
    if (Object.keys(errors).length > 0) return;

    const featurePayload = features
      .filter((row) => row.icon.trim() && row.label.trim())
      .map((row) => ({
        icon: row.icon.trim(),
        label: row.label.trim(),
        items: row.items
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean),
      }))
      .filter((row) => row.items.length > 0);

    setSubmitting(true);
    try {
      const res = await fetch(isEdit ? `/api/properties/${property!.id}` : "/api/properties", {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: address.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          price: Number(price),
          beds: Number(beds),
          baths: Number(baths),
          sqft: Number(sqft),
          yearBuilt: Number(yearBuilt),
          status,
          badge: badge.trim() || undefined,
          description,
          features: featurePayload,
          gallery: images,
          agentId,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong saving the listing.");
      }

      router.push(`/properties/${data.id}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-section-gap max-w-3xl">
      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-headline-md font-semibold text-primary">Address</h2>
        <div>
          <input
            placeholder="Street Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={fieldClass(Boolean(fieldErrors.address))}
          />
          {fieldErrors.address && (
            <p className="text-label-md text-error mt-1">{fieldErrors.address}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-sm">
          <div>
            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={fieldClass(Boolean(fieldErrors.city))}
            />
            {fieldErrors.city && <p className="text-label-md text-error mt-1">{fieldErrors.city}</p>}
          </div>
          <div>
            <input
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={fieldClass(Boolean(fieldErrors.state))}
            />
            {fieldErrors.state && (
              <p className="text-label-md text-error mt-1">{fieldErrors.state}</p>
            )}
          </div>
          <div>
            <input
              placeholder="ZIP Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className={fieldClass(Boolean(fieldErrors.zip))}
            />
            {fieldErrors.zip && <p className="text-label-md text-error mt-1">{fieldErrors.zip}</p>}
          </div>
        </div>
        <p className="text-label-md text-on-surface-variant">
          We&rsquo;ll place the map pin automatically from this address
          {isEdit ? " if it changes" : ""}.
        </p>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-headline-md font-semibold text-primary">Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-stack-sm">
          <div>
            <input
              type="number"
              min={0}
              placeholder="Price ($)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={fieldClass(Boolean(fieldErrors.price))}
            />
            {fieldErrors.price && (
              <p className="text-label-md text-error mt-1">{fieldErrors.price}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              min={0}
              step={0.5}
              placeholder="Beds"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className={fieldClass(Boolean(fieldErrors.beds))}
            />
            {fieldErrors.beds && <p className="text-label-md text-error mt-1">{fieldErrors.beds}</p>}
          </div>
          <div>
            <input
              type="number"
              min={0}
              step={0.5}
              placeholder="Baths"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              className={fieldClass(Boolean(fieldErrors.baths))}
            />
            {fieldErrors.baths && (
              <p className="text-label-md text-error mt-1">{fieldErrors.baths}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              min={0}
              placeholder="Sqft"
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              className={fieldClass(Boolean(fieldErrors.sqft))}
            />
            {fieldErrors.sqft && <p className="text-label-md text-error mt-1">{fieldErrors.sqft}</p>}
          </div>
          <div>
            <input
              type="number"
              min={1800}
              placeholder="Year Built"
              value={yearBuilt}
              onChange={(e) => setYearBuilt(e.target.value)}
              className={fieldClass(Boolean(fieldErrors.yearBuilt))}
            />
            {fieldErrors.yearBuilt && (
              <p className="text-label-md text-error mt-1">{fieldErrors.yearBuilt}</p>
            )}
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={fieldClass(false)}
          >
            <option>For Sale</option>
            <option>Pending</option>
            <option>Sold</option>
          </select>
        </div>
        <input
          placeholder='Badge (optional, e.g. "Just Listed")'
          value={badge}
          onChange={(e) => setBadge(e.target.value)}
          className={fieldClass(false)}
        />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-headline-md font-semibold text-primary">Description</h2>
        <textarea
          placeholder="Describe the home. Leave a blank line between paragraphs."
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${fieldClass(false)} resize-none`}
        />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-semibold text-primary">Features & Amenities</h2>
          <button
            type="button"
            onClick={() => setFeatures((prev) => [...prev, newFeatureRow()])}
            className="text-label-md font-semibold text-primary hover:underline underline-offset-4"
          >
            + Add Category
          </button>
        </div>
        {features.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr_auto] gap-2 items-start bg-surface-container-low rounded-lg p-3"
          >
            <input
              placeholder="Icon (e.g. kitchen)"
              value={row.icon}
              onChange={(e) => updateFeature(index, { icon: e.target.value })}
              className={fieldClass(false)}
            />
            <input
              placeholder="Category (e.g. Appliances)"
              value={row.label}
              onChange={(e) => updateFeature(index, { label: e.target.value })}
              className={fieldClass(false)}
            />
            <textarea
              placeholder={"One item per line"}
              rows={2}
              value={row.items}
              onChange={(e) => updateFeature(index, { items: e.target.value })}
              className={`${fieldClass(false)} resize-none`}
            />
            <button
              type="button"
              onClick={() => removeFeature(index)}
              aria-label="Remove category"
              className="p-2 text-on-surface-variant hover:text-error transition-colors"
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-headline-md font-semibold text-primary">Photos</h2>
        <ImageUploader initialUrls={property?.gallery} onImagesChange={setImages} />
        {fieldErrors.images && <p className="text-label-md text-error">{fieldErrors.images}</p>}
      </section>

      {error && <p className="text-label-md font-semibold text-error">{error}</p>}

      <div className="flex items-center gap-stack-md">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto self-start bg-primary text-on-primary text-label-md font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 active:scale-[0.97] transition-all disabled:opacity-60"
        >
          {submitting
            ? isEdit
              ? "Saving Changes..."
              : "Creating Listing..."
            : isEdit
              ? "Save Changes"
              : "Create Listing"}
        </button>
        {isEdit && (
          <Link
            href="/dashboard"
            className="text-label-md font-semibold text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Cancel
          </Link>
        )}
      </div>
    </form>
  );
}
