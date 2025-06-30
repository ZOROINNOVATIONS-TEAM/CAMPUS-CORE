export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded-md font-semibold text-xs transition";
  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50"
  };
  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
