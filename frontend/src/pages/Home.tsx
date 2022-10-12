import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType } from "../@types/authContext";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const navigate = useNavigate();
  const { userData, setUserData } = useAuth() as AuthContextType;


  useEffect(() => {
    if (!userData?.token) {
      return navigate('/login')
    }
  }, [userData, navigate])

  return (
    <div className="App">
      <button type="button" onClick={() => setUserData(null)}>Log Out</button>
      <h1>IngaCode</h1>
    </div> 
  )
}
