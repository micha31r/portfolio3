"use client"
import Navbar from "@/components/Navbar";
import CardGallery from "@/components/CardGallery";
import { TAGS } from "@/lib/tags";
import { CARD_DATA } from '@/lib/data';
import { useSearchParams } from "next/navigation";

export default function Page() {
  return (
    <main className="pt-2">
      <Navbar/>
      <CardGallery data={CARD_DATA}/>
    </main>
  );
}
