import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './Auth.css';

export default function Login() {
  return (
    <div className="auth-wrapper">
        <SignIn path="/login" routing="path" />
    </div>
  );
}
