"use client"
import { H1, P } from "@/components/Typography";
import { CISSA, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";

const cards = [
  { name: 'Interactive Guide', image: require('@/public/fyg/home.png'), orientation: 'landscape', tags: [WEB] },
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
    <ProjectLayout cards={cards} tags={tags} link={"https://cissa.org.au/first-year-guide"}>
      <ProjectInfo>
        <H1>CISSA First Year Guide</H1>
        <P className="text-base" muted>2024</P>
      </ProjectInfo>
      <ProjectDescription>
        <P className="text-md">Designed and built a website for DSCubed (Data Science Student Society) at University of Melbourne. The home page features an interactive matrix which response to mouse and touch events, creating a seamless and playful experience for users.</P>
      </ProjectDescription>
    </ProjectLayout>
  );
}
