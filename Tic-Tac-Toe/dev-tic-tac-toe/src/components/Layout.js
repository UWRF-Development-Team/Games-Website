import './styles/Layout.css';
//import logo from "../images/logo5.png";
import logo from "../images/logo_with_title.png";
import {React} from "react";
export default function Layout() {
    const listTitles = [<img id="falcon-two" src={logo} alt="Logo" />, <h3> Home </h3>, <h3> Projects </h3>,  ];
    const listItems = listTitles.map(item => <li className="nav-items" key={item}>{item}</li>);

    return (
         <>
            <nav>
                <ul className={"nav-list"}>{listItems}</ul>
            </nav>
        </>
    );
}