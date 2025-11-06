import { SiNextdotjs } from "react-icons/si";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import ReactjsSvg from "@/public/icons/reactjs.svg";
import AngularSvg from "@/public/icons/angular.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import ThreejsSvg from "@/public/icons/threejs.svg";
import NodejsSVG from "@/public/icons/nodejs.svg";
import VuejsSVG from "@/public/icons/Vue.js_Logo_2.svg";
import Verselsvg from "@/public/icons/vercel.svg";
import Wordpress from "@/public/icons/Wordpress.svg";
import Htmlsvg from "@/public/icons/html.svg";
import Javascriptsvg from "@/public/icons/javascript.svg";
import Typescriptsvg from "@/public/icons/typescript.svg";
import Css from "@/public/icons/css.svg";
import PHPsvg from "@/public/icons/PHP.svg";
import Webflowsvg from "@/public/icons/webflow.svg";

//Design
import FigmaSvg from "@/public/icons/Figma.svg";
import UXsvg from "@/public/icons/ux.svg";

// CMS
import AWSSvg from "@/public/icons/aws_icon_146074.svg";

// ERP

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import MysqlSvg from "@/public/icons/mysql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import GitHubSvg from "@/public/icons/github.svg";

// Video Editing Tools

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming languages, Frameworks and Libraries",
    skills: [
      {
        name: "Html",
        icon: Htmlsvg,
      },
      {
        name: "Css",
        icon: Css,
      },
      {
        name: "Javascript",
        icon: Javascriptsvg,
      },
      {
        name: "Typescript",
        icon: Typescriptsvg,
      },
      {
        name: "PHP",
        icon: PHPsvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "Vue.Js",
        icon: VuejsSVG,
      },
      {
        name: "WordPress",
        icon: Wordpress,
      },
      {
        name: "Webflow",
        icon: Webflowsvg,
      },
      {
        name: "Three.js",
        icon: ThreejsSvg,
      },
      {
        name: "Node.js",
        icon: NodejsSVG,
      },
      {
        name: "AWS Glue",
        icon: AWSSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
    ],
  },
  {
    sectionName: "Design",
    skills: [
      {
        name: "Figma",
        icon: FigmaSvg,
      },
      {
        name: "UX/UI design",
        icon: UXsvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MySQL",
        icon: MysqlSvg,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Doker",
        icon: DockerSvg,
      },
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Vercel",
        icon: Verselsvg,
      },
      {
        name: "GitHub",
        icon: GitHubSvg,
      },
    ],
  },
];
