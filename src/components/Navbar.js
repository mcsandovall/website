import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <div className="name">
                <h3>Mario Sandoval</h3>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Recent Work</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;