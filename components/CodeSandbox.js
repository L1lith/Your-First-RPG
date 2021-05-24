import { Component } from "react";
import AceEditor from "./AceEditor";
import "./CodeSandbox.scss";
import { inspect } from "util";
import deval from "deval";

class CodeSandbox extends Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.value || "" };
  }
  render() {
    return (
      <div
        className={
          "sandbox" +
          (this.props.hasOwnProperty("className")
            ? " " + this.props.className
            : "")
        }
      >
        <h2 className="main-title">JavaScript Expression Evaluator</h2>
        <div className="titles">
          <h2 className="title">Input</h2>
          <h2 className="title">Output</h2>
        </div>
        <div className="inner">
          <AceEditor
            width="50%"
            height="100%"
            mode="javascript"
            theme="ambiance"
            value={this.state.value}
            onChange={(...args) => {
              this.handleChange(...args);
            }}
          />
          {this.state.value.trim().length > 0 ? (
            this.getOutput(this.state.value)
          ) : (
            <span className="output empty">Type something to get started</span>
          )}
        </div>
      </div>
    );
  }
  getOutput(source) {
    try {
      const output = eval(source);
      let outputSource = deval(output);
      if (typeof output == "string") {
        outputSource = `"${outputSource}"`;
      }
      console.log(source, output, outputSource);
      return (
        <AceEditor
          className="output valid"
          width="50%"
          height="100%"
          mode="javascript"
          theme="ambiance"
          readOnly
          value={outputSource}
        />
      );
    } catch (err) {
      return <span className="output error">{inspect(err)}</span>;
    }
  }
  handleChange(output) {
    this.setState({ value: output });
  }
}

export default CodeSandbox;
