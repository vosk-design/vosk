"use client";

import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex flex-col items-center gap-2 fixed top-10 left-10 active:opacity-25 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-2 font-mono text-sm uppercase">
        <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.46967 10.0303L5 10.5607L6.06066 9.50001L5.53033 8.96968L3.56066 7.00001H13.25C13.3881 7.00001 13.5 7.11193 13.5 7.25001V13.5V14.25H15V13.5V7.25001C15 6.28351 14.2165 5.50001 13.25 5.50001H3.56066L5.53033 3.53034L6.06066 3.00001L5 1.93935L4.46967 2.46968L1.21967 5.71968C0.926777 6.01257 0.926777 6.48744 1.21967 6.78034L4.46967 10.0303Z"
            fill="currentColor"
          ></path>
        </svg>
        <p>Back</p>
      </div>
    </button>
  );
}
