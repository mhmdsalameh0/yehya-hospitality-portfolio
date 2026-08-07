
import React from 'react'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 pt-30">

              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <div className="experience-badge">20+</div>
                  <div className="reviews">Years of Experience
                    <p>Successfully opening and managing fine dining restaurants and franchises across the USA, GCC, and Asia.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-5">
              <div className="hero-image">
                <div className="hero-image-frame">
                  <img src="/assets/images/optimized/iceberg.webp" alt="The Secret of F&B Brands iceberg" width="900" height="1035" loading="eager" decoding="async" />
                </div>
              </div>

            </div>
            <div className="col-lg-4 pt-30">
              <div className="hero-content iceberg-story wow fadeInUp delay-0-4s">
                <span className="hero-kicker">The F&amp;B Blueprint Behind Successful Brands</span>
                <h1>Grandma&apos;s Iceberg</h1>
                <p>Grandma&apos;s Iceberg helps restaurants and hospitality businesses uncover what lies beneath the surface of performance.</p>
                <p>Built on international F&amp;B leadership experience, it turns systems, people, processes, and leadership practices into sustainable solutions.</p>
                <div className="iceberg-expertise" aria-label="Grandma's Iceberg expertise">
                  <span>Operations</span>
                  <span>Brand Standards</span>
                  <span>SOPs</span>
                  <span>Leadership</span>
                  <span>Guest Experience</span>
                  <span>Cost Control</span>
                </div>
                <div className="iceberg-purpose">
                  <strong>Our Purpose</strong>
                  <p>To make the F&amp;B industry stronger, one operation at a time. Because what guests see is only the tip of the iceberg.</p>
                </div>
                <a className="theme-btn" href="#contact">Get In touch</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
