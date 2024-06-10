"use client"
import { H1, P } from "@/components/Typography";
import { GAME } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Gameplay', image: require('@/public/sneaktime/gameplay.gif'), orientation: 'landscape' },
  { name: 'Blue Level', image: require('@/public/sneaktime/blue.png'), orientation: 'landscape' },
  { name: 'Red Level', image: require('@/public/sneaktime/red.png'), orientation: 'landscape' },
  { name: 'Yellow Level', image: require('@/public/sneaktime/yellow.png'), orientation: 'landscape' },
]

const tags = [GAME];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>Sneaktime</H1>
          <P className="text-base" muted>Pygame</P>
          <P className="text-base" muted>2021</P>
        </Layout.Info>

        <Layout.Description>
          <P>Sneaktime is a game I developed for my NCEA Level Three Digital Technologies project using Pygame. Inspired by Superhot and Sneak Ops, it is a stealth, top-down shooter where time slows down as you aim. The game features ten levels with unique colours, various power-ups to collect, and enemies you must hide from and defeat.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://micha31r.itch.io/sneaktime"/>
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
