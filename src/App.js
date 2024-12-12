// import { Component } from "react";
// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState(heroes);
  const onSearchChange = (event) => {
    const inputString = event.target.value.toLowerCase();
    setSearchField(inputString);
  };
  useEffect(() => {
    fetch("https://api.opendota.com/api/heroes/")
      .then((response) => response.json())
      .then((heroesData) => setHeroes(heroesData));
  }, []);

  useEffect(() => {
    const newFilteredHeroes = heroes.filter((hero) => {
      return hero.localized_name.toLowerCase().includes(searchField);
    });
    setFilteredHeroes(newFilteredHeroes);
  }, [heroes, searchField]);

  return (
    <div className="App">
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="search heroes"
        className="heroes-search-box"
      />
      <CardList heroes={filteredHeroes} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       heroes: [],
//       searchField: "",
//     };
//   }

// componentDidMount() {
//   fetch("https://api.opendota.com/api/heroes/")
//     .then((response) => response.json())
//     .then((heroesData) =>
//       this.setState(
//         () => {
//           return { heroes: heroesData };
//         },
//         () => {
//           console.log(this.state);
//         }
//       )
//     );
// }

//   onSearchChange = (event) => {
//     const inputString = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField: inputString };
//     });
//   };
//   render() {
//     const { heroes, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredHeroes = heroes.filter((filHero) => {
//       return filHero.localized_name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <SearchBox
//           onSearchChangeProp={onSearchChange}
//           placeholder="search heroes"
//           className="heroes-search-box"
//         />
//         <CardList heroProp={filteredHeroes} />
//       </div>
//     );
//   }
// }

export default App;
