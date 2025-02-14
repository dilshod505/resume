import { Button, Form, Input, message } from "antd";
import { useTranslation } from "react-i18next";

const technologies = [
  {
    name: "HTML",
    description: "Standard markup language for web pages.",
    logo: "/medias/html5-original.svg",
  },
  {
    name: "CSS",
    description: "Style sheet language for designing web pages.",
    logo: "/medias/css3-original.svg",
  },
  {
    name: "SASS",
    description: "CSS preprocessor for better styling.",
    logo: "/medias/sass-original.svg",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    logo: "/medias/tailwindcss-original-wordmark.svg",
  },
  {
    name: "Bootstrap",
    description: "Popular CSS framework for responsive design.",
    logo: "/medias/bootstrap-original.svg",
  },
  {
    name: "Ant Design",
    description: "UI framework for high-quality design.",
    logo: "/medias/KDpgvguMpGfqaHPjicRK.svg",
  },
  {
    name: "JavaScript",
    description: "Programming language for the web.",
    logo: "/medias/javascript-original.svg",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript.",
    logo: "/medias/typescript-original.svg",
  },
  {
    name: "React Query",
    description: "Data-fetching library for React.",
    logo: "/medias/emblem-light.svg",
  },
  {
    name: "MUI",
    description: "Popular React UI framework.",
    logo: "/medias/materialui-original.svg",
  },
  {
    name: "MobX",
    description: "State management library.",
    logo: "/medias/mobx.png",
  },
  {
    name: "React JS",
    description: "Library for building user interfaces.",
    logo: "/medias/react-original.svg",
  },
  {
    name: "Next.js",
    description: "React framework for SSR and static sites.",
    logo: "/medias/nextjs-original.svg",
  },
];

