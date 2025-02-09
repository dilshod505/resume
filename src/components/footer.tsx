import { Popover, Tooltip } from "antd";
import { HomeOutlined, GithubOutlined } from "@ant-design/icons";
import { MdOutlineLightMode, MdTranslate } from "react-icons/md";
import { useEffect } from "react";
import i18n from "../i18n/i18n";
import { FaTelegram } from "react-icons/fa";

function Footer({ toggleMode, isDarkMode }: any) {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const content = (
    <div className="flex flex-col gap-2">
      <button ria-label="Change Language" onClick={() => changeLanguage("uz")}>
        O'zbekcha
      </button>
      <button ria-label="Change Language" onClick={() => changeLanguage("en")}>
        English
      </button>
      <button ria-label="Change Language" onClick={() => changeLanguage("ru")}>
        Русский
      </button>
    </div>
  );

  const icons = [
    {
      icon: <HomeOutlined />,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    // { icon: <FileTextOutlined />, label: "Resume" },
    {
      icon: <FaTelegram />,
      label: "Telegram",
      url: "https://t.me/vohidjonovvv",
    },
    {
      icon: <GithubOutlined />,
      label: "GitHub",
      url: "https://github.com/dilshod505",
    },
    {
      icon: (
        <Popover content={content}>
          <MdTranslate />
        </Popover>
      ),
    },
    {
      icon: <MdOutlineLightMode />,
      label: isDarkMode ? "Light Mode" : "Dark Mode",
      onClick: toggleMode,
    },
  ];

  return (
    <div
      className={`flex items-center justify-center gap-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } p-4 rounded-full shadow-lg fixed bottom-5 left-1/2 transform -translate-x-1/2`}
    >
      {icons.map((item, index) => (
        <Tooltip title={item.label} key={index} placement="top">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-xl rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
            >
              {item.icon}
            </a>
          ) : (
            <button
              onClick={item.onClick} // Faqat Light/Dark uchun ishlaydi
              className="flex items-center justify-center w-10 h-10 text-xl rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
            >
              {item.icon}
            </button>
          )}
        </Tooltip>
      ))}
    </div>
  );
}

export default Footer;
