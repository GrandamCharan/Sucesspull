import Image from "next/image";
import Link from "next/link";
import { Course } from "../../types/course";

interface CourseProps {
  course: Course;
}

export default function CourseCard({ course }: CourseProps) {
  return (
    <Link href={`/library/course/${course.id}`} className="block">
      <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 cursor-pointer w-64">
        {/* Image */}
        <div className="w-full h-48 rounded-md overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Course Title */}
        <h2 className="text-lg font-semibold mt-3">{course.title}</h2>
        <p className="text-gray-600 text-sm">{course.description}</p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
