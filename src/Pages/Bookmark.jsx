import CourseProgress from './CourseProgress';

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <CourseProgress 
        progress={25}
        completedLessons={3}
        totalLessons={6}
        nextLesson="Visual Storytelling Techniques"
      />
    </div>
  );
}