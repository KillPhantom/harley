import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';

const SupplementSchedule = () => {
  const [expandedSection, setExpandedSection] = useState('morning-cardio');
  
  const scheduleData = [
    {
      id: 'morning-cardio',
      title: '早上 - 有氧前',
      titleEn: 'Morning - Pre Cardio',
      time: '早晨',
      products: [
        { emoji: '💧', name: 'H2O Burn Drink Mix', nameZh: '燃脂饮料', link: 'https://www.prozis.com/us/us/prozis/h2o-burn-drink-mix-8-sticks' },
        { emoji: '⚡', name: 'Electrolytes', nameZh: '电解质', link: 'https://www.prozis.com/us/us/prozis/energy-isocarb-isotonic-drink-40-servings-3-lb-8.4-oz' },
        { emoji: '🐟', name: 'Omega 3', nameZh: '鱼油 90粒', link: 'https://www.prozis.com/us/us/prozis/krill-omega-3-90-softgel-capsules' },
        { emoji: '💊', name: 'Acetyl L-Carnitine', nameZh: '谷氨酰胺', link: 'https://www.prozis.com/us/us/prozis/acetyl-l-carnitine-90-capsules' },
        { emoji: '🍵', name: 'Green Tea EGCG 600mg', nameZh: '绿茶精华 100粒', link: 'https://www.prozis.com/us/us/prozis/green-tea-egcg-600mg-100-capsules' },
        { emoji: '🌿', name: 'Ashwagandha 450mg', nameZh: '南非醉茄 90粒', link: 'https://www.prozis.com/us/us/prozis/ashwagandha-extract-450-mg-90-veg-capsules' },
        { emoji: '🍊', name: 'Vitamin C 1000mg', nameZh: '维生素C 120粒', link: 'https://www.prozis.com/us/us/prozis/chewable-vitamin-c-500-mg-90-chewable-tablets' }
      ]
    },
    {
      id: 'noon',
      title: '中午',
      titleEn: 'Noon',
      time: '午餐时',
      products: [
        { emoji: '💊', name: 'Essential Multivitamin', nameZh: '综合维生素 90粒', link: 'https://www.prozis.com/us/us/prozis/essential-multivitamin-90-capsules' },
        { emoji: '🐟', name: 'Omega 3', nameZh: '鱼油 90粒', link: 'https://www.prozis.com/us/us/prozis/krill-omega-3-90-softgel-capsules' },
        { emoji: '🌀', name: 'Spirulina 3000mg', nameZh: '螺旋藻 90粒', link: 'https://www.prozis.com/us/us/prozis/spirulina-3000-mg-360-tablets' },
        { emoji: '💊', name: 'Vitamin B12 100mcg', nameZh: '维生素B12 60粒', link: 'https://www.prozis.com/us/us/prozis/vitamin-b12-100-mcg-120-tablets' },
        { emoji: '🍊', name: 'Vitamin C 1000mg', nameZh: '维生素C 120粒', link: 'https://www.prozis.com/us/us/prozis/chewable-vitamin-c-500-mg-90-chewable-tablets' }
      ]
    },
    {
      id: 'pre-workout',
      title: '练前',
      titleEn: 'Pre-Workout',
      time: '训练前30分钟',
      products: [
        { emoji: '⚡', name: 'Energy Charge', nameZh: '氮泵 16份', link: 'https://www.prozis.com/us/us/prozis/energy-charge-endurance-pre-workout-16-servings-' },
        { emoji: '💪', name: 'Creatine', nameZh: '肌酸 200粒', link: 'https://www.prozis.com/us/us/prozis/creatine-creapure-100-capsules' }
      ]
    },
    {
      id: 'during-workout',
      title: '训练时',
      titleEn: 'During Workout',
      time: '训练中',
      products: [
        { emoji: '💧', name: 'Electrolytes', nameZh: '电解质', link: 'https://www.prozis.com/us/us/prozis/energy-isocarb-isotonic-drink-40-servings-3-lb-8.4-oz' },
        { emoji: '💊', name: 'BCAA 8:1:1', nameZh: '支链氨基酸', link: 'https://www.prozis.com/us/us/prozis/bcaa-811-10.6-oz' },
        { emoji: '💊', name: 'EAA', nameZh: '必需氨基酸', link: 'https://www.prozis.com/us/us/prozis/eaa-90-tablets' },
        { emoji: '💪', name: 'L-Glutamine', nameZh: '谷氨酰胺', link: 'https://www.prozis.com/us/us/prozis/l-glutamine-kyowa-quality-10.6-oz' }
      ]
    },
    {
      id: 'evening',
      title: '晚上',
      titleEn: 'Evening',
      time: '睡前',
      products: [
        { emoji: '✨', name: 'Selenium', nameZh: '硒 90粒', link: 'https://www.prozis.com/us/us/prozis/selenium-hair-skin-and-nails-90-vegetarian-capsules' },
        { emoji: '🔴', name: 'Iron 20mg', nameZh: '铁 60粒', link: 'https://www.prozis.com/us/us/prozis/iron-20-mg-60-capsules' },
        { emoji: '💎', name: 'Collagen + Magnesium', nameZh: '胶原蛋白+镁', link: 'https://www.prozis.com/us/us/prozis/collagen-magnesium-180-tablets' },
        { emoji: '🍊', name: 'Vitamin C', nameZh: '维生素C', link: 'https://www.prozis.com/us/us/prozis/chewable-vitamin-c-500-mg-90-chewable-tablets' }
      ]
    },
    {
      id: 'accessories',
      title: '其他产品',
      titleEn: 'Accessories',
      time: '按需使用',
      products: [
        { emoji: '🧤', name: 'Hooks', nameZh: '硬拉手套', link: 'https://www.prozis.com/us/us/prozis/weightlifting-hooks-black-/-gray' },
        { emoji: '🥤', name: 'Whey', nameZh: '蛋白粉', link: 'https://www.prozis.com/us/us/prozis/zero-diet-whey-1.7-lb' },
        { emoji: '🍶', name: 'Shaker', nameZh: '摇摇杯', link: 'https://www.prozis.com/us/us/prozis/fusion-shaker-bottle-all-pink' },
        { emoji: '📦', name: 'Box', nameZh: '收纳盒', link: 'https://www.prozis.com/us/us/prozis/-stackable-box-3x170ml-dusty-blue' },
        { emoji: '💊', name: 'Pillbox', nameZh: '药盒', link: 'https://www.prozis.com/us/us/prozis/-pillbox-mineral-gray' }
      ]
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <div style={{position: 'sticky', top: 0, zIndex: 50, background: 'linear-gradient(to right, #3d3426, #5a5045)', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold mb-2">💊 每日补剂时间表 💪</h1>
          <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', marginBottom: '8px'}}>
            <div style={{textAlign: 'center', marginBottom: '12px'}}>
              <div style={{fontSize: '14px', marginBottom: '8px', fontWeight: '600'}}>🎁 专属折扣码</div>
              <div style={{fontSize: '32px', fontWeight: '900', background: '#fbbf24', color: '#3d3426', padding: '12px 24px', borderRadius: '12px', letterSpacing: '2px', boxShadow: '0 4px 6px rgba(0,0,0,0.2)', border: '3px solid #f59e0b'}}>
                HARLEY10
              </div>
              <div style={{fontSize: '12px', marginTop: '8px', color: '#e8e4db'}}>输入折扣码享受 10% OFF</div>
            </div>
            <a 
              href="https://www.prozis.com/us/us/?ot=IGPRZUSA&utm_source=instagram&utm_medium=organic&utm_content=page"
              target="_blank"
              rel="noopener noreferrer"
              style={{display: 'block', textAlign: 'center', background: '#e8e4db', color: '#3d3426', fontWeight: 600, padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', marginTop: '12px'}}
            >
              访问 Prozis 商城 →
            </a>
          </div>
          <p style={{fontSize: '12px', color: '#e8e4db'}}>💕 购买时输入折扣码享受优惠</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {scheduleData.map((section) => (
          <div key={section.id} style={{borderBottom: '1px solid #d4cfc4'}}>
            <button
              onClick={() => toggleSection(section.id)}
              style={{width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#e8e4db', border: 'none', cursor: 'pointer'}}
            >
              <div style={{textAlign: 'left'}}>
                <div style={{fontWeight: 'bold', fontSize: '18px', color: '#3d3426'}}>{section.title}</div>
                <div style={{fontSize: '14px', color: '#7a6f5d'}}>{section.titleEn}</div>
                <div style={{fontSize: '12px', color: '#9c8b73', marginTop: '4px'}}>{section.time}</div>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp style={{width: '20px', height: '20px', color: '#7a6f5d'}} />
              ) : (
                <ChevronDown style={{width: '20px', height: '20px', color: '#7a6f5d'}} />
              )}
            </button>
            
            {expandedSection === section.id && (
              <div style={{background: 'white', padding: '16px'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px'}}>
                  {section.products.map((product, idx) => (
                    <a
                      key={idx}
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px', border: '2px solid #d4cfc4', borderRadius: '8px', textDecoration: 'none', background: 'white'}}
                    >
                      <div style={{fontSize: '48px', marginBottom: '8px'}}>{product.emoji}</div>
                      <div style={{fontWeight: 600, fontSize: '14px', color: '#3d3426', textAlign: 'center'}}>{product.name}</div>
                      <div style={{fontSize: '12px', color: '#7a6f5d', textAlign: 'center', marginTop: '4px'}}>{product.nameZh}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 text-center" style={{background: 'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius: '12px', margin: '20px auto', padding: '20px'}}>
        <p style={{marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#3d3426'}}>💡 点击任意产品跳转到 Prozis 商城</p>
        <div style={{background: '#fbbf24', padding: '12px 20px', borderRadius: '8px', display: 'inline-block', border: '2px solid #f59e0b'}}>
          <p style={{fontWeight: 'bold', color: '#3d3426', fontSize: '14px', marginBottom: '4px'}}>🎁 记得使用折扣码</p>
          <p style={{fontSize: '28px', fontWeight: '900', color: '#3d3426', letterSpacing: '2px'}}>HARLEY10</p>
        </div>
      </div>
    </div>
  );
};

export default SupplementSchedule;