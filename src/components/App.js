import React from 'react';
import Header from './Header';
import Footer from './Footer';
import movieApi from '../api/movieApi';
import HomePage from '../assets/HomePage';
import "../styles/appStyles.scss";

class App extends React.Component {
    state = { popularMovies: [], topRatedMovies: [] };
    componentDidMount() {
        movieApi.get("/movie/popular").then(response => {
            this.setState({ popularMovies: response.data.results });
        });
        movieApi.get("/movie/top_rated").then(response => {
            this.setState({ topRatedMovies: response.data.results });
        });
    };
    submitForm = (event, query) => {
        event.preventDefault();
        movieApi.get(`/search/movie?query=${query}`).then(response => {
            console.log(response);
            this.setState({ popularMovies: response.data.results });
        });
    };
    render() {
        if(this.state.topRatedMovies.length === 0){
            return null;
        }
        return (
            <div className="custom-app">
                <Header />
                <HomePage
                    topRatedMovies={this.state.topRatedMovies}
                    popularMovies={this.state.popularMovies}
                    submitForm={this.submitForm}
                />
                <Footer />
            </div>
        )
    };
};

export default App;