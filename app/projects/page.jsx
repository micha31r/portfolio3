"use client"
import Navbar from "@/components/Navbar";
import CardGallery from "@/components/CardGallery";
import { CARD_DATA } from '@/lib/data';
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="pt-2">
      <Navbar/>
      <Suspense>
        <CardGallery data={CARD_DATA}/>
      </Suspense>
    </main>
  );
}
