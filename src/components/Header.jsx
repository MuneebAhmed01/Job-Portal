import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignInButton } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
import { SignedIn } from '@clerk/clerk-react'
import { SignedOut } from '@clerk/clerk-react'
const Header = () => {
  return (
    <>
    <nav className='py-4 flex justify-between items-center'>
        <Link>
        <img className="h-20" src='public\logo(1).png'/>
        </Link>
            <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
    </>
  )
}

export default Header
