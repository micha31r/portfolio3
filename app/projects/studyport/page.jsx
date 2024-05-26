"use client"
import { H1, P } from "@/components/Typography";
import { WEB, UI } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";

const cards = [
  { name: 'Auth', image: require('@/public/studyport/login.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'NCEA Progress', image: require('@/public/studyport/ncea.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Create Study Goal', image: require('@/public/studyport/goals-create.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Subject Tracking', image: require('@/public/studyport/insights.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'All Goals', image: require('@/public/studyport/goals.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Progress Summary', image: require('@/public/studyport/progress.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Edit Results', image: require('@/public/studyport/results.png'), orientation: 'landscape', tags: [WEB] },
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
    <ProjectLayout cards={cards} tags={tags} link={"https://github.com/micha31r/studyport-public"}>
      <ProjectInfo>
        <H1>Studyport</H1>
        <P className="text-base" muted>2022</P>
      </ProjectInfo>
      <ProjectDescription>
        <Skeleton />
      </ProjectDescription>
    </ProjectLayout>
  );
}
