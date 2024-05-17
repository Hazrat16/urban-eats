import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "./useAxiosLocal";

const useBookings = () => {
    const axiosLocal = useAxiosLocal();
    const { data: bookings=[],isPending: loading,refetch } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await axiosLocal.get(`/bookings`);
            return res.data;
            
        }
    })
    return [bookings, loading,refetch]
}

export default useBookings;