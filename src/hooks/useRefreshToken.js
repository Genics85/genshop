import useAuth from "./useAuth";
import axios from "../api/axios";
import { useEffect } from "react";

function useRefreshToken() {
  const { setAuth } = useAuth();

  
  const refresh = async () => {
    const response = await axios.get("user/refresh", {
      withCredentials: true,
    });
    const accessToken = response?.data?.accessToken;
    setAuth((prev) => {
      console.log(accessToken);
      console.log(JSON.stringify(prev));
      return { ...prev, accessToken: accessToken };
    });
    return accessToken;
  };
  return refresh;
}

export default useRefreshToken;
