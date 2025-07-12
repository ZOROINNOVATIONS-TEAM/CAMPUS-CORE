import { Info, Headphones, CalendarCheck, Mail, Phone } from "lucide-react";

export default function HelpSupport() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Help & Support</h3>
      <div className="flex flex-col gap-8">
        {/* Payment FAQs */}
        <div className="flex gap-4">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-full p-3 h-fit flex items-center">
            <Info className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="font-semibold text-gray-700 dark:text-gray-100 text-lg mb-0.5">Payment FAQs</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Find answers to common questions about fees and payments.
            </div>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
              View FAQs
            </a>
          </div>
        </div>

        {/* Contact Finance Office */}
        <div className="flex gap-4">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-full p-3 h-fit flex items-center">
            <Headphones className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="font-semibold text-gray-700 dark:text-gray-100 text-lg mb-0.5">Contact Finance Office</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Need help with your payment? Reach out to our finance team.
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <a href="mailto:finance@campuscore.edu" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                finance@campuscore.edu
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <a href="tel:5551234567" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Schedule Appointment */}
        <div className="flex gap-4">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-full p-3 h-fit flex items-center">
            <CalendarCheck className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="font-semibold text-gray-700 dark:text-gray-100 text-lg mb-0.5">Schedule an Appointment</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Book a meeting with a financial advisor for personalized help.
            </div>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
