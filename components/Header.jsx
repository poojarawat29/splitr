import React from 'react'
import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";
const Header = () => {
  return (
    <div>
      <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
    </div>
  )
}

export default Header
