import argentBankLogo from '../../data/argentBankLogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                </Link>
                <div>
                    <Link to="/sign-in" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        </header>
    );
}