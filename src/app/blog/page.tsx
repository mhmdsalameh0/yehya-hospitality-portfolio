import Blog from '@/components/blog'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Career Milestones - YAZ',
  description: 'Career milestones and hospitality case studies from YAZ Zahr.',
}

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}
