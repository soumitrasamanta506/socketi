import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";

export const useFriends = function(){
    const {data: friends=[], isLoading: loadingFriends} = useQuery({
        queryKey: ["friends"],
        queryFn: getUserFriends
    });
    return { friends, loadingFriends };
}