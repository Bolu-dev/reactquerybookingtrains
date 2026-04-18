// ui/Button.jsx
import { Link } from "react-router";

function Button({ children, disabled, to, type = "primary", onClick }) {
  // Base styles that all buttons share
  const base =
    "inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ";

  // Styles for different versions
  const styles = {
    primary:
      base +
      " bg-train-orange text-white px-3 py-2 sm:px-6 sm:py-4 hover:bg-orange-600 focus:ring-train-orange",
    secondary:
      base +
      " bg-train-input text-train-gray-text px-4 py-2.5 sm:px-6 sm:py-3.5 border-2 border-train-border hover:bg-train-border focus:ring-stone-200",
    small:
      base + " px-3 py-1.5 md:px-5 md:py-2.5 text-xs bg-train-orange text-white",
  };

  // If we pass a 'to' prop, render a Link (for navigation)
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a regular button (for forms/actions)
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
