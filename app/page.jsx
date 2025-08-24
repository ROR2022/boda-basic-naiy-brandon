"use client"

import { useState } from "react"
import { BasicAttendance, BasicCountdown, BasicEventDetails } from "@/components/sections/basic"
import AudioPlayer from "../components/AudioPlayer"
import BasicCTA from "../components/sections/BasicCTA"
import {BasicHero } from "@/components/sections/basic/BasicHero"
import { PremiumGallery } from "@/components/sections/PremiumGallery"
import InvitationEnvelope from "@/components/sections/InvitationEnvelope"
import CustomInvitations from "@/components/sections/CustomInvitations/components/CustomInvitations"
import TimelineSection from "@/components/sections/TimelineSection"
import {BasicGiftOptions} from "@/components/sections/basic/BasicGiftOptions"

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    // Aquí se renderiza el InvitationEnvelope
    return <InvitationEnvelope onOpen={() => setIsOpen(true)} />
  }

  return (
    <div 
    style={{
      background: 'linear-gradient(135deg, #eaf4ff 0%, #d6ecff 35%, #c1e3ff 65%, #a9d7ff 100%)',
    }}
    className="min-h-screen">
      <BasicHero />
      <BasicCountdown />
      <BasicEventDetails />
      <TimelineSection />
      <PremiumGallery />
      <BasicGiftOptions />
      <BasicAttendance />
      <CustomInvitations />
      <BasicCTA />
      
      {/* 🎵 Reproductor de audio fijo */}
       <AudioPlayer /> 
    </div>
  )
}
