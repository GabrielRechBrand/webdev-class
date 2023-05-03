import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchShows from "../business/MazeBusiness";

function MovieListComponent() {
    const [shows, setShows] = useState([]);
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearchClick = async () => {
        try {
            searchShows(query).then((response) => {
                setShows(response.data);
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center my-3">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search shows"
                            value={query}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-outline-secondary" type="button" onClick={handleSearchClick}>
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>

            <h1>TV Shows</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Status</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {shows.map((show) => (
                    <tr key={show.show.id}>
                        <td>{show.show.name}</td>
                        <td>{show.show.genres.join(', ')}</td>
                        <td>{show.show.status}</td>
                        <td>{show.show.rating.average}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MovieListComponent;
