import { useCurrentUser } from "./hooks/useCurrentUser";
import { Spinner } from "./components/ui/spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";

function App() {
  const navigate = useNavigate();
  const { data: user, isLoading, isError, error } = useCurrentUser();
  useEffect(() => {
    if (!isLoading && isError) {
      const status = (error as any).response?.status;
      if (status === 401 || status === 422) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [isLoading, isError, error, navigate]);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="h-8 w-8 text-indigo-600" />
      </div>
    );
  }

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <Navbar username={user.username} />
      <PostsList />
    </>
  );
}

export default App;
