"use client"
import { H1, P } from "@/components/Typography";
import { UI, WEB } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";

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
    <ProjectLayout cards={cards} tags={tags} link={"https://arkquest.org.nz/"}>
      <ProjectInfo>
        <H1>Ark Quest Website</H1>
        <P className="text-base" muted>2021 - 2022</P>
      </ProjectInfo>
      <ProjectDescription>
        <Skeleton />
      </ProjectDescription>
    </ProjectLayout>
  );
}
