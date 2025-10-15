import { useState } from "react";
import { ChevronDown, ChevronUp, Tag } from "lucide-react";

const SupplementsPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "fasted-cardio"
  );

  const scheduleData = [
    {
      id: "fasted-cardio",
      title: "空腹有氧前 30 分钟",
      titleEn: "Pre-Fasted Cardio",
      time: "早晨",
      products: [
        {
          emoji: "🔥",
          name: "Phoenix",
          nameZh: "燃脂胶囊",
          link: "https://legionathletics.com/products/supplements/phoenix-fat-burner/?el=bc_harleyl_3l488&r=3l488",
        },
        { emoji: "☕", name: "Black Coffee", nameZh: "黑咖啡", link: null },
        {
          emoji: "⚡",
          name: "Recharge",
          nameZh: "电解质粉 1袋",
          link: "https://legionathletics.com/products/supplements/recharge-post-workout/?el=bc_harleyl_3l488&r=3l488",
        },
      ],
    },
    {
      id: "morning",
      title: "早餐",
      titleEn: "Morning",
      time: "7-9 AM",
      products: [
        {
          emoji: "🐟",
          name: "Triton",
          nameZh: "鱼油",
          link: "https://legionathletics.com/products/supplements/triton-fish-oil/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "🥬",
          name: "Genesis",
          nameZh: "蔬菜粉",
          link: "https://legionathletics.com/products/supplements/genesis-superfood-supplement/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "🍊",
          name: "Vitamin C",
          nameZh: "维生素C",
          link: "https://legionathletics.com/products/supplements/liposomal-vitamin-c/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "💊",
          name: "Vitamin B Complex",
          nameZh: "维生素B组",
          link: "https://legionathletics.com/products/supplements/vitamin-b-complex/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "👩",
          name: "Triumph",
          nameZh: "女性综合维生素",
          link: "https://legionathletics.com/products/supplements/triumph-multivitamin-for-women/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "🦠",
          name: "Biome",
          nameZh: "益生菌",
          link: "https://legionathletics.com/products/supplements/biome-probiotic/?el=bc_harleyl_3l488&r=3l488",
        },
      ],
    },
    {
      id: "pre-workout",
      title: "练前",
      titleEn: "Pre-Workout",
      time: "训练前 30 分钟",
      products: [
        {
          emoji: "⚡",
          name: "Pulse",
          nameZh: "氮泵 (350mg咖啡因)",
          link: "https://legionathletics.com/products/supplements/pulse-pre-workout/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "💚",
          name: "Pulse Caffeine-Free",
          nameZh: "氮泵 (无咖啡因)",
          link: "https://legionathletics.com/products/supplements/pulse-stim-free/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "💧",
          name: "Electrolytes + Salt",
          nameZh: "电解质 1袋 + 1g海盐",
          link: "https://legionathletics.com/products/supplements/recharge-post-workout/?el=bc_harleyl_3l488&r=3l488",
        },
      ],
    },
    {
      id: "lunch",
      title: "午餐",
      titleEn: "Lunch",
      time: "12-2 PM",
      products: [
        {
          emoji: "🐟",
          name: "Triton",
          nameZh: "鱼油",
          link: "https://legionathletics.com/products/supplements/triton-fish-oil/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "🍊",
          name: "Vitamin C",
          nameZh: "维生素C",
          link: "https://legionathletics.com/products/supplements/liposomal-vitamin-c/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "💊",
          name: "Vitamin B Complex",
          nameZh: "维生素B组",
          link: "https://legionathletics.com/products/supplements/vitamin-b-complex/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "👩",
          name: "Triumph",
          nameZh: "女性综合维生素",
          link: "https://legionathletics.com/products/supplements/triumph-multivitamin-for-women/?el=bc_harleyl_3l488&r=3l488",
        },
      ],
    },
    {
      id: "bedtime",
      title: "睡前",
      titleEn: "Bedtime",
      time: "晚上",
      products: [
        {
          emoji: "🐟",
          name: "Triton",
          nameZh: "鱼油",
          link: "https://legionathletics.com/products/supplements/triton-fish-oil/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "🍊",
          name: "Vitamin C",
          nameZh: "维生素C",
          link: "https://legionathletics.com/products/supplements/liposomal-vitamin-c/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "💊",
          name: "Vitamin B Complex",
          nameZh: "维生素B组",
          link: "https://legionathletics.com/products/supplements/vitamin-b-complex/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "👩",
          name: "Triumph",
          nameZh: "女性综合维生素",
          link: "https://legionathletics.com/products/supplements/triumph-multivitamin-for-women/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "🦠",
          name: "Biome",
          nameZh: "益生菌",
          link: "https://legionathletics.com/products/supplements/biome-probiotic/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "✨",
          name: "Magnesium",
          nameZh: "镁片",
          link: "https://legionathletics.com/products/supplements/sucrosomial-magnesium/?el=bc_harleyl_3l488&r=3l488",
        },
      ],
    },
    {
      id: "snacks",
      title: "加餐选择",
      titleEn: "Snacks & Optional",
      time: "按需食用",
      products: [
        {
          emoji: "🥤",
          name: "Clear Whey",
          nameZh: "透明蛋白粉",
          link: "https://legionathletics.com/products/supplements/clear-whey-protein/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "🥣",
          name: "Protein Cereal",
          nameZh: "高蛋白麦片",
          link: "https://legionathletics.com/products/supplements/protein-cereal/?el=bc_harleyl_3l488&r=3l488",
        },
        {
          emoji: "🍫",
          name: "Protein Crispy Treats",
          nameZh: "蛋白脆米花",
          link: "https://legionathletics.com/products/supplements/protein-crispy-treats/?el=bc_harleyl_3l488&r=3l488",
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

      {/* 固定在底部的折扣码区域 */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4">
        <div className="max-w-md mx-auto bg-gradient-to-r from-stone-600 to-stone-700 rounded-2xl shadow-2xl px-4 py-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Tag className="w-3 h-3 text-white" />
                <span className="text-xs font-semibold text-white">折扣码</span>
              </div>
              <span className="text-base font-bold bg-amber-100 text-stone-800 px-3 py-1 rounded">
                Liu
              </span>
            </div>
            <a
              href="https://legionathletics.rfrl.co/77jmj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-100 hover:bg-amber-50 text-stone-800 font-semibold text-xs py-2 px-3 rounded-lg transition-colors"
            >
              <span>访问 Legion Athletics</span>
            </a>
          </div>
          <p className="text-xs text-stone-100 text-center">
            💕 使用折扣码享受额外优惠
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplementsPage;
