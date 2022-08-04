import { LABEL } from "../../app/constants"
import AppButton from "../../components/AddButton"
import AppFormInput from "../../components/AddFormInput"

const StudentView = (props) => {
    const {nameValue, handleSubmit, handleNameChange, handleAddAgeClick, books, student} = props
    return (
        <div>
            <label>
                <AppFormInput id='student' label={LABEL["Student.label"].value} value={nameValue} onValueChange={handleNameChange}/>
            </label>
            <AppButton handleClick={handleSubmit} label={LABEL["Student.submit"].value}/>
            <div>
            <AppButton handleClick={handleAddAgeClick} label={LABEL["StudentAge.submit"].value}/>
            </div>
            <div>{student.name} {student.age}</div>
            <ul>
                {books.map(book => <li key={book}>{book}</li>)}
            </ul>
        </div>
    )
}

export default StudentView;