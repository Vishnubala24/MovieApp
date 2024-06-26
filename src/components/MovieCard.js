import React from "react";
import { addFavourite, removeFavourite } from "../actions";


class MovieCard extends React.Component{

    handleFavouriteClick = () => {
        const {movie, isFavourite} = this.props;
        console.log(isFavourite)
        if(isFavourite)
            this.props.dispatch(removeFavourite(movie));
        else{
            this.props.dispatch(addFavourite(movie));
        }
    }
  
    render() {
        const {movie, isFavourite} = this.props;
        
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title"> {movie.Title} </div>
                    <div className="plot"> {movie.Plot} </div>
                    <div className="footer"> 
                        <div className="rating"> {movie.imdbRating} </div>
                        {
                            isFavourite ?
                                <button className="unfavourite-btn" onClick={this.handleFavouriteClick}>Unfavourite</button>
                            :
                                <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default MovieCard;
