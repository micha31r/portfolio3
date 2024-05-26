"use client"
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { P } from "@/components/Typography";
import Link from "next/link";
import CardGallery from "@/components/CardGallery";
import { CARD_DATA } from '@/lib/data';

// Styled link component
function SLink ({ href, children }) {
  return <Link className="border-b border-border hover:text-muted-foreground transition" href={href}>{children}</Link>
}

export default function Page() {
  return (
    <main className="space-y-20">
      <Navbar/>

      <Section classNameInner="space-y-[1em] text-xl">
        <P>Hello! I'm Michael.</P>
        <P>I'm currently in my penultimate year at the University of Melbourne, majoring in Computing and Software Systems.</P>
        {/* <P>I'm involved in several tech clubs: IT Director at <SLink href="https://www.dscubed.org.au/">DS Cubed</SLink>, IT Officer at <SLink href="https://cissa.org.au/">CISSA</SLink>, and Events Officer at GDSC</P> */}
        <P>I'm passionate about programming and user interface design. In my free time, I enjoy working on exciting projects, thinking about the future, and playing badminton on Saturdays.</P>
        {/* <P>I have lived in several countries: China (born there), New Zealand (8 yrs) and Australia (1+ yrs).</P> */}
        <P>Find me on <SLink href="https://github.com/micha31r">Github</SLink> and <SLink href="https://www.linkedin.com/in/m-ren/">LinkedIn</SLink>.<br/> Reach me via <SLink href="mailto:mike@mre.is">Email</SLink>.</P>
      </Section>

      <CardGallery className="pt-2" data={CARD_DATA}/>

      {/* Empty div to create space */}
      <div></div>
    </main>
  );
}
