"use client"
import { H1, P } from "@/components/Typography";
import { WEB, UI } from "@/lib/tags";
import ProjectLayout from "@/components/ProjectLayout";
import Skeleton from "@/components/Skeleton";

const cards = [
  { name: 'Activites', image: require('@/public/theimpossible/activities.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Auth', image: require('@/public/theimpossible/auth.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'View Post', image: require('@/public/theimpossible/detail.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Edit Post', image: require('@/public/theimpossible/edit.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Weekly Content', image: require('@/public/theimpossible/explore1.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Discover Content', image: require('@/public/theimpossible/explore2.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Followers', image: require('@/public/theimpossible/followers.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Profile', image: require('@/public/theimpossible/profile.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Search User', image: require('@/public/theimpossible/search-user.png'), orientation: 'landscape', tags: [WEB] },
  { name: 'Settings', image: require('@/public/theimpossible/settings.png'), orientation: 'landscape', tags: [WEB] },
]

const tags = [WEB, UI];

function ProjectInfo({ children }) {
  return (
    <div className="space-y-1">
      {children}
    </div>
  )
}

function ProjectDescription({ children }) {
  return (
    <div className="space-y-[1.25em]">
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <ProjectLayout cards={cards} tags={tags} link={"https://github.com/micha31r/The-Impossible"}>
      <ProjectInfo>
        <H1>The Impossible</H1>
        <P className="text-base" muted>2020</P>
      </ProjectInfo>
      <ProjectDescription>
        <Skeleton />
      </ProjectDescription>
    </ProjectLayout>
  );
}
