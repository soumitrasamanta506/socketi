import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api.js";

export const useAuthUser = function(){
    const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, // auth check
  });

  return { isLoading: authUser.isLoading, authUser: authUser.data?.user};
};