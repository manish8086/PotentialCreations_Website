import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(photo.src)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh]">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}