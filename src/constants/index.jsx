import { Database, Palette, PencilRuler } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { Terminal } from "lucide-react";
import { Code } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import employee1 from "../assets/employees-pictures/profile-01.jpeg";
import employee2 from "../assets/employees-pictures/002.jpeg";
import employee3 from "../assets/employees-pictures/profile-03.jpeg";
import employee4 from "../assets/employees-pictures/profile-04.jpeg";
import employee5 from "../assets/employees-pictures/profile-05.jpeg";

import fallbackImage from "../assets/employees-pictures/fallback-user-image.webp";

export const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "¿Quiénes Somos?", href: "#quienes-somos" },
  { label: "Objetivos", href: "#objetivos" },
  { label: "Clientes", href: "#clientes" },

];

export const testimonials = [
  {
    user: "Stepson Smith",
    company: "Stellar Solutions",
    image: user1,
    text: "Estoy extremadamente satisfecho con los servicios prestados. El equipo fue receptivo, profesional y obtuvo resultados que superaron mis expectativas.",
  },
  {
    user: "Juana Paula Table",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "No podría estar más feliz con el resultado de nuestro proyecto. La creatividad y las habilidades de resolución de problemas del equipo fueron fundamentales para hacer realidad nuestra visión.",
  },
  {
    user: "Carlos Nightingale",
    company: "Quantum Innovations",
    image: user3,
    text: "Trabajar con esta empresa fue un placer. Su atención al detalle y compromiso con la excelencia son encomiables. Se los recomendaría encarecidamente a cualquiera que busque un servicio de primer nivel.",
  },
  {
    user: "Jeffrey Mendoza B.",
    company: "Fusion Dynamics",
    image: user4,
    text: "Trabajar con el equipo fue un punto de inflexión para nuestro proyecto. Su atención al detalle y sus soluciones innovadoras nos ayudaron a alcanzar nuestros objetivos más rápido de lo que creíamos posible. ¡Estamos agradecidos por su experiencia y profesionalismo!",
  },
  {
    user: "Randy Milkynson",
    company: "Visionary Creations",
    image: user5,
    text: "Estoy sorprendido por el nivel de profesionalismo y dedicación mostrado por el equipo. Pudieron superar nuestras expectativas y ofrecer resultados sobresalientes.",
  },
  {
    user: "Pamela Kernel",
    company: "Synergy Systems",
    image: user6,
    text: "El equipo hizo todo lo posible para garantizar que nuestro proyecto fuera un éxito. Su experiencia y dedicación son incomparables. Espero volver a trabajar con ellos en el futuro.",
  },
];

export const features = [
  {
    icon: <Code />,
    text: "Desarrollo Web",
    description:
      "Desarrollo de aplicaciones web enfocadas a las necesidades de los clientes. Utilizando las mejores tecnologías en el frontend y backend.",
  },
  {
    icon: <PencilRuler />,
    text: "Diseño UI & UX",
    description:
      "Diseño de interfaces que ofrecen comodidad y mejor experiencia a los usuarios. Con adaptación a cualquier dispositivo.",
  },
  {
    icon: <Palette />,
    text: "Diseño Gráfico",
    description:
      "Creación de logos, ilustraciones, vectores, diseño para redes sociales, cátalogos, banners y todo tipo de línea gráfica.",
  },
  {
    icon: <Database />,
    text: "Bases de Datos",
    description:
      "Diseño y administración de bases de datos acorde al proyecto del cliente. Obteniendo una gestión de datos a gran escalabilidad.",
  },
  {
    icon: <Terminal />,
    text: "QA y Automatización",
    description:
      "Desarrollo de tests para asegurar la calidad del software. Automatizaciones de tareas o procesos que ahorrarán tiempo.",
  },
  {
    icon: <GlobeLock />,
    text: "Desarrollo Multiplataforma",
    description:
      "Desarrollo de aplicaciones multiplataforma, permitirá el acceso de la aplicación desde diferentes plataformas.",
  },
];

export const checklistItems = [
  {
    title: "Innovación Disruptiva",
    description:
      "Liderar la industria del desarrollo de software mediante la introducción de soluciones disruptivas que transformen sectores enteros y establezcan nuevos estándares de excelencia.",
  },
  {
    title: "Responsabilidad Social Corporativa",
    description:
      "Consolidar nuestro compromiso con la responsabilidad social corporativa, adoptando prácticas empresariales sostenibles y promoviendo el acceso equitativo a la tecnología en comunidades desfavorecidas.",
  },
  {
    title: "Marca de Confianza y Calidad",
    description:
      "Consolidar nuestra marca como sinónimo de confianza y calidad en el desarrollo de software, ganando reconocimiento a nivel mundial por nuestra integridad, transparencia y compromiso con la excelencia.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Comenzar" },
  { href: "#", text: "Documentación" },
  { href: "#", text: "Tutoriales" },
  { href: "#", text: "API" },
  { href: "#", text: "Comunidad" },
];

export const platformLinks = [
  { href: "#", text: "Noticias" },
  { href: "#", text: "Soporte" },
  { href: "#", text: "Requisitos" },
  { href: "#", text: "Descargas" },
  { href: "#", text: "Actualizaciones" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Reuniones" },
  { href: "#", text: "Conferencias" },
  { href: "#", text: "Hackatones" },
  { href: "#", text: "Trabajos" },
];

export const employees = [
  {
    name: "Eriksson Hernández",
    position: "CEO/CTO, Marketing Manager & Product Owner",
    image: employee1,
    url: "https://github.com/ErikssonHerlo",
  },
  {
    name: "Linda Morales",
    position: "Frontend Developer & UI/UX",
    image: fallbackImage,
    url: "https://github.com/",
  },
  {
    name: "James Gramajo",
    position: "Software Architect & Database Administrator",
    image: employee3,
    url: "https://github.com/",
  },
  {
    name: "Bryan de León",
    position: "Leader Finance, Security Architect & Backend Developer",
    image: employee4,
    url: "https://github.com/",
  },
  {
    name: "Jonathan Azurdia",
    position: "SCRUM Master & Project Manager",
    image: employee5,
    url: "https://github.com/",
  },
];
