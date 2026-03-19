import React from 'react'

import { useState } from "react";

const coursesData = [
  {
    id: 1,
    category: "EXCEL BASICS",
    title: "Excel Basics: Formulas",
    questions: 5,
    level: "Beginner",
    progress: 80,
    image: "/public/basic.jpg",
  },
  {
    id: 2,
    category: "CODING",
    title: "Coding Fundamentals",
    questions: 5,
    level: "Intermediate",
    progress: 68,
    image: "/public/hello.jpg",
  },
  {
    id: 3,
    category: "TIME MANAGEMENT",
    title: "Time Management: Time Manager",
    questions: 5,
    level: "Beginner",
    progress: 48,
    image: "/public/timer.jpg",
  },
  {
    id: 4,
    category: "MARKETING",
    title: "Marketing: Fundamentals",
    questions: 5,
    level: "Beginner",
    progress: 80,
    image: "/public/fund.jpg",
  },
  {
    id: 5,
    category: "WRITING",
    title: "Writing: Fundamentals",
    questions: 5,
    level: "Intermediate",
    progress: 12,
    image: "/public/pen.jpg",
  },
  {
    id: 6,
    category: "LEADERSHIP",
    title: "Leadership: Fundamentals",
    questions: 5,
    level: "Intermediate",
    progress: 5,
    image: "/public/scrabble.jpg",
  },
];

export default function CourseGrid() {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleStart = (title) => {
    alert(`Starting quiz for: ${title}`);
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

              {/* Checkbox */}
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

              {/* Button */}
              <button
                onClick={() => handleStart(course.title)}
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Start Quick Quiz
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
