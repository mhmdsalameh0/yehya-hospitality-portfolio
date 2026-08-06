import Link from 'next/link'
import React from 'react'

const highlights = [
  {
    image: "/assets/images/WhatsApp Image 2026-08-05 at 10.40.31 PM.jpeg",
    title: "Launching Buffalo Wild Wings in Oman",
    date: "December 2021",
  },
  {
    image: "/assets/images/cheers factory.jpeg",
    title: "Building a 500-Strong Team for The Cheesecake Factory",
    date: "December 2016",
  },
  {
    image: "/assets/images/optimized/work4.webp",
    title: "Mastering Teppanyaki & Food Science at Kobe USA",
    date: "2004",
  },
]

export default function BlogDetailsArea() {
  return (
    <>
      <section className="postbox__area grey-bg-4 pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="postbox__wrappers">
                <div className="postbox__mains">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="postbox__main-wrapper">
                        <div className="postbox__thumb w-img mb-30">
                          <img src="/assets/images/white-robata-kuwait.jpg" alt="White Robata restaurant counter" />
                        </div>
                        <div className="postbox__meta">
                          <span>
                            <a href="#"><i className="fa-light fa-user"></i>Yehya Abouzahr</a>
                          </span>
                          <span>
                            <a href="#"><i className="fa-light fa-clock"></i>April 2026</a>
                          </span>
                        </div>
                        <div className="postbox__details-content-wrapper">
                          <h3 className="postbox__details-title">Spearheading Business Transformation at White Robata & Milk Bun</h3>
                          <p>At Gastronomica, YAZ led business transformation across flagship concepts including White Robata and Milk Bun, aligning brand experience, service standards, operational systems, and guest-facing digital enhancements.</p>
                          <p>The work focused on improving day-to-day execution while elevating the guest journey: stronger leadership routines, sharper operational controls, targeted digital improvements, and culinary direction supported by executive chef hiring.</p>
                          <div className="postbox__img m-img mt-50 mb-45">
                            <img src="/assets/images/optimized/work1.webp" alt="Fine dining restaurant operations" />
                            <h5 className="postbox__img-caption">Hospitality operations, guest experience, and brand transformation.</h5>
                          </div>
                          <div className="postbox__quote">
                            <blockquote>
                              <div className="postbox__quote-icon">
                                <span>
                                  <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.6645 0C27.2731 0 28.5892 0.329033 29.6129 0.987098C30.6366 1.64516 31.4774 2.48602 32.1355 3.50968C32.9398 4.67957 33.4516 5.95915 33.671 7.34839C33.8903 8.73764 34 9.87097 34 10.7484C34 14.3312 33.086 17.585 31.2581 20.5097C29.4301 23.4344 26.5785 25.8108 22.7032 27.6387L21.7161 25.6645C23.9828 24.714 25.9204 23.2151 27.529 21.1677C29.2108 19.1204 30.0516 17.0366 30.0516 14.9161C30.0516 14.0387 29.9419 13.271 29.7226 12.6129C28.5527 13.5634 27.2 14.0387 25.6645 14.0387C23.7634 14.0387 22.1183 13.4172 20.729 12.1742C19.3398 10.9312 18.6452 9.21291 18.6452 7.01936C18.6452 4.97205 19.3398 3.29033 20.729 1.9742C22.1183 0.658065 23.7634 0 25.6645 0ZM7.01936 0C8.62796 0 9.94409 0.329033 10.9677 0.987098C11.9914 1.64516 12.8323 2.48602 13.4903 3.50968C14.2946 4.67957 14.8065 5.95915 15.0258 7.34839C15.2452 8.73764 15.3548 9.87097 15.3548 10.7484C15.3548 14.3312 14.4409 17.585 12.6129 20.5097C10.7849 23.4344 7.93333 25.8108 4.05806 27.6387L3.07097 25.6645C5.33763 24.714 7.27527 23.2151 8.88387 21.1677C10.5656 19.1204 11.4065 17.0366 11.4065 14.9161C11.4065 14.0387 11.2968 13.271 11.0774 12.6129C9.90753 13.5634 8.55484 14.0387 7.01936 14.0387C5.11828 14.0387 3.47312 13.4172 2.08387 12.1742C0.694624 10.9312 0 9.21291 0 7.01936C0 4.97205 0.694624 3.29033 2.08387 1.9742C3.47312 0.658065 5.11828 0 7.01936 0Z" fill="currentColor" />
                                  </svg>
                                </span>
                              </div>
                              <p>Operational excellence is what turns a beautiful restaurant into a dependable guest experience.</p>
                            </blockquote>
                          </div>
                          <div className="postbox__features">
                            <h4 className="postbox__features-title">Transformation Focus</h4>
                            <p>The case study highlights how leadership, culinary innovation, technology, training, and daily operating discipline work together inside a premium F&B brand.</p>
                            <ul>
                              <li>Targeted digital enhancements for stronger guest experience.</li>
                              <li>Executive chef hiring and menu development support.</li>
                              <li>Operational routines built for consistency and accountability.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-4 col-lg-4">
                      <div className="blog_sidebar__wrapper pl-40">
                        <div className="sidebar__widget mb-45">
                          <div className="sidebar__widget-content">
                            <div className="sidebar__author">
                              <div className="sidebar__author-thumb">
                                <img src="/assets/images/optimized/me-grey-studio.webp" alt="Yehya Abouzahr" />
                              </div>
                              <div className="sidebar__author-content">
                                <h3 className="sidebar__author-title">YAZ</h3>
                                <p>AHLEI Certified Hospitality Professional with 20+ years of global experience managing multi-location F&B operations.</p>
                                <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                                  <a target="_blank" href="https://www.linkedin.com/search/results/all/?keywords=Yehya%20Abouzahr" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar__widget mb-45">
                          <h3 className="sidebar__widget-title">Career Highlights</h3>
                          <div className="sidebar__widget-content">
                            <div className="sidebar__post">
                              {highlights.map((item, index) => (
                                <div key={index} className="rc__post d-flex align-items-center">
                                  <div className="rc__post-thumb">
                                    <Link href="/blog-details"><img src={item.image} alt={item.title} /></Link>
                                  </div>
                                  <div className="rc__post-content">
                                    <h3 className="rc__post-title">
                                      <Link href="/blog-details">{item.title}</Link>
                                    </h3>
                                    <div className="rc__meta">
                                      <span>{item.date}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="sidebar__widget mb-40">
                          <h3 className="sidebar__widget-title">Focus Areas</h3>
                          <div className="sidebar__widget-content">
                            <div className="tagcloud">
                              <a href="#">Operations</a>
                              <a href="#">Guest Experience</a>
                              <a href="#">Training</a>
                              <a href="#">Menu Engineering</a>
                              <a href="#">Brand Openings</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
