"use client";

import Container from "@/components/ui/Container";

export function FilterBar({
  sort,
  setSort,
}: {
  sort: string;
  setSort: (v: string) => void;
}) {
  return (
    <div className="py-2">
      <Container>
        <div className="flex items-center justify-between">
          <button className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
            Filter <span>▾</span>
          </button>

          <div className="text-sm text-gray-700">
            <span className="mr-1">Sort By :</span>
            <button
              onClick={() =>
                setSort(sort === "termurah" ? "termahal" : "termurah")
              }
              className="underline underline-offset-4"
            >
              {sort === "termurah" ? "Termurah" : "Termahal"} ▾
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
