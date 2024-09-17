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
              <details name="reqs">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
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
