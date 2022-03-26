import React from "react";
import './Firstcomp.css'

class Firstcomp extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        console.log("DID MOUNT");
    }

    componentDidUpdate() {
        console.log("DID UPDATE");
    }

    componentWillUnmount() {
        console.log("Will unmount");
    }
    render() {
        return (
            <div className="first">
                <h1 className="ss p-3 m-2 my-5">Mansourrsss</h1>
                <p className="hhh p-4 m-3">i'M JACK'S WASTED LIFE</p>
                <button className="btn btn-light m-5 w-20">CLICK</button>
            </div>
        )
    }
}

export default Firstcomp;