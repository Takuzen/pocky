import Image from "next/image";
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <FadeIn>
    <div className="min-h-screen bg-beige flex flex-col items-center px-4">

      <div className="w-full flex justify-center py-6">
        <Image
          src="/welcome-logo.jpg"
          alt="Welcome Logo"
          width={200}
          height={100}
          className="w-auto object-cover"
        />
      </div>

      <nav className="w-full flex flex-wrap justify-center gap-x-6 text-gray-700 text-[16px] font-futura tracking-wide">  
	<a href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop" className="hover:underline">RESERVATION</a>
        <a href="/price" className="hover:underline">PRICE</a>
        <a href="/about" className="hover:underline">ABOUT</a>
        <a href="https://pocky2020.base.ec/" className="hover:underline">ONLINE STORE</a>
        <a href="/stylist-owner" className="hover:underline">STYLISTS / OWNER</a>
        <a href="/address-map-info" className="hover:underline">ADDRESS / MAP / INFO</a>
        <a href="/store-photo" className="hover:underline">STORE PHOTO</a>
        <a href="https://www.instagram.com/denimyarou/" className="hover:underline">INSTAGRAM</a>
        <a href="/contact" className="hover:underline">CONTACT</a>
      </nav>

      <div className="relative w-full max-w-2xl mt-8">
        <Image
          src="/welcome-image.jpg"
          alt="Welcome Image"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <footer className="mt-6 mb-6 text-gray-600 text-sm">
        &copy; 2025 Pocky Salon & Store
      </footer>
    </div>
    </FadeIn>
  );
}
