import { axiosInstance } from "./axios.js";

export const signup = async function(signupData){
    const response = await axiosInstance.post("/auth/signup", signupData);
    return response.data;
};

export const login = async function(loginData){
    const response = await axiosInstance.post("/auth/login", loginData);
    return response.data;
};

export const logout = async function(){
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
};

export const getAuthUser = async function(){
    try{
        const res = await axiosInstance.get("/auth/me");
        return res.data;
    }catch(error){
        console.log("Error in getAuthUser : ", error.message);
        return null;
    }
};

export const completeOnboarding = async function(userData){
    const response = await axiosInstance.post("/auth/onboarding", userData);
    return response.data;
};

export const getUserFriends = async function(){
    const response = await axiosInstance.get("/users/friends");
    return response.data;
};

export const getRecommendedUsers = async function(){
    const response = await axiosInstance.get("/users");
    return response.data;
};

export const getOutgoingFriendReqs = async function(){
    const response = await axiosInstance.get("/users/outgoing-friend-requests");
    return response.data;
};

export const sendFriendRequest = async function(userId){
    const response = await axiosInstance.post(`/users/friend-request/${userId}`);
    return response.data;
};

export const getFriendRequests = async function(){
    const response = await axiosInstance.get("/users/friend-requests");
    return response.data;
};

export const acceptFriendRequest = async function(requestId){
    const response = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
    return response.data;
};

export const getStreamToken = async function(){
    const response = await axiosInstance.get("/chat/token");
    return response.data;
}