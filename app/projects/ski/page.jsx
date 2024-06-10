"use client"
import { H1, P } from "@/components/Typography";
import { DESIGN } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Mockup', image: require('@/public/ski/mockup.png'), orientation: 'portrait' },
]

const tags = [DESIGN];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Ski Design</H1>
          <P className="text-base" muted>Adobe Photoshop</P>
          <P className="text-base" muted>2020</P>
        </Layout.Info>

        <Layout.Description>
          <P>Ski design for a client.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
        </Layout.Meta>
      </Layout.Section>

      <div className="grid grid-cols-1 gap-2 px-2">
        {cards.map((item, index) => (
          <Card key={index} data={item} scale={2}/>
          ))}
      </div>
    </Layout>
  );
}