import { useRef, useEffect, useState, createContext, useContext } from "react";


const DropdownContext = createContext();

export function DropdownMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({ asChild, children }) {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  const trigger = asChild ? children : <button>{children}</button>;

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="cursor-pointer"
    >
      {trigger}
    </div>
  );
}

export function DropdownMenuContent({ children }) {
  const { isOpen } = useContext(DropdownContext);

  if (!isOpen) return null;

  return (
   <div className="absolute right-0 mt-2 w-full max-w-xs sm:w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">

      <div className="py-1">{children}</div>
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }) {
  const { setIsOpen } = useContext(DropdownContext);

  const handleClick = () => {
    onClick?.();
    setIsOpen(false); // Auto close on item click
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator() {
  return <div className="border-t border-gray-200 my-1" />;
}

export function useDropdownMenu() {
  return useContext(DropdownContext);
}
