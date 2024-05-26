"use client"
import { H1, P } from "@/components/Typography";
import { DS3, UI, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";

const cards = [
  // {
  //   name: 'Matrix',
  //   image: require('@/public/ds3.png'),
  //   orientation: 'landscape',
  //   date: '21',
  //   tags: [WEB]
  // },
  // {
  //   name: 'Home',
  //   image: require('@/public/events.png'),
  //   orientation: 'landscape',
  //   date: '21',
  //   tags: [WEB]
  // },
  // {
  //   name: 'Events',
  //   image: require('@/public/ds3.png'),
  //   orientation: 'landscape',
  //   date: '21',
  //   tags: [WEB]
  // },
]

const tags = [DS3, WEB, UI];

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
    <ProjectLayout cards={cards} tags={tags}>
      <ProjectInfo>
        <H1>DSCubed Website</H1>
        <P className="text-base" muted>2023 - 2024</P>
      </ProjectInfo>
      <ProjectDescription>
        <P className="text-md">Designed and built a website for DSCubed (Data Science Student Society) at University of Melbourne. The home page features an interactive matrix which response to mouse and touch events, creating a seamless and playful experience for users.</P>
        {/* <P className="text-md">The home page features an interactive matrix which response to mouse and touch events, creating a seamless and playful experience for users.</P> */}
      </ProjectDescription>
    </ProjectLayout>
  );
}
