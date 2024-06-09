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
        <P>As an IT officer at CISSA, I collaborated with a team of five to develop an interactive online first-year guide that contains helpful information for new computer science students. My responsibilities include creating the speech bubble, pop-up components, and some mobile sections in React and CSS3.</P>
      </ProjectDescription>
    </ProjectLayout>
  );
}
