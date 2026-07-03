import React, { useState } from "react";

const skills = [
  { name: "Python", category: "Programming" },
  { name: "Cloud", category: "Industry" },
  { name: "React", category: "Frontend" },
  { name: "SQL", category: "Database" },
  { name: "Communication", category: "Soft Skill" },
  { name: "Git", category: "Development Tool" },
];

const getCategoryColor = (category) => {
  switch (category) {
    case "Programming":
      return "bg-blue-100 text-blue-700";

    case "Industry":
      return "bg-green-100 text-green-700";

    case "Frontend":
      return "bg-purple-100 text-purple-700";

    case "Database":
      return "bg-orange-100 text-orange-700";

    case "Soft Skill":
      return "bg-pink-100 text-pink-700";

    case "Development Tool":
      return "bg-gray-200 text-gray-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function CareerReadiness() {
  const [selected, setSelected] = useState([]);

  const toggleSkill = (skillName) => {
    if (selected.includes(skillName)) {
      setSelected(selected.filter((s) => s !== skillName));
    } else {
      setSelected([...selected, skillName]);
    }
  };

  const resetSkills = () => {
    setSelected([]);
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

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-full font-bold shadow-lg">
            {level}
          </div>

        </div>

        {/* Top Actions */}
        <div className="flex justify-between items-center mb-6">

          <div>
            <h3 className="font-bold text-lg">
              Select Current Skills
            </h3>

            <p className="text-sm text-gray-500">
              Selected: {selected.length}/{skills.length}
            </p>
          </div>

          <button
            onClick={resetSkills}
            className="bg-red-100 text-red-600 px-4 py-2 rounded-xl hover:bg-red-200 transition"
          >
            Reset
          </button>

        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {skills.map((skill) => (

            <button
              key={skill.name}
              onClick={() => toggleSkill(skill.name)}
              className={`rounded-2xl p-4 text-left transition-all duration-300 ${
                selected.includes(skill.name)
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105"
                  : "bg-gray-100 hover:bg-blue-50"
              }`}
            >

              <div className="font-bold">
                {selected.includes(skill.name) ? "✓ " : ""}
                {skill.name}
              </div>

              <div
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                  skill.category
                )}`}
              >
                {skill.category}
              </div>

            </button>

          ))}

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
              style={{ width: '${score}% '}}
            />

          </div>

          <p className="mt-3 text-gray-600">

            {score < 30 &&
              "Start building your foundations."}

            {score >= 30 &&
              score < 70 &&
              "Good progress. Continue improving."}

            {score >= 70 &&
              "Excellent readiness level."}

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
