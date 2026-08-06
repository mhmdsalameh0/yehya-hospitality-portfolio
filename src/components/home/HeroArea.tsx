
import React from 'react'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
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
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="hero-image-frame">
                  <img src="/assets/images/ICE%20BERG.png" alt="The Secret of F&B Brands iceberg" />
                </div>
              </div>

            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>Hi, I'm Yehya, an AHLEI Certified Hospitality Professional with over 20 years of experience creating exceptional dining experiences.</p>
                <a className="theme-btn" href="">Get In touch</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
