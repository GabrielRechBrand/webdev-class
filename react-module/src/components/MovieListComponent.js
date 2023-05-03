import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../business/MazeBusiness';

function MovieListComponent() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        api.get('').then((response) => {
            setShows(response.data);
        });
    }, []);

    return (
        <div className="container">
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
