import { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { ProductDialog } from "./components/ProductDialog";
import productsJson from './components/art.json';
const products: Product[] = productsJson as Product[];

type ThemeCategory = "gothic" | "gothic horror" | "gothic romanticism" | "whimsygoth" | "creepy cottagecore" | "unseelie court";

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
  themes: ThemeCategory[];
}

<<<<<<< HEAD

=======
>>>>>>> 2e93c97b10e8a134682f7f35e511c7aa23a36f87
const themeCategories: { value: ThemeCategory | "all"; label: string }[] = [
  { value: "all", label: "All Aesthetics" },
  { value: "gothic", label: "Gothic" },
  { value: "gothic horror", label: "Gothic Horror" },
  { value: "gothic romanticism", label: "Gothic Romanticism" },
  { value: "whimsygoth", label: "Whimsygoth" },
  { value: "creepy cottagecore", label: "Creepy Cottagecore" },
  { value: "unseelie court", label: "Unseelie Court" }
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeCategory | "all">("all");

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const filteredProducts = selectedTheme === "all" 
    ? products 
    : products.filter(product => product.themes.includes(selectedTheme));

  const spiderwebBackground = `url("data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='glow'%3E%3CfeGaussianBlur stdDeviation='1.5' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3Cpattern id='spiderweb' x='0' y='0' width='600' height='600' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%23444444' stroke-width='0.6' fill='none' opacity='0.5' filter='url(%23glow)'%3E%3C!-- Radial threads from off-center point --%3E%3Cline x1='280' y1='220' x2='150' y2='10'/%3E%3Cline x1='280' y1='220' x2='420' y2='30'/%3E%3Cline x1='280' y1='220' x2='540' y2='140'/%3E%3Cline x1='280' y1='220' x2='580' y2='310'/%3E%3Cline x1='280' y1='220' x2='490' y2='470'/%3E%3Cline x1='280' y1='220' x2='340' y2='580'/%3E%3Cline x1='280' y1='220' x2='130' y2='560'/%3E%3Cline x1='280' y1='220' x2='20' y2='420'/%3E%3Cline x1='280' y1='220' x2='10' y2='250'/%3E%3Cline x1='280' y1='220' x2='60' y2='90'/%3E%3C!-- Irregular spiral web paths --%3E%3Cpath d='M 250 200 Q 240 180 230 165 Q 225 150 220 140 Q 210 125 198 115' stroke-linecap='round'/%3E%3Cpath d='M 305 210 Q 320 195 335 185 Q 350 175 365 168 Q 382 160 400 155' stroke-linecap='round'/%3E%3Cpath d='M 290 250 Q 305 270 318 288 Q 330 305 342 320 Q 355 338 370 352' stroke-linecap='round'/%3E%3Cpath d='M 255 235 Q 238 255 225 275 Q 212 295 202 315 Q 190 340 180 365' stroke-linecap='round'/%3E%3Cpath d='M 210 160 Q 190 145 175 135 Q 158 122 145 115 Q 128 105 115 100' stroke-linecap='round'/%3E%3Cpath d='M 350 175 Q 375 165 398 158 Q 420 150 440 145 Q 465 138 485 135' stroke-linecap='round'/%3E%3Cpath d='M 330 270 Q 350 295 368 318 Q 385 340 400 360 Q 418 385 435 405' stroke-linecap='round'/%3E%3Cpath d='M 225 255 Q 205 280 188 305 Q 172 328 158 350 Q 142 375 128 398' stroke-linecap='round'/%3E%3Cpath d='M 275 190 Q 265 175 258 162 Q 250 148 245 138' stroke-linecap='round'/%3E%3Cpath d='M 295 195 Q 310 185 322 178 Q 338 168 352 162' stroke-linecap='round'/%3E%3Cpath d='M 300 235 Q 315 252 328 268 Q 342 285 355 300' stroke-linecap='round'/%3E%3Cpath d='M 268 240 Q 252 258 240 275 Q 225 295 215 312' stroke-linecap='round'/%3E%3Cpath d='M 185 125 Q 165 110 150 102 Q 132 92 118 88' stroke-linecap='round'/%3E%3Cpath d='M 375 150 Q 400 142 422 138 Q 445 133 465 132' stroke-linecap='round'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='600' height='600' fill='url(%23spiderweb)'/%3E%3C/svg%3E")`;

  return (
    <div className="min-h-screen bg-black text-zinc-200" style={{ backgroundImage: spiderwebBackground }}>
<<<<<<< HEAD
   
      {/* Header */}
<header className="border-b border-zinc-800 bg-black/80 backdrop-blur-sm sticky top-0 z-10">
  <div className="container mx-auto px-6 py-6">
    <div className="flex items-center justify-between">
      
      {/* Left side: logo + tagline */}
      <div className="flex items-center gap-3">
        <div>
          <h1
            className="tracking-wider text-orange-200"
            style={{
              textShadow:
                '0 0 20px rgba(255, 165, 100, 0.5), 0 0 40px rgba(255, 140, 80, 0.3)',
            }}
          >
            SpookyArtSpa
          </h1>
          <p className="text-xs tracking-widest text-zinc-500 uppercase">
            Luxury for the Gothically Inclined
          </p>
        </div>
      </div>

      {/* Right side: My Collection button */}
      <button
  className="px-6 py-2.5 rounded-full border transition-all duration-300 bg-zinc-900/40 border-zinc-700/50 text-zinc-400 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-zinc-800/60"
>
  My Collection
</button>
    </div>
  </div>
</header>
=======
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="tracking-wider text-orange-200" style={{ textShadow: '0 0 20px rgba(255, 165, 100, 0.5), 0 0 40px rgba(255, 140, 80, 0.3)' }}>SpookyArtSpa</h1>
                <p className="text-xs tracking-widest text-zinc-500 uppercase">Luxury for the Gothically Inclined</p>
              </div>
            </div>
          </div>
        </div>
      </header>
>>>>>>> 2e93c97b10e8a134682f7f35e511c7aa23a36f87

      {/* Hero Section */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-transparent relative z-[1]">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-orange-200" style={{ textShadow: '0 0 20px rgba(255, 165, 100, 0.5), 0 0 40px rgba(255, 140, 80, 0.3)' }}>Curated Gothic Elegance</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Discover exquisite art and design pieces for your luxury retreat. Each item is carefully selected 
            to bring timeless beauty and dark sophistication to your sanctuary.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-zinc-800/50 relative z-[1]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {themeCategories.map((theme) => (
              <button
                key={theme.value}
                onClick={() => setSelectedTheme(theme.value)}
                className={`px-6 py-2.5 rounded-full border transition-all duration-300 ${
                  selectedTheme === theme.value
                    ? 'bg-indigo-900/40 border-indigo-400/60 text-indigo-200 shadow-lg shadow-indigo-900/50'
                    : 'bg-zinc-900/40 border-zinc-700/50 text-zinc-400 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-zinc-800/60'
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
<<<<<<< HEAD
<main className="container mx-auto px-6 py-12 relative z-[1]">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        title={product.title}
        category={product.category}
        price={product.price}
        image={product.image}
        onClick={() => handleProductClick(product)}
      />
    ))}
  </div>
</main>


      {/* Footer */}
<footer className="border-t border-zinc-800 bg-black/60 mt-16">
  <div className="container mx-auto px-6 py-8 flex justify-between items-start">
    {/* Left column */}
    <div>
      <p className="text-sm text-zinc-500 tracking-wider">SpookyArtSpa</p>
      <p>(585) 254-5110</p>
      <p>contact@spookyartspa.com</p>
    </div>

    {/* Right column */}
    <div className="text-right">
      <p className="text-sm text-zinc-500">© 2025 SpookyArtSpa. Where darkness meets design.</p>
    </div>
  </div>
</footer>
=======
      <main className="container mx-auto px-6 py-12 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black/60 mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-sm text-zinc-500 tracking-wider">
            © 2025 SpookyArtSpa. Where darkness meets design.
          </p>
        </div>
      </footer>
>>>>>>> 2e93c97b10e8a134682f7f35e511c7aa23a36f87

      {/* Product Dialog */}
      <ProductDialog
        product={selectedProduct}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
