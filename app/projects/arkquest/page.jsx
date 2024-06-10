"use client"
import { H1, P } from "@/components/Typography";
import { UI, WEB } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Home', image: require('@/public/arkquest/home.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Mission', image: require('@/public/arkquest/mission.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Support', image: require('@/public/arkquest/support.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'People', image: require('@/public/arkquest/people.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Blog', image: require('@/public/arkquest/blog1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Blog', image: require('@/public/arkquest/blog2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Blog', image: require('@/public/arkquest/blog3.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Post', image: require('@/public/arkquest/post.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Donation', image: require('@/public/arkquest/donation.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [WEB, UI];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Ark Quest Website</H1>
          <P className="text-base" muted>Django • Stripe</P>
          <P className="text-base" muted>2021 - 2022</P>
        </Layout.Info>

        <Layout.Description>
          <P>I volunteered as a web developer for Ark Quest Trust, where I designed and developed a new website. Ark Quest Trust supports a private Christian school in rural Kenya, helping make education accessible. The website's key features include a blog system and an online donation portal.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://arkquest.org.nz/"/>
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
