 
import Service from '@/components/service'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Features - YAZ',
  description: 'Hospitality operations features including restaurant openings, guest experience strategy, training, and menu engineering.',
}


export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}
