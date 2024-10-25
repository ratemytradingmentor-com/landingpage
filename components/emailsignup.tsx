
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { css } from "@emotion/react"

const glowAnimation = css`
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
    }
  }
`

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email submission logic
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full sm:w-64 md:w-80 bg-white bg-opacity-20 text-white placeholder-gray-300 border-white border-opacity-30"
        required
      />
      <Button 
        type="submit" 
        className="w-full sm:w-auto bg-black text-white hover:bg-gray-900 text-lg font-bold py-3 px-6 rounded-full transition-all duration-300"
        css={css`
          animation: ${glowAnimation} 2s ease-in-out infinite;
        `}
      >
        Join Waitlist
      </Button>
    </form>
  )
}

export default EmailSignup;
