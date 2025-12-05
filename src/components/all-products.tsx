import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const productCategories = [
    {
        title: 'Printing Ink',
        items: ['Sunglo Trouble Free Screen Ink', 'Sunrays Screen Printing Inks', 'Union Plastisol Metal Printing Ink', 'Sericol Printing Inks'],
        imageId: 'printing-ink',
    },
    { title: 'Vinyl Films', items: [] },
    { title: 'Adhesive Tapes', items: [] },
    { title: 'Screen Printable Adhesive', items: [] },
    { title: 'Screen Printing Frames', items: [] },
    { title: 'Screen Printing Reducer', items: [] },
    { title: 'Lint Free Wipes', items: [] },
    { title: 'Screen Printing Machines', items: [] },
    { title: 'Screen Printing Squeegee', items: [] },
    { title: 'Polyester Labels', items: [] },
    { title: 'Screen Printing Emulsion', items: [] },
    { title: 'Polycarbonate Film', items: [] },
    { title: 'Screen Mesh Tension Check Meter', items: [] },
    { title: 'Screen Making Services', items: [] },
    { title: 'Polycarbonate Sheets', items: [] },
    { title: 'Screen Printing Mesh', items: [] },
    { title: 'Screen Cleaning Cloth', items: [] },
    { title: 'Non Tearable Synthetic Paper', items: [] },
];

export default function AllProducts() {
    const images = new Map(PlaceHolderImages.map(img => [img.id, img]));

    return (
        <section id="all-products" className="py-12 md:py-24">
            <div className="container">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our Full Product Range</h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                        Explore our extensive selection of screen printing supplies and equipment.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {productCategories.map((category) => {
                        const image = category.imageId ? images.get(category.imageId) : null;
                        return (
                            <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                <CardHeader className="p-0">
                                    {image ? (
                                        <div className="relative aspect-video overflow-hidden rounded-t-lg">
                                            <Image
                                                src={image.imageUrl}
                                                alt={image.description}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    ) : null}
                                    <div className="p-6 pb-0">
                                        <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow">
                                    {category.items.length > 0 && !image ? (
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            {category.items.map((item) => (
                                                <li key={item} className="flex items-start">
                                                    <Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        !image && <div className="h-full"></div>
                                    )}
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
