export function Avatar({ children }) {
  return (
    <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-full border border-gray-300 bg-gray-100">
      {children}
    </div>
  );
}


export function AvatarFallback({ children }) {
  return (
    <span className="flex h-full w-full items-center justify-center text-sm font-medium text-gray-600">
      {children}
    </span>
  );
}
