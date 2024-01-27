import React from 'react';
import SafetyCard from './safetyCard';
import '../App.css';

const SectionSafety = () => {
  return (
    <section>
      <div className="w-layout-blockcontainer heygen_container w-container">
        <div className="safety_wrap">
          <div className="safety_grid">
            <SafetyCard
              icon={
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... Icon path */}
                </svg>
              }
              title="Ethics statement"
              description="Discover our ethical approach to AI, emphasizing acceptable use and transparency."
              link="/ethics"
            />

      
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSafety;
