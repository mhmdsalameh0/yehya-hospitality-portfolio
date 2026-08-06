import React from 'react'

const milestoneData = [
  {
    image: '/assets/images/optimized/work1.webp',
    tag: 'Transformation',
    date: 'Jan 2022 - Apr 2026',
    title: 'Spearheading Business Transformation at White Robata & Milk Bun',
    context: 'Details on hiring a Japanese celebrity chef, rolling out a digital enhancement application, and deploying targeted enhancements that boosted customer satisfaction.',
  },
  {
    image: '/assets/images/optimized/work2.webp',
    tag: 'Grand Opening',
    date: 'Jan 2017 - Dec 2021',
    title: 'Launching Buffalo Wild Wings in Oman with Record-Breaking Sales',
    context: 'Details on generating city-wide excitement with branded limousines and biker groups, hosting VIPs, and winning the headquarters award for highest maintained sales.',
  },
  {
    image: '/assets/images/optimized/work3.webp',
    tag: 'Team Building',
    date: 'May 2012 - Dec 2016',
    title: 'Building a 500-Strong Team for The Cheesecake Factory GCC',
    context: 'Details on headhunting and screening 500 employees, executing task force operations across Beirut, Kuwait, and the UAE, and generating average daily sales of $20,000.',
  },
]

export default function BlogArea() {
  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title wow fadeInUp delay-0-2s">
                <h2>Career Milestones</h2>
              </div>
            </div>
          </div>

          {milestoneData.map((item, index) => (
            <div className="row blog-post-box align-items-center" key={item.title}>
              <div className="col-lg-6">
                <div className="blog-post-img">
                  <a href="#">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="1200"
                      height="675"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </a>
                  <div className="blog-post-category">
                    <a href="#">{item.tag}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-post-caption">
                  <h3>{item.date}</h3>
                  <h2><a className="link-decoration" href="#">{item.title}</a></h2>
                  <p>{item.context}</p>
                  <a className="theme-btn theme-btn-two" href="#">Read more <i className="ri-arrow-right-line"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
