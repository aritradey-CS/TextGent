import { Component } from "react";
import "./App.css";
import Output from "./componenets/Output";
import Select from "./componenets/controls/Select";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: "",
    };
  }

  componentWillMount() {
    this.getSampleText();
  }
  getSamplext() {
    axios
      .get(
        "http://hipsterjesus.com/api?paras=" +
          this.state.paras +
          "&html=" +
          this.state.html
      )
      .then((Response) => {
        this.setState({ text: Response.data.text }, function () {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App container">
        <h1>ReactJS Sample Text Generator</h1>
        <hr />
        <form class="form-inline">
          <div class="form-gromp">
            <label>IncludeHTML:</label>
            <Select
              value={this.state.html}
              onChange={this.showHtml.bind(this)}
            />
          </div>
        </form>
        <Output value={this.State.text} />
      </div>
    );
  }
}
export default App;
