import { useQuery } from "@tanstack/react-query"
import {  useSearchParams } from "react-router"
import { getTrains } from "../../services/apiTrains"
import supabase from "../../services/supabase"

export function useTrains() {
    const [searchParams] = useSearchParams()

    const origin = searchParams.get('from')
    const destination = searchParams.get('to')

    const {
      isLoading,
      data: trains,
      error,
    } = useQuery({
      queryKey: ["trains", origin, destination],
      queryFn: ()=> getTrains({origin, destination})
    });
    return {
      isLoading,
     trains,
      error,
    }
    
}

export async function getTrainById(id) {
  const { data, error } = await supabase
    .from("trains")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Train could not be loaded");
  }

  return data;
}

