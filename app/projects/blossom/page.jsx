"use client"
import { H1, P } from "@/components/Typography";
import { DESIGN } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";

const cards = [
  { name: 'Poster', image: require('@/public/blossom/poster1.png'), orientation: 'portrait' },
  { name: 'Poster', image: require('@/public/blossom/poster2.png'), orientation: 'portrait' },
  { name: 'Poster', image: require('@/public/blossom/poster3.png'), orientation: 'portrait' },
  { name: 'Poster', image: require('@/public/blossom/poster4.png'), orientation: 'portrait' },
  { name: 'Packaging', image: require('@/public/blossom/package1.png'), orientation: 'portrait' },
  { name: 'Packaging', image: require('@/public/blossom/package2.png'), orientation: 'landscape' },
  { name: 'Packaging', image: require('@/public/blossom/package3.png'), orientation: 'landscape' },
  { name: 'Packaging', image: require('@/public/blossom/package4.png'), orientation: 'portrait' },
  { name: 'Packaging', image: require('@/public/blossom/package5.png'), orientation: 'landscape' },
  { name: 'Pamphlet', image: require('@/public/blossom/pamphlet1.png'), orientation: 'landscape' },
  { name: 'Pamphlet', image: require('@/public/blossom/pamphlet2.png'), orientation: 'landscape' },
  { name: 'Mockup', image: require('@/public/blossom/box1.png'), orientation: 'landscape' },
  { name: 'Mockup', image: require('@/public/blossom/box2.png'), orientation: 'landscape' },
  { name: 'Board 1', image: require('@/public/blossom/board1.jpg'), orientation: 'landscape' },
  { name: 'Board 2', image: require('@/public/blossom/board2.jpg'), orientation: 'landscape' },
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
        <H1>Blossom</H1>
        <P className="text-base" muted>2021</P>
      </ProjectInfo>
      <ProjectDescription>
        <Skeleton />
      </ProjectDescription>
    </ProjectLayout>
  );
}
