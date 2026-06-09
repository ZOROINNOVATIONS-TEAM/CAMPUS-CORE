import React, { useState } from "react";

const skills = [
{ name:"Python", category:"Technical"},
{ name:"Cloud", category:"Industry"},
{ name:"React", category:"Frontend"},
{ name:"SQL", category:"Database"},
{ name:"Communication", category:"Soft Skill"},
{ name:"Git", category:"Development"}
];

export default function CareerReadiness() {
  const [selected, setSelected] = useState([]);

  const toggleSkill = (skill) => {
    if (selected.includes(skill)) {
      setSelected(selected.filter((s) => s !== skill));
    } else {
      setSelected([...selected, skill]);
    }
  };

  const score = Math.round(
    (selected.length / skills.length) * 100
  );

  const missing = skills.filter(
    (skill) => !selected.includes(skill)
  );

  const level =
    score < 30
      ? "Explorer"
      : score < 60
      ? "Builder"
      : score < 85
      ? "Achiever"
      : "Industry Ready";

  return (
    <div className="mt-10 rounded-3xl p-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 shadow-2xl">

      <div className="bg-white rounded-3xl p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🚀 Career Readiness Hub
            </h2>

            <p className="text-gray-500 mt-2">
              Track skills • Measure readiness • Build your future
            </p>

          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-full font-bold shadow-lg">

            {level}

          </div>

        </div>

        {/* Skills */}

        <h3 className="font-semibold text-lg mb-4">
          Select Your Current Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`p-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105
              
              ${
                selected.includes(skill)
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                  : "bg-gray-100 hover:bg-blue-50"
              }`}
            >
              {selected.includes(skill) ? "✓ " : ""}
              {skill}
            </button>
          ))}

        </div>

        {/* Score */}

        <div className="mt-10">

          <div className="flex justify-between mb-3">

            <h3 className="font-bold text-lg">
              Employability Score
            </h3>

            <span className="font-bold text-blue-600">
              {score}%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">

            <div
              className="h-6 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition-all duration-700"
              style={{
                width: score + "%",
              }}
            />

          </div>

          <div className="mt-3 text-gray-600">

            {score < 30 &&
              "Start building your foundation."}

            {score >= 30 &&
              score < 70 &&
              "You're progressing well."}

            {score >= 70 &&
              "Excellent readiness level."}

          </div>

        </div>

        {/* Recommendations */}

        <div className="mt-10">

          <h3 className="font-bold text-lg mb-4">

            🎯 Recommended Next Skills

          </h3>

          {missing.length === 0 ? (

            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded transition-all duration-1000">

              🎉 Outstanding! All tracked skills selected.

            </div>

          ) : (

            <div className="grid gap-3">

              {missing.map((skill) => (

                <div
                  key={skill}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition"
                >

                  ✨ Learn {skill}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}