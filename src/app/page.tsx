 
import React from 'react'

import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'
export const metadata: Metadata = {
  title: 'YAZ Zahr',
  description: 'YAZ Zahr is an AHLEI Certified Hospitality Professional with over 20 years of experience in restaurant operations, guest experience, openings, and training.',
}


export default function index() {
  return (
    <Wrapper>
     <Home /> 
    </Wrapper>
  )
}
