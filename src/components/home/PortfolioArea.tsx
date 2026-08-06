"use client"
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import ImagePopup from '@/modals/ImagePopup';

import portfolio_img_1 from "@/assets/images/white-robata-kuwait.jpg";
import portfolio_img_2 from "@/assets/images/WhatsApp Image 2026-08-05 at 10.40.31 PM.jpeg";
import portfolio_img_3 from "@/assets/images/cheers factory.jpeg";
import portfolio_img_4 from "@/assets/images/projects/work4.png";
import portfolio_img_5 from "@/assets/images/projects/work5.png";

interface DataType {
  id: number;
  col: string;
  image: StaticImageData;
  title: string;
  category: string;
  description: string;
}

const portfolio_data:DataType[] = [
  {
    id: 1,
    col: "6",
    image: portfolio_img_1,
    title: "White Robata & Milk Bun Brands",
    category: "Restaurant Concepts",
    description: "Spearheaded business transformation, menu development, and the rollout of cutting-edge, user-centric experiences for flagship brands.",
  },
  {
    id: 2,
    col: "6",
    image: portfolio_img_2,
    title: "Buffalo Wild Wings Grand Opening",
    category: "Grand Opening",
    description: "Created a highly successful grand opening featuring VIPs, a branded limousine, and special entertainment shows in Oman.",
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    title: "The Cheesecake Factory GCC",
    category: "Multi-Unit Opening",
    description: "Led the soft and grand openings for 500-seat capacity restaurants across Beirut, Kuwait, Dubai, and Abu Dhabi.",
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    title: "Kobe Japanese Steakhouse",
    category: "Guest Experience",
    description: "Delivered Omotenashi-style hospitality featuring Teppanyaki-Hibachi grilling and fresh sushi on specially designed handcrafted dishware.",
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    title: "Upscale Dining Operations",
    category: "Fine Dining",
    description: "Directed fine dining destinations like Chart House and Morton's, known for prime-aged steaks, fresh seafood, and impeccable service.",
  },
];

export default function PortfolioArea() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_data.slice(0, 5).map((item) => item.image.src);


  return (
    <>

      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div key={i} className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="portfolio-box">
                    <Image src={item.image} alt="" style={{ height: "auto"}} data-rjs="2" />
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))} 
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  )
}
