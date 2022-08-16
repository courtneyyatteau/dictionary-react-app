import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">English Dictionary</div>
      <p className="footer">
        This is an open-source{" "}
        <a
          href="https://github.com/courtneyyatteau/dictionary-react-app"
          target="_blank"
          rel="noreferrer"
          className="App-link"
        >
          Github project
        </a>{" "}
        created by{" "}
        <a
          href="https://courtney-yatteau-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="App-link"
        >
          Courtney Yatteau
        </a>
        .
      </p>
    </div>
  );
}

export default App;
