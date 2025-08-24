"use client"


import { BasicAttendance, BasicCountdown, BasicEventDetails } from "@/components/sections/basic"
//import AudioPlayer from "../components/AudioPlayer"
import BasicCTA from "../components/sections/BasicCTA"
import {BasicHero } from "@/components/sections/basic/BasicHero"

export default function WeddingInvitation() {
  
  return (
    <div 
    style={{
      background: 'linear-gradient(135deg, #eaf4ff 0%, #d6ecff 35%, #c1e3ff 65%, #a9d7ff 100%)',
    }}
    className="min-h-screen">
      <BasicHero />
      <BasicCountdown />
      <BasicEventDetails />
      <BasicAttendance />

      <BasicCTA />
      
      {/* 🎵 Reproductor de audio fijo */}
      {/* <AudioPlayer /> */}
    </div>
  )
}
