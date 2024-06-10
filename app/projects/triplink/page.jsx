"use client"
import { H1, P } from "@/components/Typography";
import { DESIGN, UI } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";
import Skeleton from "@/components/Skeleton";

const cards = [
  { name: 'Ticket', image: require('@/public/triplink/ticket1.png'), orientation: 'landscape', date: '2022' },
  { name: 'Ticket', image: require('@/public/triplink/ticket2.png'), orientation: 'landscape', date: '2022' },
  { name: 'Ticket', image: require('@/public/triplink/ticket3.png'), orientation: 'landscape', date: '2022' },
  { name: 'Ticket', image: require('@/public/triplink/ticket4.png'), orientation: 'landscape', date: '2022' },
  { name: 'Mockup', image: require('@/public/triplink/ticket-mockup.png'), orientation: 'landscape', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster1.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster2.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster3.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster4.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster5.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster6.png'), orientation: 'portrait', date: '2022' },
  { name: 'Poster', image: require('@/public/triplink/poster-practice.png'), orientation: 'portrait', date: '2022' },
  { name: 'Insta Post', image: require('@/public/triplink/insta1.png'), orientation: 'portrait', date: '2022' },
  { name: 'Insta Post', image: require('@/public/triplink/insta2.png'), orientation: 'portrait', date: '2022' },
  { name: 'Insta Post', image: require('@/public/triplink/insta3.png'), orientation: 'portrait', date: '2022' },
  { name: 'Insta Post', image: require('@/public/triplink/insta4.png'), orientation: 'portrait', date: '2022' },
  { name: 'Double Page Spread', image: require('@/public/triplink/dps1.png'), orientation: 'landscape', date: '2022' },
  { name: 'Double Page Spread', image: require('@/public/triplink/dps2.png'), orientation: 'landscape', date: '2022' },
  { name: 'Double Page Spread', image: require('@/public/triplink/dps3.png'), orientation: 'landscape', date: '2022' },
  { name: 'Double Page Spread', image: require('@/public/triplink/dps4.png'), orientation: 'landscape', date: '2022' },
  { name: 'Double Page Spread Mockup', image: require('@/public/triplink/dps-mockup.png'), orientation: 'landscape', date: '2022' },
  { name: 'Website Mockup', image: require('@/public/triplink/website-mockup.png'), orientation: 'landscape', date: '2022' },
  { name: 'Website Mockup', image: require('@/public/triplink/website-mockup-mobile.png'), orientation: 'landscape', date: '2022' },
  { name: 'App', image: require('@/public/triplink/app.png'), orientation: 'landscape', date: '2022' },
  ]
  
  const boards = [
  { name: 'Board 1', image: require('@/public/triplink/board1.jpg'), orientation: 'landscape', date: '2022' },
  { name: 'Board 2', image: require('@/public/triplink/board2.jpg'), orientation: 'landscape', date: '2022' },
  { name: 'Board 3', image: require('@/public/triplink/board3.jpg'), orientation: 'landscape', date: '2022' },
]

const tags = [DESIGN, UI];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Triplink</H1>
          <P className="text-base" muted>Adobe Photoshop • Adobe Illustrator • Figma</P>
          <P className="text-base" muted>2022</P>
        </Layout.Info>

        <Layout.Description>
          <P>Triplink is a fictional virtual travel company created for NCEA level three design. It is a startup that aims to help people connect during the COVID-19 lockdowns by providing an online platform for people to travel through an immersive virtual reality experience.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
        </Layout.Meta>
      </Layout.Section>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
          {boards.map((item, index) => (
            <Card key={index} data={item}/>
            ))}
        </div>

        <Layout.Gallery cards={cards}/>
      </div>
    </Layout>
  );
}
