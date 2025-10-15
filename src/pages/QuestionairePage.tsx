import { useState } from "react";
import emailjs from "@emailjs/browser";

const QuestionairePage = () => {
  const [formData, setFormData] = useState({
    wechat: "",
    attendance: "",
    time: [] as string[],
    timeOther: "",
    diet: [] as string[],
    dietOther: "",
    allergyDetails: "",
    protein: [] as string[],
    activity: [] as string[],
  });

  const [validationErrors, setValidationErrors] = useState({
    wechat: false,
    attendance: false,
    time: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 重置验证错误
    const errors = {
      wechat: false,
      attendance: false,
      time: false,
    };

    let hasError = false;
    let errorMessage = "请填写以下必填项：\n";

    // 验证必填字段
    if (!formData.wechat.trim()) {
      errors.wechat = true;
      errorMessage += "\n❌ 联系方式(WeChat id)";
      hasError = true;
    }

    if (!formData.attendance) {
      errors.attendance = true;
      errorMessage += "\n❌ 是否参加这次聚会";
      hasError = true;
    }

    if (formData.time.length === 0) {
      errors.time = true;
      errorMessage += "\n❌ 活动时间（至少选择一个）";
      hasError = true;
    }

    setValidationErrors(errors);

    if (hasError) {
      alert(errorMessage);
      return;
    }

    // 验证通过，发送邮件
    setIsSubmitting(true);

    try {
      // 🔧 配置说明：请替换以下三个值
      // 1. 注册 EmailJS: https://www.emailjs.com/
      // 2. 创建邮件服务和模板
      // 3. 替换下面的配置信息
      const SERVICE_ID = "service_s707x9k"; // 替换为你的 Service ID
      const TEMPLATE_ID = "template_fwzmx7b"; // 替换为你的 Template ID
      const PUBLIC_KEY = "w0OayMcgHuYpiUSVT"; // 替换为你的 Public Key

      // 准备邮件数据
      const emailData = {
        wechat: formData.wechat,
        attendance:
          formData.attendance === "yes"
            ? "是的，我非常期待"
            : formData.attendance === "maybe"
            ? "暂时不确定"
            : "这次去不了，祝大家玩得开心",
        time: formData.time
          .map((t) => {
            const timeLabels: { [key: string]: string } = {
              "sat-lunch": "2025/11/01 周六中午 11:30AM – 2:00 PM",
              "sat-dinner": "2025/11/01 周六晚上 6:00 PM – 8:30 PM",
              "sun-lunch": "2025/11/02 周日中午 11:30AM – 2:00 PM",
              "sun-dinner": "2025/11/02 周日晚上 6:00 PM – 8:30 PM",
              "fri-dinner": "2025/10/31 周五晚上 6:00 PM – 8:30 PM",
              other: "其他",
            };
            return timeLabels[t] || t;
          })
          .join(", "),
        timeOther: formData.timeOther || "无",
        diet:
          formData.diet
            .map((d) => {
              const dietLabels: { [key: string]: string } = {
                vegetarian: "素食主义",
                allergy: "对某些食物过敏",
                "low-carb": "减少碳水化合物",
                other: "其他",
              };
              return dietLabels[d] || d;
            })
            .join(", ") || "无",
        dietOther: formData.dietOther || "无",
        allergyDetails: formData.allergyDetails || "无",
        protein:
          formData.protein
            .map((p) => {
              const proteinLabels: { [key: string]: string } = {
                chicken: "鸡肉",
                beef: "牛肉",
                seafood: "海鲜",
                tofu: "豆制品",
              };
              return proteinLabels[p] || p;
            })
            .join(", ") || "无",
        activity:
          formData.activity
            .map((a) => {
              const activityLabels: { [key: string]: string } = {
                outdoor: "简单的户外运动/小游戏",
                health: "健身/营养主题的简短交流分享",
                music: "来点音乐",
              };
              return activityLabels[a] || a;
            })
            .join(", ") || "无",
        submitted_at: new Date().toLocaleString("zh-CN", {
          timeZone: "Asia/Shanghai",
        }),
      };

      // 发送邮件
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY);

      // 成功提示
      alert("✅ 感谢您的填写！问卷已成功提交，我们已收到您的回复。");

      // 清空表单
      setFormData({
        wechat: "",
        attendance: "",
        time: [],
        timeOther: "",
        diet: [],
        dietOther: "",
        allergyDetails: "",
        protein: [],
        activity: [],
      });

      // 清除验证错误
      setValidationErrors({
        wechat: false,
        attendance: false,
        time: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("❌ 提交失败，请稍后重试。如果问题持续存在，请直接联系微信。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (category: string, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[category as keyof typeof prev] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [category]: newArray };
    });

    // 清除时间验证错误
    if (category === "time" && validationErrors.time) {
      setValidationErrors({ ...validationErrors, time: false });
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50"
      style={{
        paddingTop: "64px",
        paddingBottom: "40px",
        fontFamily: "'Lora', serif",
      }}
    >
      <div className="max-w-2xl mx-auto px-5 py-5">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div
            className="px-8 py-8 text-center"
            style={{
              background: "linear-gradient(135deg, #8B6F47 0%, #A0826D 100%)",
            }}
          >
            <h1 className="text-white text-2xl font-semibold mb-3 tracking-wide">
              Harley's Party Preferences
            </h1>
            <p className="text-amber-50 text-sm leading-relaxed">
              为了举办一场让大家都尽兴的线下烤肉派对，我们需要了解你的想法和偏好。请花几分钟填写一下问卷
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="px-8 py-7">
            {/* 联系方式 */}
            <div className="mb-7">
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "#654321" }}
              >
                联系方式(WeChat id){" "}
                <span className="ml-1" style={{ color: "#A0826D" }}>
                  *
                </span>
              </label>
              <input
                type="text"
                required
                value={formData.wechat}
                onChange={(e) => {
                  setFormData({ ...formData, wechat: e.target.value });
                  if (validationErrors.wechat) {
                    setValidationErrors({ ...validationErrors, wechat: false });
                  }
                }}
                placeholder="请输入您的微信号"
                className="w-full px-3 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:bg-white transition-all"
                style={{
                  borderColor: validationErrors.wechat ? "#FCA5A5" : "#E8DFD5",
                  color: "#654321",
                  backgroundColor: "#FDFBF7",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#A0826D")}
                onBlur={(e) =>
                  (e.target.style.borderColor = validationErrors.wechat
                    ? "#FCA5A5"
                    : "#E8DFD5")
                }
              />
              {validationErrors.wechat && (
                <p className="text-xs text-red-500 mt-1">⚠️ 此项为必填项</p>
              )}
            </div>

            {/* 参加计划 */}
            <div className="mb-7">
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "#654321" }}
              >
                你计划参加这次聚会吗？
                <span className="ml-1" style={{ color: "#A0826D" }}>
                  *
                </span>
              </label>
              {validationErrors.attendance && (
                <p className="text-xs text-red-500 mb-2">⚠️ 请选择一个选项</p>
              )}
              <div className="space-y-2.5">
                {[
                  { value: "yes", label: "是的，我非常期待" },
                  { value: "maybe", label: "暂时不确定" },
                  { value: "no", label: "这次去不了，祝大家玩得开心" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center px-3 py-2.5 border-2 rounded-lg cursor-pointer hover:bg-amber-100 transition-all"
                    style={{
                      backgroundColor: "#FDFBF7",
                      borderColor: "#E8DFD5",
                    }}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      required
                      checked={formData.attendance === option.value}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          attendance: e.target.value,
                        });
                        if (validationErrors.attendance) {
                          setValidationErrors({
                            ...validationErrors,
                            attendance: false,
                          });
                        }
                      }}
                      className="w-4 h-4 mr-3"
                      style={{ accentColor: "#8B6F47" }}
                    />
                    <span className="text-sm" style={{ color: "#654321" }}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 活动时间 */}
            <div className="mb-7">
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "#654321" }}
              >
                你希望活动在哪一天举办？
                <span className="ml-1" style={{ color: "#A0826D" }}>
                  *
                </span>
              </label>
              {validationErrors.time && (
                <p className="text-xs text-red-500 mb-2">
                  ⚠️ 请至少选择一个时间
                </p>
              )}
              <div className="space-y-2.5">
                {[
                  {
                    value: "sat-lunch",
                    label: "2025/11/01 周六中午 11:30AM – 2:00 PM",
                  },
                  {
                    value: "sat-dinner",
                    label: "2025/11/01 周六晚上 6:00 PM – 8:30 PM",
                  },
                  {
                    value: "sun-lunch",
                    label: "2025/11/02 周日中午 11:30AM – 2:00 PM",
                  },
                  {
                    value: "sun-dinner",
                    label: "2025/11/02 周日晚上 6:00 PM – 8:30 PM",
                  },
                  {
                    value: "fri-dinner",
                    label: "2025/10/31 周五晚上 6:00 PM – 8:30 PM",
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center px-3 py-2.5 border-2 rounded-lg cursor-pointer hover:bg-amber-100 transition-all"
                    style={{
                      backgroundColor: "#FDFBF7",
                      borderColor: "#E8DFD5",
                    }}
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.time.includes(option.value)}
                      onChange={() =>
                        handleCheckboxChange("time", option.value)
                      }
                      className="w-4 h-4 mr-3"
                      style={{ accentColor: "#8B6F47" }}
                    />
                    <span className="text-sm" style={{ color: "#654321" }}>
                      {option.label}
                    </span>
                  </label>
                ))}
                <label
                  className="flex items-center px-3 py-2.5 border-2 rounded-lg cursor-pointer hover:bg-amber-100 transition-all"
                  style={{ backgroundColor: "#FDFBF7", borderColor: "#E8DFD5" }}
                >
                  <input
                    type="checkbox"
                    value="other"
                    checked={formData.time.includes("other")}
                    onChange={() => handleCheckboxChange("time", "other")}
                    className="w-4 h-4 mr-3"
                    style={{ accentColor: "#8B6F47" }}
                  />
                  <span className="text-sm" style={{ color: "#654321" }}>
                    其他：
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.timeOther}
                  onChange={(e) =>
                    setFormData({ ...formData, timeOther: e.target.value })
                  }
                  placeholder="请说明其他时间"
                  className="w-full ml-8 px-3 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:bg-white transition-all"
                  style={{
                    borderColor: "#E8DFD5",
                    color: "#654321",
                    backgroundColor: "#FDFBF7",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#A0826D")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8DFD5")}
                />
              </div>
            </div>

            {/* 饮食限制 */}
            <div className="mb-7">
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "#654321" }}
              >
                你是否有特殊的饮食限制或偏好？
              </label>
              <div className="space-y-2.5">
                {[
                  { value: "vegetarian", label: "素食主义" },
                  {
                    value: "allergy",
                    label:
                      "对某些食物过敏 (Allergy to specific foods – 请在下一题说明)",
                  },
                  { value: "low-carb", label: "减少碳水化合物" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center px-3 py-2.5 border-2 rounded-lg cursor-pointer hover:bg-amber-100 transition-all"
                    style={{
                      backgroundColor: "#FDFBF7",
                      borderColor: "#E8DFD5",
                    }}
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.diet.includes(option.value)}
                      onChange={() =>
                        handleCheckboxChange("diet", option.value)
                      }
                      className="w-4 h-4 mr-3"
                      style={{ accentColor: "#8B6F47" }}
                    />
                    <span className="text-sm" style={{ color: "#654321" }}>
                      {option.label}
                    </span>
                  </label>
                ))}
                <label
                  className="flex items-center px-3 py-2.5 border-2 rounded-lg cursor-pointer hover:bg-amber-100 transition-all"
                  style={{ backgroundColor: "#FDFBF7", borderColor: "#E8DFD5" }}
                >
                  <input
                    type="checkbox"
                    value="other"
                    checked={formData.diet.includes("other")}
                    onChange={() => handleCheckboxChange("diet", "other")}
                    className="w-4 h-4 mr-3"
                    style={{ accentColor: "#8B6F47" }}
                  />
                  <span className="text-sm" style={{ color: "#654321" }}>
                    其他：
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.dietOther}
                  onChange={(e) =>
                    setFormData({ ...formData, dietOther: e.target.value })
                  }
                  placeholder="请说明其他饮食限制"
                  className="w-full ml-8 px-3 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:bg-white transition-all"
                  style={{
                    borderColor: "#E8DFD5",
                    color: "#654321",
                    backgroundColor: "#FDFBF7",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#A0826D")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8DFD5")}
                />
              </div>
            </div>

            {/* 过敏详情 */}
            <div className="mb-7">
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "#654321" }}
              >
                (如果上一题选择了"过敏"或"其他")
                请具体说明你的过敏源或特殊需求：
              </label>
              <textarea
                value={formData.allergyDetails}
                onChange={(e) =>
                  setFormData({ ...formData, allergyDetails: e.target.value })
                }
                placeholder="请在此详细说明..."
                rows={3}
                className="w-full px-3 py-2.5 border-2 rounded-lg text-sm focus:outline-none focus:bg-white transition-all resize-vertical"
                style={{
                  borderColor: "#E8DFD5",
                  color: "#654321",
                  backgroundColor: "#FDFBF7",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#A0826D")}
                onBlur={(e) => (e.target.style.borderColor = "#E8DFD5")}
              />
            </div>

            {/* 蛋白质偏好 */}
            <div className="mb-7">
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "#654321" }}
              >
                你希望烤肉菜单中侧重哪种蛋白质？
              </label>
              <div className="space-y-2.5">
                {[
                  { value: "chicken", label: "鸡肉" },
                  { value: "beef", label: "牛肉" },
                  { value: "seafood", label: "海鲜" },
                  { value: "tofu", label: "豆制品" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center px-3 py-2.5 border-2 rounded-lg cursor-pointer hover:bg-amber-100 transition-all"
                    style={{
                      backgroundColor: "#FDFBF7",
                      borderColor: "#E8DFD5",
                    }}
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.protein.includes(option.value)}
                      onChange={() =>
                        handleCheckboxChange("protein", option.value)
                      }
                      className="w-4 h-4 mr-3"
                      style={{ accentColor: "#8B6F47" }}
                    />
                    <span className="text-sm" style={{ color: "#654321" }}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 附加活动 */}
            <div className="mb-7">
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "#654321" }}
              >
                除了烤肉和聊天，你希望加入哪些附加活动？
              </label>
              <div className="space-y-2.5">
                {[
                  { value: "outdoor", label: "简单的户外运动/小游戏" },
                  { value: "health", label: "健身/营养主题的简短交流分享" },
                  { value: "music", label: "来点音乐" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center px-3 py-2.5 border-2 rounded-lg cursor-pointer hover:bg-amber-100 transition-all"
                    style={{
                      backgroundColor: "#FDFBF7",
                      borderColor: "#E8DFD5",
                    }}
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.activity.includes(option.value)}
                      onChange={() =>
                        handleCheckboxChange("activity", option.value)
                      }
                      className="w-4 h-4 mr-3"
                      style={{ accentColor: "#8B6F47" }}
                    />
                    <span className="text-sm" style={{ color: "#654321" }}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-white rounded-xl text-base font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #8B6F47 0%, #A0826D 100%)",
              }}
            >
              {isSubmitting ? "提交中..." : "提交"}
            </button>
          </form>

          {/* Footer */}
          <div
            className="text-center py-5 text-sm"
            style={{ color: "#A0826D" }}
          >
            期待与你一起享受美好时光 🍖
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionairePage;
