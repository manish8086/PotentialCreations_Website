import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "wouter";

const productCategories = [
  { name: "T-shirts", href: "/products/t-shirts" },
  { name: "Hoodies", href: "/products/hoodies" },
  { name: "Key Chains", href: "/products/key-chains" },
  { name: "Necklaces", href: "/products/necklaces" },
  { name: "Coffee Cups", href: "/products/coffee-cups" },
  { name: "Tumblers", href: "/products/tumblers" },
  { name: "Flags", href: "/products/flags" },
  { name: "Hand Fans", href: "/products/hand-fans" },
  { name: "Church Fans", href: "/products/church-fans" },
];

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Potential Creations
          </h1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {/* 1. Products */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                  {productCategories.map((category) => (
                    <li key={category.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={category.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {category.name}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* 2. Design Gallery */}
            <NavigationMenuItem>
              <Link href="/gallery">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Design Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* 3. About */}
            <NavigationMenuItem>
              <Link href="/about">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* 4. Contact Us */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="tel:+17703691116"
                        className="flex items-center gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Phone className="h-4 w-4" />
                        (770) 369-1116
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="mailto:bennecus@yahoo.com"
                        className="flex items-center gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Mail className="h-4 w-4" />
                        bennecus@yahoo.com
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="sms:+17703691116"
                        className="flex items-center gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Text Us
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}