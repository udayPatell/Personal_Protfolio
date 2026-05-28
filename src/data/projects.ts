export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  url: string;
  github?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "movie-ticket-booking",
    title: "Movie Ticket Booking Website",
    description:
      "A web-based platform for browsing movies, selecting showtimes, reserving seats, and making secure online payments.",
    longDescription:
      "Built a full-featured movie ticket booking platform with real-time seat availability, e-ticket generation, user authentication, and promotional offers. Integrated RazorPay for seamless and secure online payments, delivering a smooth end-to-end booking experience.",
    tags: ["React", "Node.js", "MongoDB", "Express", "RazorPay"],
    url: "#",
    github: "https://github.com/udaypatell",
    featured: true,
    year: "2025",
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    description:
      "A responsive system to manage employee data with add, edit, delete, and view functionalities.",
    longDescription:
      "Developed a responsive Employee Management System using React.js with component-based architecture, state management, and form validation for efficient data handling. Integrated REST APIs for dynamic data operations and delivered a user-friendly interface with a modern UI design.",
    tags: ["React", "JavaScript", "HTML", "CSS", "REST API"],
    url: "#",
    github: "https://github.com/udaypatell",
    featured: true,
    year: "2024",
  },
];
