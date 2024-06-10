"use client"
import { H1, P } from "@/components/Typography";
import { CISSA, WEB } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const mobile = [
  { name: 'Interactive Guide', image: require('@/public/fyg/subjects.png'), orientation: 'portrait', tags: [WEB] },
  { name: 'Interactive Guide', image: require('@/public/fyg/careers.png'), orientation: 'portrait', tags: [WEB] },
  { name: 'Interactive Guide', image: require('@/public/fyg/activities.png'), orientation: 'portrait', tags: [WEB] },
]

const desktop = [
  { name: 'Interactive Guide', image: require('@/public/fyg/desktop.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Interactive Guide', image: require('@/public/fyg/desktop-popup.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [CISSA, WEB];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>CISSA First Year Guide</H1>
          <P className="text-base" muted>React</P>
          <P className="text-base" muted>2024</P>
        </Layout.Info>

        <Layout.Description>
          <P>As an IT officer at CISSA, I collaborated with a team of five to develop an interactive online first-year guide that contains helpful information for new computer science students. My responsibilities include creating the speech bubble, pop-up components, and some mobile sections in React and CSS3.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://cissa.org.au/first-year-guide"/>
        </Layout.Meta>
      </Layout.Section>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
          {desktop.map((item, index) => (
            <Card className="" key={index} data={item} scale={1.5}/>
            ))}
        </div>

        <Layout.Gallery cards={mobile}/>
      </div>
    </Layout>
  );
}
