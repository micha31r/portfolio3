import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Card from "./Card";
import Navbar from "./Navbar";
import Link from "next/link";
import Section from "./Section";
import { TAGS } from "@/lib/tags";

export default function ProjectLayout({ cards, tags, children }) {
  return (
    <main className="space-y-20">
      <Navbar/>

      <Section classNameInner="space-y-8 text-lg">
        {children}

        <div className="space-y-2">
          <div className="flex gap-2 text-muted-foreground text-base">
            {tags.map((tag, index) => (
              <Link key={index} href={'/projects/?filter=' + tag.description} className="bg-secondary shadow-sm rounded-full px-3 p-2 text-base">{TAGS[tag]}</Link>
            ))}
          </div>

          <button className="flex gap-2 w-max px-6 p-2 text-base font-medium bg-foreground text-background rounded-full">
            <span>Visit</span>
            <ArrowUpRightIcon className="w-4 h-4 stroke-current [&_*]:stroke-1 my-auto"/>
          </button>
        </div>
      </Section>

      <div className="min-h-[100svh] p-2 columns-1 md:columns-2 lg:columns-3 gap-">
        {cards.map((item, index) => (
          <Card key={index} className="animate-fade-in opacity-0 mb-2" data={item}/>
        ))}
      </div>

      {/* Empty div to create space */}
      <div></div>
    </main>
  )
}