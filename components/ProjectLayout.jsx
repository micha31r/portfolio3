import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Card from "./Card";
import Navbar from "./Navbar";
import Link from "next/link";
import Section from "./Section";
import { TAGS } from "@/lib/tags";
import clsx from "clsx";

function Info({ children }) {
  return (
    <Section classNameInner="text-lg">
      <div className="space-y-1">
        {children}
      </div>
    </Section>
  )
}

function Description({ children }) {
  return (
    <Section classNameInner="text-lg">
      <div className="space-y-10">
        {children}
      </div>
    </Section>
  )
}

function CustomSection({ className, children }) {
  return (
    <div className={clsx("", className)}>
      {children}
    </div>
  )
}

function Gallery({ cards }) {
  return (
    <div className="min-h-[100svh] p-2 columns-1 md:columns-2 lg:columns-3 gap-2">
      {cards.map((item, index) => (
        <Card key={index} className="animate-fade-in opacity-0 mb-2" data={item}/>
      ))}
    </div>
  )
}

function Tags({ tags }) {
  return (
    <div className="flex gap-2 text-muted-foreground text-base">
      {tags.map((tag, index) => (
        <Link key={index} href={'/projects/?filter=' + tag.description} className="bg-secondary shadow-sm rounded-full px-4 p-2 text-base">{TAGS[tag]}</Link>
      ))}
    </div>
  )
}

function PreviewLink({ link }) {
  return (
    <button className="flex gap-2 w-max px-6 p-2 text-base font-medium bg-foreground text-background rounded-full" onClick={() => window.open(link)}>
      <span>Visit</span>
      <ArrowUpRightIcon className="w-4 h-4 stroke-current [&_*]:stroke-1 my-auto"/>
    </button>
  )
}

function Meta({ children }) {
  return (
    <Section classNameInner="space-y-2 text-lg">
      {children}
    </Section>
  )
}

export default function Layout({ children }) {
  return (
    <main className="space-y-10 lg:space-y-20">
      <Navbar/>
      {children}
      {/* Empty div to create space */}
      <div></div>
    </main>
  )
}

Layout.Info = Info
Layout.Description = Description
Layout.Meta = Meta
Layout.Tags = Tags
Layout.PreviewLink = PreviewLink
Layout.Gallery = Gallery
Layout.Section = CustomSection