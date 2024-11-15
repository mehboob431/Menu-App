"use client"
import Link from 'next/link';
import Menu from './menu/page'
export default function main() {

  return (
    <div>
      {/* Include the Navbar component here */}
      <main className="flex flex-col relative">
        {/* Rest of your content */}
        <Menu />

      </main>
    </div>
  );
}
