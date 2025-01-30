import { FC } from "react";

const technologies = [
  {
    name: "HTML",
    description: "Standard markup language for web pages.",
    logo: "/src/medias/html5-original.svg",
  },
  {
    name: "CSS",
    description: "Style sheet language for designing web pages.",
    logo: "/src/medias/css3-original.svg",
  },
  {
    name: "SASS",
    description: "CSS preprocessor for better styling.",
    logo: "/src/medias/sass-original.svg",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    logo: "/src/medias/tailwindcss-original-wordmark.svg",
  },
  {
    name: "Bootstrap",
    description: "Popular CSS framework for responsive design.",
    logo: "/src/medias/bootstrap-original.svg",
  },
  {
    name: "Ant Design",
    description: "UI framework for high-quality design.",
    logo: "/src/medias/KDpgvguMpGfqaHPjicRK.svg",
  },
  {
    name: "JavaScript",
    description: "Programming language for the web.",
    logo: "/src/medias/javascript-original.svg",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript.",
    logo: "/src/medias/typescript-original.svg",
  },
  {
    name: "React Query",
    description: "Data-fetching library for React.",
    logo: "/src/medias/emblem-light.svg",
  },
  {
    name: "MUI",
    description: "Popular React UI framework.",
    logo: "/src/medias/materialui-original.svg",
  },
  {
    name: "MobX",
    description: "State management library.",
    logo: "/src/medias/mobx.png",
  },
  {
    name: "React JS",
    description: "Library for building user interfaces.",
    logo: "/src/medias/react-original.svg",
  },
  {
    name: "Next.js",
    description: "React framework for SSR and static sites.",
    logo: "/src/medias/nextjs-original.svg",
  },
];

interface TechnologyProps {
  isDarkMode: boolean;
}

const Technology: FC<TechnologyProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`sm:px-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen`}
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
  );
};

export default Technology;
