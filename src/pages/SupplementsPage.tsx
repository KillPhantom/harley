import { useState } from "react";
import { ChevronDown, ChevronUp, Tag } from "lucide-react";

const SupplementsPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "morning-cardio"
  );

  const scheduleData = [
    {
      id: "morning-cardio",
      title: "早上 - 有氧前",
      titleEn: "Morning - Pre Cardio",
      time: "早晨",
      products: [
        {
          emoji: "💧",
          name: "H2O Burn Drink Mix",
          nameZh: "燃脂饮料",
          link: "https://www.prozis.com/us/us/prozis/h2o-burn-drink-mix-8-sticks?ot=AFFNA3821",
        },
        {
          emoji: "⚡",
          name: "Electrolytes",
          nameZh: "电解质",
          link: "https://www.prozis.com/us/us/prozis/energy-isocarb-isotonic-drink-40-servings?ot=AFFNA3821",
        },
        {
          emoji: "🐟",
          name: "Omega 3",
          nameZh: "鱼油 90粒",
          link: "https://www.prozis.com/us/us/prozis/krill-omega-3-90-softgel-capsules?ot=AFFNA3821",
        },
        {
          emoji: "💊",
          name: "Acetyl L-Carnitine",
          nameZh: "谷氨酰胺",
          link: "https://www.prozis.com/us/us/prozis/acetyl-l-carnitine-90-capsules?ot=AFFNA3821",
        },
        {
          emoji: "🍵",
          name: "Green Tea EGCG 600mg",
          nameZh: "绿茶精华 100粒",
          link: "https://www.prozis.com/us/us/prozis/green-tea-egcg-600mg-100-capsules?ot=AFFNA3821",
        },
        {
          emoji: "🌿",
          name: "Ashwagandha 450mg",
          nameZh: "南非醉茄 90粒",
          link: "https://www.prozis.com/us/us/prozis/ashwagandha-extract-450-mg-90-veg-capsules?ot=AFFNA3821",
        },
        {
          emoji: "🍊",
          name: "Vitamin C 1000mg",
          nameZh: "维生素C 120粒",
          link: "https://www.prozis.com/us/us/prozis/chewable-vitamin-c-500-mg-90-chewable-tablets?ot=AFFNA3821",
        },
      ],
    },
    {
      id: "noon",
      title: "中午",
      titleEn: "Noon",
      time: "午餐时",
      products: [
        {
          emoji: "💊",
          name: "Essential Multivitamin",
          nameZh: "综合维生素 90粒",
          link: "https://www.prozis.com/us/us/prozis/essential-multivitamin-90-capsules?ot=AFFNA3821",
        },
        {
          emoji: "🐟",
          name: "Omega 3",
          nameZh: "鱼油 90粒",
          link: "https://www.prozis.com/us/us/prozis/krill-omega-3-90-softgel-capsules?ot=AFFNA3821",
        },
        {
          emoji: "🌀",
          name: "Spirulina 3000mg",
          nameZh: "螺旋藻 90粒",
          link: "https://www.prozis.com/us/us/prozis/spirulina-3000-mg-360-tablets?ot=AFFNA3821",
        },
        {
          emoji: "💊",
          name: "Vitamin B12 100mcg",
          nameZh: "维生素B12 60粒",
          link: "https://www.prozis.com/us/us/prozis/vitamin-b12-100-mcg-120-tablets?ot=AFFNA3821",
        },
        {
          emoji: "🍊",
          name: "Vitamin C 1000mg",
          nameZh: "维生素C 120粒",
          link: "https://www.prozis.com/us/us/prozis/chewable-vitamin-c-500-mg-90-chewable-tablets?ot=AFFNA3821",
        },
      ],
    },
    {
      id: "pre-workout",
      title: "练前",
      titleEn: "Pre-Workout",
      time: "训练前30分钟",
      products: [
        {
          emoji: "⚡",
          name: "Energy Charge",
          nameZh: "氮泵 16份",
          link: "https://www.prozis.com/us/us/prozis/energy-charge-endurance-pre-workout-16-servings-?ot=AFFNA3821",
        },
        {
          emoji: "💪",
          name: "Creatine",
          nameZh: "肌酸 200粒",
          link: "https://www.prozis.com/us/us/prozis/creatine-creapure-100-capsules?ot=AFFNA3821",
        },
      ],
    },
    {
      id: "during-workout",
      title: "训练时",
      titleEn: "During Workout",
      time: "训练中",
      products: [
        {
          emoji: "💧",
          name: "Electrolytes",
          nameZh: "电解质",
          link: "https://www.prozis.com/us/us/prozis/energy-isocarb-isotonic-drink-40-servings?ot=AFFNA3821",
        },
        {
          emoji: "💊",
          name: "BCAA 8:1:1",
          nameZh: "支链氨基酸",
          link: "https://www.prozis.com/us/us/prozis/bcaa-811-10.6-oz?ot=AFFNA3821",
        },
        {
          emoji: "💊",
          name: "EAA",
          nameZh: "必需氨基酸",
          link: "https://www.prozis.com/us/us/prozis/eaa-90-tablets?ot=AFFNA3821",
        },
        {
          emoji: "💪",
          name: "L-Glutamine",
          nameZh: "谷氨酰胺",
          link: "https://www.prozis.com/us/us/prozis/l-glutamine-kyowa-quality-10.6-oz?ot=AFFNA3821",
        },
      ],
    },
    {
      id: "evening",
      title: "晚上",
      titleEn: "Evening",
      time: "睡前",
      products: [
        {
          emoji: "✨",
          name: "Selenium",
          nameZh: "硒 90粒",
          link: "https://www.prozis.com/us/us/prozis/selenium-hair-skin-and-nails-90-vegetarian-capsules?ot=AFFNA3821",
        },
        {
          emoji: "🔴",
          name: "Iron 20mg",
          nameZh: "铁 60粒",
          link: "https://www.prozis.com/us/us/prozis/iron-20-mg-60-capsules?ot=AFFNA3821",
        },
        {
          emoji: "💎",
          name: "Collagen + Magnesium",
          nameZh: "胶原蛋白+镁",
          link: "https://www.prozis.com/us/us/prozis/collagen-magnesium-180-tablets?ot=AFFNA3821",
        },
        {
          emoji: "🍊",
          name: "Vitamin C",
          nameZh: "维生素C",
          link: "https://www.prozis.com/us/us/prozis/chewable-vitamin-c-500-mg-90-chewable-tablets?ot=AFFNA3821",
        },
      ],
    },
    {
      id: "accessories",
      title: "其他产品",
      titleEn: "Accessories",
      time: "按需使用",
      products: [
        {
          emoji: "🧤",
          name: "Hooks",
          nameZh: "硬拉手套",
          link: "https://www.prozis.com/us/us/prozis/weightlifting-hooks-black-/-gray?ot=AFFNA3821",
        },
        {
          emoji: "🥤",
          name: "Whey",
          nameZh: "蛋白粉",
          link: "https://www.prozis.com/us/us/prozis/zero-diet-whey-1.7-lb?ot=AFFNA3821",
        },
        {
          emoji: "🍶",
          name: "Shaker",
          nameZh: "摇摇杯",
          link: "https://www.prozis.com/us/us/prozis/fusion-shaker-bottle-all-pink?ot=AFFNA3821",
        },
        {
          emoji: "📦",
          name: "Box",
          nameZh: "收纳盒",
          link: "https://www.prozis.com/us/us/prozis/-stackable-box-3x170ml-dusty-blue?ot=AFFNA3821",
        },
        {
          emoji: "💊",
          name: "Pillbox",
          nameZh: "药盒",
          link: "https://www.prozis.com/us/us/prozis/-pillbox-mineral-gray?ot=AFFNA3821",
        },
      ],
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div
      className="min-h-screen bg-amber-50"
      style={{
        paddingTop: "80px",
        paddingBottom: "200px",
        fontFamily: "'Lora', serif",
      }}
    >
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-center text-lg font-bold text-amber-900 mb-4">
          💊 每日补剂时间表 💪
        </h1>
        {scheduleData.map((section) => (
          <div
            key={section.id}
            className="border-b border-amber-200 bg-white rounded-lg mb-2 overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-3 py-3 flex items-center justify-between hover:bg-amber-50 transition-colors"
            >
              <div className="text-left">
                <div className="font-semibold text-sm text-amber-900">
                  {section.title}
                </div>
                <div className="text-xs text-amber-700">{section.titleEn}</div>
                <div className="text-xs text-amber-600 mt-0.5">
                  {section.time}
                </div>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="w-4 h-4 text-amber-700" />
              ) : (
                <ChevronDown className="w-4 h-4 text-amber-700" />
              )}
            </button>

            {expandedSection === section.id && (
              <div className="bg-amber-50 p-3 border-t border-amber-200">
                <div className="grid grid-cols-2 gap-2">
                  {section.products.map((product, idx) =>
                    product.link ? (
                      <a
                        key={idx}
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-3 border-2 border-amber-200 rounded-lg hover:border-amber-400 hover:shadow-md transition-all bg-white"
                      >
                        <div className="text-3xl mb-1">{product.emoji}</div>
                        <div className="font-semibold text-xs text-amber-900 text-center">
                          {product.name}
                        </div>
                        <div className="text-xs text-amber-700 text-center mt-0.5">
                          {product.nameZh}
                        </div>
                      </a>
                    ) : (
                      <div
                        key={idx}
                        className="flex flex-col items-center p-3 border-2 border-amber-200 rounded-lg bg-white"
                      >
                        <div className="text-3xl mb-1">{product.emoji}</div>
                        <div className="font-semibold text-xs text-amber-900 text-center">
                          {product.name}
                        </div>
                        <div className="text-xs text-amber-700 text-center mt-0.5">
                          {product.nameZh}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 提示信息区域 */}
      <div className="max-w-md mx-auto px-4 py-6 text-center">
        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-lg px-5 py-5">
          <p className="mb-3 text-base font-semibold text-amber-900">
            💡 点击任意产品跳转到 Prozis 商城
          </p>
          <div className="bg-amber-400 px-5 py-3 rounded-lg inline-block border-2 border-amber-500 shadow-md">
            <p className="font-bold text-amber-900 text-sm mb-1">
              🎁 记得使用折扣码
            </p>
            <p className="text-3xl font-black text-amber-900 tracking-wider">
              HARLEY10
            </p>
          </div>
        </div>
      </div>

      {/* 固定在底部的折扣码区域 */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4">
        <div className="max-w-md mx-auto bg-gradient-to-r from-stone-600 to-stone-700 rounded-2xl shadow-2xl px-4 py-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Tag className="w-3 h-3 text-white" />
                <span className="text-xs font-semibold text-white">
                  专属折扣码
                </span>
              </div>
              <span className="text-base font-bold bg-amber-100 text-stone-800 px-3 py-1 rounded">
                HARLEY10
              </span>
            </div>
            <a
              href="https://www.prozis.com/1FRcc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-100 hover:bg-amber-50 text-stone-800 font-semibold text-xs py-2 px-3 rounded-lg transition-colors"
            >
              <span>访问 Prozis 商城</span>
            </a>
          </div>
          <p className="text-xs text-stone-100 text-center">
            💕 购买时输入折扣码享受 10% OFF
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplementsPage;
