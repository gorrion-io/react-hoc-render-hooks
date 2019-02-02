import React, { Component } from "react";

export default class Fetch extends Component {
  state = {
    loading: false,
    error: null,
    data: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await window.fetch("https://swapi.co/api/people/1/");
      if (!res.ok) {
        this.setState({ error: res.statusText });
      } else {
        const data = await res.json();
        this.setState({ data });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { error, loading, data } = this.state;

    if (error) {
      return <h2>Error occurred!</h2>;
    }
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return <pre>{JSON.stringify(data, null, 4)}</pre>;
  }
}
