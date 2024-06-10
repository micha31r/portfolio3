"use client"
import { H1, P } from "@/components/Typography";
import { CISSA, WEB } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Sponsors', image: require('@/public/codebrew/sponsors.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Banner', image: require('@/public/codebrew/banner.jpg'), orientation: 'landscape', tags: [WEB] },
]

const tags = [CISSA, WEB];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Codebrew Website</H1>
          <P className="text-base" muted>React</P>
          <P className="text-base" muted>2024</P>
        </Layout.Info>

        <Layout.Description>
        <P>As an IT officer at CISSA, I collaborated with a team of five to develop the website for the 2024 CISSA Codebrew hackathon. My main responsibility was creating the banner and sponsors section using React and CSS3, ensuring they were responsive across all devices.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://codebrew.cissa.org.au/"/>
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