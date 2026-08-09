 
import SingleProject from '@/components/single-project'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Brand Detail - YAZ',
  description: 'Restaurant brand and operations detail from YAZ Zahr.',
}


export default function index() {
  return (
    <Wrapper>
      <SingleProject />
    </Wrapper>
  )
}
