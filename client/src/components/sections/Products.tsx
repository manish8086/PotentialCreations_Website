import { Card, CardContent } from "@/components/ui/card";
import { Printer, Shirt, Coffee, Flag, Fan } from "lucide-react";
import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Products
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={item}>
              <Card className="border-2 hover:border-primary/50 transition-colors">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}