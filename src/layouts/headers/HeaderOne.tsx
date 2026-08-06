"use client"
import Link from "next/link";
import UseSticky from "@/hooks/UseSticky";
import NavMenu from "./NavMenu"; 
import { useState } from "react";
import Sidebar from "@/components/common/Sidebar";

export default function HeaderOne() {

  const { sticky } = UseSticky()
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`main-header ${sticky ? 'fixed-header' : ''}`}>
        <div className="header-upper">
          <div className="container">
            <div className="header-inner">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-6 col-7 col-sm-6">
                  <div className="logo-area">
                    <div className="logo">
                      <Link href="/" className="text-logo">
                        <span className="logo-photo">
                          <img src="/assets/images/about/me-paris.png" alt="Yehya Abouzahr" />
                        </span>
                        <span className="logo-mark">YAZ</span>
                        <span className="logo-copy">
                          <small>Yehya Abouzahr</small>
                          <small>Grandma Iceberg</small>
                          <small>Founder & CEO</small>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-5 col-sm-6">
                  <div className="main-menu d-none d-lg-block">
                    <nav id="mobile-menu">
                      <NavMenu /> 
                    </nav>
                  </div>
                  <div className="side-menu-icon d-lg-none text-end">
                    <a style={{ cursor: "pointer" }} onClick={() => setOpen(!open)} className="info-toggle-btn f-right sidebar-toggle-btn"><i className="fal fa-bars"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  )
}
