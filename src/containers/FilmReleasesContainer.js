import React, { Component } from 'react';
import FilmList from '../components/FilmList.js'

class FilmReleasesContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      films:[
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ],
      upcoming:[
        {
          name: "Upcoming Releases for UK >>",
          url: "https://www.imdb.com/calendar/?region=gb&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=a4972714-df42-4ee7-995c-279150db712d&pf_rd_r=SBWXM1YXQCZ3XMHGDM1C&pf_rd_s=right-8&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cs_sm"
        }
      ]
    };
  }

  render(){
    return (
      <FilmList  films={this.state.films} upcoming={this.state.upcoming}/>
    )
  }
}

export default FilmReleasesContainer;
