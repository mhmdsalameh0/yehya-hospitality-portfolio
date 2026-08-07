"use client"
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const brandLogos = [
  {
    name: "Gastronomica",
    mark: "G",
    icon: "gastronomica",
    url: "https://www.linkedin.com/company/gastronomica-general-trading-co-/",
  },
  {
    name: "The Cheesecake Factory",
    mark: "CF",
    icon: "cheesecake",
    url: "https://www.linkedin.com/company/lifeatcheesecake/",
  },
  {
    name: "Buffalo Wild Wings",
    mark: "B",
    icon: "bww",
    url: "https://www.linkedin.com/company/buffalo-wild-wings/",
  },
  {
    name: "Kobe Japanese Steakhouse",
    mark: "K",
    icon: "kobe",
    url: "https://www.linkedin.com/company/kobe-japanese-steakhouse/",
  },
  {
    name: "Landry's Restaurants",
    mark: "L",
    icon: "landrys",
    url: "https://www.linkedin.com/company/landry%27s-restaurants/",
  },
  {
    name: "Morton's The Steakhouse",
    mark: "M",
    icon: "mortons",
    url: "https://www.linkedin.com/company/morton%27s-the-steakhouse/",
  },
  {
    name: "Maggiano's Little Italy",
    mark: "M",
    icon: "maggianos",
    url: "https://www.linkedin.com/company/maggiano%27s-little-italy/",
  },
  {
    name: "Hampton Inn by Hilton",
    mark: "H",
    icon: "hampton",
    url: "https://www.linkedin.com/company/hampton-inn-by-hilton/",
  },
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
                        <a
                          className={`brand-wordmark brand-wordmark-${brand.icon}`}
                          href={brand.url ?? "#"}
                          target={brand.url ? "_blank" : undefined}
                          rel={brand.url ? "noopener noreferrer" : undefined}
                          aria-label={brand.url ? `${brand.name} LinkedIn` : brand.name}
                          data-mark={brand.mark}
                        >
                          <span className={`brand-icon brand-icon-${brand.icon}`} aria-hidden="true">{brand.mark}</span>
                          <span>{brand.name}</span>
                        </a>
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
