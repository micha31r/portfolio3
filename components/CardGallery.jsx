'use client'
import Card from "@/components/Card";
import { create } from "random-seed";
import { format } from "date-fns";
import clsx from "clsx";
import { Suspense, useEffect, useRef, useState } from "react";
import FilterBar from "./FilterBar";
import { TAGS, CATEGORY_TAGS } from "@/lib/tags";
import { hasSymbol } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function CardGallery ({ className, data }) {
  // Load initial filters from URL
  const searchParams = useSearchParams()
  const search = searchParams.get('filter')
  const tagStrings = search ? search.split(',') : []
  const defaultFilters = Object.getOwnPropertySymbols(TAGS).filter(symbol => tagStrings.includes(symbol.description))


  const [filters, setFilters] = useState(defaultFilters)
  const [filteredData, setFilteredData] = useState(data)
  const seed = format(new Date(), 'yyyy-MM-dd')
  const rand = create(seed)

  // Shuffle card order
  data = [...data].sort(() => rand(2) - 0.5)

  // Add/remove tag from filters
  function toggleFilter(tag) {
    setFilters(
      filters.includes(tag)
        ? filters.filter((item) => item !== tag)
        : [...filters, tag]
    )
  }

  // Update card data on filter change
  useEffect(() => {
    setFilteredData(
      filters.length > 0
        ? data.filter(item => item.tags.find(tag => filters.includes(tag)))
        : data
    )
  }, [filters])

  return (
    <div>
      <FilterBar filters={filters} toggleFilter={toggleFilter}/>
      
      <div className={clsx(`min-h-[100svh] p-2 columns-1 md:columns-2 lg:columns-3 gap-2`, className)}>
        {data.map((item, index) => (
          <Card key={index} className={clsx('animate-fade-in opacity-0 mb-2', {
            // Filter cards by tags
            'hidden': filters.length && !item.tags.find(tag => filters.includes(tag)),
          })} data={item}>
            <div className="links absolute flex gap-2 left-2 bottom-2 opacity-0 transition pointer-events-none z-10">
              {item.tags.filter((symbol) => hasSymbol(CATEGORY_TAGS, symbol)).map((tag, index) => (
                <button onClick={e => toggleFilter(tag)} key={index} className="bg-background shadow-sm rounded-full px-3 py-1">{CATEGORY_TAGS[tag]}</button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}