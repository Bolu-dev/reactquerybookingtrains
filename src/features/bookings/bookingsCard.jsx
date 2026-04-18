import { useCancelBooking } from "./useCancelBooking";
import Button from "../../ui/Button";

function BookingCard({ booking }) {
  const { isPending, cancelBookingById } = useCancelBooking();
  const { trains } = booking;
  const isCancelled = booking.status === "cancelled";

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm p-6 flex flex-col gap-4
      ${isCancelled ? "border-red-100 opacity-70" : "border-stone-100"}`}
    >
      {/* Status badge */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold uppercase px-3 py-1 rounded-full
          ${
            isCancelled
              ? "bg-red-50 text-red-400"
              : "bg-green-50 text-green-500"
          }`}
        >
          {isCancelled ? "Cancelled" : "Confirmed"}
        </span>
        <p className="text-xs text-stone-400">
          {new Date(booking.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Train info */}
      <div className="flex items-center gap-3">
        <img
          src="/speedtrain.jpg"
          alt="train"
          className="w-16 h-12 object-cover rounded-xl"
        />
        <div>
          <p className="text-xs text-stone-400 uppercase">Train</p>
          <p className="font-bold text-train-dark">{trains?.name}</p>
        </div>
      </div>

      {/* Route */}
      <div className="flex items-center justify-between">
        <div className="text-center">
          <p className="font-bold text-lg text-train-dark">{trains?.origin}</p>
          <p className="text-xs text-stone-400">{trains?.departureTime}</p>
        </div>
        <div className="text-train-orange font-bold">→</div>
        <div className="text-center">
          <p className="font-bold text-lg text-train-dark">
            {trains?.destination}
          </p>
          <p className="text-xs text-stone-400">{trains?.arrivalTime}</p>
        </div>
      </div>

      {/* Booking details */}
      <div className="flex justify-between text-sm border-t border-stone-100 pt-4">
        <div>
          <p className="text-stone-400">Seats</p>
          <p className="font-semibold text-train-dark">{booking.seats}</p>
        </div>
        <div>
          <p className="text-stone-400">Total</p>
          <p className="font-semibold text-train-orange">
            ₦{booking.totalPrice}
          </p>
        </div>
        <div>
          <p className="text-stone-400">Date</p>
          <p className="font-semibold text-train-dark">{trains?.date}</p>
        </div>
      </div>

      {/* Cancel button — only show if confirmed */}
      {!isCancelled && (
        <Button
          type="secondary"
          disabled={isPending}
          onClick={() => cancelBookingById(booking.id)}
        >
          {isPending ? "Cancelling..." : "Cancel Booking"}
        </Button>
      )}
    </div>
  );
}

export default BookingCard;
