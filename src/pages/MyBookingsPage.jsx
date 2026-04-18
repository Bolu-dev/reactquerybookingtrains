import { useUser } from "../features/auth/useUser";
import BookingCard from "../features/bookings/bookingsCard";
import { useBookings } from "../features/bookings/useBookings";
// import { useCancelBooking } from "../features/bookings/useCancelBooking";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";

function MyBookingsPage() {
  const { isAuthenticated } = useUser();
  const { isLoading, bookings } = useBookings();
  console.log("bookings:", bookings);
  console.log("isLoading:", isLoading);

  if (!isAuthenticated)
    return (
      <div className="text-center mt-20 flex flex-col items-center gap-4">
        <p className="mb-5 text-stone-400">
          Hii there, i'm sorry, but you need to login😌
        </p>
        <Button type="primary" to={"/login"}>
          Login
        </Button>
      </div>
    );

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      <h2 className="text-2xl font-bold text-train-dark">My bookings</h2>

      {bookings?.length === 0 ? (
        <div className="text-center flex flex-col gap-4 mt-20 items-center">
          <p className="text-stone-400">
            You have no bookings, make sure to book below! 👇
          </p>
          <Button to="/search" type="primary">
            Book Train
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
         {bookings?.map((booking) => (
           <BookingCard key={booking.id} booking={booking} />
         ))}
        </div>
      )}
    </div>
  );
}

export default MyBookingsPage;
