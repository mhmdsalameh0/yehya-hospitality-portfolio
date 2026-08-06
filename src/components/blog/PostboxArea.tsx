"use client"
import React from 'react'
import Link from 'next/link'

const caseStudies = [
  {
    image: "/assets/images/white-robata-kuwait.jpg",
    author: "Yehya Abouzahr",
    date: "April 2026",
    title: "Spearheading Business Transformation at White Robata & Milk Bun",
    excerpt: "Discover how targeted digital enhancements, strategic executive chef hiring, and comprehensive operational overhauls led to peak efficiency and elevated customer satisfaction across flagship Gastronomica brands.",
  },
  {
    image: "/assets/images/WhatsApp Image 2026-08-05 at 10.40.31 PM.jpeg",
    author: "Yehya Abouzahr",
    date: "December 2021",
    title: "Launching Buffalo Wild Wings in Oman with Record-Breaking Sales",
    excerpt: "A look at building Buffalo Wild Wings from scratch into full-service operations, creating a high-energy launch, and sustaining the highest sales after new restaurant opening across the region.",
  },
  {
    image: "/assets/images/cheers factory.jpeg",
    author: "Yehya Abouzahr",
    date: "December 2016",
    title: "Building a 500-Strong Team for The Cheesecake Factory GCC",
    excerpt: "From task-force openings to screening, hiring, and training hundreds of team members, this milestone highlights the leadership required to launch high-capacity restaurants across the GCC.",
  },
]

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

export default function PostboxArea() {
  return (
    <>
      <section className="blog-page-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="postbox__wrapper">
                {caseStudies.map((item, index) => (
                  <article key={index} className="postbox__item format-image mb-50 transition-3">
                    <div className="postbox__thumb w-img">
                      <Link href="/blog-details">
                        <img src={item.image} alt={item.title} />
                      </Link>
                    </div>
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          <a href="#"><i className="fa-light fa-user"></i>{item.author}</a>
                        </span>
                        <span>
                          <a href="#"><i className="fa-light fa-clock"></i>{item.date}</a>
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>{item.excerpt}</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link href="/blog-details" className="theme-btn">Read Case Study</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4">
              <div className="blog_sidebar__wrapper pl-40">
                <div className="sidebar__widget mb-20">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#">
                        <div className="sidebar__search-input">
                          <input type="text" placeholder="Enter your keywords..." />
                          <button type="submit" aria-label="Search case studies">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

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
                              <span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>{item.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
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
