import Projects from '@/components/projects' 
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Operations & Brands - YAZ',
  description: 'Hospitality brands, restaurant openings, and fine-dining operations led by YAZ Zahr.',
}


export default function index() {
  return (
    <Wrapper>
      <Projects />
    </Wrapper>
  )
}
