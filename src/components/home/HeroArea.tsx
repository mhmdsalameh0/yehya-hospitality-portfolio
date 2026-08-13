
import React from 'react'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-5 pt-30 order-2 order-lg-1">
              <div className="hero-content iceberg-story wow fadeInUp delay-0-4s">
                <div className="hero-brand-line">
                  <span className="grandma-badge" aria-hidden="true">
                    <img src="/assets/images/WhatsApp Image 2026-08-07 at 11.38.54 PM (1).jpeg" alt="" loading="eager" decoding="async" />
                  </span>
                  <span className="hero-kicker">The F&amp;B Blueprint Behind Successful Brands</span>
                </div>
                <h1>Grandma&apos;s Iceberg</h1>
                <p className="hero-lede">Grandma&apos;s Iceberg helps restaurants and hospitality businesses uncover what lies beneath the surface of performance.</p>
                <p className="expertise-intro">Built on extensive international F&amp;B leadership experience, we provide practical expertise in:</p>
                <ul className="iceberg-expertise-list">
                  <li>Restaurant Operations &amp; Management</li>
                  <li>Quality Assurance &amp; Brand Standards</li>
                  <li>SOP Development &amp; Implementation</li>
                  <li>Leadership &amp; Team Development</li>
                  <li>Guest Experience &amp; Service Excellence</li>
                  <li>Training &amp; Performance Improvement</li>
                  <li>Cost Control &amp; Operational Efficiency</li>
                  <li>Root-Cause Analysis &amp; Continuous Improvement</li>
                  <li>Brand &amp; Guest Experience Strategy</li>
                </ul>
                <p className="approach-note">Our approach goes beyond fixing visible problems. We identify the systems, people, processes, and leadership practices beneath them-and turn them into sustainable solutions.</p>
                <div className="iceberg-purpose">
                  <strong>Our Purpose</strong>
                  <p>To make the F&amp;B industry stronger, one operation at a time.</p>
                  <p>Grandma&apos;s Iceberg shares knowledge, develops hospitality professionals, supports businesses, and helps create healthier workplace cultures and better guest experiences.</p>
                  <p>Because what guests see is only the tip of the iceberg. What makes a brand successful is what happens underneath.</p>
                  <p><strong className="iceberg-signoff">Grandma&apos;s Iceberg - Beyond What You See.</strong></p>
                </div>
              </div>

            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <div className="hero-image">
                <div className="hero-image-frame">
                  <img src="/assets/images/iceberg-grandma-face.png" alt="The Secret of F&B Brands iceberg" width="1122" height="1402" loading="eager" decoding="async" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
