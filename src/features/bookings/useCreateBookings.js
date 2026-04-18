import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateBookings() {
  const navigate = useNavigate();

  const {
    isPending,
    error,
    mutate: bookTrain,
  } = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success("Booking Succesful!");
      navigate("/mybookings");
    },
    onError: (err) => toast.error(err.message)
  });

return {
  isPending,
  error,
  bookTrain,
};
}
