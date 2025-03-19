import CourseCard from "./CourseCard";

export default function CourseList({ courses }: { courses: any[] }) {
  return (
    <div className="flex flex-wrap gap-6">
      {courses.length > 0 ? (
        courses.map((course) => <CourseCard key={course.id} course={course} />)
      ) : (
        <p className="text-gray-500">No courses match the selected filters.</p>
      )}
    </div>
  );
}
