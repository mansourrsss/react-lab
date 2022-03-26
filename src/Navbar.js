function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="home">first</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#hero">second</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#objective">third</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">fourth</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portofolio">fifth</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;