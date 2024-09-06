"use client";

import { PlaceholdersAndVanishInput } from "./Input";

export function PlaceholdersAndVanishInputDemo() {

  const placeholders = [
    "Why choose Minfiy?", 
    "1. Simple & Clean URLs",
    "2. Easy to share URLs",
    "3. User-Friendly Interface",
    "4. Speed and Reliability"
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
