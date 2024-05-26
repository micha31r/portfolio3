"use client"
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { P } from "@/components/Typography";
import Link from "next/link";
import CardGallery from "@/components/CardGallery";
import { DS3, TAGS, UI, WEB } from "@/lib/tags";
import { CARD_DATA } from '@/lib/data';
import Card from "@/components/Card";
import clsx from "clsx";
import { ArrowUpRightIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import { hasSymbol } from "@/lib/utils";

// Styled link component
function SLink ({ href, children }) {
  return <Link className="text-primary border-b border-border" href={href}>{children}</Link>
}

const images = [
  {
    name: 'Matrix',
    image: require('@/public/ds3.png'),
    orientation: 'landscape',
    tags: [WEB]
  },
  {
    name: 'Home',
    image: require('@/public/events.png'),
    orientation: 'landscape',
    tags: [WEB]
  },
  {
    name: 'Events',
    image: require('@/public/ds3.png'),
    orientation: 'landscape',
    tags: [WEB]
  },
]

const tags = [DS3, WEB, UI];
// const tech 

export default function Page() {
  const searchParams = useSearchParams()
  const search = searchParams.get('filter')

  const tagStrings = search ? search.split(',') : []
  const filters = Object.getOwnPropertySymbols(TAGS).filter(symbol => tagStrings.includes(symbol.description))

  return (
    <main className="">
      <Navbar/>

      <CardGallery data={CARD_DATA}/>
  
      {/* Empty div to create space */}
      <div></div>
    </main>
  );
}
