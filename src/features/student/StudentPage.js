import {Component} from 'react';
import {addAgeAction, changeNameAction} from './state/StudentAction';
import {connect} from "react-redux";
import PropTypes from "prop-types";

class StudentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {nameValue : ''};
    }

    handleNameChange = (event) => this.setState({
        nameValue : event.target.value
    })

    handleSubmit = () => this.props.changeNameAction(this.state.nameValue)

    handleAddAgeClick = () => this.props.addAgeAction()

    render(){
        return (
            this.props.view({
                nameValue : this.state.nameValue,
                handleSubmit : this.handleSubmit,
                handleNameChange : this.handleNameChange,
                handleAddAgeClick : this.handleAddAgeClick,
                student : this.props.student,
                books : this.props.studentBook.books
            })
        )
    }
}

const mapDispatchToProps = {
    addAgeAction,
    changeNameAction
}

const mapStateToProps = state => {
    return {
        student : state.studentReducer,
        studentBook : state.bookReducer,
    }
}

StudentPage.propsTypes = {
    student : PropTypes.shape({
        name : PropTypes.string,
        age : PropTypes.number
    }).isRequired,
    addAgeAction : PropTypes.func,
    changeNameAction : PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps) (StudentPage);