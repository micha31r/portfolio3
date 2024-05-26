"use client"
import { H1, P } from "@/components/Typography";
import { DESIGN, UI } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";

const cards = [
  { name: 'Ticket', image: require('@/public/triplink/ticket1.png'), orientation: 'landscape', date: '2022' },
  { name: 'Ticket', image: require('@/public/triplink/ticket2.png'), orientation: 'landscape', date: '2022' },
  { name: 'Ticket', image: require('@/public/triplink/ticket3.png'), orientation: 'landscape', date: '2022' },
  { name: 'Ticket', image: require('@/public/triplink/ticket4.png'), orientation: 'landscape', date: '2022' },
  { name: 'Mockup', image: require('@/public/triplink/ticket-mockup.png'), orientation: 'landscape', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster1.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster2.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster3.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster4.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster5.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster6.png'), orientation: 'portrait', date: '2022' },
  { name: 'Insta Post', image: require('@/public/triplink/insta1.png'), orientation: 'portrait', date: '2022' },
  { name: 'Insta Post', image: require('@/public/triplink/insta2.png'), orientation: 'portrait', date: '2022' },
  { name: 'Insta Post', image: require('@/public/triplink/insta3.png'), orientation: 'portrait', date: '2022' },
  { name: 'Insta Post', image: require('@/public/triplink/insta4.png'), orientation: 'portrait', date: '2022' },
  { name: 'Double Page Spread', image: require('@/public/triplink/dps.png'), orientation: 'landscape', date: '2022' },
  { name: 'Board 1', image: require('@/public/triplink/board1.jpg'), orientation: 'landscape', date: '2022' },
  { name: 'Board 2', image: require('@/public/triplink/board2.jpg'), orientation: 'landscape', date: '2022' },
  { name: 'Board 3', image: require('@/public/triplink/board3.jpg'), orientation: 'landscape', date: '2022' },
]

const tags = [DESIGN, UI];

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
        <H1>Triplink</H1>
        <P className="text-base" muted>2022</P>
      </ProjectInfo>
      <ProjectDescription>
        <Skeleton />
      </ProjectDescription>
    </ProjectLayout>
  );
}
