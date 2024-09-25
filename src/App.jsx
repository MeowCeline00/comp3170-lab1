import React from 'react';
import { artists } from './best-selling-music-artists';

function App() {
  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      <div>
        {artists.map(artist => (
          <ArtistInfo key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  );
}

function ArtistInfo({ artist }) {
  return (
    <div className="artist-card">
      <img src={artist.photo_url} alt={artist.name} />
      <div>
        <h2>{artist.name}</h2>
        <p>Country: {artist.country}</p>
        <p>Years active: {artist.years_active}</p>
      </div>
    </div>
  );
}

export default App;
