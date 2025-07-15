import React from "react";
import { format } from "date-fns";

export function WelcomeBanner({ adminName = "Admin" }) {
  const today = format(new Date(), "EEEE, MMMM d, yyyy");

  return (
    <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 dark:from-blue-600 dark:via-indigo-700 dark:to-violet-700 rounded-2xl text-white p-8 shadow-sm">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold">Welcome, {adminName}</h1>
        <p className="text-lg mt-2 opacity-90">{today}</p>
      </div>
    </section>
  );
}
