import { Component } from "react";

const WithText = WrappedComponent => {
    class HOC extends Component {
        render(){
            return <WrappedComponent/>
        }
    }
    return HOC
}

export default WithText;