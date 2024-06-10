"use client"
import { H1, P } from "@/components/Typography";
import { UI, WEB } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Home', image: require('@/public/skyline/home1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Activities', image: require('@/public/skyline/home2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Gallery', image: require('@/public/skyline/home3.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Shop', image: require('@/public/skyline/shop1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Checkout Step 1', image: require('@/public/skyline/shop2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Checkout Step 2', image: require('@/public/skyline/shop4.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Checkout Step 3', image: require('@/public/skyline/shop5.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Empty Cart', image: require('@/public/skyline/shop3.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [UI, WEB];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Skyline Website</H1>
          <P className="text-base" muted>Django</P>
          <P className="text-base" muted>2021</P>
        </Layout.Info>

        <Layout.Description>
          <P>For my NCEA Level Three Digital Technologies project, I redesigned the Skyline Rotorua website and created several pages using Django. The website features a simulated checkout process and generates digital tickets for users after purchase.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://github.com/micha31r/skyline-website"/>
        </Layout.Meta>
      </Layout.Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
        {cards.map((item, index) => (
          <Card key={index} data={item} scale={1.5}/>
          ))}
      </div>
    </Layout>
  );
}
