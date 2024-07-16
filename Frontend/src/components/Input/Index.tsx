"use client";

import { PlaceholdersAndVanishInput } from "./Input";

export function PlaceholdersAndVanishInputDemo() {

  const placeholders = [
    "Enter any URL",
    "Watch it get minimalised",
    "A simple clean URL",
    "Easy to share",
  ];

  return (
    <>
      <div className="mt-7">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
        />
      </div>
    </>
  );
}
