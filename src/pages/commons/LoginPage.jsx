import Login from "../../components/login/Login.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
    const { isAuthenticated, isLoading, loginWithRedirect} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate("/asesorhub/login");
        }
        if (!isLoading && isAuthenticated) {
            navigate("/asesorhub/dashboard");
        }
    }, [isAuthenticated, isLoading, navigate, loginWithRedirect]);

    return <Login />;
}

export default LoginPage;
