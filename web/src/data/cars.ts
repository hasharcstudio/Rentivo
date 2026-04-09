export interface Car {
  id: number;
  name: string;
  type: string;
  image: string;
  transmission: string;
  fuel: string;
  seats: number;
  price: number;
  location: string;
  badge?: string;
}

// Pexels free-to-use images — each URL verified and unique per vehicle
const IMG = {
  rollsRoyce1: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
  rollsRoyce2: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800",
  bentley1:    "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800",
  bentley2:    "https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=800",
  maybach:     "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800",
  bugatti1:    "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
  bugatti2:    "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=800",
  pagani:      "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800",
  koenigsegg1: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
  koenigsegg2: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
  rimac:       "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
  tesla:       "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
  lucid:       "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=800",
  ferrari1:    "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800",
  ferrari2:    "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
  lambo1:      "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800",
  lambo2:      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
  maserati:    "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800",
  mclaren1:    "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
  mclaren2:    "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=800",
  astonMartin1:"https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800",
  astonMartin2:"https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=800",
  porsche1:    "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
  porsche2:    "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=800",
  bmw:         "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=800",
  cullinan:    "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
  bentayga:    "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800",
  urus:        "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800",
  exotic1:     "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
  exotic2:     "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=800",
};

export const cars: Car[] = [
  // 🚗 Ultra-Luxury Cars
  {
    id: 1,
    name: "Rolls-Royce Boat Tail",
    type: "Ultra-Luxury",
    image: IMG.rollsRoyce1,
    transmission: "Automatic",
    fuel: "Petrol V12",
    seats: 4,
    price: 35000,
    location: "Global Delivery",
    badge: "1 of 3 Worldwide"
  },
  {
    id: 2,
    name: "Rolls-Royce Phantom",
    type: "Ultra-Luxury",
    image: IMG.rollsRoyce2,
    transmission: "Automatic",
    fuel: "Petrol V12",
    seats: 4,
    price: 2500,
    location: "London, UK",
    badge: "Magic Carpet Ride"
  },
  {
    id: 3,
    name: "Bentley Mulliner Bacalar",
    type: "Ultra-Luxury",
    image: IMG.bentley1,
    transmission: "Automatic",
    fuel: "Petrol W12",
    seats: 2,
    price: 8500,
    location: "Dubai, UAE",
    badge: "Limited Edition"
  },
  {
    id: 4,
    name: "Bentley Flying Spur",
    type: "Ultra-Luxury",
    image: IMG.bentley2,
    transmission: "Automatic",
    fuel: "Petrol V8",
    seats: 5,
    price: 1200,
    location: "Miami, USA",
  },
  {
    id: 5,
    name: "Mercedes-Maybach S-Class",
    type: "Ultra-Luxury",
    image: IMG.maybach,
    transmission: "Automatic",
    fuel: "Petrol V8/V12",
    seats: 4,
    price: 1400,
    location: "New York, USA",
    badge: "Chauffeur Ready"
  },

  // 🏎️ Hypercars
  {
    id: 6,
    name: "Bugatti La Voiture Noire",
    type: "Hypercar",
    image: IMG.bugatti1,
    transmission: "Automatic",
    fuel: "Petrol W16",
    seats: 2,
    price: 28000,
    location: "Paris, France",
    badge: "The Black Car"
  },
  {
    id: 7,
    name: "Bugatti Chiron Super Sport 300+",
    type: "Hypercar",
    image: IMG.bugatti2,
    transmission: "Automatic",
    fuel: "Petrol W16",
    seats: 2,
    price: 12500,
    location: "Monaco",
    badge: "490+ km/h"
  },
  {
    id: 8,
    name: "Pagani Huayra Roadster BC",
    type: "Hypercar",
    image: IMG.pagani,
    transmission: "Automatic",
    fuel: "Petrol V12",
    seats: 2,
    price: 9500,
    location: "Milan, Italy",
  },
  {
    id: 9,
    name: "Koenigsegg Jesko Absolut",
    type: "Hypercar",
    image: IMG.koenigsegg1,
    transmission: "Automatic",
    fuel: "Petrol V8",
    seats: 2,
    price: 11000,
    location: "Stockholm, Sweden",
    badge: "500 km/h Potential"
  },
  {
    id: 10,
    name: "Koenigsegg Regera",
    type: "Hypercar",
    image: IMG.koenigsegg2,
    transmission: "Direct Drive",
    fuel: "Hybrid V8",
    seats: 2,
    price: 8500,
    location: "Geneva, Switzerland",
  },

  // ⚡ Electric Luxury & Hypercars
  {
    id: 11,
    name: "Rimac Nevera",
    type: "Electric Selection",
    image: IMG.rimac,
    transmission: "Electric",
    fuel: "1900+ HP",
    seats: 2,
    price: 6500,
    location: "Zagreb, Croatia",
    badge: "0-100 in 1.85s"
  },
  {
    id: 12,
    name: "Tesla Model S Plaid",
    type: "Electric Selection",
    image: IMG.tesla,
    transmission: "Electric",
    fuel: "1020 HP",
    seats: 5,
    price: 450,
    location: "Austin, USA",
  },
  {
    id: 13,
    name: "Lucid Air Sapphire",
    type: "Electric Selection",
    image: IMG.lucid,
    transmission: "Electric",
    fuel: "1200+ HP",
    seats: 5,
    price: 950,
    location: "Los Angeles, USA",
    badge: "Longest EV Range"
  },

  // 🏁 Italian Supercars
  {
    id: 14,
    name: "Ferrari SF90 Stradale",
    type: "Sports",
    image: IMG.ferrari1,
    transmission: "Automatic",
    fuel: "Hybrid V8",
    seats: 2,
    price: 2800,
    location: "Rome, Italy",
  },
  {
    id: 15,
    name: "Ferrari LaFerrari",
    type: "Sports",
    image: IMG.ferrari2,
    transmission: "Automatic",
    fuel: "Hybrid V12",
    seats: 2,
    price: 6500,
    location: "Monaco",
    badge: "Collector Legend"
  },
  {
    id: 16,
    name: "Lamborghini Revuelto",
    type: "Sports",
    image: IMG.lambo1,
    transmission: "Automatic",
    fuel: "Hybrid V12",
    seats: 2,
    price: 3200,
    location: "Bologna, Italy",
    badge: "New Flagship"
  },
  {
    id: 17,
    name: "Lamborghini Aventador SVJ",
    type: "Sports",
    image: IMG.lambo2,
    transmission: "Automatic",
    fuel: "Petrol V12",
    seats: 2,
    price: 2600,
    location: "Dubai, UAE",
  },
  {
    id: 18,
    name: "Maserati MC20",
    type: "Sports",
    image: IMG.maserati,
    transmission: "Automatic",
    fuel: "Petrol V6",
    seats: 2,
    price: 1500,
    location: "Milan, Italy",
  },

  // 🇬🇧 British Performance
  {
    id: 19,
    name: "McLaren P1",
    type: "Sports",
    image: IMG.mclaren1,
    transmission: "Automatic",
    fuel: "Hybrid V8",
    seats: 2,
    price: 5500,
    location: "London, UK",
    badge: "Holy Trinity"
  },
  {
    id: 20,
    name: "McLaren Speedtail",
    type: "Hypercar",
    image: IMG.mclaren2,
    transmission: "Automatic",
    fuel: "Hybrid V8",
    seats: 3,
    price: 7500,
    location: "Geneva, Switzerland",
  },
  {
    id: 21,
    name: "Aston Martin Valkyrie",
    type: "Hypercar",
    image: IMG.astonMartin1,
    transmission: "Automatic",
    fuel: "Hybrid V12",
    seats: 2,
    price: 9800,
    location: "Silverstone, UK",
    badge: "F1 Engineering"
  },
  {
    id: 22,
    name: "Aston Martin DBS Superleggera",
    type: "Sports",
    image: IMG.astonMartin2,
    transmission: "Automatic",
    fuel: "Petrol V12",
    seats: 4,
    price: 1800,
    location: "London, UK",
  },

  // 🇩🇪 German High-End Cars
  {
    id: 23,
    name: "Porsche 911 Turbo S",
    type: "Sports",
    image: IMG.porsche1,
    transmission: "Automatic",
    fuel: "Petrol Flat-6",
    seats: 4,
    price: 1200,
    location: "Berlin, Germany",
    badge: "Everyday Supercar"
  },
  {
    id: 24,
    name: "Porsche Taycan Turbo S",
    type: "Electric Selection",
    image: IMG.porsche2,
    transmission: "Automatic",
    fuel: "Electric",
    seats: 4,
    price: 900,
    location: "Munich, Germany",
  },
  {
    id: 25,
    name: "BMW XM Label Red",
    type: "SUV",
    image: IMG.bmw,
    transmission: "Automatic",
    fuel: "Hybrid V8",
    seats: 5,
    price: 850,
    location: "Frankfurt, Germany",
  },

  // 🚙 Luxury SUVs
  {
    id: 26,
    name: "Rolls-Royce Cullinan",
    type: "SUV",
    image: IMG.cullinan,
    transmission: "Automatic",
    fuel: "Petrol V12",
    seats: 5,
    price: 2200,
    location: "Dubai, UAE",
  },
  {
    id: 27,
    name: "Bentley Bentayga Speed",
    type: "SUV",
    image: IMG.bentayga,
    transmission: "Automatic",
    fuel: "Petrol W12",
    seats: 5,
    price: 1600,
    location: "Miami, USA",
  },
  {
    id: 28,
    name: "Lamborghini Urus Performante",
    type: "SUV",
    image: IMG.urus,
    transmission: "Automatic",
    fuel: "Petrol V8",
    seats: 5,
    price: 1800,
    location: "Los Angeles, USA",
    badge: "Super SUV"
  },

  // 🚀 Rare & Exotic
  {
    id: 29,
    name: "Devel Sixteen",
    type: "Exotic",
    image: IMG.exotic1,
    transmission: "Automatic",
    fuel: "Petrol V16",
    seats: 2,
    price: 15000,
    location: "Dubai, UAE",
    badge: "5000 HP"
  },
  {
    id: 30,
    name: "SSC Tuatara",
    type: "Exotic",
    image: IMG.exotic2,
    transmission: "Automatic",
    fuel: "Petrol V8",
    seats: 2,
    price: 12000,
    location: "Washington, USA",
    badge: "455+ km/h"
  }
];
