import './styles/Layout.css';
export default function Layout() {
    const listTitles = ["Home", "Projects"];
    const listItems = listTitles.map(item => <li key={item}>{item}</li>);

    return (
        <div>
            <nav>
                <img id="falcon-two" src="images/DT%20Logo%206.png" alt="Logo" />
                <h3 id="title">UWRF Development Team</h3>
                <ul>{listItems}</ul>
            </nav>
        </div>
    );
}