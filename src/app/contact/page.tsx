 
import Contact from '@/components/contact'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact - YAZ',
  description: 'Contact YAZ Zahr for hospitality operations, restaurant openings, guest experience, and training.',
}


export default function index() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}
