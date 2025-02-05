import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 md:px-8 py-8">
      <h1 className="text-xl md:text-2xl font-futura tracking-wide text-gray-800 mb-4">
        CONTACT
      </h1>

      <div className="w-full max-w-lg text-gray-700 text-[16px] font-futura tracking-wide leading-relaxed text-center space-y-2">
        <p>MAIL : <a href="mailto:denimyarou@gmail.com" className="underline hover:text-blue-600">denimyarou@gmail.com</a></p>
        <p>TEL : <a href="tel:+81364474030" className="underline hover:text-blue-600">03-6447-4030</a></p>

	<div className="w-full md:w-[48%] lg:w-[45%] mx-auto pt-4">
          <Image
            src="/appointment-for-vintage-image.jpg" 
	    alt="Appointment for Vintage"
            width={600}
            height={200}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div> 
	
	<div className="pt-8 text-start">
        
	<p>古着を見る為のご予約も承っております。じっくりと店内や希望の商品をご覧になりたい方は、是非お気軽にご利用下さい。</p>
	<br />
        <p>ご予約、お問い合わせは上記メールアドレスかInstagramのDMからお待ちしてます。</p>
	</div>

      </div>

      <footer className="mt-6 mb-6 text-gray-600 text-sm">
        &copy; 2025 Pocky Salon & Store
      </footer>
    </div>
  );
}
