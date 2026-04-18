import {  useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { login } from "../../services/apiAuth"
import toast from "react-hot-toast";

export function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const { isPending, mutate: loginUser } = useMutation({
      mutationFn: ({ email, password }) => login({ email, password }),
      onSuccess: (data) => {
         queryClient.setQueryData(["user"], data.user);
         toast.success(`Yoo Welcome back! 👋`);
         navigate("/search");
      },
      onError: (err) => toast.error(err.message)
    });
    return {isPending, loginUser}
}


