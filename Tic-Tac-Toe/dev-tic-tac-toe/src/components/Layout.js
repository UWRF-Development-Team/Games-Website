import './styles/Layout.css';
import logo from "../images/logo5.png"
export default function Layout() {
    const listTitles = [<h3> Home </h3>, <h3> Projects </h3>];
    const listItems = listTitles.map(item => <li className="nav-items" key={item}>{item}</li>);

    return (
            <div>
            <nav>
                <img id="falcon-two" src={logo} alt="Logo" />
                <h3 id="title">UWRF Development Team</h3>
                <ul>{listItems}</ul>
            </nav>
        </div>
    );
}