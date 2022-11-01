// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // This is fragment tag use to display multiple Html code
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            My Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>   
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </nav>
      <div className="container">
        <h1>My Name is {name}</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        inventore, impedit, quisquam, fuga nulla iure recusandae cumque quas
        molestiae sit quibusdam sequi ad nostrum ipsum pariatur rem! Sequi
        error, impedit aperiam perferendis nihil quae!
      </div> */}

      {/* This is previous code */}
      {/* <div className="blank"></div>
    <h1>This is my project</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With SHri
        </a>
      </header>
    </div> */}
    </>
  );
}

export default App;
