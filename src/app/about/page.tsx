
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About YAZ - Yehya Abouzahr',
  description: 'Experience, education, training, and hospitality leadership profile for Yehya Abouzahr.',
}


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
