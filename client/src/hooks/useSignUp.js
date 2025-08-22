import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api.js";

export default function useSignUp(){
    const queryClient = useQueryClient();

    const { mutate: signupMutation, isPending, error } = useMutation({
        mutationFn: signup,
        onSuccess: function(){
        queryClient.invalidateQueries({ queryKey: ["authUser"]})
        }
    });

    return { signupMutation, isPending, error};
}