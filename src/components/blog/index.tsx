
"use client"
import React from 'react'
import PostboxArea from './PostboxArea'
import Breadcrumb from '../common/Breadcrumb'
import HeaderOne from '@/layouts/headers/HeaderOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Blog() {
  return (
    <>

      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Case Studies" style_4={true} />
            <PostboxArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
