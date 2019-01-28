import React, { Component } from 'react';
import Film from './Film.js';
import Upcoming from './Upcoming.js';

class FilmList extends Component{

  render(){
    const films = this.props.films.map((film, index) => {
      return (
        <Film
          key={index}
          id={film.id}
          name={film.name}
          url={film.url}
        >
        </Film>
      );
    });
    const upcoming = this.props.upcoming.map((upcoming, index) => {
      return (
        <Upcoming
          key={index}
          name={upcoming.name}
          url={upcoming.url}
        >
        </Upcoming>
      );
    });
    return(
      <>
      <ul>{films}</ul>
      {upcoming}
      </>
    )
  }
}

export default FilmList;
