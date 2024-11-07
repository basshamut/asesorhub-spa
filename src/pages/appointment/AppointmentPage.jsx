import Navbar from "../../components/navbar/NavBar.jsx";
import Appointment from "../../components/appointment/Appointment.jsx";
import {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

export default function AppointmentPage() {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/asesorhub/login");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <Navbar/>
            <div className="tabview-container card">
                <Appointment/>
            </div>
        </div>
    );
}