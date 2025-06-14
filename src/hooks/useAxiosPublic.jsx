import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-seven-silk.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;