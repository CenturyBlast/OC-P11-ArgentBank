import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/CallApi/authCall";
import { useNavigate } from "react-router-dom";

export default function Form() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token } = useSelector((state) => state.auth);

    const handleLoginEvent = (event) => {
        event.preventDefault();
        let userCredentials = { email, password };
        dispatch(loginUser(userCredentials));
    };

    useEffect(() => {
        if (token) {
            setEmail('');
            setPassword('');
            navigate('/user');
        }
    }, [token, navigate]);

    return (
        <form onSubmit={handleLoginEvent}>
            <div className="input_wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="on" />
            </div>
            <div className="input_wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input_remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    );
}



