import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    category: "EXCEL BASICS",
    title: "Excel Basics: Formulas",
    questions: 5,
    level: "Beginner",
    progress: 80,
    image: "/basic.jpg",
  },
  {
    id: 2,
    category: "CODING",
    title: "Coding Fundamentals",
    questions: 5,
    level: "Intermediate",
    progress: 68,
    image: "/hello.jpg",
  },
  {
    id: 3,
    category: "TIME MANAGEMENT",
    title: "Time Management: Time Manager",
    questions: 5,
    level: "Beginner",
    progress: 48,
    image: "/timer.jpg",
  },
  {
    id: 4,
    category: "MARKETING",
    title: "Marketing: Fundamentals",
    questions: 5,
    level: "Beginner",
    progress: 80,
    image: "/fund.jpg",
  },
  {
    id: 5,
    category: "WRITING",
    title: "Writing: Fundamentals",
    questions: 5,
    level: "Intermediate",
    progress: 12,
    image: "/pen.jpg",
  },
  {
    id: 6,
    category: "LEADERSHIP",
    title: "Leadership: Fundamentals",
    questions: 5,
    level: "Intermediate",
    progress: 5,
    image: "/scrabble.jpg",
  },
];

export default function CourseGrid() {
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeCourse, setActiveCourse] = useState(null);
  const [timeLimit, setTimeLimit] = useState(5);
  const navigate = useNavigate();

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleStartQuickQuiz = (course) => {
    setActiveCourse(course);
    setShowModal(true);
  };

  const handleStartQuiz = () => {
    if (!activeCourse) return;
    setShowModal(false);
    navigate("/dashboard/quiz-page", { 
      state: { 
        courseId: activeCourse.id,
        topic: activeCourse.title,
        category: activeCourse.category,
        timeLimit: timeLimit
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full mx-auto grid md:grid-cols-3 gap-6">

        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              <input
                type="checkbox"
                checked={selected.includes(course.id)}
                onChange={() => toggleSelect(course.id)}
                className="absolute top-3 left-3 w-4 h-4"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-xs text-orange-500 font-bold mb-6">
                {course.category}
              </p>

              <h3 className="text-xl font-bold mb-5">
                {course.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span>🕒 {course.questions} Questions</span>
                <span className="bg-orange-100 text-orange-500 px-2 py-0.5 rounded">
                  {course.level}
                </span>
              </div>

              {/* Progress */}
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              {/* Open Modal */}
              <button
                onClick={() => handleStartQuickQuiz(course)}
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Start Quick Quiz
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MODAL */}
{showModal && (
  <div
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    onClick={() => setShowModal(false)}
  >
    <div
      className="bg-white w-[95%] max-w-lg rounded-2xl p-6 shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">
          Configure Your Quiz
        </h2>
        <button
          onClick={() => setShowModal(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      <p className="text-sm text-gray-400 mb-6">
        Personalize your learning session for {activeCourse?.title}.
      </p>

      {/* TIME SECTION 1 */}
      <div className="mb-6">
        <p className="text-lg font-bold text-black mb-5 flex items-center gap-2">
          <img src="/clock.svg" alt="" /> TIME PER QUIZ (MINUTES)
        </p>

        <div className="flex gap-3 mb-5">
          {[5, 10, 15, 20].map((time) => (
            <button
              key={time}
              onClick={() => setTimeLimit(time)}
              className={`px-4 py-2 rounded-lg border text-sm ${
                timeLimit === time
                  ? "bg-[#EC5B13] text-white border-[#EC5B13]"
                  : "bg-white text-gray-600"
              }`}
            >
              {time}m
            </button>
          ))}
        </div>

        <input
          type="number"
          placeholder="Or enter custom duration"
          className="w-full border border-gray-100 rounded-lg px-3 py-2 text-sm"
          onChange={(e) => setTimeLimit(Number(e.target.value))}
        />
      </div>

      {/* TOTAL TIME */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-sm text-gray-400">
          Estimated total time:
        </span>
        <span className="text-[#EC5B13] font-semibold">
          {timeLimit} minutes
        </span>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 mb-5">
        <button
          onClick={() => setShowModal(false)}
          className="w-1/2 border rounded-lg py-2 text-gray-600"
        >
          Cancel
        </button>

        <button
          onClick={handleStartQuiz}
          className="w-1/2 bg-[#EC5B13] text-white py-2 rounded-lg flex items-center justify-center gap-2"
        >
          Start Quiz →
        </button>
      </div>
    </div>
  </div>
)}
     
    </div>
  );
}
