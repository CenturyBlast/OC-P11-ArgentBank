import argentBankLogo from '../../data/argentBankLogo.webp';
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
    };

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav_logo">
                    <img className="main-nav_logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                </Link>
                <div>
                    {token ? (
                        <div className="main-nav-logged">
                            <div className="main-nav-logged_user">
                                <i className="fa fa-user-circle"></i>
                                {user.userName}
                            </div>
                            <Link to="/" className="main-nav_item" onClick={switchLogout}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                Sign Out
                            </Link>
                        </div>
                    ) : (
                        <Link to="/sign-in" className="main-nav_item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>)}
                </div>
            </nav>
        </header>
    );
}