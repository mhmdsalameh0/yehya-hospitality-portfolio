import React from 'react'

const recognitionData = [
  {
    id: '01',
    text: 'Buffalo Wild Wings, stay strong, highest sales, maintained after new restaurant opening (NRO).',
    name: 'BWW Headquarters',
    role: 'Business Conference, Washington, D.C.',
  },
  {
    id: '02',
    text: 'Rated Travellers Choice for upscale dining, providing memorable experiences with personal mentions by name from highly satisfied guests.',
    name: 'Tripadvisor Guests',
    role: 'Kobe Japanese Steakhouse',
  },
  {
    id: '03',
    text: 'Voted best Japanese and family-friendly restaurant featured in local dining awards.',
    name: 'Orlando Magazine',
    role: 'Dining Awards Feature',
  },
  {
    id: '04',
    text: 'Delivered exceptional performance across all KPIs, resulting in rapid promotions from RGM to Area Manager, and Operations & Training Manager.',
    name: 'Gastronomica',
    role: 'Internal Leadership Promotions',
  },
  {
    id: '05',
    text: 'Generated sales of 122.7% over expectations by prolonging the honeymoon period for six months and driving sales through creative marketing.',
    name: 'Olayan Food Division',
    role: 'Sales & Performance Tracking',
  },
]

export default function TestimonoalArea() {
  return (
    <>
      <section className="testimonials-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Awards & Recognition</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {recognitionData.map((item, index) => (
              <div key={item.id} className={index < 2 ? 'col-lg-6 col-md-6' : 'col-lg-4 col-md-6'}>
                <div className={`testimonial-item wow fadeInUp delay-0-${index + 2}s`}>
                  <div className="author recognition-number">{item.id}</div>
                  <div className="text">{item.text}</div>
                  <div className="testi-des">
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
