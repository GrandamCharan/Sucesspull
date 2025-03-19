//Currently working on this page
// Course Page (Dynamic Route)
// This page will display the course details, materials, and questions
// It will also allow users to watch videos, answer questions, and track progress
// This is a sample page and should be replaced with actual data from API/DB
"use client"; // ✅ Ensures Client Component for State Management

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import SidebarToggle from "../../components/Sidebar/SidebarToggle";
import UserProfile from "../../components/UserProfile";

// Sample Course Data (Replace with API/DB data)
const courses = [
  {
    id: 1,
    title: "Ethical Leadership",
    description: "Learn business ethics and responsible leadership.",
    tags: ["Video", "Music"],
    materials: [
      {
        id: 1,
        title: "Topic of this Material",
        videoUrl: "/videos/sample.mp4",
        progress: 0, // Progress (0 to 100)
      },
      {
        id: 2,
        title: "Topic of this Material",
        videoUrl: "/videos/sample.mp4",
        progress: 50, // Progress (50% completed)
      },
      {
        id: 3,
        title: "Topic of this Material",
        videoUrl: "/videos/sample.mp4",
        progress: 20, // Progress (20% completed)
      },
      {
        id: 4,
        title: "Topic of this Material",
        videoUrl: "/videos/sample.mp4",
        progress: 75, // Progress (75% completed)
      },
    ],
    questions: [
      {
        id: 1,
        text: "Question placeholder Question placeholder Question placeholder?",
        answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
        correct: 0,
      },
      {
        id: 2,
        text: "Second question placeholder?",
        answers: ["option A", "option B", "option C", "option D"],
        correct: 1,
      },
      {
        id: 3,
        text: "Third question placeholder?",
        answers: ["choice 1", "choice 2", "choice 3", "choice 4"],
        correct: 2,
      },
    ],
  },
];

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id ? parseInt(params.id as string, 10) : null;
  const course = courses.find((c) => c.id === id);

  const [selectedMaterial, setSelectedMaterial] = useState(0); // Selected material index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold text-gray-600">
          🚫 Course Not Found
        </h1>
      </div>
    );
  }

  // Update progress (Just a sample function)
  const handleProgressChange = (materialIndex: number, newProgress: number) => {
    const updatedMaterials = [...course.materials];
    updatedMaterials[materialIndex].progress = newProgress;
    // Here you could update the state of materials or persist this data in DB
  };

  return (
    <SidebarToggle>
      <div className="max-w-5xl mx-auto p-6">
        {/* Back to Library */}
        <button
          onClick={() => router.push("/library")}
          className="text-gray-500 text-sm mb-4"
        >
          ← back to Library
        </button>

        {/* Course Header */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-gray-600">{course.description}</p>
            <div className="flex gap-2 mt-2">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 px-3 py-1 text-sm rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Materials List with Progress Bar */}
            <div className="mt-6">
              {course.materials.map((material, index) => (
                <div key={material.id} className="mb-4">
                  <button
                    onClick={() => setSelectedMaterial(index)}
                    className={`block w-full text-left py-2 px-4 rounded-md border ${
                      selectedMaterial === index
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {index + 1}. {material.title}
                  </button>
                  <div className="w-full bg-gray-300 rounded-full mt-2 h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${material.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Profile Component */}
          <UserProfile />
        </div>

        {/* Video & Question Section */}
        <div className="bg-gray-100 p-6 rounded-lg mt-6 shadow-md flex">
          {/* Video Player */}
          <div className="w-2/5">
            <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-md">
              <button className="text-gray-500 text-3xl">▶</button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Source from: XXXXXXXXXXXXX
            </p>
            <p className="text-xs text-gray-500">
              Hint: What to participate...
            </p>
          </div>

          {/* Question Section */}
          <div className="w-3/5 pl-6">
            <h3 className="text-lg font-semibold">Question</h3>
            <div className="flex space-x-2 mt-2">
              {course.questions.map((_, i) => (
                <span
                  key={i}
                  className={`w-6 h-6 text-center rounded-full text-xs font-semibold ${
                    currentQuestion === i
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>

            {/* Question Text */}
            <p className="mt-4">{course.questions[currentQuestion].text}</p>

            {/* Answer Options */}
            <div className="mt-4">
              {course.questions[currentQuestion].answers.map((answer, i) => (
                <button
                  key={i}
                  className="block w-full text-left py-2 px-4 bg-gray-200 rounded-md mb-2"
                >
                  {String.fromCharCode(65 + i)}. {answer}
                </button>
              ))}
            </div>

            {/* Next Question Button */}
            {currentQuestion < course.questions.length - 1 && (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="mt-4 text-blue-600 font-semibold"
              >
                NEXT Question →
              </button>
            )}
          </div>
        </div>
      </div>
    </SidebarToggle>
  );
}
