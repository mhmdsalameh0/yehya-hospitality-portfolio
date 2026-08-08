
import React from 'react'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pt-30 order-2 order-lg-1">
              <div className="hero-content iceberg-story wow fadeInUp delay-0-4s">
                <span className="grandma-badge" aria-hidden="true">
                  <img src="/assets/images/WhatsApp Image 2026-08-07 at 11.38.54 PM (1).jpeg" alt="" loading="eager" decoding="async" />
                </span>
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
              </div>

            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <div className="hero-image">
                <div className="hero-image-frame">
                  <img src="/assets/images/optimized/iceberg.webp" alt="The Secret of F&B Brands iceberg" width="900" height="1035" loading="eager" decoding="async" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
