import { Component } from "react";
import UpdateComponent from "../shared/WithCounter";

class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Click {count} Times</button>
            </div>
        )
    }

}

export default UpdateComponent(ClickCounter);