import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export default function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { topic = "General Quiz", category = "Quizzes" } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      setLoading(true);
      const prompt = `Generate a quiz on the topic: "${topic} (${category})". 
      Return the response as a JSON object with a "questions" array. 
      Each question object should have:
      "id": (number),
      "question": (string),
      "options": (array of 4 objects with "id" (A, B, C, D) and "text" (string)),
      "correctAnswer": (string, e.g., "A")
      Return ONLY the JSON object. Do not include any markdown formatting like \`\`\`json.`;

      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: prompt
              }]
            }]
          })
        });

        const data = await response.json();
        console.log("Gemini API Response:", data);
        
        if (data.error) {
          throw new Error(`API Error: ${data.error.message}`);
        }

        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts[0].text) {
          throw new Error("Invalid API response structure");
        }

        let content = data.candidates[0].content.parts[0].text;
        content = content.replace(/```json\n?/, "").replace(/```/, "").trim();
        
        const quizData = JSON.parse(content);
        setQuestions(quizData.questions);
      } catch (error) {
        console.error("Error generating quiz:", error);
        // Fallback or error state
      } finally {
        setLoading(false);
      }
    };

    if (location.state) {
      fetchQuizData();
    } else {
        setLoading(false);
    }
  }, [topic, category, location.state]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Generating your personalized quiz for {topic}...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">No quiz data found!</h2>
          <p className="text-gray-600 mb-6">Please start a quiz from the dashboard.</p>
          <button 
            onClick={() => navigate("/dashboard/quiz")}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const currentSelected = selectedAnswers[currentIndex];

  const handleSelect = (optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: optionId
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (isFinished) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-orange-100">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl"><img src="/big.svg" alt="" /></span>
          </div>
          <h2 className="text-3xl font-black mb-2 text-gray-900">Well Done!</h2>
          <p className="text-gray-500 mb-8">You have completed the <span className="font-bold text-gray-700">{topic}</span> quiz.</p>
          
          <div className="mb-8">
            <div className="text-5xl font-black text-orange-500 mb-2">{percentage}%</div>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Your Score</p>
            <p className="text-lg font-bold text-gray-700 mt-1">{score} out of {questions.length} correct</p>
          </div>

          <button
            onClick={() => navigate("/dashboard/quiz")}
            className="w-full bg-[#EC5B13] text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-2xl">

      
        <p className="text-sm text-gray-400 mb-1">
          {category} &gt; {topic}
        </p>

        <h1 className="text-xl font-semibold mb-4">
          Quick Check: {topic}
        </h1>

       
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
          <p className="text-xs text-orange-500 font-semibold mb-1">
            CURRENT PROGRESS
          </p>

          <div className="flex justify-between text-sm font-medium mb-2">
            <span>Question {currentIndex + 1} of {questions.length}</span>
            <span className="text-orange-500">{Math.round(progress)}%</span>
          </div>

         
          <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
            <div 
              className="h-2 bg-orange-500 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-xs text-gray-400">
            {currentIndex + 1 === questions.length ? "Last question! You got this." : "Keep going, you're doing great!"}
          </p>
        </div>

     
        <h2 className="text-lg font-medium mb-4 min-h-[3rem]">
          {currentQuestion.question}
        </h2>

       
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((opt) => (
            <div
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition
                ${
                  currentSelected === opt.id
                    ? "border-orange-500 bg-orange-50"
                    : "bg-white hover:border-orange-200"
                }`}
            >
              <div className="flex items-center gap-3">
            
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-semibold
                    ${
                      currentSelected === opt.id
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {opt.id}
                </div>

                <p className="text-sm">{opt.text}</p>
              </div>

            
              {currentSelected === opt.id && (
                <span className="text-orange-500">✔</span>
              )}
            </div>
          ))}
        </div>

       
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`text-sm font-medium transition ${currentIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-gray-600"}`}
          >
            ← Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!currentSelected}
            className={`bg-orange-500 text-white px-8 py-2.5 rounded-lg flex items-center gap-2 shadow-md hover:bg-orange-600 transition transform active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none`}
          >
            {currentIndex === questions.length - 1 ? "Finish" : "Next"} →
          </button>
        </div>

      </div>
    </div>
  );
}
