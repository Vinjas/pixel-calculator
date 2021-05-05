import React from "react"

import "./calculator-v2.css"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            input: 0,
        }
    }
    componentDidMount() {
        //document.body.style.backgroundColor = "#494949"
        document.body.style.background = "linear-gradient(0deg, rgba(73,73,73,1) 0%, rgba(61,61,61,1) 100%)"
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
                        className="calc-key"
                        id="F">F</div>
                        <div
                        className="calc-key"
                        id="C">C</div>
                        <div
                        className="calc-key"
                        id="divide">/</div>
                        <div
                        className="calc-key"
                        id="multiple">*</div>
                        <div
                        className="calc-key numeral"
                        id="7">7</div>
                        <div
                        className="calc-key numeral"
                        id="8">8</div>
                        <div
                        className="calc-key numeral"
                        id="9">9</div>
                        <div
                        className="calc-key"
                        id="minus">-</div>
                        <div
                        className="calc-key numeral"
                        id="4">4</div>
                        <div
                        className="calc-key numeral"
                        id="5">5</div>
                        <div
                        className="calc-key numeral"
                        id="6">6</div>
                        <div
                        className="calc-key"
                        od="plus">+</div>
                        <div
                        className="calc-key numeral"
                        id="1">1</div>
                        <div
                        className="calc-key numeral"
                        id="2">2</div>
                        <div
                        className="calc-key numeral"
                        id="3">3</div>
                        <div
                        className="calc-key equal"
                        id="equal">=</div>
                        <div
                        className="calc-key numeral"
                        id="0">0</div>
                        <div
                        className="calc-key numeral"
                        id="0">0</div>
                        <div
                        className="calc-key numeral"
                        id="decimal">,</div>
                        <div
                        className="calc-key equal"
                        id="equal">=</div>
                </div>
            </div>
        )
    }
}

export default Calculator