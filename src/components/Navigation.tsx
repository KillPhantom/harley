import { Link, useLocation } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "zh" ? "en" : "zh";
    i18n.changeLanguage(newLang);
  };

  // 防止菜单打开时页面滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  // 路由变化时关闭菜单
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const navLinks = [
    { path: "/", label: t("nav.home"), emoji: "🏠" },
    { path: "/supplements", label: t("nav.supplements"), emoji: "💊" },
    { path: "/collaboration", label: t("nav.collaboration"), emoji: "🤝" },
    // { path: "/questionaire", label: t('nav.questionaire'), emoji: "📋" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 shadow-lg border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div>
                <h1 className="text-lg font-bold text-amber-900">
                  {t("nav.logo")}
                </h1>
                <p className="text-xs text-amber-700">{t("nav.subtitle")}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    location.pathname === link.path
                      ? "bg-amber-500 text-white shadow-md"
                      : "text-amber-900 hover:bg-amber-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-lg transition-all font-medium text-amber-900 hover:bg-amber-200 flex items-center gap-1.5"
                aria-label="Toggle language"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm">
                  {i18n.language === "zh" ? "EN" : "中"}
                </span>
              </button>
            </div>

            {/* Mobile Language & Menu Buttons */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-amber-200 transition-colors text-amber-900"
                aria-label="Toggle language"
              >
                <Languages className="w-5 h-5" />
              </button>

              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-amber-200 transition-colors text-amber-900"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-amber-200 shadow-lg">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all border-2 ${
                    location.pathname === link.path
                      ? "border-amber-500 text-amber-900 font-semibold"
                      : "border-transparent text-amber-900 hover:bg-amber-50"
                  }`}
                >
                  <span className="text-">
                    {link.label.replace(/^[^\s]+ /, "")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - only shows when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          style={{ top: "16rem" }}
          onClick={closeMenu}
        />
      )}
    </>
  );
}
