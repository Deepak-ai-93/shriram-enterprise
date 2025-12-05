import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { productCategories } from '@/lib/product-categories';

export default function AllProducts() {
  const images = new Map(PlaceHolderImages.map((img) => [img.id, img]));

  return (
    <section id="all-products" className="py-12 md:py-24">
      <div className="container">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Full Product Range
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Explore our extensive selection of screen printing supplies and
            equipment.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCategories.map((category) => {
            const image = category.imageId ? images.get(category.imageId) : null;
            return (
              <Card
                key={category.title}
                className="flex flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardHeader className="p-0">
                  {image && (
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <CardTitle className="font-headline text-xl">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
