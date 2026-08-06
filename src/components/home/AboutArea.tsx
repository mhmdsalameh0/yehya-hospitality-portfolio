
import React from 'react'
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Years Of Experience',
    count: 20,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Brands & Concepts Managed',
    count: 15,
    cls: "plain-plus",
  },
  {
    id: 3,
    title: 'Operational & Quality Standards',
    count: 100,
    cls: "percent",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row align-items-center about-profile-row">
            <div className="col-lg-5">
              <div className="about-portrait-card wow fadeInUp delay-0-2s">
                <div className="about-portrait-frame">
                  <img src="/assets/images/optimized/me-grey-studio.webp" alt="YAZ - Yehya Abouzahr" width="760" height="906" loading="lazy" decoding="async" />
                </div>
                <div className="about-portrait-caption">
                  <strong>YAZ</strong>
                  <span>Hospitality Professional</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <span className="about-kicker">Founder & CEO</span>
                <h3>YAZ</h3>
                <p>I am YAZ, an AHLEI Certified Hospitality Professional with over 20 years of experience opening and managing multi-location fine dining restaurants and franchises. My journey spans iconic hospitality brands across the USA, GCC, and Asia, specializing in operational excellence, culinary innovations, and guest experience optimization.</p>
              </div>
              <div className="hero-counter-area about-stats d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
