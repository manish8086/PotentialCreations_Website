import { PhotoGallery } from "@/components/ui/gallery";

const productPhotos = [
  {
    src: "https://images.unsplash.com/photo-1542729833-00c7620f6541",
    width: 4,
    height: 3,
    alt: "Custom printed t-shirt"
  },
  {
    src: "https://images.unsplash.com/photo-1524883173980-67b26d34e82c",
    width: 4,
    height: 3,
    alt: "Printed merchandise"
  },
  {
    src: "https://images.unsplash.com/photo-1542745979-770f28b4aba5",
    width: 4,
    height: 3,
    alt: "Custom printing process"
  },
  {
    src: "https://images.unsplash.com/photo-1530745342582-0795f23ec976",
    width: 3,
    height: 4,
    alt: "Product showcase"
  },
  {
    src: "https://images.unsplash.com/photo-1567365607350-aa8ebcd4e0da",
    width: 4,
    height: 3,
    alt: "Custom merchandise"
  },
  {
    src: "https://images.unsplash.com/photo-1527381372708-cb6295e4ccda",
    width: 4,
    height: 3,
    alt: "Print samples"
  }
];

const designPhotos = [
  {
    src: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4",
    width: 4,
    height: 3,
    alt: "Design example 1"
  },
  {
    src: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef",
    width: 4,
    height: 3,
    alt: "Design example 2"
  },
  {
    src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    width: 4,
    height: 3,
    alt: "Design example 3"
  },
  {
    src: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a",
    width: 4,
    height: 3,
    alt: "Design example 4"
  }
];

export function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Product Showcase</h3>
          <PhotoGallery photos={productPhotos} />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Previous Designs</h3>
          <PhotoGallery photos={designPhotos} />
        </div>
      </div>
    </section>
  );
}
