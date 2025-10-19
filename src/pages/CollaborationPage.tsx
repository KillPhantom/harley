import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import tiktokIcon from "../assets/tiktok.png";
import xiaohongshuIcon from "../assets/xiaohongshu.svg";

export default function CollaborationPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: t("collaboration.instagram"),
      iconType: "lucide",
      icon: Instagram,
      url: "https://www.instagram.com/harley_lwy?igsh=NTc4MTIwNjQ2YQ==",
      followers: "17.5K",
      handle: "@harley_lwy",
    },
    {
      name: t("collaboration.tiktok"),
      iconType: "image",
      iconSrc: tiktokIcon,
      url: "https://www.tiktok.com/@harley_lwy",
      followers: "20K",
      handle: "@harley_lwy",
    },
    {
      name: t("collaboration.xiaohongshu"),
      iconType: "image",
      iconSrc: xiaohongshuIcon,
      url: "https://xhslink.com/m/2xwfn2ZVonD",
      followers: "11K",
      handle: "@harley_lwy",
    },
  ];

  const navigateTo = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsDialogOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8e4db] to-[#d4cfc4] px-5 py-5 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="text-center mb-6">
            <div className="text-[#7a6f5d] text-sm mb-4 font-light tracking-wider">
              {t("collaboration.subtitle")}
            </div>
            <div className="text-[#9c8b73] text-sm font-light tracking-wider">
              {t("collaboration.totalReach")}{" "}
              <strong className="text-[#3d3426] font-normal">48.6K</strong>
            </div>
          </div>

          {/* Social Links - Two Row Layout */}
          <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-[rgba(122,111,93,0.2)]">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 px-5 py-3 bg-white/40 rounded-xl transition-all hover:bg-white/70 hover:-translate-y-1 hover:shadow-md group min-w-[110px]"
                  title={social.name}
                >
                  {/* First Row: Icon + Name */}
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      {social.iconType === "image" ? (
                        <img
                          src={social.iconSrc}
                          alt={social.name}
                          className="w-full h-full object-contain"
                        />
                      ) : IconComponent ? (
                        <IconComponent
                          size={18}
                          className="text-[#7a6f5d] group-hover:text-[#3d3426] transition-colors"
                        />
                      ) : null}
                    </div>
                    <span className="text-[11px] text-[#3d3426] font-medium tracking-wide uppercase">
                      {social.name}
                    </span>
                  </div>

                  {/* Second Row: Followers */}
                  <div className="text-[13px] text-[#9c8b73] font-normal">
                    {social.followers}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Floating Menu Button */}
        <button
          onClick={() => setIsDialogOpen(true)}
          className="fixed bottom-8 right-8 w-[70px] h-[70px] bg-[rgba(156,139,115,0.95)] border-[3px] border-white rounded-full text-white text-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all hover:bg-[rgba(156,139,115,1)] hover:scale-110 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] z-[9999] flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>

        {/* Navigation Dialog */}
        {isDialogOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-center justify-center"
            onClick={() => setIsDialogOpen(false)}
          >
            <div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-10 max-w-lg w-[90%] shadow-[0_10px_40px_rgba(0,0,0,0.3)] animate-[slideUp_0.3s_ease] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full text-[#7a6f5d] text-[28px] hover:bg-[rgba(156,139,115,0.1)] transition-all"
                aria-label="Close dialog"
              >
                <X className="w-7 h-7" />
              </button>
              <div className="text-[22px] text-[#3d3426] font-light tracking-[2px] uppercase mb-6 text-center font-serif">
                Navigation
              </div>
              <ul className="space-y-4">
                {[
                  { id: "intro", label: t("collaboration.about") },
                  { id: "audience", label: t("collaboration.audience") },
                  { id: "data", label: t("collaboration.analytics") },
                  { id: "cases", label: t("collaboration.portfolio") },
                  { id: "packages", label: t("collaboration.pricing") },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => navigateTo(item.id)}
                      className={`w-full text-left px-6 py-[18px] rounded-xl transition-all text-sm font-light tracking-wider ${
                        activeSection === item.id
                          ? "bg-[rgba(156,139,115,0.4)] font-normal text-[#3d3426]"
                          : "bg-white/50 text-[#3d3426] hover:bg-[rgba(156,139,115,0.3)] hover:translate-x-1"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Content Sections */}
        {activeSection === "intro" && (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-11 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="border-2 border-[rgba(156,139,115,0.3)] rounded-2xl p-9 bg-white/30">
              <h2 className="text-[26px] mb-6 text-[#3d3426] font-light tracking-[2px] uppercase font-serif">
                {t("collaboration.about")}
              </h2>
              <div className="leading-[1.9] text-[#5a5045] mb-5 text-[13px] font-light">
                {t("collaboration.aboutDesc")}
              </div>

              <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
                {t("collaboration.specialization")}
              </h3>
              <div className="leading-[1.9] text-[#5a5045] mb-5 text-[13px] font-light">
                {t("collaboration.specializationDesc")}
              </div>

              <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
                {t("collaboration.credentials")}
              </h3>
              <div className="leading-[1.9] text-[#5a5045] mb-5 text-[13px] font-light">
                {t("collaboration.credentialsDesc")}
              </div>
            </div>

            <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
              {t("collaboration.platformOverview")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                {
                  title: t("collaboration.instagram"),
                  value: "17.5K",
                  label: t("collaboration.followers"),
                },
                {
                  title: t("collaboration.tiktok"),
                  value: "20K",
                  label: t("collaboration.followers"),
                },
                {
                  title: t("collaboration.xiaohongshu"),
                  value: "11K",
                  label: t("collaboration.followers"),
                },
                {
                  title: "Total",
                  value: "48.6K",
                  label: t("collaboration.combined"),
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 rounded-2xl p-7 text-center transition-all hover:bg-white/70 hover:-translate-y-1"
                >
                  <h3 className="text-[10px] text-[#7a6f5d] mb-4 font-light uppercase tracking-[1.5px]">
                    {stat.title}
                  </h3>
                  <div className="text-[26px] font-light text-[#9c8b73] mb-2 tracking-wider">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#7a6f5d] font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
              {t("collaboration.valueProposition")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {[
                {
                  title: t("collaboration.valueProp1Title"),
                  desc: t("collaboration.valueProp1Desc"),
                },
                {
                  title: t("collaboration.valueProp2Title"),
                  desc: t("collaboration.valueProp2Desc"),
                },
                {
                  title: t("collaboration.valueProp3Title"),
                  desc: t("collaboration.valueProp3Desc"),
                },
                {
                  title: t("collaboration.valueProp4Title"),
                  desc: t("collaboration.valueProp4Desc"),
                },
                {
                  title: t("collaboration.valueProp5Title"),
                  desc: t("collaboration.valueProp5Desc"),
                },
                {
                  title: t("collaboration.valueProp6Title"),
                  desc: t("collaboration.valueProp6Desc"),
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-white/50 rounded-2xl p-8">
                  <h4 className="text-[#3d3426] mb-3 text-sm font-normal tracking-wide">
                    {value.title}
                  </h4>
                  <p className="text-[#5a5045] text-xs leading-[1.8] font-light">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "audience" && (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-11 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <h2 className="text-[26px] mb-6 text-[#3d3426] font-light tracking-[2px] uppercase font-serif">
              {t("collaboration.audience")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <div className="bg-white/50 rounded-2xl p-8">
                <h3 className="text-sm mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
                  {t("collaboration.gender")}
                </h3>
                <div className="flex justify-between text-xs text-[#5a5045] font-light mb-2">
                  <span>{t("collaboration.female")}</span>
                  <span className="font-normal text-[#9c8b73]">75%</span>
                </div>
                <div className="w-full h-[3px] bg-[rgba(156,139,115,0.2)] overflow-hidden rounded">
                  <div
                    className="h-full bg-gradient-to-r from-[#9c8b73] to-[#c4b5a0]"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-[#5a5045] font-light mb-2 mt-5">
                  <span>{t("collaboration.male")}</span>
                  <span className="font-normal text-[#9c8b73]">25%</span>
                </div>
                <div className="w-full h-[3px] bg-[rgba(156,139,115,0.2)] overflow-hidden rounded">
                  <div
                    className="h-full bg-gradient-to-r from-[#9c8b73] to-[#c4b5a0]"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/50 rounded-2xl p-8">
                <h3 className="text-sm mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
                  {t("collaboration.ageRange")}
                </h3>
                {[
                  { range: t("collaboration.years18to24"), percent: "35%" },
                  { range: t("collaboration.years25to34"), percent: "45%" },
                  { range: t("collaboration.years35to44"), percent: "15%" },
                  { range: t("collaboration.years45plus"), percent: "5%" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between mb-4 text-xs text-[#5a5045] font-light"
                  >
                    <span>{item.range}</span>
                    <span className="font-normal text-[#9c8b73]">
                      {item.percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
              Geographic Distribution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <div className="bg-white/50 rounded-2xl p-8">
                <h3 className="text-sm mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
                  United States
                </h3>
                {[
                  { state: "California", percent: "35%" },
                  { state: "New York", percent: "20%" },
                  { state: "Texas", percent: "15%" },
                  { state: "Florida", percent: "12%" },
                  { state: "Illinois", percent: "8%" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between mb-4 text-xs text-[#5a5045] font-light"
                  >
                    <span>{item.state}</span>
                    <span className="font-normal text-[#9c8b73]">
                      {item.percent}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white/50 rounded-2xl p-8">
                <h3 className="text-sm mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
                  International
                </h3>
                {[
                  { country: "United States", percent: "60%" },
                  { country: "China", percent: "25%" },
                  { country: "Canada", percent: "8%" },
                  { country: "United Kingdom", percent: "4%" },
                  { country: "Others", percent: "3%" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between mb-4 text-xs text-[#5a5045] font-light"
                  >
                    <span>{item.country}</span>
                    <span className="font-normal text-[#9c8b73]">
                      {item.percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "data" && (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-11 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <h2 className="text-[26px] mb-6 text-[#3d3426] font-light tracking-[2px] uppercase font-serif">
              Analytics
            </h2>

            <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
              Instagram
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { title: "Followers", value: "17.5K", label: "Total reach" },
                { title: "Avg Views", value: "3.5K", label: "Per post" },
                { title: "Engagement", value: "300+", label: "Per post" },
                { title: "Rate", value: "1.68%", label: "Above average" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 rounded-2xl p-7 text-center transition-all hover:bg-white/70 hover:-translate-y-1"
                >
                  <h3 className="text-[10px] text-[#7a6f5d] mb-4 font-light uppercase tracking-[1.5px]">
                    {stat.title}
                  </h3>
                  <div className="text-[26px] font-light text-[#9c8b73] mb-2 tracking-wider">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#7a6f5d] font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
              TikTok
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { title: "Followers", value: "20K", label: "Total reach" },
                { title: "Total Likes", value: "68K", label: "Cumulative" },
                { title: "Videos", value: "58", label: "Published" },
                { title: "Top Video", value: "3.6K", label: "Likes" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 rounded-2xl p-7 text-center transition-all hover:bg-white/70 hover:-translate-y-1"
                >
                  <h3 className="text-[10px] text-[#7a6f5d] mb-4 font-light uppercase tracking-[1.5px]">
                    {stat.title}
                  </h3>
                  <div className="text-[26px] font-light text-[#9c8b73] mb-2 tracking-wider">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#7a6f5d] font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "cases" && (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-11 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <h2 className="text-[26px] mb-6 text-[#3d3426] font-light tracking-[2px] uppercase font-serif">
              Portfolio
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {[
                {
                  category: "Activewear",
                  brand: "Yeoreo",
                  desc: "Showcasing activewear collection through training content and lifestyle posts.",
                },
                {
                  category: "Wellness",
                  brand: "Flourish",
                  desc: "Promoting wellness products integrated into daily fitness routine.",
                },
                {
                  category: "Body Shaping",
                  brand: "Squeeze Me Skinny",
                  desc: "Featuring body shaping products in training and lifestyle content.",
                  link: "https://freeimage.host/i/Kk1bXmx",
                },
                {
                  category: "Nutrition",
                  brand: "Legion Athletics",
                  desc: "Partnering to showcase supplements in training and nutrition content.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 rounded-2xl p-9 transition-all hover:bg-white/70 hover:-translate-y-1"
                >
                  <div className="text-xs text-[#9c8b73] mb-4 font-normal tracking-wider">
                    {item.category}
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h4 className="text-base mb-2 text-[#3d3426] font-light tracking-wider hover:text-[#9c8b73] transition-colors cursor-pointer">
                        {item.brand}
                      </h4>
                    </a>
                  ) : (
                    <h4 className="text-base mb-2 text-[#3d3426] font-light tracking-wider">
                      {item.brand}
                    </h4>
                  )}
                  <div className="text-[11px] text-[#7a6f5d] leading-[1.9] font-light">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5 justify-center mt-9 pt-9 border-t border-[rgba(156,139,115,0.2)]">
              {[
                "Yeoreo",
                "Flourish",
                "Squeeze Me Skinny",
                "Legion Athletics",
              ].map((brand, idx) => (
                <div
                  key={idx}
                  className="px-8 py-[18px] bg-white/50 rounded-xl font-light text-[#3d3426] text-xs tracking-wide"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "packages" && (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-11 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <h2 className="text-[26px] mb-6 text-[#3d3426] font-light tracking-[2px] uppercase font-serif">
              Pricing
            </h2>

            <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
              Instagram
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              {[
                {
                  title: "Feed Post",
                  price: "$250",
                  features: [
                    "1 main feed post",
                    "Professional content creation",
                    "Performance report",
                  ],
                },
                {
                  title: "Story Series",
                  price: "$110",
                  features: [
                    "3-5 story frames",
                    "24-hour visibility",
                    "Interactive elements",
                  ],
                },
                {
                  title: "Full Package",
                  price: "$300",
                  features: [
                    "1 Feed + 3 Stories",
                    "Maximum exposure",
                    "Best value",
                  ],
                },
              ].map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 rounded-2xl p-9 transition-all hover:bg-white/70 hover:-translate-y-1"
                >
                  <h4 className="text-base mb-2 text-[#3d3426] font-light tracking-wider">
                    {pkg.title}
                  </h4>
                  <div className="text-3xl font-light text-[#9c8b73] my-5 tracking-wider">
                    {pkg.price}
                  </div>
                  <ul className="space-y-0">
                    {pkg.features.map((feature, fidx) => (
                      <li
                        key={fidx}
                        className="py-2 text-[#5a5045] text-xs font-light border-b border-[rgba(156,139,115,0.1)] last:border-0"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-sm mt-9 mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
              TikTok
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {[
                {
                  title: "Single Video",
                  price: "$200",
                  features: [
                    "1 TikTok video",
                    "Professional editing",
                    "Trend-aligned content",
                  ],
                },
                {
                  title: "Video Campaign",
                  price: "$500",
                  features: [
                    "3 TikTok videos",
                    "Consistent messaging",
                    "Extended reach",
                  ],
                },
              ].map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 rounded-2xl p-9 transition-all hover:bg-white/70 hover:-translate-y-1"
                >
                  <h4 className="text-base mb-2 text-[#3d3426] font-light tracking-wider">
                    {pkg.title}
                  </h4>
                  <div className="text-3xl font-light text-[#9c8b73] my-5 tracking-wider">
                    {pkg.price}
                  </div>
                  <ul className="space-y-0">
                    {pkg.features.map((feature, fidx) => (
                      <li
                        key={fidx}
                        className="py-2 text-[#5a5045] text-xs font-light border-b border-[rgba(156,139,115,0.1)] last:border-0"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-[rgba(156,139,115,0.2)]">
              <h3 className="text-sm mb-5 text-[#3d3426] font-semibold uppercase tracking-[2px]">
                Terms
              </h3>
              <ul className="space-y-0">
                {[
                  "All pricing includes concept development, production, and publishing",
                  "Delivery within 7 business days after brief confirmation",
                  "Includes 2 rounds of revisions",
                  "Detailed analytics report provided 7 days post-publication",
                  "Long-term partnerships receive preferential rates",
                ].map((term, idx) => (
                  <li
                    key={idx}
                    className="py-4 text-[#5a5045] leading-[1.8] border-b border-[rgba(156,139,115,0.1)] text-xs font-light"
                  >
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="text-center mt-8 p-12 bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <button className="bg-[rgba(156,139,115,0.8)] text-white px-11 py-4 rounded-[25px] text-xs font-light tracking-[1.5px] uppercase transition-all hover:bg-[rgba(156,139,115,1)] hover:-translate-y-0.5">
            {t("collaboration.letsCollaborate")}
          </button>
          <div className="mt-6 text-[#7a6f5d] text-xs font-light">
            {t("collaboration.email")}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
