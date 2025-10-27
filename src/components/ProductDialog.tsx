import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from "./ui/separator";

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  description: string;
  details: string[];
  dimensions: string;
  materials: string;
}

interface ProductDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDialog({ product, open, onOpenChange }: ProductDialogProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-zinc-950 border-zinc-800 text-zinc-200 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-zinc-100">{product.title}</DialogTitle>
          <DialogDescription className="text-zinc-500 tracking-widest uppercase text-xs">
            {product.category}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="aspect-square bg-zinc-900 border border-zinc-800 overflow-hidden">
            <ImageWithFallback
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-3xl text-zinc-100">{product.price}</p>
            </div>
            
            <Separator className="bg-zinc-800" />
            
            <div>
              <h4 className="text-sm tracking-widest text-zinc-400 uppercase mb-2">Description</h4>
              <p className="text-zinc-300 leading-relaxed">{product.description}</p>
            </div>
            
            <div>
              <h4 className="text-sm tracking-widest text-zinc-400 uppercase mb-2">Details</h4>
              <ul className="space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-zinc-300 text-sm flex items-start">
                    <span className="text-zinc-600 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm tracking-widest text-zinc-400 uppercase mb-1">Dimensions</h4>
                <p className="text-zinc-300 text-sm">{product.dimensions}</p>
              </div>
              <div>
                <h4 className="text-sm tracking-widest text-zinc-400 uppercase mb-1">Materials</h4>
                <p className="text-zinc-300 text-sm">{product.materials}</p>
              </div>
            </div>
            
            <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-3 px-6 border border-zinc-700 transition-colors duration-300 mt-4">
              Add to Collection
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 2e93c97b10e8a134682f7f35e511c7aa23a36f87
