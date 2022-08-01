import { Component } from "react";

const WithToggle = (WrappedComponent) => {
    class WithToggles extends Component {
        state = {
            toggleStatus : false,
        }

        toggle = () => {
            this.setState({
                toggleStatus : !this.state.toggleStatus
            })
        }

        render() {
            return(
                <WrappedComponent {...this.props} toggle={this.toggle} toggleStatus={this.state.toggleStatus}/>
            );
        }

    }
    return WithToggles;
}

export default WithToggle;