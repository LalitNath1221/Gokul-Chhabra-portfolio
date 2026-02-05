import { useState } from 'react'
import './App.css'
import HeroSection from '@/components/landing/HeroSection';
import ScrollingBanner from '@/components/landing/ScrollingBanner';
import PortfolioSection from '@/components/landing/PortfolioSection';
import TestimonialsCarousel from '@/components/landing/TestimonialsCarousel';
import BenefitsSection from '@/components/landing/BenefitsSection';
import MoneyBackSection from '@/components/landing/MoneyBackSection';
import BonusesSection from '@/components/landing/BonusesSection';
import TestimonialImagesSection from '@/components/landing/TestimonialImagesSection';
import WhoIsThisForSection from '@/components/landing/WhoIsThisForSection';
import AchievementsSection from '@/components/landing/AchievementsSection';
import DontMissOutSection from '@/components/landing/DontMissOutSection';
import CoachSection from '@/components/landing/CoachSection';
import WhatYouLearnSection from '@/components/landing/WhatYouLearnSection';
import FAQSection from '@/components/landing/FAQSection';
import StickyBottomBar from '@/components/landing/StickyBottomBar';
import BrandFooter from './components/landing/BrandFooter';

function App() {

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ScrollingBanner />
      <PortfolioSection />
      <TestimonialsCarousel />
      <ScrollingBanner />
      <BenefitsSection />
      <MoneyBackSection />
      <BonusesSection />
      <TestimonialImagesSection />
      <ScrollingBanner />
      <WhoIsThisForSection />
      <AchievementsSection />
      <DontMissOutSection />
      <CoachSection />
      <WhatYouLearnSection />
      <FAQSection />
      <BrandFooter/>
      <StickyBottomBar />
    </div>
  )
}

export default App
