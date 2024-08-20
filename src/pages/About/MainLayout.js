import React from 'react';
import HistorySection from './HistorySection';
import About from './About';
import BenefitsSection from './BenefitsSection';
import TalentSection from './TalentSection';


const MainLayout = () => {
  return (
    <div>
      
      <About/>
      <HistorySection />
      <BenefitsSection/>
      <TalentSection/>
    </div>
  )
}

export default MainLayout