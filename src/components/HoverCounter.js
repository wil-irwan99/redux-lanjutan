import { Component } from "react";
import UpdateComponent from "../shared/WithCounter";

class HoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hover {count} Times</h2>
            </div>
        )
    }

}

export default UpdateComponent(HoverCounter);