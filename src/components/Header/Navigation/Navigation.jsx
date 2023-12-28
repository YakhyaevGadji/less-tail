import "./Navigation.scss"

function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="list__item">
                    <a className="list__item_link list__item_link-active" href="#">Home</a>
                </li>
                <li className="list__item">
                    <a className="list__item_link" href="#">Works</a>
                </li>
                <li className="list__item">
                    <a className="list__item_link" href="#">Services</a>
                </li>
                <li className="list__item">
                    <a className="list__item_link" href="#">About</a>
                </li>
                <li className="list__item">
                    <a className="list__item_link" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;