import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Last name:
            <input type="text" name="last name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Phone number:
            <input type="tel" name="phone number" />
          </label>
          <input type="submit" value="Sign up" id="btn" />
        </form>
      </header>
    </div>
  );
}

export default App;