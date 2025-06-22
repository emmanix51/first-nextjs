import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function page() {
  return (
    <div>Blog main page
      <Link href={"../"}>
      <Button>Return to home</Button>
      
      </Link>
    </div>
    
  )
}
