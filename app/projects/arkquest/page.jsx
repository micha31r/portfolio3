"use client"
import { H1, P } from "@/components/Typography";
import { ARKQUEST, UI, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";

const cards = [
  { name: 'Home', image: require('@/public/arkquest/home.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Mission', image: require('@/public/arkquest/mission.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Support', image: require('@/public/arkquest/support.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Blog', image: require('@/public/arkquest/blog1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Blog', image: require('@/public/arkquest/blog2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Blog', image: require('@/public/arkquest/blog3.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Post', image: require('@/public/arkquest/post.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'People', image: require('@/public/arkquest/people.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Donation', image: require('@/public/arkquest/donation.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [ARKQUEST, WEB, UI];

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
    <ProjectLayout cards={cards} tags={tags} link={"https://dscubed.org.au"}>
      <ProjectInfo>
        <H1>Ark Quest Website</H1>
        <P className="text-base" muted>2021 - 2022</P>
      </ProjectInfo>
      <ProjectDescription>
        <P className="text-md">Designed and built a website for DSCubed (Data Science Student Society) at University of Melbourne. The home page features an interactive matrix which response to mouse and touch events, creating a seamless and playful experience for users.</P>
      </ProjectDescription>
    </ProjectLayout>
  );
}
