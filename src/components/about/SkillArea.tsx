import React from 'react'

const skills = [
  'FOH & BOH Operations',
  'Guest Experience',
  'Team Training & L&D',
  'New Restaurant Openings',
  'P&L Accountability',
  'Menu Engineering',
  'Food Science & Quality',
  'POS & Restaurant Tech',
]

export default function SkillArea() {
  return (
    <>
      <section id="skills" className="skill-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title section-black-title mb-40 wow fadeInUp delay-0-2s">
                  <h2>Professional Skills</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="skill-items-wrap">
                  <div className="row">
                    {skills.map((skill, index) => (
                      <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6" key={skill}>
                        <div className={`skill-item wow fadeInUp delay-0-${(index % 4) + 2}s`}>
                          <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
                          <h5>{skill}</h5>
                        </div>
                      </div>
                    ))}
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
