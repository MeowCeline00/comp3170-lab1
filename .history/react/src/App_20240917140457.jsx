function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
            <div>
              <h1>MyTunes</h1>  
            </div>

          </header>

          <main>
            <div className="artist-container">
            <div className="artist">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Jay_Chou_cropped.JPG" alt="" />
            </div>
            <div className="artist-albums-container">
              <div className="artist-album">
              <h2>
                Jay Chou's albums
              </h2>
              </div>
              <details className="albums-name">
                <summary>Jay</summary>
                <ul className="song-list">
                    <li>Adorable</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
              </details>

            </div>

            </div>
          </main>

        </section>
        <footer>
          <div>
            <div className="tune-footer">
              BCIT-D3-Term3-COMP3170-Celine Wang-A01309245
            </div>
          </div>

        </footer>

      </div>
  );
}

export default App;
