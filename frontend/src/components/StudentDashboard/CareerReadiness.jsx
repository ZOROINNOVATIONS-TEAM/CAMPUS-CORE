import React, { useState } from "react";

const skills = [
  { name: "Python", category: "Technical" },
  { name: "Cloud", category: "Industry" },
  { name: "React", category: "Frontend" },
  { name: "SQL", category: "Database" },
  { name: "Communication", category: "Soft Skill" },
  { name: "Git", category: "Development" },
];

export default function CareerReadiness() {
  const [selected, setSelected] = useState([]);

  const toggleSkill = (skillName) => {
    if (selected.includes(skillName)) {
      setSelected(selected.filter((s) => s !== skillName));
    } else {
      setSelected([...selected, skillName]);
    }
  };

  const score = Math.round(
    (selected.length / skills.length) * 100
  );

  const missing = skills.filter(
    (skill) => !selected.includes(skill.name)
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
    <div className="mt-10 rounded-3xl p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-2xl">

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

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-full font-bold">

            {level}

          </div>

        </div>

        {/* Skill Selection */}

        {/* Skill Selection */}

<div className="flex justify-between items-center mb-5">

  <h3 className="font-bold text-lg">

    Select Current Skills

  </h3>

  <button
    onClick={() => setSelected([])}
    className="px-4 py-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200"
  >

    Reset

  </button>

</div>

{/* Selected Skills Counter */}

<div className="mb-4 flex justify-between items-center">

  <span className="text-gray-600 font-medium">

    Selected Skills

  </span>

  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-bold shadow-sm">

    {selected.length} / {skills.length}

  </span>

</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  
</div>
        {/* Score */}

        <div className="mt-10">

          <div className="flex justify-between mb-3">

            <span className="font-bold text-lg">

              Employability Score

            </span>

            <span className="font-bold text-blue-600">

              {score}%

            </span>

          </div>

          <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden">

            <div
              className="h-6 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition-all duration-700"
              style={{ width: score + "%" }}
            ></div>

          </div>

          <p className="mt-3 text-gray-600">

            {score < 30
              ? "Start building your foundations"
              : score < 70
              ? "Good progress. Continue improving"
              : "Excellent readiness level"}

          </p>

        </div>

        {/* Recommendations */}

        <div className="mt-10">

          <h3 className="font-bold text-lg mb-4">

            🎯 Recommended Next Skills

          </h3>

          {missing.length === 0 ? (

            <div className="rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white p-5 font-semibold">

              🎉 Amazing! You completed all tracked skills.

            </div>

          ) : (

            <div className="grid gap-3">

              {missing.map((skill) => (

                <div
                  key={skill.name}
                  className="rounded-2xl p-4 bg-gradient-to-r from-purple-50 to-blue-50 hover:shadow-lg transition"
                >

                  <div className="font-semibold">

                    ✨ Learn {skill.name}

                  </div>

                  <div className="text-sm text-gray-500">

                    {skill.category}

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}