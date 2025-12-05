'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-machine');
  const [text, setText] = useState('');
  const fullText = 'Revolutionize Your Manufacturing ';
  const animatedWord = 'Business';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [fullText]);

  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-12 md:py-24 lg:py-32">
      <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
            {text}
            {text.length === fullText.length && (
              <span className="relative inline-block">
                {animatedWord}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500 ease-out" style={{ transform: 'scaleX(1)' }}></span>
              </span>
            )}
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
            Discover our state-of-the-art T-shirt manufacturing machines,
            engineered for quality, speed, and reliability. Elevate your
            production today.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
          <Button
            size="lg"
            asChild
            className="hover:bg-accent hover:text-accent-foreground"
          >
            <Link href="#products">Explore Machines</Link>
          </Button>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-2xl group">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            width={1200}
            height={800}
            className="aspect-[3/2] object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </section>
  );
}