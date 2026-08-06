"use client"
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const brandLogos = [
  { name: "Gastronomica" },
  { name: "The Cheesecake Factory" },
  { name: "Buffalo Wild Wings", icon: "bww" },
  { name: "Kobe Japanese Steakhouse" },
  { name: "Morton's The Steakhouse" },
  { name: "Chart House" },
  { name: "Maggiano's Little Italy" },
  { name: "Marriott Hotels" },
]

export default function BrandArea() {
  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Brands & Groups I Worked With</h2>
              <div className="company-list">
                <div className="brand-swiper-wrap">
                  <button className="brand-nav brand-nav-prev" type="button" aria-label="Previous brand">
                    <i className="ri-arrow-left-line"></i>
                  </button>
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={{
                      prevEl: '.brand-nav-prev',
                      nextEl: '.brand-nav-next',
                    }}
                    autoplay={{
                      delay: 1800,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    grabCursor={true}
                    speed={700}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                      576: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1200: { slidesPerView: 4 },
                    }}
                    className="brand-swiper"
                  >
                    {brandLogos.map((brand) => (
                      <SwiperSlide key={brand.name}>
                        <span className={`brand-wordmark ${brand.icon ? `brand-wordmark-${brand.icon}` : ''}`}>
                          {brand.icon === "bww" && <span className="brand-icon brand-icon-bww" aria-hidden="true">B</span>}
                          <span>{brand.name}</span>
                        </span>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button className="brand-nav brand-nav-next" type="button" aria-label="Next brand">
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
