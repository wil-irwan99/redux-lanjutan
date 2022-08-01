import {Component} from "react";

const WithSearch = (WrappedComponent, data) => {
    return class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                searchTerm: ''
            };
        }

        handleSearch = (event) => {
            this.setState({searchTerm: event.target.value})
        }

        filterData = (searchTerm) => {
            let products = data.products;
            searchTerm = searchTerm.toUpperCase()
            let res = products.filter(product => {
                product = product.productName.toUpperCase()
                return product.indexOf(searchTerm) >= 0;
            })
            return res;
        }

        render() {
            const {searchTerm} = this.state
            let filteredProducts = this.filterData(searchTerm);
            return (
                <>
                    <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search"/>
                    <WrappedComponent data={filteredProducts}/>
                </>

            )
        }
    }
}

export default WithSearch;