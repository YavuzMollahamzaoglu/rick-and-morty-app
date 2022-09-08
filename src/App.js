import "./App.css";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { display } from "@mui/system";
import {
  BrowserRouter,
  Route,
  Routes,
  Router,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  // charaters
  const [characters, setCharacters] = useState([]);

  const [test, setTest] = useState();

  useEffect(() => {
    setTest("yavuz");
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCharacters(response.results);
      });
  });

  return (
    <div className="App" style={{ justifyContent: "center", display: "flex" }}>
      <Navigation></Navigation>
      <Typography>This is rick and morty app for my fellas</Typography>

      <Grid container spacing={1}>
        {characters.map((character) => {
          return (
            <Grid item xs={12} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={character.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {character.species}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Characters() {
  return <h2>Characters</h2>;
}

export default App;
