import React from "react"

import "./calculator-v2.css"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            input: 0,
        }
        this.addNumber = this.addNumber.bind(this)
        this.pressC = this.pressC.bind(this)
    }
    
    componentDidMount() {
        document.body.style.backgroundColor = "#306182"
    }

    addNumber(number) {  
        if (this.state.input === 0) {
            return this.setState({
                input: parseInt("" + number, 10)
            })
        } else {
            return this.setState({
                input: parseInt("" + this.state.input + number, 10)
            })      
        }
    }


    pressC() {
        this.setState({
            result: 0,
            input: 0,
        })
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
                        className="calc-key equal"
                        id="C"
                        onClick={this.pressC}>C</div>
                        <div
                        className="calc-key"
                        id="divide">/</div>
                        <div
                        className="calc-key"
                        id="multiple">*</div>
                        <div
                        className="calc-key numeral"
                        id="7"
                        onClick={() => this.addNumber(7)}>7</div>
                        <div
                        className="calc-key numeral"
                        id="8"
                        number={8}
                        onClick={() => this.addNumber(8)}>8</div>
                        <div
                        className="calc-key numeral"
                        id="9"
                        number={9}
                        onClick={() => this.addNumber(9)}>9</div>
                        <div
                        className="calc-key"
                        id="minus">-</div>
                        <div
                        className="calc-key numeral"
                        id="4"
                        number={4}
                        onClick={() => this.addNumber(4)}>4</div>
                        <div
                        className="calc-key numeral"
                        id="5"
                        number={5}
                        onClick={() => this.addNumber(5)}>5</div>
                        <div
                        className="calc-key numeral"
                        id="6"
                        number={6}
                        onClick={() => this.addNumber(6)}>6</div>
                        <div
                        className="calc-key"
                        od="plus">+</div>
                        <div
                        className="calc-key numeral"
                        id="1"
                        number={1}
                        onClick={() => this.addNumber(1)}>1</div>
                        <div
                        className="calc-key numeral"
                        id="2"
                        number={2}
                        onClick={() => this.addNumber(2)}>2</div>
                        <div
                        className="calc-key numeral"
                        id="3"
                        number={3}
                        onClick={() => this.addNumber(3)}>3</div>
                        <div
                        className="calc-key equal"
                        id="equal">=</div>
                        <div
                        className="calc-key numeral"
                        id="0">0</div>
                        {/*<div
                        className="calc-key numeral"
                        id="0">0</div>*/}
                        <div
                        className="calc-key coma"
                        id="decimal">,</div>
                        {/*<div
                        className="calc-key equal"
                        id="equal">=</div>*/}
                </div>
            </div>
        )
    }
}

export default Calculator