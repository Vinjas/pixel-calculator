import React from "react"

import "./calculator-v2.css"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            input: 0,
            prevInput: "",
            actualResult: 0,
            prevResult: 0,
            decimal: false,
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
        if (this.state.input === 0) {
            return this.setState({
                actualResult: parseFloat("" + number),
                input: "" + number
            })

        // SUMA NUMERO A INPUT SIN DECIMAL    
        } else if (
            this.state.decimal === false 
            && this.state.operator === ""
            ) {
            this.setState({
                actualResult: parseFloat("" + this.state.actualResult + number),
                input: this.state.input + number,
                prevInput: "",
                
            })
            if (this.state.result > 0) {
                this.setState({
                    prevResult: this.state.result,
                })
            }
        // AÑADE DECIMAL    
        } else if (this.state.decimal === true) {
            return this.setState({
                actualResult: parseFloat("" + this.state.actualResult + "." + number),
                input: parseFloat("" + this.state.input + "." + number),
                decimal: false,
            })    
        } else if (this.state.input.match(/[+]|[-]|[*]|[/]/g)) {
            this.setState({
                input: this.state.prevInput + number,
                actualResult: parseFloat("" + number),
                operator: "",
            })
        }
    }

    // TECLA DECIMAL
    addDecimal() {
        this.setState({
            decimal: true
        })
    }

    // TECLA OPERADOR
    // Varía en función del último operador en input, en caso de varias operaciones seguidas
    // Replica funcionalidad de equals() para ir actualizando state.result cada vez
    addOperator(operator) {
        this.setState({
            prevResult: this.state.actualResult, 
            actualResult: 0,
            prevInput: this.state.input + operator,
            input: this.state.input + operator,
            operator: operator,
        })
        // COMPROBAR SI SE HA INTRODUCIDO UN OPERADOR YA
        if (this.state.input.match(/([+]|[-]|[/]|[*])$/)) {
            this.setState({
                prevInput: this.state.input.slice(0 ,-1) + operator,
                input: this.state.input.slice(0 ,-1) + operator,
                operator: operator,
            })
        } else if (this.state.input.match(/([+][\d]+$)/g)) {
            this.setState({
                result: this.state.prevResult + this.state.actualResult,
                decimal: false,
                operator: "",
            })
        } else if (this.state.input.match(/([-][\d]+$)/g)) {
            this.setState({
                result: this.state.prevResult - this.state.actualResult,
                decimal: false,
                operator: "",
            })
        } else if (this.state.input.match(/([*][\d]+$)/g)) {
            this.setState({
                result: this.state.prevResult * this.state.actualResult,
                decimal: false,
                operator: "",
            })
        } else if (this.state.input.match(/([/][\d]+$)/g)) {
            this.setState({
                result: this.state.prevResult / this.state.actualResult,
                decimal: false,
                operator: "",
            })
        } else if (this.state.input.match(/([+]|[-]|[/]|[*])$/)) {
            this.setState({
                prevInput: this.state.input + operator,
                input: this.state.input + operator,
                operator: operator,
            })
        }
    }

    // TECLA IGUAL
    // Varía en función de el último operador en Input, en caso de varias operaciones seguidas
    equals() {
        if (this.state.input.match(/([+][\d]+$)/g)) {
            this.setState({
                result: this.state.prevResult + this.state.actualResult,
                input: 0,
                prevInput: "",
                actualResult: this.state.prevResult + this.state.actualResult,
                prevResult: 0,
                decimal: false,
                operator: "",
            })
        } else if (this.state.input.match(/([-][\d]+$)/g)) {
            this.setState({
                result: this.state.prevResult - this.state.actualResult,
                input: 0,
                prevInput: "",
                actualResult: this.state.prevResult - this.state.actualResult,
                prevResult: 0,
                decimal: false,
                operator: "",
            })
        } else if (this.state.input.match(/([/][\d]+$)/g)) {
                this.setState({
                    result: this.state.prevResult / this.state.actualResult,
                    input: 0,
                    prevInput: "",
                    actualResult: this.state.prevResult / this.state.actualResult,
                    prevResult: 0,
                    decimal: false,
                    operator: "",
            })
        } else if (this.state.input.match(/([*][\d]+$)/g)) {
            this.setState({
                result: this.state.prevResult * this.state.actualResult,
                input: 0,
                prevInput: "",
                actualResult: this.state.prevResult * this.state.actualResult,
                prevResult: 0,
                decimal: false,
                operator: "",
            })
        }
    }

    // TECLA C
    // Reinicilaiza states
    pressC() {
        this.setState({
            result: 0,
            input: 0,
            prevInput: "",
            actualResult: 0,
            prevResult: 0,
            decimal: false,
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
                        onClick={() => this.addNumber(7)}>7</div>

                        <div
                        className="calc-key numeral"
                        id="8"
                        onClick={() => this.addNumber(8)}>8</div>

                        <div
                        className="calc-key numeral"
                        id="9"
                        onClick={() => this.addNumber(9)}>9</div>

                        <div
                        className="calc-key"
                        id="minus"
                        onClick={() => this.addOperator("-")}>-</div>

                        <div
                        className="calc-key numeral"
                        id="4"
                        onClick={() => this.addNumber(4)}>4</div>

                        <div
                        className="calc-key numeral"
                        id="5"
                        onClick={() => this.addNumber(5)}>5</div>

                        <div
                        className="calc-key numeral"
                        id="6"
                        onClick={() => this.addNumber(6)}>6</div>

                        <div
                        className="calc-key"
                        id="plus"
                        onClick={() => this.addOperator("+")}>+</div>

                        <div
                        className="calc-key numeral"
                        id="1"
                        onClick={() => this.addNumber(1)}>1</div>

                        <div
                        className="calc-key numeral"
                        id="2"
                        onClick={() => this.addNumber(2)}>2</div>

                        <div
                        className="calc-key numeral"
                        id="3"
                        onClick={() => this.addNumber(3)}>3</div>

                        <div
                        className="calc-key equal"
                        id="equal"
                        onClick={this.equals}>=</div>

                        <div
                        className="calc-key numeral"
                        id="0"
                        onClick={() => this.addNumber(0)}>0</div>

                        <div
                        className="calc-key numeral"
                        id="0"
                        onClick={() => this.addNumber(0)}>0</div>

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