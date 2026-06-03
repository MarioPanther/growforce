"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-white px-4 text-slate-950">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-3xl font-bold">Application error</h1>
            <p className="mb-8 text-slate-600">A critical error occurred while loading the site.</p>
            <button
              type="button"
              onClick={reset}
              className="rounded-md bg-slate-950 px-5 py-3 font-medium text-white"
            >
              Try Again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
