import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cancelBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCancelBooking() {
    const queryClient = useQueryClient();

    const{isPending, errror, mutate: cancelBookingById}= useMutation({
        mutationFn: cancelBooking,
        onSuccess: ()=> {
            toast.success('Booking successfully canceled!'),
            queryClient.invalidateQueries({queryKey: ['bookings']})
        },
        onError: (err) => toast.error(err.message),
    })
    return { isPending, errror,cancelBookingById };
}

 
