import argentBankLogo from '../../data/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/Slices/authSlice';

export default function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const { token } = useSelector((state) => state.auth);

    const switchLogout = (event) => {
        event.preventDefault();
        dispatch(logout());
        navigate('/');
        console.log(user);
    };

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav_logo">
                    <img className="main-nav_logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                </Link>
                <div>
                    {token ? (<Link to="/" className="main-nav_item" onClick={switchLogout}>
                        <i className="fa fa-user-circle"></i>
                        {user.userName}{' '}
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        Sign Out
                    </Link>) : (<Link to="/sign-in" className="main-nav_item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>)}
                </div>
            </nav>
        </header>
    );
}