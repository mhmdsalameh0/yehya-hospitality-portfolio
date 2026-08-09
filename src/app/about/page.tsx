
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About YAZ Zahr',
  description: 'Experience, education, training, and hospitality leadership profile for YAZ Zahr.',
}


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
