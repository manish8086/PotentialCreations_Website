import { Link } from "wouter";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Potential Creations
            </h1>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Design Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}