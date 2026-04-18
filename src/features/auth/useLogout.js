import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { logout } from "../../services/apiAuth"
import toast from "react-hot-toast"

export function useLogout() {
    const naviagte = useNavigate()
    const queryClient = useQueryClient()
   

    const {isPending, mutate: logoutUser} = useMutation({
        mutationFn: logout,
        onSuccess: () =>{
              queryClient.invalidateQueries({ queryKey: ["user"] });
            toast.success('Loggedout Successful!')
            naviagte('/apphome')
        },
        onError: (err) => toast.error(err.message)
    })
    return{isPending, logoutUser}
}


