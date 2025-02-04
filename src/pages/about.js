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
          Pocky SALON & STOREは原宿にある美容室に古着屋が併設された今までに無い新しいスタイルのお店です。
        </p>
        <p>
          「外国人風スパイラルパーマ」が得意なオーナーが美容師として働く傍ら、自らアメリカに足を運びヴィンテージバイヤーとして縁のあるオレゴン州ポートランドで1点1点買い付けた古着が店頭に並んでいます。
        </p>
        <p>
          その他にも、ポートランドの友人のローカルスケートボードブランド
          「BACON SKATEBOARD」、「THE PORTLAND WHEEL COMPANY」や、
          スケート仲間であり現地でバンドをしている「ASH EATER」のTシャツ等を取り揃え、
          Pockyオリジナルのアパレル商品も販売しています。
        </p>
        <p className="text-lg font-semibold">"Good stuff from Portland"</p>
        <p>
          というコンセプトを掲げ、アメリカの中でもオレゴン州ポートランドという街に拘った買い付け、
          商品セレクト、店内の雰囲気作りを心掛けてます。
        </p>
        <p>
          サロンの利用は勿論、古着だけ見に来る事もできますのでお気軽にお立ち寄り下さい。
        </p>
      </div>

      <footer className="mt-6 mb-6 text-gray-600 text-sm">
        &copy; 2025 Pocky Salon & Store
      </footer>
    </div>
  );
}
