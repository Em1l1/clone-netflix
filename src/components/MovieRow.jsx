import React from 'react';
import './MovieRow.css';

export default ({title, items}) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2> 
      <div className="movieRow--listare">
        <div className="movieRiow--list">
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
             // vamos en la hora 1:00:0
        ))}
        </div>
      </div>
    </div>
  );
}

