"use client"
import { H1, P } from "@/components/Typography";
import { WEB, UI } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";
import SLink from "@/components/SLink";

const cards = [
  { name: 'Progress Summary', image: require('@/public/studyport/progress.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'NCEA Progress', image: require('@/public/studyport/ncea.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'All Goals', image: require('@/public/studyport/goals.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Subject Tracking', image: require('@/public/studyport/insights.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Edit Results', image: require('@/public/studyport/results.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Create Study Goal', image: require('@/public/studyport/goals-create.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Auth', image: require('@/public/studyport/login.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [WEB, UI];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Studyport</H1>
          <P className="text-base" muted>Django • Chart.js</P>
          <P className="text-base" muted>2022</P>
        </Layout.Info>

        <Layout.Description>
          <P>Studyport (formerly Insightz) is a grade-tracking web app I developed for secondary school students in New Zealand. I began working on this idea in Year 10 and refined it over the next three years. The final version features integration with the School Management System to sync academic results, a goal-tracking system, and visualisations to help students monitor all areas of their studies. This app received the Senior First Place and Creativity Category Award at the <SLink href="https://www.yia.co.nz/inspiration/winners-2021" target="_blank">Young Innovators Award</SLink>, as well as Gold Awards for both the Community Good and Digital categories at the Q Awards.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://github.com/micha31r/studyport-public"/>
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