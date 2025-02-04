import Image from "next/image";

export default function AddressMapInfo() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 md:px-8 py-8">
      <h1 className="text-xl md:text-2xl font-futura tracking-wide text-gray-800 mb-6">
        ADDRESS / MAP / INFO
      </h1>
      {/* Address Image at the Top */}
      <div className="w-full max-w-lg md:max-w-3xl">
        <Image
          src="/address-map-info-image.jpg"
          alt="Address Map Info"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Address Information */}
      <div className="w-full max-w-lg md:max-w-3xl text-gray-700 text-[14px] md:text-[16px] font-futura tracking-wide leading-relaxed mt-6 text-left md:text-center">
        <p className="text-lg font-semibold">〒150-0001</p>
        <p>東京都渋谷区神宮前3-27-14</p>
        <p>キャラット原宿101</p>

        {/* Embedded Google Map */}
        <div className="google-map-code w-full h-72 md:h-96 my-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2304034959584!2d139.70667971525262!3d35.67132838019654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d03cf22d88f%3A0xebee27411fb235b0!2sPocky%20SALON%20%26%20STORE!5e0!3m2!1sen!2sjp!4v1609301088764!5m2!1sen!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Business Hours */}
        <p className="text-lg font-semibold mt-4">OPEN 11:00～21:00</p>
        <p className="text-lg font-semibold text-red-500">CLOSE / Wednesday</p>

	<p className="text-lg font-semibold mt-4">〈 予約キャンセルについて 〉</p>
        <p>止むを得ない理由を除いて、当日キャンセルの場合、予約メニュー料金の70%、無断キャンセルの場合、予約メニュー料金の100%を頂きます。予めご了承下さい。</p>
	<p className="text-lg font-semibold mt-4">〈 商品の返品、交換、返金について 〉</p>
        <p>ヴィンテージ、古屋の商品については、原則として返品、交換、返金は承っておりません。コンディション、サイズ等をお確かめの上、ご購入して頂きます様お願い致します。</p>

      </div>
      
       

      {/* Footer */}
      <footer className="mt-6 mb-6 text-gray-600 text-sm">
        &copy; 2025 Pocky Salon & Store
      </footer>
    </div>
  );
}
