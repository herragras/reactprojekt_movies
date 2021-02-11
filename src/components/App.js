import React from 'react';
import SearchBar from './searchBar';
import MovieList from './movieList';

class App extends React.Component {

    state = {
        movies: [
            {
                "id": 1,
                "name": "Riverdale",
                "rating": 8.3,
                "overview": "Learn how to configure a non-root public URL by running `npm run build",
                "imageURL": "https://www.themoviedb.org/t/p/w220_and_h330_face/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg"
            },
            
            {	
                "id": 2,
                "name": "Snow Piercer",
                "rating": 7.5,
                "overview": "Learn how to configure a non-root public URL by running `npm run build",
                "imageURL": "https://www.themoviedb.org/t/p/w220_and_h330_face/95xQPSqwvQDRoB3rXUn4lRyJrBW.jpg"
            },
            
            {	
                "id": 3,
                "name": "Wanda Vision",
                "rating": 8.4,
                "overview": "Learn how to configure a non-root public URL by running `npm run build",
                "imageURL": "https://www.themoviedb.org/t/p/w220_and_h330_face/glKDfE6btIRcVB5zrjspRIs4r52.jpg"
            },
            
            {	
                "id": 4,
                "name": "Monarca",
                "rating": 7.8,
                "overview": "Learn how to configure a non-root public URL by running `npm run build",
                "imageURL": "https://www.themoviedb.org/t/p/w220_and_h330_face/oXiTq8dm9ugYjLCKFDnLE4pRMGT.jpg"
            },
            
            {	
                "id": 5,
                "name": "Jumanji",
                "rating": 7.0,
                "overview": "Learn how to configure a non-root public URL by running `npm run build",
                "imageURL": "https://www.themoviedb.org/t/p/w220_and_h330_face/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg"
            },
            
            {	
                "id": 6,
                "name": "The Simpsons",
                "rating": 7.8,
                "overview": "Learn how to configure a non-root public URL by running `npm run build",
                "imageURL": "https://www.themoviedb.org/t/p/w220_and_h330_face/2IWouZK4gkgHhJa3oyYuSWfSqbG.jpg"
            },
        ],

        searchQuery: ""
    }

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

       /* this.setState ({
            movies: newMovieList
        })*/

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {
        this.setState({searchQuery: event.target.value})
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

    return (
        <div className="container">
            <nav class="navbar navbar-light bg-light justify-content-center">
                <a class="navbar-brand" href="#"><h2>MY MOVIES</h2></a>
            </nav>
            <div className="row">
                <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie}/>
                </div>
            </div>
            <MovieList 
                movies={filteredMovies}
                deleteMovieList={this.deleteMovie}/>
        </div>
    )
}
}

export default App;