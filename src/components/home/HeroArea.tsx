
import React from 'react'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row align-items-center grandma-hero-row">
            <div className="col-lg-7">
              <div className="hero-content grandma-iceberg-copy wow fadeInUp delay-0-2s">
                <span className="hero-kicker">The F&amp;B Blueprint Behind Successful Brands</span>
                <h1>Grandma&apos;s Iceberg</h1>
                <p>Grandma&apos;s Iceberg helps restaurants and hospitality businesses uncover what lies beneath the surface of performance.</p>
                <p>Built on extensive international F&amp;B leadership experience, we provide practical expertise in:</p>
                <ul>
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
                <p>Our approach goes beyond fixing visible problems. We identify the systems, people, processes, and leadership practices beneath them and turn them into sustainable solutions.</p>
                <div className="iceberg-purpose">
                  <strong>Our Purpose</strong>
                  <p>To make the F&amp;B industry stronger, one operation at a time.</p>
                  <p>Grandma&apos;s Iceberg shares knowledge, develops hospitality professionals, supports businesses, and helps create healthier workplace cultures and better guest experiences.</p>
                  <p>Because what guests see is only the tip of the iceberg. What makes a brand successful is what happens underneath.</p>
                </div>
                <p className="iceberg-signoff">Grandma&apos;s Iceberg — Beyond What You See.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="grandma-portrait wow fadeInUp delay-0-4s">
                <div className="grandma-portrait-frame">
                  <img src="/assets/images/grandma.jpeg" alt="Grandma's Iceberg portrait" width="1052" height="945" loading="eager" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
