'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Printer, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { productCategories } from '@/lib/product-categories';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { GetQuoteModal } from '@/components/get-quote-modal';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="home"
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <Printer className="h-6 w-6 text-primary" />
          <span className="font-headline">Shriram Enterprises</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none">
              Products <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
               <DropdownMenuItem asChild>
                  <Link href="#products">Featured Products</Link>
                </DropdownMenuItem>
              {productCategories.map((category) => (
                <DropdownMenuItem key={category.title} asChild>
                  <Link href="#all-products">{category.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
            <GetQuoteModal>
              <Button className="hover:bg-accent hover:text-accent-foreground">
                Get Quote
              </Button>
            </GetQuoteModal>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className='sr-only'>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Printer className="h-6 w-6 text-primary" />
                    <span className="font-headline">Shriram Enterprises</span>
                  </Link>
                </div>
                <nav className="mt-6 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium">
                      Products <ChevronDown className="h-5 w-5" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 flex flex-col gap-2 pl-4">
                        <Link
                            href="#products"
                            className="text-base text-muted-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            Featured Products
                          </Link>
                        {productCategories.map((category) => (
                          <Link
                            key={category.title}
                            href="#all-products"
                            className="text-base text-muted-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </nav>
                <div className="mt-auto">
                    <GetQuoteModal>
                        <Button className="w-full hover:bg-accent hover:text-accent-foreground">
                            Get Quote
                        </Button>
                    </GetQuoteModal>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
