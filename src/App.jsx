import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom' // Import necessary components
import 'primereact/resources/themes/lara-light-green/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import LoginPage from "./pages/commons/LoginPage.jsx"
import DashboardPage from "./pages/commons/DashboardPage.jsx"
import PatientPage from "./pages/patients/PatientPage.jsx"
import DeletePatientPage from "./pages/patients/DeletePatientPage.jsx"
import SearchResultPage from "./pages/commons/SearchResultPage.jsx"
import AppointmentPage from "./pages/appointment/AppointmentPage.jsx"
import VaccineAndTreatmentControlPage from "./pages/vaccine/VaccineAndTreatmentControlPage.jsx"
import {getSession, SESSION_DURATION} from "./utils/session.jsx";
import {useEffect} from "react";

function InnerApp() {
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            const sessionUser = getSession()
            if (!sessionUser) {
                navigate('/asesorhub/login')
            }
        }, SESSION_DURATION) // Verifica cada 1 minuto
        return () => clearInterval(interval)
    }, [])

    return (
        <>

            <Routes>
                <Route path="/asesorhub" element={<LoginPage/>}/>
                <Route path="/asesorhub/login" element={<LoginPage/>}/>
                <Route path="/asesorhub/dashboard" element={<DashboardPage/>}/>
                <Route path={"/asesorhub/new-patient"} element={<PatientPage/>}/>
                <Route path="/asesorhub/delete-patient" element={<DeletePatientPage/>}/>
                <Route path="/asesorhub/search-result" element={<SearchResultPage/>}/>
                <Route path="/asesorhub/apointment" element={<AppointmentPage/>}/>
                <Route path="/asesorhub/vaccine" element={<VaccineAndTreatmentControlPage/>}/>
            </Routes>
        </>
    )

}

function App() {
    return (
        <>
            <div className="App">
                <Router>
                    <InnerApp/>
                </Router>
            </div>
        </>
    )
}

export default App