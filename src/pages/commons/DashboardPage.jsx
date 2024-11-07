import Navbar from "../../components/navbar/NavBar.jsx";
import Dashboard from "../../components/dashboard/Dashboard.jsx";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function DashboardPage() {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently} = useAuth0();
    const navigate = useNavigate();

    const callSecureApi = async () => {
        try {
            const token = await getAccessTokenSilently();
            console.log("Token: " + token);
            // const response = await fetch("https://mi-backend.com/secure-endpoint", {
            //     method: "GET",
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // });
            // const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        callSecureApi();
        if (!isLoading && !isAuthenticated) {
            navigate("/asesorhub/login");
        }
        if (!isLoading && isAuthenticated) {
            navigate("/asesorhub/dashboard");
        }
    }, [isAuthenticated, isLoading, navigate, loginWithRedirect]);

    return (
        <div>
            <Navbar/>
            <div>
                <Dashboard/>
            </div>
        </div>
    );
}

export default DashboardPage;