"use client"
import { H1, P } from "@/components/Typography";
import { SKYLINE, UI, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";

const cards = [
  { name: 'Home', image: require('@/public/skyline/home1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Activities', image: require('@/public/skyline/home2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Gallery', image: require('@/public/skyline/home3.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Shop', image: require('@/public/skyline/shop1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Checkout Step 1', image: require('@/public/skyline/shop2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Empty Cart', image: require('@/public/skyline/shop3.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Checkout Step 2', image: require('@/public/skyline/shop4.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Checkout Step 3', image: require('@/public/skyline/shop5.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [SKYLINE, UI, WEB];

export function ProjectInfo({ children }) {
  return (
    <div className="space-y-1">
      {children}
    </div>
  )
}

export function ProjectDescription({ children }) {
  return (
    <div className="space-y-[1.25em]">
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <ProjectLayout cards={cards} tags={tags} link={"https://github.com/micha31r/skyline-website"}>
      <ProjectInfo>
        <H1>Skyline Website (School)</H1>
        <P className="text-base" muted>2021</P>
      </ProjectInfo>
      <ProjectDescription>
        <P className="text-md">Designed and built a website for DSCubed (Data Science Student Society) at University of Melbourne. The home page features an interactive matrix which response to mouse and touch events, creating a seamless and playful experience for users.</P>
      </ProjectDescription>
    </ProjectLayout>
  );
}