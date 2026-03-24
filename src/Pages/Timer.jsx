import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

     
      <button
        onClick={() => setOpen(true)}
        className="bg-orange-500 text-white px-6 py-2 rounded-lg"
      >
        Open Modal
      </button>

      
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">

          <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md shadow-lg">

            <h2 className="text-lg font-semibold mb-2">
              Start Quiz
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Select your options before starting.
            </p>

            
            <select className="w-full border p-2 rounded mb-4">
              <option>5 Minutes</option>
              <option>10 Minutes</option>
              <option>15 Minutes</option>
            </select>

          
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  alert("Quiz Started!");
                  setOpen(false);
                }}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Start
              </button>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}
