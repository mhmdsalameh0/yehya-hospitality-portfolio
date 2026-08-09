
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
                  <img src="/assets/images/optimized/me-grey-studio.webp" alt="YAZ Zahr" width="760" height="906" loading="lazy" decoding="async" />
                </div>
                <div className="about-portrait-caption">
                  <strong>YAZ</strong>
                  <span>Hospitality Professional</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <span className="about-kicker">Founder & Principal Hospitality Consultant</span>
                <h3><span>YAZ</span><span className="about-name-gap">Zahr</span></h3>
                <p>YAZ&nbsp;Zahr is an international hospitality expert with more than 20 years of experience in food and beverage operations, brand development, guest experience and professional training. His career spans the United States, Lebanon and the GCC, where he held leadership positions with renowned brands including Morton's The Steakhouse, Chart House, Kobe Japanese Steakhouse, The Cheesecake Factory, Buffalo Wild Wings and Gastronomica.</p>
                <p>Drawing on this extensive operational experience, YAZ&nbsp;Zahr founded Grandma's Iceberg, a hospitality consultancy built around his signature concept, The Secret of F&B Brands. His approach looks beyond what guests see, including exceptional dining, brand perception and memorable experiences, to strengthen what truly drives success beneath the surface: corporate structure, leadership, operational systems, staff development, cost control and continuous improvement. Through consulting and educational content, YAZ&nbsp;Zahr helps hospitality brands build stronger foundations and achieve sustainable growth.</p>
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
