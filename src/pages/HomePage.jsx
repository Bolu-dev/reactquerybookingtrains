import { useUser } from "../features/auth/useUser";
import CreateUser from "../features/user/CreateUser";
import Button from "../ui/Button";

function HomePage() {
  const { isAuthenticated, user } = useUser();
  const userName = user?.user_metadata?.fullName;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/newtrain2.png')" }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen bg-black/50 flex items-center justify-center px-4">
        <div className="mx-auto max-w-3xl my-5 px-4 text-center sm:my-15 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="mb-20 text-3xl font-bold tracking-tight text-train-bg md:text-5xl">
            Comfort from your space.
            <br />
            <span className="text-train-orange">
              Making Bookings easy, straight to your seat.
            </span>
          </h1>
          {/* <CreateUser /> */}
          {isAuthenticated ? (
            <>
              <p className="text-train-bg mb-3">Heyy, {userName} </p>
              <Button to="/search" type="primary">
                Continue Booking 🚆
              </Button>
            </>
          ) : (
            <Button to="/login" type="primary">
              Get Started 
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// import CreateUser from "../features/user/CreateUser";

// function HomePage() {
//   return (
//     // bg-train-hero: uses the image we defined
//     // bg-cover: ensures the image fills the space
//     <div className="relative min-h-[80vh] bg-train-hero bg-cover bg-center rounded-3xl overflow-hidden my-6 mx-4">
//       {/* 1. The Dark Overlay (makes the text pop) */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* 2. The Content Wrapper (Needs 'relative' to sit above the overlay) */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[80vh] px-4 text-center">
//         <h1 className="mb-8 text-2xl font-bold text-white md:text-5xl drop-shadow-lg">
//           Comfort from your space.
//           <br />
//           <span className="text-train-orange">
//             Making Bookings easy, straight to your seat.
//           </span>
//         </h1>

//         <div className="bg-white/90 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
//           <CreateUser />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
