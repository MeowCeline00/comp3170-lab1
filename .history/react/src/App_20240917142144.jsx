

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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/Jay_Chou_cropped.JPG"
                alt="Jay Chou"
              />
            </div>

            <div className="artist-albums-container">
              <div className="artist-album">
                <h2>Jay Chou's albums</h2>
              </div>

              {/* Album 1: Jay */}
              <details className="albums-name">
                <summary>Jay</summary>
                <ul className="song-list">
                  <li>Adorable Woman</li>
                  <li>Perfectionism</li>
                  <li>Starry Mood</li>
                  <li>Wife</li>
                  <li>Basketball Match</li>
                  <li>Black Humor</li>
                  <li>Istanbul</li>
                  <li>Ancient Indian Turtledove</li>
                  <li>Tornado</li>
                  <li>Counter-Clockwise Clock</li>
                </ul>
              </details>

              {/* Album 2: Fantacy */}
              <details className="albums-name">
                <summary>Fantacy</summary>
                <ul className="song-list">
                  <li>Love Before the Century</li>
                  <li>Dad, I'm Back</li>
                  <li>Simple Love</li>
                  <li>Ninja</li>
                  <li>Can't Express Myself</li>
                  <li>Shanghai 1943</li>
                  <li>Sorry</li>
                  <li>William Castle</li>
                  <li>Nunchucks</li>
                  <li>Silence</li>
                </ul>
              </details>
            </div>
          </div>
        </main>

        <footer>
          <div>
            <div className="tune-footer">
              BCIT-D3-Term3-COMP3170-Celine Wang-A01309245
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
