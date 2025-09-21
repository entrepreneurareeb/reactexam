import { useNavigate } from "react-router";

const useAuth = () => {
  const navigate = useNavigate();
  
  const isLoggedIn = (): boolean => {
    const isLogin = localStorage.getItem("isLoggedIn");
    
    if (!isLogin) {
      navigate("/login");
      return false;
    }

    return true;
  };

  return { isLoggedIn };
};

export default useAuth;
