import { useQuery } from "@tanstack/react-query";
import { Axios } from "../Api/axios";


export const useCaching = ({queryKey , url}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await Axios.get(`/${url}`);
      return data;
    },
  });
}