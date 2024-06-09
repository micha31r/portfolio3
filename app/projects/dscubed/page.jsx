"use client"
import { H1, P } from "@/components/Typography";
import { UI, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import SLink from "@/components/SLink";

const cards = [
  { name: 'Interactive Matrix', image: require('@/public/dscubed/matrix.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Sponsors', image: require('@/public/dscubed/sponsors.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Home', image: require('@/public/dscubed/home.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Events', image: require('@/public/dscubed/events.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Mission', image: require('@/public/dscubed/mission.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [WEB, UI];

function ProjectInfo({ children }) {
  return (
    <div className="space-y-1">
      {children}
    </div>
  )
}

function ProjectDescription({ children }) {
  return (
    <div className="space-y-[1.25em]">
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <ProjectLayout cards={cards} tags={tags} link={"https://dscubed.org.au"}>
      <ProjectInfo>
        <H1>DSCubed Website</H1>
        <P className="text-base" muted>2023 - 2024</P>
      </ProjectInfo>
      <ProjectDescription>
        <P>I built this website using React, Next.js, and Tailwind CSS as part of my role as IT Director at <SLink href="https://www.dscubed.org.au/">DSCubed</SLink>. At the centre is an interactive matrix designed to engage visitors. The grid of circles represents a mathematical matrix, which provides a unique and compelling representation of data science.</P>
      </ProjectDescription>
    </ProjectLayout>
  );
}
