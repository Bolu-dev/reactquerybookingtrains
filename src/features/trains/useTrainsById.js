import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router"
import { getTrainById } from "./useTrains";

export function useTrainsById() {

    const{id} = useParams();
    const {isLoading, data: trains, error} = useQuery({
        queryKey: ['trains', id],
        queryFn: () => getTrainById(id),
    })
    return {isLoading, trains, error}
}

