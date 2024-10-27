import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import GlowButton from "@/components/GlowButton";
import { useToast } from "@/hooks/use-toast"

function JoinWaitList() {
  const [emailInput, setEmailInput] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailInput) {
      toast({
        title: 'Error',
        description: 'Email is required',
        variant: 'destructive',
      });
      return;
    }

    setButtonLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: 'Joined successfully',
          description: 'Thank you for joining the waitlist!',
          variant: 'default',
        });
        setEmailInput('');
      } else {
        throw new Error(data.error || 'Something went wrong, please try again later');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: (error as Error).message,
        variant: 'destructive',
      });
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        className="w-full sm:w-64 md:w-80 bg-white bg-opacity-20 text-white placeholder-gray-300 border-white border-opacity-30"
        required
      />
      <GlowButton
        type="submit"
        className="w-full sm:w-auto bg-black text-white hover:bg-gray-900 text-lg font-bold py-3 px-6 rounded-full transition-all duration-300"
        disabled={buttonLoading}
      >
        {buttonLoading ? 'Joining...' : 'Join Waitlist'}
      </GlowButton>
    </form>
  );
}

export default JoinWaitList;