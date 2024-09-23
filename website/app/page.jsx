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
        {/* <div className=" bg-black px-6 pb-6 flex flex-col justify-center items-center">
          <h4 className='text-white text-center text-2xl font-semibold px-6 pt-6 pb-2'>Top Rated</h4>
          <div className='flex flex-wrap gap-2 justify-center items-center'>

            {cardData.map((data, i) => (
              <div className='py-2' key={i}>
                <MenuCard
                  imageUrl={data.imageUrl}
                  title={data.title}
                  description={data.description}
                  price={data.price}
                  likes={data.likes}
                />
              </div>
            ))}

          </div>
          <Link href={'/menu'} className='mt-4'>
            <button className="px-4  py-2 border  border-white rounded-full text-white hover:bg-gray-500 transition duration-300">
              Explore More Dishes
            </button>
          </Link>

        </div> */}
      </main>
    </div>
  );
}
