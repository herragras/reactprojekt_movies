import React from 'react';

class SearchBar extends React.Component {

   
    handleFormSubmit= (event) => {
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <input onChange={this.props.searchMovieProp} 
                    type="text" className="form-control" 
                    placeholder="search a movie"
                   />
                </div>
            </form>
        )
    }
}

export default SearchBar;