export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  stack: string[];
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "hris",
    title: "HRIS",
    category: "Human Resource Information System",
    description:
      "Web-based HR management system designed to help manage employee and company workforce processes.",
    longDescription:
      "A human resource information system built to support digital management of employee and HR-related processes within a company.",
    stack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/prtmafh/hris",
    featured: true,
  },

  {
    slug: "absensi",
    title: "Absensi",
    category: "Attendance Management System",
    description:
      "Web-based attendance system for managing employee attendance records and monitoring attendance data.",
    longDescription:
      "A web-based attendance management application focused on simplifying attendance recording and providing structured attendance data for management.",
    stack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/prtmafh/absensi",
    featured: true,
  },

  {
    slug: "listrik-pascabayar",
    title: "Listrik Pascabayar",
    category: "Payment System",
    description:
      "Web application for managing postpaid electricity payment processes and customer billing data.",
    longDescription:
      "A web-based application built to handle postpaid electricity billing and payment-related processes in a structured digital system.",
    stack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/prtmafh/listrik_pascabayar",
    featured: true,
  },

  {
    slug: "kontrakan",
    title: "Kontrakan",
    category: "Property Management",
    description:
      "Web-based rental management system for managing properties, tenants, and rental transactions.",
    longDescription:
      "A web application designed to help property managers handle rental data, tenant information, payment records, transaction history, and property searching.",
    stack: ["CodeIgniter 3", "PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/prtmafh/kontrakan",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
