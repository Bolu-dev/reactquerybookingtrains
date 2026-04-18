import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router"
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const navigate = useNavigate();

    const {
      isPending,
      error,
      mutate: signupUser,
    } = useMutation({
      mutationFn: signup,
      onSuccess: () => {
        toast.success("Account created successfully! 🎉");
        navigate("/search");
      },
      onError: (err) => toast.error(err.message),
    });

    return { isPending, signupUser, error };
}


