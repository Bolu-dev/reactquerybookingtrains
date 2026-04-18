import { useQuery } from "@tanstack/react-query";
import { useUser } from "../auth/useUser"
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
    const{user} = useUser();

    const {isLoading, data: bookings, error} = useQuery({
        queryKey: ['bookings', user?.id],
        queryFn: () => getBookings(user?.id),
        enabled: !!user?.id, 

    })
    return { isLoading, bookings, error };
}

