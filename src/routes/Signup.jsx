import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import './Auth.css';

export default function Signup() {
  return (
    <div className="auth-wrapper">
        <SignUp path="/signup" routing="path" />
    </div>
  );
}
