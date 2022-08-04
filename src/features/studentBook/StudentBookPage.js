import { Component } from "react";
import {connect} from "react-redux";
import {addStudentBookAction} from "./state/StudentBookAction"
import BookService from "../../services/BookService";
import { withDep } from "../../WithDep";

class StudentBookPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newBookValue : '',
            isLoading : false
        }
        this.service = props.BookService
    }

    onNewBookChange = (event) => this.setState({newBookValue : event.target.value})

    onSubmitStudentBook = () => {
        this.props.addBookAction({
            student : this.props.studentReducer,
            book : this.state.newBookValue
        })
    }

    onPostStudentBook = async () => {
        this.setState({
            isLoading : true
        })
        try {
            const response = await this.service.postBook(this.props.studentBook)
        } catch (e) {
            alert('oops...something went wrong')
        } finally {
            this.setState({
                isLoading : false
            })
        }

    }

    render() {
        return(
            this.props.view({
                newBookValue : this.state.newBookValue,
                handleSubmit : this.onSubmitStudentBook,
                handleNewBookChange : this.onNewBookChange,
                handlePostBook : this.onPostStudentBook,
                student : this.props.student,
                books : this.props.studentBook.books,
                isLoading : this.state.isLoading
            })
        );
    }
}

const mapDispatchToProps = {
    addBookAction : addStudentBookAction
}

const mapStateToProps = state => {
    return {
        studentBook : state.bookReducer,
        student : state.studentReducer
    }
}

const redux = connect(mapStateToProps, mapDispatchToProps)(StudentBookPage);
export default withDep(redux, ['BookService']);