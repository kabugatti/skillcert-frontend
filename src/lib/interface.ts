import { JSX } from "react";

export interface WelcomePageBlockProps {
  icon: JSX.Element;
  text: string;
  figure: number;
}

export interface featuredCourseProps {
  id: number;
  title: string;
  description: string;
  img: string;
}

export const levels: CourseLevel[] = ["Beginner", "Intermediate", "Advanced"];
type CourseCategory =
  | "Web Development"
  | "Data Science"
  | "Design & UI/UX"
  | "DevOps & Cloud";
type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

interface Course {
  id: number;
  name: string;
  category: CourseCategory;
  level: CourseLevel;
  rating: number;
  students: number;
  description: string;
  duration: string;
  price: number;
  img?: string;
}

export const categories: CourseCategory[] = [
  "Web Development",
  "Data Science",
  "Design & UI/UX",
  "DevOps & Cloud",
];

interface CourseCardProps {
  course: Course;
}

interface FilterState {
  searchTerm: string;
  selectedCategories: CourseCategory[];
  selectedLevels: CourseLevel[];
}

export type {
  CourseCardProps,
  CourseCategory,
  CourseLevel,
  Course,
  FilterState,
};
