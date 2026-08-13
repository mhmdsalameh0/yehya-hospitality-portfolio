
import React from 'react'

const serviceCategories = [
  {
    title: "Innovation & Technology",
    items: [
      "Hospitality innovation, digitalization, and tech integration to enhance operations and guest experiences.",
      "Food innovation and applied food science to elevate menu development and product quality.",
    ],
  },
  {
    title: "Corporate Development",
    items: [
      "Transforming family businesses into structured corporate entities with governance and efficiency.",
      "End-to-end franchise support: start your own or become the ideal franchisee.",
      "Culinary Compass: holistic guidance across procurement, vendor selection, receiving, storing, issuing, marketing, and sales.",
      "360° coverage of every corner, addressing all areas of hospitality for holistic business management.",
      "Brand identity development, guidance, and creation of manuals and standard operating procedures (SOPs).",
      "SWOT analysis to identify opportunities, strengths, and areas for strategic improvement.",
    ],
  },
  {
    title: "Sales & Brand Strategy",
    items: [
      "Maximizing sales with proven performance strategies.",
      "Building unique brands from scratch.",
      "Turning losses into profit through strategic planning and corrective action.",
      "Food blogging, influencer, and critic programs to enhance brand visibility and reputation.",
    ],
  },
  {
    title: "Talent Acquisition & Development",
    items: [
      "Hiring top talent via job fairs, strategic postings, and triple-layered screening.",
      "Learning, development, and training programs for FOH & BOH teams.",
    ],
  },
  {
    title: "Guest Experience & Pampering",
    items: [
      "Pampering Program & meticulous Guest Experience Curation.",
      "Refining every detail: seating, table setup, ambiance, lighting, and spatial harmony.",
      "Ensuring exceptional experiences from the moment guests arrive.",
      "Implementing tasting panel committees to evaluate and assess menu execution: presentation, flavor profile, texture, consistency, taste, portion, nutrition, calorie count, and temperature.",
    ],
  },
  {
    title: "Operations, Culinary & Food Excellence",
    items: [
      "Optimizing operations for efficiency and consistent service delivery.",
      "Driving continuous business progress and enhancing staff performance.",
      "Procurement and supply chain management for quality and cost control.",
      "Implementing Quality Control Points (QCP) and food safety & sanitation standards.",
      "Kitchen design and layout consulting for operational efficiency and optimal workflow.",
      "Profit & loss analysis with actionable insights.",
      "Financial strategies to control costs, track margins, and enhance profitability.",
      "Comprehensive operational workflows for superior service quality.",
      "Practical and theoretical culinary programs across multiple cuisines.",
      "Streamlined home delivery and aggregator operations for maximum efficiency.",
    ],
  },
]

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area no-padding">
        <div className="container">
          <div className="service-grid">
            {serviceCategories.map((service, index) => (
              <div
                className={`service-item service-item-detailed wow fadeInUp delay-0-2s ${service.items.length > 6 ? "service-item-compact" : ""}`}
                key={service.title}
              >
                <i className="ri-arrow-right-up-line"></i>
                <div className="service-item-heading">
                  <h5>{String(index + 1).padStart(2, "0")}</h5>
                  <h4>{service.title}</h4>
                </div>
                <ol className="service-feature-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
