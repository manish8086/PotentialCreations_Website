import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-extrabold text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Potential Creations
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Transform your ideas into reality with our custom printing solutions. From apparel to accessories, we bring your designs to life.
        </p>
        <Button 
          size="lg" 
          onClick={scrollToProducts}
          className="text-lg px-8 py-6"
        >
          Explore Our Products
        </Button>
      </div>
    </section>
  );
}
