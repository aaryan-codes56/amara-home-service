import { SignIn } from '@clerk/clerk-react'
import React from 'react'

export default function Login() {
  return (
    <SignIn path="/login" routing="path" />
  )
}
