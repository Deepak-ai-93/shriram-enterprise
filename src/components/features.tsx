import { ShieldCheck, Printer, Wrench, PlayCircle } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Built for Durability',
    description: 'Our machines are constructed with high-grade materials to withstand the demands of high-volume production.',
  },
  {
    icon: <Printer className="h-10 w-10 text-primary" />,
    title: 'Precision Manufacturing',
    description: 'Achieve crisp, vibrant, and consistent prints every time with our advanced printing technology.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Low Maintenance',
    description: 'Designed for reliability and easy servicing, minimizing downtime and maximizing your output.',
  },
  {
    icon: <PlayCircle className="h-10 w-10 text-primary" />,
    title: 'Easy Operation',
    description: 'Intuitive controls and user-friendly interfaces mean your team can get up and running in no time.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Why Choose Shriram Enterprises?</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
            We are committed to providing you with technology that drives growth and quality.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                {feature.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
