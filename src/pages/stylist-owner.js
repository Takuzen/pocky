import Image from "next/image";

export default function StylystOwner() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-futura tracking-wide text-gray-800 mb-6">
        Stylyst / Owner
      </h1>

      <div className="w-full max-w-3xl">
        <Image
          src="/stylyst-owner-image.jpg"
          alt="Stylyst Owner"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      <div className="flex flex-col items-center px-4 md:px-8 py-8">
        <h1 className="text-xl md:text-2xl font-futura tracking-wide text-gray-800 mb-6 text-center">
          山田 大夢 (Yamada Hiromu)
        </h1>

        <div className="w-full max-w-lg md:max-w-3xl space-y-4 text-gray-700 text-[14px] md:text-[16px] font-futura tracking-wide leading-relaxed mt-6 text-left md:text-center">
          <p>1987年6月6日生まれ 東京都江戸川区出身</p>
          <p>山野美容専門学校卒</p>
          <p>都内2店舗を経て、フリーランス美容師として活動後、2020年11月1日に独立。</p>
          <p><strong>趣味</strong> / 旅行、スケートボード、スキンダイビング</p>
          <p><strong>好きな離島</strong> / 宮古島、屋久島、座間味島</p>
          <p><strong>好きなスケートパーク</strong> / Burnside Skatepark</p>
        </div>
      </div> 

      <footer className="mt-6 mb-6 text-gray-600 text-sm">
        &copy; 2025 Pocky Salon & Store
      </footer>
    </div>
  );
}

