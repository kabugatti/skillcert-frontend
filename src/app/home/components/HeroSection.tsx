"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

// Hero section data
const heroData = {
  title: {
    firstLine: "Master Skills That",
    secondLine: "Define Your Future",
    secondLineGradient: "bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent"
  },
  description: "Unlock your potential with cutting-edge online courses designed by industry experts. Transform your career with hands-on learning experiences.",
  ctaButton: {
    text: "Start Learning Today",
    image: "/next-page.svg",
    alt: "Next Page"
  },
  background: {
    image: "/images/hero-bg.webp",
    alt: "Hero Background"
  }
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.background.image}
          alt={heroData.background.alt}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-800/70 to-pink-600/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-20">
        {/* Main Headline */}
        <h1 className="flex flex-col gap-4 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span>{heroData.title.firstLine}</span>
          <span className={heroData.title.secondLineGradient}>{heroData.title.secondLine}</span>
        </h1>

        {/* Descriptive Text */}
        <p className="text-[1rem] text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {heroData.description}
        </p>

        {/* Call to Action Button */}
        <Button 
          className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold px-4 py-6 rounded-[12px] text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          {heroData.ctaButton.text}
          <Image src={heroData.ctaButton.image} alt={heroData.ctaButton.alt} width={20} height={20} className="ml-2" />
        </Button>
      </div>
    </section>
  )
} 