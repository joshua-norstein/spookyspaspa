import { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { ProductDialog } from "./components/ProductDialog";

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

const products: Product[] = [
  {
    id: 1,
    title: "Midnight Garden",
    category: "Botanical Art",
    price: "$425",
    image: "https://images.unsplash.com/photo-1598559213718-da4a925fbf71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoaWMlMjBkYXJrJTIwZmxvcmFsfGVufDF8fHx8MTc2MDk3MDMyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A hauntingly beautiful preserved floral arrangement featuring deep burgundy roses, black calla lilies, and dried thistle. Each piece tells a story of eternal beauty suspended in time.",
    details: [
      "Handcrafted by artisan florists",
      "Preserved flowers maintain their beauty indefinitely",
      "Includes Victorian-style glass dome",
      "Limited edition of 50 pieces"
    ],
    dimensions: "18\" H × 12\" W",
    materials: "Preserved flowers, glass, wood base",
    themes: ["gothic romanticism", "creepy cottagecore"]
  },
  {
    id: 2,
    title: "Nocturne Canvas",
    category: "Original Painting",
    price: "$1,850",
    image: "https://images.unsplash.com/photo-1551619276-f77b2c749711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBwYWludGluZ3xlbnwxfHx8fDE3NjA5NzAzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "An atmospheric abstract piece that captures the essence of twilight melancholy. Deep indigos blend with midnight blacks, punctuated by whispers of silver moonlight.",
    details: [
      "Original acrylic on canvas",
      "Signed and numbered by the artist",
      "Certificate of authenticity included",
      "Ready to hang with wire backing"
    ],
    dimensions: "36\" H × 48\" W",
    materials: "Acrylic paint, linen canvas",
    themes: ["gothic romanticism", "gothic"]
  },
  {
    id: 3,
    title: "Serpent's Mirror",
    category: "Decorative Object",
    price: "$680",
    image: "https://images.unsplash.com/photo-1758311791899-0048023a448a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZ290aGljJTIwbWlycm9yfGVufDF8fHx8MTc2MDk3MDMyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "An ornate Victorian-era mirror with an intricately carved frame featuring serpentine motifs and baroque flourishes. The aged patina adds character and mystery.",
    details: [
      "Authentic Victorian design",
      "Hand-carved ornamental frame",
      "Distressed finish for vintage appeal",
      "Beveled mirror glass"
    ],
    dimensions: "42\" H × 28\" W",
    materials: "Carved wood, aged bronze finish, mirror glass",
    themes: ["gothic", "unseelie court"]
  },
  {
    id: 4,
    title: "Eternal Contemplation",
    category: "Sculpture",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1759083937558-e81d4e949a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc2N1bHB0dXJlJTIwYXJ0fGVufDF8fHx8MTc2MDk3MDMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A striking modern sculpture that evokes the timeless nature of human introspection. The piece balances classical form with contemporary minimalism.",
    details: [
      "Cast in cold-cast bronze resin",
      "Museum-quality craftsmanship",
      "Numbered artist's edition",
      "Marble display base included"
    ],
    dimensions: "24\" H × 10\" W × 10\" D",
    materials: "Bronze resin, marble base",
    themes: ["gothic", "gothic romanticism"]
  },
  {
    id: 5,
    title: "Candlelight Covenant",
    category: "Lighting",
    price: "$895",
    image: "https://images.unsplash.com/photo-1684438894293-e7070d26a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoaWMlMjBjYW5kZWxhYnJhfGVufDF8fHx8MTc2MDk3MDMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "An imposing wrought iron candelabra that commands attention. Perfect for creating ambiance during intimate gatherings or solitary evenings of reflection.",
    details: [
      "Hand-forged iron construction",
      "Holds seven taper candles",
      "Distressed black finish",
      "Weighted base for stability"
    ],
    dimensions: "32\" H × 24\" W",
    materials: "Wrought iron, aged black patina",
    themes: ["gothic horror", "gothic"]
  },
  {
    id: 6,
    title: "Herbarium Memento",
    category: "Botanical Art",
    price: "$340",
    image: "https://images.unsplash.com/photo-1655153030651-aae28e3ad0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYm90YW5pY2FsJTIwYXJ0fGVufDF8fHx8MTc2MDk3MDMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A collection of pressed botanical specimens displayed in a shadow box frame. Each plant is carefully preserved and labeled in elegant calligraphy.",
    details: [
      "Authentic pressed botanicals",
      "Museum-quality display case",
      "UV-protective glass",
      "Hand-lettered specimen labels"
    ],
    dimensions: "20\" H × 16\" W × 2\" D",
    materials: "Pressed plants, archival paper, wood frame",
    themes: ["creepy cottagecore", "whimsygoth"]
  },
  {
    id: 7,
    title: "Velvet Throne Armchair",
    category: "Furniture",
    price: "$3,250",
    image: "https://images.unsplash.com/photo-1652856960546-4c1b26ad3488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWN0b3JpYW4lMjBkYXJrJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MDk3MDMzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "An opulent Victorian-inspired armchair upholstered in rich burgundy velvet. Carved wooden details and brass nailhead trim complete this statement piece.",
    details: [
      "Luxury velvet upholstery",
      "Hand-carved mahogany frame",
      "Brass decorative elements",
      "High-density foam cushioning"
    ],
    dimensions: "42\" H × 32\" W × 34\" D",
    materials: "Mahogany wood, velvet fabric, brass accents",
    themes: ["gothic romanticism", "whimsygoth"]
  },
  {
    id: 8,
    title: "Crystal Reverie Chandelier",
    category: "Lighting",
    price: "$4,800",
    image: "https://images.unsplash.com/photo-1719042948053-eafa289f90fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoaWMlMjBjaGFuZGVsaWVyfGVufDF8fHx8MTc2MDk3MDMzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A magnificent chandelier featuring hundreds of hand-cut crystals that catch and refract light into dancing shadows. The blackened metal frame adds gothic sophistication.",
    details: [
      "Hand-cut crystal prisms",
      "Aged black metal framework",
      "Eight candelabra-style lights",
      "Adjustable chain length",
      "Professional installation recommended"
    ],
    dimensions: "36\" H × 30\" Dia",
    materials: "Crystal, blackened metal, electrical components",
    themes: ["unseelie court", "gothic"]
  },
  {
    id: 9,
    title: "Portrait of Solitude",
    category: "Original Painting",
    price: "$1,650",
    image: "https://images.unsplash.com/photo-1568640398393-5714900f35b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdmludGFnZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDk3MDMzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A hauntingly beautiful portrait that captures the essence of romantic melancholy. Oil on canvas with masterful chiaroscuro technique reminiscent of the old masters.",
    details: [
      "Original oil painting",
      "Classical technique and style",
      "Ornate vintage-style frame included",
      "Certificate of authenticity"
    ],
    dimensions: "30\" H × 24\" W",
    materials: "Oil paint, canvas, gilded wood frame",
    themes: ["gothic horror", "gothic romanticism"]
  }
];

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


      {/* Product Dialog */}
      <ProductDialog
        product={selectedProduct}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