function Main({ isDarkMode }: any) {
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    try {
      const telegramBotToken = "7820368166:AAHg1ayijl4mdZMDyZvYm17fA04VI0sK4So";
      const chatId = "2142298432";
      const text = `
New Form Submission:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Message: ${values.message}
      `;

      const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("Message sent to Telegram:", data);
          form.resetFields();
          message.success(t("messages.success"));
        })
        .catch((error) => {
          console.error("Error sending to Telegram:", error);
          message.error(t("messages.error"));
        });
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred");
    }
  };

  return (
    <div
      className={`flex flex-col items-center px-5 py-28 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <header className="text-center mb-10">
        <div className="flex items-center w-full max-w-3xl justify-between">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-3">{t("my_info.i'm")}</h1>
            <p className="text-3xl font-bold text-amber-400 dark:text-amber-400 mb-4">
              {t("my_info.courseName")}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t("my_info.title")}
            </p>
          </div>
          <img
            src="/medias/main.png"
            alt="Dilshod Vohidjonov"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      </header>{" "}
      <section className="mb-10 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-3">{t("my_info.course")}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("my_info.about")}
        </p>
      </section>
      {/* Work Experience Section */}
      <section className="mb-10 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-3">{t("my_info.work")}</h2>
        <ul className="space-y-4">
          {[
            {
              company: t("work.web"),
              role: t("work.webTitle"),
            },
            {
              company: t("work.front"),
              role: t("work.frontTitle"),
            },
            {
              company: "work.backend",
              role: "work.backendTitle",
            },
          ].map((job, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="font-medium">{t(job.company)}</span>
              <span className="text-gray-500 dark:text-gray-400">
                {t(job.role)}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-5">{t("technologies.title")}</h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1`}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center p-4 px-5 ${
                isDarkMode ? "bg-gray-900" : "bg-gray-100"
              } rounded-lg shadow-lg`}
            >
              <img
                src={`${tech.logo}`}
                alt={tech.name}
                className="w-12 h-12 sm:w-16 sm:h-16 mr-4"
              />
              <div>
                <h2 className="text-lg sm:text-xl font-bold">{tech.name}</h2>

                <p
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full max-w-3xl mt-10">
        <h2
          className={`text-3xl font-bold mb-5 ${isDarkMode ? "text-white" : "text-black"}`}
        >
          {t("contact.cont")}
        </h2>
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            label={
              <span className={isDarkMode ? "text-white" : "text-black"}>
                {t("form.name")}
              </span>
            }
            name="name"
            rules={[{ required: true, message: t("rules.name") }]}
          >
            <Input
              placeholder={t("input.name")}
              className={
                isDarkMode
                  ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:bg-gray-800"
                  : ""
              }
            />
          </Form.Item>

          <Form.Item
            label={
              <span className={isDarkMode ? "text-white" : "text-black"}>
                {t("form.email")}
              </span>
            }
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: t("rules.email"),
              },
            ]}
          >
            <Input
              placeholder={t("input.email")}
              className={
                isDarkMode
                  ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:bg-gray-800"
                  : ""
              }
            />
          </Form.Item>

          <Form.Item
            label={
              <span className={isDarkMode ? "text-white" : "text-black"}>
                {t("form.phone")}
              </span>
            }
            name="phone"
            rules={[{ required: true, message: t("rules.phone") }]}
          >
            <Input
              placeholder={t("input.phone")}
              className={
                isDarkMode
                  ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:bg-gray-800"
                  : ""
              }
            />
          </Form.Item>

          <Form.Item
            label={
              <span className={isDarkMode ? "text-white" : "text-black"}>
                {t("form.message")}
              </span>
            }
            name="message"
            rules={[{ required: true, message: t("rules.message") }]}
          >
            <Input.TextArea
              rows={4}
              placeholder={t("input.message")}
              className={
                isDarkMode
                  ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:bg-gray-800"
                  : ""
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={
                isDarkMode
                  ? "w-full xs:w-full bg-blue-600 hover:bg-blue-700"
                  : ""
              }
            >
              {t("form.submit")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Main;

// import { useTranslation } from "react-i18next";
//
// function Main() {
//   const { t } = useTranslation();
//
//   return (
//     <div className="flex flex-col items-center p-8 bg-white text-black">
//       {/* Header Section */}
//       <header className="text-center mb-10">
//         <h1 className="text-4xl font-bold mb-2">
//           {t("Hi, I'm Dillion")} <span className="wave">👋</span>
//         </h1>
//         <p className="text-lg text-gray-600">
//           {t(
//             "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
//           )}
//         </p>
//       </header>
//
//       {/* About Section */}
//       <section className="mb-10 w-full max-w-3xl">
//         <h2 className="text-2xl font-bold mb-3">{t("About")}</h2>
//         <p className="text-gray-700 leading-relaxed">
//           {t(
//             "At the end of 2022, I quit my job as a software engineer to go full-time into building and scaling my own SaaS businesses. In the past, I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley, and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first-ever in-person cohort of buildspace called buildspace sff.",
//           )}
//         </p>
//       </section>
//
//       {/* Work Experience Section */}
//       <section className="mb-10 w-full max-w-3xl">
//         <h2 className="text-2xl font-bold mb-3">{t("Work Experience")}</h2>
//         <ul className="space-y-4">
//           {[
//             {
//               company: "Atomic Finance",
//               role: "Bitcoin Protocol Engineer",
//               duration: "May 2021 - Oct 2022",
//             },
//             {
//               company: "Shopify",
//               role: "Software Engineer",
//               duration: "Jan 2021 - Apr 2021",
//             },
//             {
//               company: "Nvidia",
//               role: "Software Engineer",
//               duration: "Jan 2020 - Apr 2020",
//             },
//             {
//               company: "Splunk",
//               role: "Software Engineer",
//               duration: "Jan 2019 - Apr 2019",
//             },
//             {
//               company: "Lime",
//               role: "Software Engineer",
//               duration: "Jan 2018 - Apr 2018",
//             },
//             {
//               company: "Mitre Media",
//               role: "Software Engineer",
//               duration: "May 2017 - Aug 2017",
//             },
//           ].map((job, index) => (
//             <li key={index} className="flex items-center justify-between">
//               <span className="font-medium">{t(job.company)}</span>
//               <span className="text-gray-500">{t(job.role)}</span>
//               <span className="text-gray-400">{job.duration}</span>
//             </li>
//           ))}
//         </ul>
//       </section>
//
//       {/* Education Section */}
//       <section className="mb-10 w-full max-w-3xl">
//         <h2 className="text-2xl font-bold mb-3">{t("Education")}</h2>
//         <ul className="space-y-4">
//           {[
//             { school: "Buildspace", duration: "2023 - 2024" },
//             {
//               school: "University of Waterloo",
//               degree: "Bachelor’s Degree of Computer Science (BCS)",
//               duration: "2016 - 2021",
//             },
//             {
//               school: "Wilfrid Laurier University",
//               degree: "Bachelor’s Degree of Business Administration (BBA)",
//               duration: "2016 - 2021",
//             },
//             {
//               school: "International Baccalaureate",
//               degree: "IB Diploma",
//               duration: "2012 - 2016",
//             },
//           ].map((edu, index) => (
//             <li key={index} className="flex items-center justify-between">
//               <span className="font-medium">{t(edu.school)}</span>
//               <span className="text-gray-400">{edu.duration}</span>
//             </li>
//           ))}
//         </ul>
//       </section>
//
//       {/* Skills Section */}
//       <section className="mb-10 w-full max-w-3xl">
//         <h2 className="text-2xl font-bold mb-3">{t("Skills")}</h2>
//         <div className="flex flex-wrap gap-2">
//           {[
//             "React",
//             "Next.js",
//             "TypeScript",
//             "Node.js",
//             "Python",
//             "Go",
//             "Postgres",
//             "Docker",
//             "Kubernetes",
//             "Java",
//             "C++",
//           ].map((skill, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-black text-white rounded-full text-sm"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </section>
//
//       {/* Footer Section */}
//       <footer className="flex space-x-4">
//         {["home", "linkedin", "github", "twitter"].map((icon, index) => (
//           <button
//             key={index}
//             className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
//           >
//             <i className={`icon-${icon}`} />
//           </button>
//         ))}
//       </footer>
//     </div>
//   );
// }
//
// export default Main;
