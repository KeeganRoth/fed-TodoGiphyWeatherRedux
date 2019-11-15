import React from "react";
// import * as actions from "../actions";
// import * as gifsActions from "../actions/gifs";
// import { connect } from "react-redux";
import TodoPage from "./Pages/TodoPage";
import GifPage from "./Pages/GifPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/gifs">
              <GifPage />
            </Route>
            <Route path="/todos">
              <TodoPage />
            </Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     todos: state.todos,
//     gifs: state.gifs
//   };
// };

// export default connect(
//   mapStateToProps,
//   { ...gifsActions, ...todosActions }
// )(App);

export default App;
