import React from "react"

import "./calculator.css"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            input: 0,
        }
    }
    componentDidMount() {
        document.body.style.backgroundColor = "#424242"
    }

    render() {
        return (
            <div id="calculator">
                <div id="result">
                    <div id="operation">{this.state.input}</div>
                    <div id="final-result">{this.state.result}</div> 
                </div>
                <div 
                id="calculator-base"
                className="container">
                        <div
                        className="calc-key">F</div>
                        <div
                        className="calc-key">C</div>
                        <div
                        className="calc-key">/</div>
                        <div
                        className="calc-key">*</div>
                        <div
                        className="calc-key">7</div>
                        <div
                        className="calc-key">8</div>
                        <div
                        className="calc-key">9</div>
                        <div
                        className="calc-key">-</div>
                        <div
                        className="calc-key">4</div>
                        <div
                        className="calc-key">5</div>
                        <div
                        className="calc-key">6</div>
                        <div
                        className="calc-key">+</div>
                        <div
                        className="calc-key">1</div>
                        <div
                        className="calc-key">2</div>
                        <div
                        className="calc-key">3</div>
                        <div
                        className="calc-key">=</div>
                        <div
                        className="calc-key">0</div>
                        <div
                        className="calc-key">,</div>
                        <div
                        className="calc-key">+</div>
                        <div
                        className="calc-key">=</div>
                </div>
            </div>
        )
    }
}

export default Calculator