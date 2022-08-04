const BookService = () => {
    const postBook = (newBook) => {
        //logic boongan call API
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log('Post New Book', newBook);
                resolve('success');
                //reject()
            }, 3000)
        })
    }

    return {
        postBook
    }
}

export default BookService;