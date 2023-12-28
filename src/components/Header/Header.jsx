import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import "./Header.scss"

function Header() {
    return (
        <header className="header py-[46px]">
            <div className="container">
                <div className="flex justify-between">
                    <Logo/>
                    <Navigation/>
                </div>
            </div>
        </header>
    );
}

export default Header;