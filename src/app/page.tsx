import Header from '@/components/header';
import Hero from '@/components/hero';
import Products from '@/components/products';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <ScrollAnimationWrapper>
          <Hero />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Products />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Features />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Testimonials />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
