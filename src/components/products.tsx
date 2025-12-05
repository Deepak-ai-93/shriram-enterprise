import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const products = [
  {
    id: 'manual-station',
    name: 'Bharat Suzi Manual 4-Station',
    specs: [
      { label: 'Automation', value: 'Manual' },
      { label: 'Capacity', value: '20 Pcs/Min' },
      { label: 'Stations', value: '4' },
      { label: 'Weight', value: '200Kg' },
    ],
    price: '₹ 1,00,000 / Unit',
  },
  {
    id: 'high-speed-auto',
    name: 'Pro-Matic High-Speed Auto',
    specs: [
      { label: 'Automation', value: 'Automatic' },
      { label: 'Capacity', value: '120 Pcs/Min' },
      { label: 'Colors', value: '8' },
      { label: 'Power', value: '3-Phase' },
    ],
    price: 'Request Quote',
  },
  {
    id: 'heat-press',
    name: 'Starter Heat Press 38x38',
    specs: [
      { label: 'Automation', value: 'Manual' },
      { label: 'Type', value: 'Clamshell Heat Press' },
      { label: 'Size', value: '38cm x 38cm' },
      { label: 'Use', value: 'Vinyl, Sublimation' },
    ],
    price: '₹ 25,000 / Unit',
  },
];

export default function Products() {
  const images = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section id="products" className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our Machines</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
            From manual workhorses to fully automated systems, we have the right machine for your business needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const image = images.get(product.id);
            return (
              <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="p-0 relative">
                  {image && (
                    <div className="overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="w-full h-auto aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <CardTitle className="font-headline">{product.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6 pt-0">
                  <CardDescription className="mb-4">Key Specifications:</CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                    {product.specs.map(spec => (
                      <li key={spec.label} className="flex justify-between">
                        <span>{spec.label}:</span>
                        <span className="font-medium text-foreground">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <p className="text-2xl font-bold mb-4">{product.price}</p>
                    <Button className="w-full" variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
