"use client"
import { H1, P } from "@/components/Typography";
import { DESIGN } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";

const cards = [
  { name: 'Mockup', image: require('@/public/ski/mockup.png'), orientation: 'portrait' },
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
        <H1>Ski Design</H1>
        <P className="text-base" muted>2020</P>
      </ProjectInfo>
      <ProjectDescription>
        <P className="text-md">Designed and built a website for DSCubed (Data Science Student Society) at University of Melbourne. The home page features an interactive matrix which response to mouse and touch events, creating a seamless and playful experience for users.</P>
      </ProjectDescription>
    </ProjectLayout>
  );
}
