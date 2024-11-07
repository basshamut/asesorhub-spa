import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import 'primeflex/primeflex.css';
import './Login.css';
import {useAuth0} from "@auth0/auth0-react";

const Login = () => {
    const {loginWithRedirect} = useAuth0()

    return (
        <div className="login-container">
            <Card title="Iniciar Sesión" className="login-card">
                <img src="/asesorhub/logo.svg" alt="Logo" className="login-logo"/>
                <Button label="Iniciar Sesión" className="p-mt-2" onClick={() => loginWithRedirect()}/>
            </Card>
        </div>
    );
};

export default Login;
