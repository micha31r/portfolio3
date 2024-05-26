"use client"
import { H1, P } from "@/components/Typography";
import { DS3, UI, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";

const cards = [
  { name: 'Interactive Matrix', image: require('@/public/dscubed/matrix.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Sponsors', image: require('@/public/dscubed/sponsors.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Home', image: require('@/public/dscubed/home.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Events', image: require('@/public/dscubed/events.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Mission', image: require('@/public/dscubed/mission.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [DS3, WEB, UI];

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
        <Skeleton />
      </ProjectDescription>
    </ProjectLayout>
  );
}
