import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The quality and speed of the automatic machine from Shriram Enterprises has transformed our business. Our production has doubled!",
    name: 'Rohan Sharma',
    title: 'Owner, Creative Tees',
    avatar: 'RS',
  },
  {
    quote: "As a small startup, the manual station was the perfect entry point. It's reliable, easy to use, and the support has been fantastic.",
    name: 'Priya Mehta',
    title: 'Founder, Print-It',
    avatar: 'PM',
  },
  {
    quote: "Durability is no joke. These machines are workhorses. We've been running ours 12 hours a day with no issues.",
    name: 'Anil Kumar',
    title: 'Production Head, Bulk Garments',
    avatar: 'AK',
  },
];

const Rating = () => (
    <div className="flex gap-0.5 text-primary">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
    </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Trusted by Businesses Like Yours</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
            Here's what our satisfied customers have to say about our machines and service.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-lg border-transparent hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <Rating />
                <blockquote className="text-foreground flex-grow">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary font-bold">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
