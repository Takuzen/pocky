import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-futura tracking-wide text-gray-800 mb-6">
        ABOUT
      </h1>

      <div className="w-full max-w-3xl">
        <Image
          src="/about-image.jpg"
          alt="About"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      <div className="w-full max-w-3xl space-y-6 text-gray-700 text-[16px] font-futura tracking-wide leading-relaxed mt-6">
        <p>
          Pocky SALON & STORE は、原宿にある“Private Salon × Vintage Store”
          <br />
          オーナー1人で美容室と古着屋を営む、今までに無い新しいスタイルのお店です。
        </p>
        <p>
          「スパイラルパーマ」が得意なオーナーが美容師として働く傍ら年に数回、自らアメリカに足を運びヴィンテージバイヤーとして縁のあるオレゴン州ポートランドで1点1点厳選して買い付けた古着が店頭に並んでいます。
        </p>
        <p>
          卸業者やフリマ等の日本国内仕入れは一切行っておらず、純度100%のアメリカ買い付けヴィンテージをお客様に提供しています。
        </p>
        <p className="text-lg font-semibold">"Good stuff from Portland"</p>
        <p>
          というコンセプトを掲げ、アメリカの中でもオレゴン州ポートランドという街に拘った買い付け、商品セレクト、店内の雰囲気作りを心掛けてます。
        </p>
        <p>
          その他にも、ポートランドの友人のローカルスケートボードブランド「BACON SKATEBOARDS」や、Pockyオリジナルのアパレル商品も販売しています。
        </p>
        <p>
          サロンの利用は勿論、古着だけ見に来る事もできますので実店舗にもお気軽にお立ち寄り下さい。
        </p>
      </div>

      <footer className="mt-6 mb-6 text-gray-600 text-sm">
        &copy; 2025 Pocky Salon & Store
      </footer>
    </div>
  );
}
