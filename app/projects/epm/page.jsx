"use client"
import { H1, P } from "@/components/Typography";
import { EPM, UI, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";

const cards = [
  { name: 'Home', image: require('@/public/epm/home.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Tauranga', image: require('@/public/epm/locations-tauranga.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'All Locations', image: require('@/public/epm/locations.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Owner Information', image: require('@/public/epm/owners1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Owner Information', image: require('@/public/epm/owners2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Process', image: require('@/public/epm/process.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [EPM, UI, WEB];

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
    <ProjectLayout cards={cards} tags={tags} link={"https://evanspropertymanagement.co.nz/"}>
      <ProjectInfo>
        <H1>Evan's Property Management</H1>
        <P className="text-base" muted>2021</P>
      </ProjectInfo>
      <ProjectDescription>
        <P className="text-md">Designed and built a website for DSCubed (Data Science Student Society) at University of Melbourne. The home page features an interactive matrix which response to mouse and touch events, creating a seamless and playful experience for users.</P>
      </ProjectDescription>
    </ProjectLayout>
  );
}
