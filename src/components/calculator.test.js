import React from "react"

import "./calculator-v2.css"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            input: [],
            operator: "",
        }
        this.addNumber = this.addNumber.bind(this)
        this.addDecimal = this.addDecimal.bind(this)
        this.equals = this.equals.bind(this)
        this.pressC = this.pressC.bind(this)
    }
    
    componentDidMount() {
        document.body.style.backgroundColor = "#306182"
    }

    addNumber(number) {  
        // INICIO --> INPUT Y RESULTADO ES 0
        this.setState({
            input: this.state.input.push(number)
        })
    }

    // TECLA DECIMAL
    addDecimal() {
    }

    // TECLA OPERADOR
    addOperator(operator) {
    }

    // TECLA IGUAL
    // Varía en función de el último operador en Input, en caso de varias operaciones seguidas
    equals() {
    }

    // TECLA C
    // Reinicilaiza states
    pressC() {
        this.setState({
            result: 0,
            input: [],
            operator: "",
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
                        id="F">%</div>

                        <div
                        className="calc-key equal"
                        id="C"
                        onClick={this.pressC}>C</div>

                        <div
                        className="calc-key"
                        id="divide"
                        onClick={() => this.addOperator("/")}>/</div>

                        <div
                        className="calc-key"
                        id="multiple"
                        onClick={() => this.addOperator("*")}>*</div>

                        <div
                        className="calc-key numeral"
                        id="7"
                        onClick={() => this.addNumber("7")}>7</div>

                        <div
                        className="calc-key numeral"
                        id="8"
                        onClick={() => this.addNumber("8")}>8</div>

                        <div
                        className="calc-key numeral"
                        id="9"
                        onClick={() => this.addNumber("9")}>9</div>

                        <div
                        className="calc-key"
                        id="minus"
                        onClick={() => this.addOperator("-")}>-</div>

                        <div
                        className="calc-key numeral"
                        id="4"
                        onClick={() => this.addNumber("4")}>4</div>

                        <div
                        className="calc-key numeral"
                        id="5"
                        onClick={() => this.addNumber("5")}>5</div>

                        <div
                        className="calc-key numeral"
                        id="6"
                        onClick={() => this.addNumber("6")}>6</div>

                        <div
                        className="calc-key"
                        id="plus"
                        onClick={() => this.addOperator("+")}>+</div>

                        <div
                        className="calc-key numeral"
                        id="1"
                        onClick={() => this.addNumber("1")}>1</div>

                        <div
                        className="calc-key numeral"
                        id="2"
                        onClick={() => this.addNumber("2")}>2</div>

                        <div
                        className="calc-key numeral"
                        id="3"
                        onClick={() => this.addNumber("3")}>3</div>

                        <div
                        className="calc-key equal"
                        id="equal"
                        onClick={this.equals}>=</div>

                        <div
                        className="calc-key numeral"
                        id="0"
                        onClick={() => this.addNumber("0")}>0</div>

                        <div
                        className="calc-key numeral"
                        id="0"
                        onClick={() => this.addNumber("0")}>0</div>

                        <div
                        className="calc-key coma"
                        id="decimal"
                        onClick={() => this.addDecimal()}>,</div>

                        <div
                        className="calc-key equal"
                        id="equal"
                        onClick={this.equals}>=</div>
                </div>
            </div>
        )
    }
}

export default Calculator