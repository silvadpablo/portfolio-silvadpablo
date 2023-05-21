import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiSemanticuireact } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { DiScrum } from "react-icons/di";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Sematic Web Design", img: SiSemanticuireact },
  { title: "Python", img: FaPython },
  { title: "Django", img: SiDjango },
  { title: "MySQL", img: SiMysql },
  { title: "SQLite", img: SiSqlite },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Scrum", img: DiScrum },
];
