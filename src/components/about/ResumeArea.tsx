import React from 'react'

const experienceData = [
  {
    date: 'Jan 2022 - April 2026',
    title: 'Guest Experience & Restaurant Operations Manager',
    company: '@ Gastronomica, Kuwait',
    description: 'Spearheaded business transformation for flagship brands like White Robata and Milk Bun. Drove digital enhancements and optimized operations for peak efficiency and consistent service delivery.',
  },
  {
    date: 'Jan 2017 - Dec 2021',
    title: 'General & Brand Training Manager',
    company: '@ Olayan Food Division, Oman',
    description: 'Established Buffalo Wild Wings from scratch to full-service operations. Created a highly successful Grand Opening and maintained the highest sales post-NRO across the region.',
  },
  {
    date: 'May 2012 - Dec 2016',
    title: 'Senior Restaurant & Training Manager',
    company: '@ The Cheesecake Factory (Task Force)',
    description: 'Played a key leadership role in the soft and grand openings for 500-seat capacity restaurants across Beirut, Kuwait, and the UAE. Headhunted, hired, and trained over 500 employees.',
  },
]

const educationData = [
  {
    date: 'Mar 1995 - Dec 1997',
    title: 'Hospitality Management Degree',
    company: '@ C & E College (Credentialed by AHLEI)',
    description: 'Earned a Hospitality Management Diploma with specific certifications in International Hotel Management, F&B Controls, Front Office Procedures, and Hospitality Sales & Marketing.',
  },
  {
    date: 'Two Years',
    title: 'Hospitality Cross Training',
    company: '@ International Marriott Hotel, Lebanon',
    description: 'Completed comprehensive training in the kitchens of a world-leading luxury hotel, covering food science, quality control, sanitation, and full Front-of-House (FOH) and Back-of-House (BOH) operations.',
  },
  {
    date: 'Six Months',
    title: 'Teppanyaki & Food Science Program',
    company: '@ Kobe Culinary Training School, FL, USA',
    description: 'Completed an extensive training program focusing on Teppanyaki/Hibachi techniques and the specialized food science required for professional sushi preparation.',
  },
]

const resumeData = [...experienceData, ...educationData]

export default function ResumeArea() {
  return (
    <>
      <div className="resume-area no-padding" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Experience & Education</h2>
              </div>
            </div>
          </div>
          <div className="resume-wrapper resume-grid wow fadeInUp delay-0-2s">
            {resumeData.map((item) => (
              <div className="resume-box" key={item.title}>
                    <span className="resume-date">{item.date}</span>
                    <h2>{item.title}</h2>
                    <span>{item.company}</span>
                    <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
