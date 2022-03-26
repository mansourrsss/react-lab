import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            ahmed mansour
                        </a>
                        <span className="text-muted">| anything</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://twitter.com/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://facebook.com/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer;