'use client'
import clsx from "clsx";
import { TAGS } from "@/lib/tags";

export default function FilterBar ({ filters, toggleFilter }) {
  return (
    <div className="overflow-auto max-w-screen px-2 hide-scroll-bar">
      <div className="flex gap-2 w-max mx-auto">
        {Object.getOwnPropertySymbols(TAGS).map((symbol, index) => (
          <button 
            key={index} 
            onClick={e => toggleFilter(symbol)} 
            className={clsx("px-6 py-2 text-lg text-muted-foreground bg-secondary rounded-full transition", filters.includes(symbol) && "!bg-foreground !text-background")}
          >
            {TAGS[symbol]}
          </button>
        ))}
      </div>
    </div>
  )
}