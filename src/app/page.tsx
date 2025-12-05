import Header from '@/components/header';
import Hero from '@/components/hero';
import Products from '@/components/products';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
