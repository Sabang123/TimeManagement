import React from "react";
import "../App.css"; // ✅ correct relative path

function Home() {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Master Your Time, Master Your Life</h1>
        <p>Plan smarter. Stay productive. Achieve balance.</p>
        <img
          src="https://cdn.pixabay.com/photo/2015/09/05/22/46/time-925168_1280.jpg"
          alt="Time Management"
          className="home-hero-img"
        />
      </header>

      <section className="home-section">
        <h2>Why Time Management Matters</h2>
        <p>
          Effective time management helps you stay organized, reduce stress,
          and achieve your goals faster. It’s not about being busy—it’s about
          being productive and purposeful with your time.
        </p>
      </section>

      <section className="home-section grid-section">
        <div className="home-card">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg"
            alt="Goal Setting"
          />
          <h3>Set Clear Goals</h3>
          <p>Define what truly matters and prioritize your daily tasks.</p>
        </div>

        <div className="home-card">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/09/09/30/checklist-1246858_1280.jpg"
            alt="Task Planning"
          />
          <h3>Plan Your Day</h3>
          <p>Break tasks into manageable steps and stick to your schedule.</p>
        </div>

        <div className="home-card">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/14/00/time-1836983_1280.jpg"
            alt="Focus"
          />
          <h3>Stay Focused</h3>
          <p>Limit distractions and dedicate time blocks for deep work.</p>
        </div>
      </section>

      <section className="home-quote">
        <blockquote>
          "The bad news is time flies. The good news is you’re the pilot."
        </blockquote>
        <p>— Michael Altshuler</p>
      </section>
    </div>
  );
}

export default Home;
