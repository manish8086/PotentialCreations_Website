import { Card, CardContent } from "@/components/ui/card";
import { Printer, Shirt, Coffee, Flag, Fan } from "lucide-react";

const products = [
  {
    icon: Shirt,
    title: "Apparel",
    items: ["T-shirts", "Hoodies"],
  },
  {
    icon: Coffee,
    title: "Drinkware",
    items: ["Coffee Cups", "Tumblers"],
  },
  {
    icon: Flag,
    title: "Flags",
    items: ["Custom Flags"],
  },
  {
    icon: Fan,
    title: "Fans",
    items: ["Hand Fans", "Church Fans"],
  },
  {
    icon: Printer,
    title: "Accessories",
    items: ["Key Chains", "Necklaces"],
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="text-center">
                  <product.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {product.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
