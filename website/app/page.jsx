"use client"
import Link from 'next/link';
import Home from './components/home'
import MenuCard from './components/menucard'
export default function main() {

  const cardData = [
    {
      imageUrl: 'https://res.cloudinary.com/dfodf3ofk/image/upload/v1718026144/menu/buger/chicken-bugger-with-cheese.jpg',
      title: 'Krunch Burger',
      description: 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame bun.',
      price: 290,
      likes: 120
    },
    {
      imageUrl: 'https://res.cloudinary.com/dfodf3ofk/image/upload/v1718026144/menu/buger/chicken-bugger-with-cheese.jpg',
      title: 'Krunch Burger',
      description: 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame bun.',
      price: 290,
      likes: 120
    },
    {
      imageUrl: 'https://res.cloudinary.com/dfodf3ofk/image/upload/v1718026144/menu/buger/chicken-bugger-with-cheese.jpg',
      title: 'Krunch Burger',
      description: 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame bun.',
      price: 290,
      likes: 120
    },
    {
      imageUrl: 'https://res.cloudinary.com/dfodf3ofk/image/upload/v1718026144/menu/buger/chicken-bugger-with-cheese.jpg',
      title: 'Krunch Burger',
      description: 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame bun.',
      price: 290,
      likes: 120
    }
  ];
  return (
    <div>
      {/* Include the Navbar component here */}
      <main className="flex flex-col relative">
        {/* Rest of your content */}
        <Home />

      </main>
    </div>
  );
}
