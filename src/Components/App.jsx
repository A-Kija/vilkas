import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Topics from "./Topics";


export default function App() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  

  
          <Switch>
            <Route exact path="/">
                <div>
                    <h2>Home</h2>
                </div>
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }