import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      heros: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ heros: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { heros, searchfield } = this.state;
    const filteredHeros = heros.filter((heros) => {
      return heros.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !heros.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>The Guardians</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList heros={filteredHeros} />
        </Scroll>
      </div>
    );
  }
}

export default App;
