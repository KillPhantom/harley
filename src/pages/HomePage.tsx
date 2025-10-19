import { useState } from "react";
import { Instagram, X, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import qrCodeImage from "../assets/qr_code.jpg";
import tiktokIcon from "../assets/tiktok.png";
import xiaohongshuIcon from "../assets/xiaohongshu.svg";
import wechatIcon from "../assets/wechat.png";

export default function HomePage() {
  const [showWechatQR, setShowWechatQR] = useState(false);
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "抖音",
      iconType: "image",
      iconSrc: tiktokIcon,
      url: "https://v.douyin.com/nR38ghxKUKo/",
      color: "#000000",
    },
    {
      name: "小红书",
      iconType: "image",
      iconSrc: xiaohongshuIcon,
      url: "https://xhslink.com/m/2xwfn2ZVonD",
      color: "#FF2442",
    },
    {
      name: "Instagram",
      iconType: "lucide",
      icon: Instagram,
      url: "https://www.instagram.com/harley_lwy?igsh=NTc4MTIwNjQ2YQ==",
      color: "#E4405F",
    },
    {
      name: "微信",
      iconType: "image",
      iconSrc: wechatIcon,
      onClick: () => setShowWechatQR(true),
      color: "#07C160",
    },
  ];

  return (
    <div className="home-container" style={{ paddingTop: "64px" }}>
      <div className="poster">
        {/* Header with Social Media Links */}
        <div className="header">
          <div className="subtitle">{t("home.subtitle")}</div>
          <div className="social-links-header">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (social.onClick) {
                      e.preventDefault();
                      social.onClick();
                    }
                  }}
                  className="social-icon-link"
                  title={social.name}
                >
                  {social.iconType === "image" ? (
                    <img
                      src={social.iconSrc}
                      alt={social.name}
                      className="social-icon-image"
                    />
                  ) : IconComponent ? (
                    <IconComponent size={24} style={{ color: social.color }} />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        <div className="content">
          <div className="services">
            <div className="service-card">
              <div className="service-title">{t("home.offlineTraining")}</div>
              <div className="pricing">
                <div className="price-item">
                  <span className="price-label">{t("home.oneOnOne")}</span>
                  <span className="price-value">$150</span>
                </div>
                <div className="price-item">
                  <span className="price-label">{t("home.oneOnTwo")}</span>
                  <span className="price-value">$200</span>
                </div>
              </div>
              <div className="note">{t("home.note")}</div>
            </div>

            <div className="service-card">
              <div className="service-title">{t("home.onlineCoaching")}</div>
              <div className="pricing">
                <div className="price-item">
                  <span className="price-label">
                    {t("home.quarterlyPackage")}
                  </span>
                  <span className="price-value">$550</span>
                </div>
                <div className="price-item">
                  <span className="price-label">
                    {t("home.halfYearPackage")}
                  </span>
                  <span className="price-value">$750</span>
                </div>
                <div className="price-item">
                  <span className="price-label">{t("home.yearlyPackage")}</span>
                  <span className="price-value">$1000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="highlight">{t("home.highlight")}</div>

          <div className="target-groups">
            <h3>{t("home.targetGroups")}</h3>
            <p>{t("home.targetGroupsList")}</p>
          </div>

          <div className="coach-intro">
            <h3>{t("home.coachIntro")}</h3>

            <div className="intro-section">
              <h4>{t("home.professionalBackground")}</h4>
              <ul>
                <li>{t("home.professionalDesc1")}</li>
                <li>{t("home.professionalDesc2")}</li>
              </ul>
            </div>

            <div className="intro-section">
              <h4>{t("home.competitions")}</h4>
              <ul>
                <li>{t("home.competition1")}</li>
                <li>{t("home.competition2")}</li>
                <li>{t("home.competition3")}</li>
              </ul>
            </div>

            <div className="success-case">
              <h4>{t("home.successCase")}</h4>
              <p>
                {t("home.offlineSuccess")}
                <br />
                {t("home.onlineSuccess")}
              </p>
            </div>
          </div>

          <div className="service-comparison">
            <h3>{t("home.serviceComparison")}</h3>

            <div className="comparison-grid">
              <div className="service-column offline-service">
                <h4>{t("home.offlineService")}</h4>
                <ul>
                  <li>{t("home.offlineItem1")}</li>
                  <li>{t("home.offlineItem2")}</li>
                  <li>{t("home.offlineItem3")}</li>
                  <li>{t("home.offlineItem4")}</li>
                  <li>{t("home.offlineItem5")}</li>
                  <li>{t("home.offlineItem6")}</li>
                </ul>
                <div className="service-note">{t("home.offlineNote")}</div>
              </div>

              <div className="service-column online-service">
                <h4>{t("home.onlineService")}</h4>
                <ul>
                  <li>{t("home.onlineItem1")}</li>
                  <li>{t("home.onlineItem2")}</li>
                  <li>{t("home.onlineItem3")}</li>
                  <li>{t("home.onlineItem4")}</li>
                  <li>{t("home.onlineItem5")}</li>
                  <li>{t("home.onlineItem6")}</li>
                </ul>
                <div className="service-note">{t("home.onlineNote")}</div>
              </div>
            </div>
          </div>

          <div className="online-features">
            <h4>{t("home.onlineFeatures")}</h4>
            <ul>
              <li>{t("home.onlineFeature1")}</li>
              <li>{t("home.onlineFeature2")}</li>
              <li>{t("home.onlineFeature3")}</li>
              <li>{t("home.onlineFeature4")}</li>
            </ul>
            <div className="special-feature">{t("home.specialFeature")}</div>
          </div>

          <div className="location">
            <h3>{t("home.location")}</h3>
            <div className="location-details">
              <strong>{t("home.locationName")}</strong>
              <div className="address">{t("home.locationAddress")}</div>
              <div className="facilities">{t("home.locationFacilities")}</div>
            </div>
          </div>
        </div>

        {/* Footer with Social Media Links */}
        <div className="home-footer">
          <div className="footer-content">
            <div className="social-links-footer">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (social.onClick) {
                        e.preventDefault();
                        social.onClick();
                      }
                    }}
                    className="social-icon-link"
                    title={social.name}
                  >
                    {social.iconType === "image" ? (
                      <img
                        src={social.iconSrc}
                        alt={social.name}
                        className="social-icon-image"
                      />
                    ) : IconComponent ? (
                      <IconComponent
                        size={24}
                        style={{ color: social.color }}
                      />
                    ) : null}
                  </a>
                );
              })}
            </div>
            <div className="footer-bottom">
              <p>{t("home.copyright")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wechat QR Code Modal */}
      {showWechatQR && (
        <div className="modal-overlay" onClick={() => setShowWechatQR(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowWechatQR(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="modal-header">
              <MessageCircle size={32} color="#07C160" />
              <h2>{t("home.wechatTitle")}</h2>
              <p className="wechat-id-modal">{t("home.wechatId")}</p>
            </div>
            <div className="qr-code-container">
              <img
                src={qrCodeImage}
                alt="微信二维码"
                className="qr-code-image"
              />
            </div>
            <p className="modal-footer-text">{t("home.wechatInstruction")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
