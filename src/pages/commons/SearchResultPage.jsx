import Navbar from "../../components/navbar/NavBar.jsx";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function SearchResultPage() {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/asesorhub/login");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <Navbar />
            <div className="tabview-container card">
                <h1>Search Page</h1>
            </div>
        </div>
    );
}