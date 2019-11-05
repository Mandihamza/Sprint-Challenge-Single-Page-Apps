import React from "react";
import { Menu } from "semantic-ui-react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
 } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";


export default function TabNav() {

    return ( 
        <Router>   
            <Menu tabular>
            <Menu.Item>
                <Link to="/">Home</Link>
            </Menu.Item>
            
            <Menu.Item>
              <Link to="/characters">Characters</Link>
            </Menu.Item>
            
            <Menu.Item>
              <Link to="/locations">Location</Link>
            </Menu.Item>

            <Menu.Item>
            <Link to="/episodes">Episodes</Link>
            </Menu.Item>
        </Menu>

        <Switch>
            <Route exact path="/">
                <WelcomePage />
                </Route>
            <Route path="/episodes">
                <EpisodeList />
                </Route>
            <Route path="/characters">
                <CharacterList />
                </Route>
            <Route path="/locations">
            <LocationsList /> 
            </Route>
            <Route path="/episodes">
            <EpisodeList /> 
            </Route>
        </Switch>
        </Router>  
      );    

};
