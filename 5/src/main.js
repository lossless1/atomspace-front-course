const e = React.createElement;

const rootEl = document.querySelector("#root");

class LittleButton extends React.Component {
  render() {
    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}

class SuperButton extends React.Component {
  constructor(props) {
    super(props);
    console.log("Contructor!");
    this.laknflkanwf = "alwkmd";
    this.state = { liked: false, innerObject: { a: { b: { c: {} } } } };
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (JSON.stringify(this.state) === JSON.stringify(prevState)) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    if (this.state.liked) {
      alert("Liked already clicked!");
    }
    return <button>Hello world</button>;

    // e(
    //   "button",
    //   { onClick: () => this.setState({ liked: true }) },
    //   "Like"
    // );
  }
}

console.log(rootEl);
ReactDOM.render(e(SuperButton), rootEl);
