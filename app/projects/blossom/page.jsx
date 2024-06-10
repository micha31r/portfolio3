"use client"
import { H1, P } from "@/components/Typography";
import { DESIGN } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";
import Card from "@/components/Card";

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
]
  
const boards = [    
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
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Blossom</H1>
          <P className="text-base" muted>Adobe Photoshop • Adobe Illustrator • Figma</P>
          <P className="text-base" muted>2021</P>
        </Layout.Info>

        <Layout.Description>
          <P>Blossom is a fictional non-profit organisation that raises awareness for climate change created for NCEA level two design. Our goal is to help people understand the causes, effects, and consequences of climate change and encourage them to take action.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
        </Layout.Meta>
      </Layout.Section>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
          {boards.map((item, index) => (
            <Card key={index} data={item}/>
            ))}
        </div>

        <Layout.Gallery cards={cards}/>
      </div>
    </Layout>
  );
}