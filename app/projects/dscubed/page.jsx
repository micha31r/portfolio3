"use client"
import { H1, P } from "@/components/Typography";
import { UI, WEB } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Interactive Matrix', image: require('@/public/dscubed/matrix.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Sponsors', image: require('@/public/dscubed/sponsors.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Home', image: require('@/public/dscubed/home.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Events', image: require('@/public/dscubed/events.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Mission', image: require('@/public/dscubed/mission.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [WEB, UI];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>DSCubed Website</H1>
          <P className="text-base" muted>React • Next • Tailwind • Supabase</P>
          <P className="text-base" muted>2024</P>
        </Layout.Info>

        <Layout.Description>
          <P>I built this website using React, Next.js, and Tailwind CSS as part of my role as IT Director at DSCubed. At the centre is an interactive matrix designed to engage visitors. The grid of circles represents a mathematical matrix, which provides a unique and compelling representation of data science.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://dscubed.org.au"/>
        </Layout.Meta>
      </Layout.Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
        {cards.map((item, index) => (
          <Card className="" key={index} data={item} scale={1.5}/>
          ))}
      </div>
    </Layout>
  );
}
