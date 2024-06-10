"use client"
import { H1, P } from "@/components/Typography";
import { DESIGN } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Cover', image: require('@/public/yearbook/cover.jpg'), orientation: 'portrait' },
  { name: 'Physical Copy', image: require('@/public/yearbook/mockup.jpg'), orientation: 'landscape' },
]

const tags = [DESIGN];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Yearbook Cover</H1>
          <P className="text-base" muted>Adobe Photoshop</P>
          <P className="text-base" muted>2021</P>
        </Layout.Info>

        <Layout.Description>
          <P>I collaborated with my friends to design the 2021 yearbook for Tauranga Boys' College. During COVID lockdowns, everyone lived in their own "bubble", which inspired me to use circle imagery to symbolise the community and interconnectedness despite physical distancing measures.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
        </Layout.Meta>
      </Layout.Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
        {cards.map((item, index) => (
          <Card className="h-max" key={index} data={item} scale={1.5}/>
          ))}
      </div>
    </Layout>
  );
}