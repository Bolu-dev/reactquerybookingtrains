// import { Link, NavLink } from "react-router-dom";

// function NavBar() {
//   return (
//     <header className="bg-train-orange-light py-3 px-4 uppercase border-b border-stone-200 flex items-center justify-between">
//       <Link to="/" className="tracking-widest text-train-orange font-bold">
//         Train.io
//       </Link>

//       <nav className="flex items-center text-sm gap-6">
//         <NavLink
//           to="/search"
//           className={({ isActive }) =>
//             `transition-colors duration-200 ${
//               isActive
//                 ? "text-train-orange font-semibold"
//                 : "text-stone-500 hover:text-train-orange"
//             }`
//           }
//         >
//           Trains
//         </NavLink>

//         <NavLink
//           to="/mybookings"
//           className={({ isActive }) =>
//             `transition-colors duration-200 ${
//               isActive
//                 ? "text-train-orange font-semibold"
//                 : "text-stone-500 hover:text-train-orange"
//             }`
//           }
//         >
//           Bookings
//         </NavLink>

//         <NavLink
//           to="/login"
//           className={({ isActive }) =>
//             `transition-colors duration-200 ${
//               isActive
//                 ? "text-train-orange font-semibold"
//                 : "text-stone-500 hover:text-train-orange"
//             }`
//           }
//         >
//           Login
//         </NavLink>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { useLogout } from "../features/auth/useLogout";

function NavBar() {
  const { isAuthenticated } = useUser();
  const { logoutUser, isPending } = useLogout();

  return (
    <header className="bg-train-orange-light py-3 px-4 uppercase border-b border-stone-200 flex items-center justify-between">
      <Link
        to="/apphome"
        className="tracking-widest text-train-orange font-bold mr-4 text-sm"
      >
        (Train.io)
      </Link>

      <nav className="flex items-center text-xs gap-3 sm:text-sm sm:gap-6">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-train-orange font-semibold"
                : "text-stone-500 hover:text-train-orange"
            }`
          }
        >
          Trains
        </NavLink>

        <NavLink
          to="/mybookings"
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-train-orange font-semibold"
                : "text-stone-500 hover:text-train-orange"
            }`
          }
        >
          Bookings
        </NavLink>

        {isAuthenticated ? (
          <>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-train-orange font-semibold"
                    : "text-stone-500 hover:text-train-orange"
                }`
              }
            >
              Profile
            </NavLink>

            <button
              onClick={logoutUser}
              disabled={isPending}
              className="transition-colors duration-200 text-stone-500 hover:text-train-orange disabled:opacity-50"
            >
              {isPending ? "..." : "Logout"}
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-train-orange font-semibold"
                  : "text-stone-500 hover:text-train-orange"
              }`
            }
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default NavBar;