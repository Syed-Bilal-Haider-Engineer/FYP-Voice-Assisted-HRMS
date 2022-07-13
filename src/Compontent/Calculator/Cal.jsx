import React, { Component } from 'react';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";
import './Calculaterstyle.css';
class Cal extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div style={{ background: " linear-gradient(to right, #ff9b44 0%, #fc6075 100%)", paddingBottom: '10px' }}>
                <div className="calculator-body">
                    <ResultComponent result={this.state.result} />
                    <KeyPadComponent onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default Cal;