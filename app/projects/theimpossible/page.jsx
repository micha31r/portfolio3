"use client"
import { H1, P } from "@/components/Typography";
import { WEB, UI } from "@/lib/tags";
import Layout from "@/components/ProjectLayout";
import Card from "@/components/Card";

const cards = [
  { name: 'Profile', image: require('@/public/theimpossible/profile.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Weekly Content', image: require('@/public/theimpossible/explore1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Discover Content', image: require('@/public/theimpossible/explore2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'View Post', image: require('@/public/theimpossible/detail.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Edit Post', image: require('@/public/theimpossible/edit.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Activites', image: require('@/public/theimpossible/activities.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Search User', image: require('@/public/theimpossible/search-user.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Settings', image: require('@/public/theimpossible/settings.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Followers', image: require('@/public/theimpossible/followers.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Auth', image: require('@/public/theimpossible/auth.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [WEB, UI];

export default function Page() {
  return (
    <Layout>
      <Layout.Section>
        <Layout.Info>
          <H1>The Impossible</H1>
          <P className="text-base" muted>Django</P>
          <P className="text-base" muted>2020</P>
        </Layout.Info>

        <Layout.Description>
          <P>The Impossible is one of my earliest web dev projects. It is a social media platform where users can share, browse, and comment on different ideas. It has all of the basic social media features, such as posting, notifications, newsletters, following other users, image uploading, and more.</P>
        </Layout.Description>
        
        <Layout.Meta>
          <Layout.Tags tags={tags}/>
          <Layout.PreviewLink link="https://github.com/micha31r/The-Impossible"/>
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
