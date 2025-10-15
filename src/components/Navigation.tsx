import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

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
    { path: "/", label: "首页", emoji: "🏠" },
    { path: "/supplements", label: " 补剂计划", emoji: "💊" },
    { path: "/questionaire", label: "派对问卷", emoji: "📋" },
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
                <h1 className="text-lg font-bold text-amber-900">Harley Fit</h1>
                <p className="text-xs text-amber-700">专业健身指导</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2">
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
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-amber-200 transition-colors text-amber-900"
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
