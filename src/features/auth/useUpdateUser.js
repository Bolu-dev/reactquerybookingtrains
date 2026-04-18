import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUser } from "../../services/apiAuth";
import toast from "react-hot-toast";


export  function useUpdateUser() {
    const queryClient = useQueryClient();
   const {isPending, error, mutate: updateUserData} = useMutation({
    mutationFn: updateUser,
    onSuccess: ()=>{
        toast.success('Profile Updated susccessfully'),
        queryClient.invalidateQueries();
    },
    onError: (err) => toast.error(err.message)
    })
  return {isPending, error, updateUserData}

}
