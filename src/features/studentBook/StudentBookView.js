import { LABEL } from "../../app/constants"
import AppButton from "../../components/AddButton"
import AppFormInput from "../../components/AddFormInput"

const StudentBookView = (props) => {
    const {handleSubmit, handlePostBook, isLoading, books, newBooksValue, handleNewBookChange, student} = props
    return (
        <>
            <div>
                <h2>Book</h2>
                <div>{student.name}</div>
                <AppFormInput id='book' label={LABEL["Book.label"].value} value={newBooksValue} onValueChange={handleNewBookChange}/>
                <AppButton handleClick={handleSubmit} label={LABEL["StudentBook.submit"].value}/>
                <ul>
                    {books.map(book => <li key={book}>{book}</li>)}
                </ul>
                {isLoading && <div style={{
                    position: 'absolute',
                    top:0, left:0, right:0, bottom:0,
                    height:'100%', width:'100%',
                    display:'flex', justifyContent: 'center',
                    alignItems: 'center',
                    zIndex:110, backgroundColor:'rgba(10, 10, 10, 0.5)'
                }}>Loading...</div>}
                <AppButton handleClick={handlePostBook} label='Post Book'/>
            </div>
        </>
    )
}

export default StudentBookView;