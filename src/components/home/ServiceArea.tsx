
import React from 'react'

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Features</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>New Restaurant Openings</h4>
                <p>Successfully opening and managing multi-location fine dining restaurants and franchises, including hosting glamorous and highly successful Grand Openings.</p>
              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Guest Experience Strategy</h4>
                <p>Designing holistic guest-experience strategies and synchronizing FOH & BOH operations to create exceptional dining ambiences.</p>
              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Team Training & L&D</h4>
                <p>Building high-performance teams by implementing comprehensive Train-the-Trainer and cross-training initiatives across all departments.</p>
              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Financial & Menu Engineering</h4>
                <p>Maximizing financial performance through full P&L accountability, strategic business planning, and creative menu planning and development.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
