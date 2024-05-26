"use client"
import { H1, P } from "@/components/Typography";
import { CISSA, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";

const cards = [
  { name: 'Sponsors', image: require('@/public/codebrew/sponsors.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [CISSA, WEB];

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
    <ProjectLayout cards={cards} tags={tags} link={"https://codebrew.cissa.org.au/"}>
      <ProjectInfo>
        <H1>Codebrew Website</H1>
        <P className="text-base" muted>2024</P>
      </ProjectInfo>
      <ProjectDescription>
        <Skeleton />
      </ProjectDescription>
    </ProjectLayout>
  );
}
