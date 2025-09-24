// pages/about.tsx

import React from 'react'
import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'

const AboutPage: React.FC = () => {
  return (
    <>
    <Header />
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">About Us</h1>

      <div className="space-x-4">
        <Button size="small" shape="rounded-sm">
          Small / rounded-sm
        </Button>

        <Button size="medium" shape="rounded-md">
          Medium / rounded-md
        </Button>

        <Button size="large" shape="rounded-full">
          Large / rounded-full
        </Button>
      </div>
    </div>
    </>
    
  )
}

export default AboutPage
