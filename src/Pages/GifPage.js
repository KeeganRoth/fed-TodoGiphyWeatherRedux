import React, { Component } from "react";
import GifList from "../components/gifList";
import { connect } from "react-redux";
import * as gifActions from "../actions/gifs";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import NavBar from "../components/navBar";
import Weather from "../components/weather";
import { toggleLoading } from "../actions/loading";

class GifPage extends Component {
  componentDidMount() {
    if (this.props.gifs.length === 0) {
      this.props.toggleLoading();
      this.props.fetchGiphyFromService().then(() => {
        this.props.toggleLoading();
      });
    }
  }

  render() {
    return (
      <section>
        <NavBar />
        <Header title="Gify Page" />
        <main>
          <p>{this.props.isLoaded ? "" : "Loading..."}</p>
          <Weather />
          <GifList
            deleteGifAction={this.props.deleteGif}
            gifs={this.props.gifs}
          />
          <p>You have {this.props.todos.length} todos</p>
        </main>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    todos: state.todos,
    isLoaded: state.isLoaded
  };
};

export default connect(
  mapStateToProps,
  { ...gifActions, toggleLoading }
)(GifPage);
