import { useState } from "react";

import { useCreateBookings } from "../features/bookings/useCreateBookings";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import { useTrainsById } from "../features/trains/useTrainsById";

import { useUser } from "../features/auth/useUser";

function BookingPage() {
  const { isLoading, trains } = useTrainsById();
  const { isPending, bookTrain } = useCreateBookings();
  const [seats, setSeats] = useState(1);

  console.log("train:", trains);

//   const userName = localStorage.getItem("userName");
const { user } = useUser();
const userName = user?.user_metadata?.fullName;
  const totalPrice = trains?.price * seats;
  

  function handleBooking() {
    if (!trains) return;

    const newBooking = {
      trainId: trains.id,
      userId: user?.id, // we'll add this when auth is done
      seats,
      totalPrice,
      status: "confirmed",
    };

    bookTrain(newBooking);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <h2 className="text-2xl font-bold text-train-dark mb-2">
        Confirm Booking
      </h2>
      <p className="text-stone-400 text-sm mb-8">
        Hey {userName}, review your trip before confirming!
      </p>

      {/* Train Details Card */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 mb-6">
        <img
          src="/speedtrain.jpg"
          alt="train"
          className="w-full h-40 object-cover rounded-xl mb-4"
        />

        <h3 className="font-bold text-train-dark text-xl mb-4">
          {trains?.name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <p className="font-bold text-2xl text-train-dark">
              {trains?.origin}
            </p>
            <p className="text-xs text-stone-400">{trains?.departureTime}</p>
          </div>
          <div className="text-train-orange font-bold text-2xl">→</div>
          <div className="text-center">
            <p className="font-bold text-2xl text-train-dark">
              {trains?.destination}
            </p>
            <p className="text-xs text-stone-400">{trains?.arrivalTime}</p>
          </div>
        </div>

        <div className="flex justify-between text-sm text-stone-400 border-t border-stone-100 pt-4">
          <p>
            Date:{" "}
            <span className="text-train-dark font-semibold">
              {trains?.date}
            </span>
          </p>
          <p>
            Available seats:{" "}
            <span className="text-train-dark font-semibold">
              {trains?.availableSeats}
            </span>
          </p>
        </div>
      </div>

      {/* Seats Selector */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 mb-6">
        <p className="font-semibold text-train-dark mb-4">Number of Seats</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSeats((s) => Math.max(1, s - 1))}
            className="w-10 h-10 rounded-full bg-train-orange-light text-train-orange font-bold text-xl"
          >
            −
          </button>
          <span className="text-2xl font-bold text-train-dark">{seats}</span>
          <button
            className="w-10 h-10 rounded-full bg-train-orange-light text-train-orange font-bold text-xl"
            onClick={() => setSeats((s) => Math.min(3, s + 1))}
          >
            +
          </button>
        </div>
        <p className="text-xs text-stone-400 mt-2">
          Maximum 3 seats per booking
        </p>
      </div>

      {/* Price Summary */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 mb-8">
        <div className="flex justify-between items-center">
          <p className="text-stone-400 text-sm">Price per seat</p>
          <p className="font-semibold text-train-dark">₦{trains?.price}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-stone-400 text-sm">Number of seats</p>
          <p className="font-semibold text-train-dark">{seats}</p>
        </div>
        <div className="flex justify-between items-center mt-4 border-t border-stone-100 pt-4">
          <p className="font-bold text-train-dark">Total</p>
          <p className="font-bold text-train-orange text-xl">₦{totalPrice}</p>
        </div>
      </div>

      {/* Confirm Button */}
      <Button disabled={isPending} onClick={handleBooking} type="primary">
        {isPending ? "Confirming..." : "Confirm Booking"}
      </Button>
    </div>
  );
}

export default BookingPage;
