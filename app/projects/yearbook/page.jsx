"use client"
import { H1, P } from "@/components/Typography";
import { DESIGN } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";

const cards = [
  { name: 'Cover', image: require('@/public/yearbook/cover.jpg'), orientation: 'portrait' },
  { name: 'Print', image: require('@/public/yearbook/mockup.jpg'), orientation: 'landscape' },
]

const tags = [DESIGN];

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
    <ProjectLayout cards={cards} tags={tags}>
      <ProjectInfo>
        <H1>Yearbook Cover</H1>
        <P className="text-base" muted>2021</P>
      </ProjectInfo>
      <ProjectDescription>
        <Skeleton />
      </ProjectDescription>
    </ProjectLayout>
  );
}
