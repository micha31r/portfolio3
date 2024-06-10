"use client"
import { H1, P } from "@/components/Typography";
import { UI, WEB } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Home', image: require('@/public/epm/home.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Tauranga', image: require('@/public/epm/locations-tauranga.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'All Locations', image: require('@/public/epm/locations.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Owner Information', image: require('@/public/epm/owners1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Owner Information', image: require('@/public/epm/owners2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Process', image: require('@/public/epm/process.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [UI, WEB];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Evan&apos;s Property Management</H1>
          <P className="text-base" muted>Django</P>
          <P className="text-base" muted>2021</P>
        </Layout.Info>

        <Layout.Description>
          <P>I designed and developed a new website for Evans Property Management (previously Professional Property Management) using Django. The website includes information about the company&apos;s services, locations, and other owner/tenant information.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://evanspropertymanagement.co.nz/"/>
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

