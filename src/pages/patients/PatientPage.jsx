import {useEffect} from "react";
import Navbar from "../../components/navbar/NavBar.jsx";
import {TabPanel, TabView} from "primereact/tabview";
import './PatientPage.css';
import PatientForm from "../../components/form/patien/PatientForm.jsx";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

export default function PatientPage() {
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
                <TabView>
                    <TabPanel header="Nuevo ingreso">
                        <PatientForm type={"NEW"}/>
                    </TabPanel>
                    <TabPanel header="Paciente Existente">
                        <PatientForm type={"UPDATE"}/>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    );
}
