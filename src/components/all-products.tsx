import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const productCategories = [
    {
        title: 'Printing Ink',
        items: ['Sunglo Trouble Free Screen Ink', 'Sunrays Screen Printing Inks', 'Union Plastisol Metal Printing Ink', 'Sericol Printing Inks'],
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
                    {productCategories.map((category) => (
                        <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
                            </CardHeader>
                            {category.items.length > 0 && (
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {category.items.map((item) => (
                                            <li key={item} className="flex items-start">
                                                <Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
