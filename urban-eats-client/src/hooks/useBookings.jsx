import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useBookings = () => {
    const axiosLocal = useAxiosPublic();
    const { user } = useAuth();
    const queryClient = useQueryClient();
      const { data: bookings=[],refetch } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await axiosLocal.get(`/bookings`);
            return res.data;
            
        }
    })
  
    // Invalidate query when user logs in or logs out
    useEffect(() => {
      if (user) {
        queryClient.invalidateQueries("bookings");
      }
    }, [user, queryClient]);
  
    return [bookings, refetch];
  };

export default useBookings;