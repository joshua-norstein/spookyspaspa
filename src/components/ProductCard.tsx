import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

<<<<<<< HEAD

=======
>>>>>>> 2e93c97b10e8a134682f7f35e511c7aa23a36f87
interface ProductCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
  onClick: () => void;
}

<<<<<<< HEAD


export function ProductCard({ title, category, price, image, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  <div className="cursor-pointer" onClick={onClick}>
    <img src={image} alt={title} />
    <h2>{title}</h2>
   <p>{category}</p>
   <p>{price}</p>
  </div>
  
=======
export function ProductCard({ title, category, price, image, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

>>>>>>> 2e93c97b10e8a134682f7f35e511c7aa23a36f87
  return (
    <motion.div
      className="cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden bg-zinc-900 aspect-square border-l-4 border-t-2 border-r border-b-[3px] border-indigo-300/40">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs tracking-widest text-zinc-400 uppercase">Click for details</p>
        </motion.div>
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-xs tracking-widest text-zinc-500 uppercase">{category}</p>
        <h3 className="text-green-200" style={{ textShadow: '0 0 15px rgba(180, 255, 180, 0.4), 0 0 30px rgba(150, 255, 150, 0.2)' }}>{title}</h3>
        <p className="text-zinc-400">{price}</p>
      </div>
    </motion.div>
  );
<<<<<<< HEAD

  
=======
>>>>>>> 2e93c97b10e8a134682f7f35e511c7aa23a36f87
}
