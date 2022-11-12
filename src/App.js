import "./App.css";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, useThemeProps } from "@mui/material";
import { display } from "@mui/system";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import ResponsiveAppBar from "./Components/Nav";
import { BrowserRouter as Router } from "react-router-dom";

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
    <Router>
      <div>
        <div className="Nav">
          <ResponsiveAppBar></ResponsiveAppBar>
        </div>
        <div
          className="App"
          style={{ justifyContent: "center", display: "flex", marginLeft: 0 }}
        >
          <div style={{ marginLeft: 200, marginTop: 50 }}>
            <Route
              path="/"
              exact
              render={() => (
                <Grid container spacing={1}>
                  {characters.map((character) => {
                    return (
                      <Link to={`/character/${character.id}`}>
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
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  {character.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {character.species}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      </Link>
                    );
                  })}
                </Grid>
              )}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

const character = (props) => {
  return <div>Karakter Bilgileri</div>;
};

export default App;
