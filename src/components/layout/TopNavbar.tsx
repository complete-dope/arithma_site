import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import HubSpotEmailForm from '@/pages/stay_updated';

const TopNavbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-anowrap border-b border-solid border-b-[#f0f3f4] px-10 py-3">
      <a href="/" className="flex items-center gap-4 text-[#111518]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">Arithma</h2>
      </a>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className={cn("text-sm font-medium leading-normal text-gray-700 transition-colors hover:text-primary")} href="/financial-models">Models</a>
          <a className={cn("text-sm font-medium leading-normal text-gray-700 transition-colors hover:text-primary")} href="#">Blog</a>
          <a className={cn("text-sm font-medium leading-normal text-gray-700 transition-colors hover:text-primary")} href="#">Videos</a>
          <a className={cn("text-sm font-medium leading-normal text-gray-700 transition-colors hover:text-primary")} href="#">Community</a>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="min-w-[84px] max-w-[480px] h-10 px-4 bg-[#1993e5] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              Stay Updated
            </Button>
          </DialogTrigger>
          <DialogContent>
            <HubSpotEmailForm />
          </DialogContent>
        </Dialog>
        {/* <p className="text-[#637988] text-sm font-normal leading-normal">Subscribe to our newsletter for market insights and updates.</p> */}
      </div>
    </header>
  );
};

export default TopNavbar;