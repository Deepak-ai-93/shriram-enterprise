import Link from 'next/link';
import { Printer, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <Printer className="h-6 w-6 text-primary" />
              <span className="font-headline">SHRIRAM MACHINERY</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your partner in high-quality garment manufacturing solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold font-headline">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: <a href="tel:080-4861-8898" className="hover:text-primary">080-4861-8898</a></li>
              <li>Email: <a href="mailto:sales@shrirammachinery.com" className="hover:text-primary">sales@shrirammachinery.com</a></li>
              <li>Address: 123 Print Street, Bangalore, Karnataka 560001</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold font-headline">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shriram Machinery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
