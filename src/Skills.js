import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faDesktop, faBrain, faCalculator } from '@fortawesome/free-solid-svg-icons'
import PrograssBar from "./ProgressBar";

class Skills extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="skills" id="skills">
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 className="pb-2 border-bottom">Skills</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            </div>
                            <div>
                                <h2>squamous cell carcinoma </h2>
                                <PrograssBar w='50%' />
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            </div>
                            <div>
                                <h2>sarcoma</h2>
                                <PrograssBar w='60%' />
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            </div>
                            <div>
                                <h2>papillpma</h2>
                                <PrograssBar w='70%' />
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            </div>
                            <div>
                                <h2>osteonecrosis</h2>
                                <PrograssBar w='80%' />
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            </div>
                            <div>
                                <h2>lipoma</h2>
                                <PrograssBar w='90%' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;