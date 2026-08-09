

import React from 'react'

import type { Metadata } from 'next'
import Wrapper from '@/layouts/Wrapper'
import BlogDetails from '@/components/blog-details'
export const metadata: Metadata = {
  title: 'Milestone Details - YAZ',
  description: 'Detailed hospitality career milestone from YAZ Zahr.',
}


export default function index() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}
