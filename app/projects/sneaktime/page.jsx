"use client"
import { H1, P } from "@/components/Typography";
import { SNEAKTIME, GAME } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";

const cards = [
  { name: 'Gameplay', image: require('@/public/sneaktime/gameplay.gif'), orientation: 'landscape' },
  { name: 'Blue Level', image: require('@/public/sneaktime/blue.png'), orientation: 'landscape' },
  { name: 'Purple Level', image: require('@/public/sneaktime/purple.png'), orientation: 'landscape' },
  { name: 'Red Level', image: require('@/public/sneaktime/red.png'), orientation: 'landscape' },
  { name: 'Yellow Level', image: require('@/public/sneaktime/yellow.png'), orientation: 'landscape' },
]

const tags = [SNEAKTIME, GAME];

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
    <ProjectLayout cards={cards} tags={tags} link={"https://micha31r.itch.io/sneaktime"}>
      <ProjectInfo>
        <H1>Sneaktime</H1>
        <P className="text-base" muted>2021</P>
      </ProjectInfo>
      <ProjectDescription>
        <P className="text-md">Designed and built a website for DSCubed (Data Science Student Society) at University of Melbourne. The home page features an interactive matrix which response to mouse and touch events, creating a seamless and playful experience for users.</P>
      </ProjectDescription>
    </ProjectLayout>
  );
}
