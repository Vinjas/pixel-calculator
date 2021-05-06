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
            return this.setState({
                actualResult: parseFloat("" + this.state.actualResult + number),
                input: this.state.prevInput + this.state.input + number,
                prevInput: "",
            })

        // AÑADE DECIMAL    
        } else if (this.state.decimal === true) {
            return this.setState({
                actualResult: parseFloat("" + this.state.actualResult + "." + number),
                input: parseFloat("" + this.state.input + "." + number),
                decimal: false,
            })    
        } else {
            switch (this.state.operator) {
                case "+":
                    this.setState({
                        input: this.state.prevInput + number,
                        actualResult: parseFloat("" + number),
                        operator: "",
                    })
                    break
                default:
                    return this.setState({
                        operator: "",
                    })  
            }
        }



        // CHECK IF AN OPERATOR HAS BEEN PRESSED
        {/* if (this.state.prevResult /= 0) {
            if (this.state.operator === "+") {
                this.setState({
                    input: this.state.prevInput + number,
                    actualResult: parseFloat("" + number),
                    operator: "",
                })
            }
            
            switch (this.state.operator) {
                case "+":
                    this.setState({
                        input: this.state.prevInput + number,
                        actualResult: parseFloat("" + number),
                        operator: "",
                    })
                    break
                default:
                    return this.setState({
                        operator: "",
                    })  
            }
        } */}
    }
    // TECLA DECIMAL
    addDecimal() {
        this.setState({
            decimal: true
        })
    }

    // TECLA OPERADOR
    addOperator(operator) {
        switch (operator) {
            case "+": 
                this.setState({
                    prevResult: this.state.actualResult, 
                    actualResult: 0,
                    prevInput: this.state.input + "+",
                    input: this.state.input + "+",
                    operator: "+",
                })
        }
    }

    // TECLA IGUAL
    equals() {
        if (this.state.prevInput.includes("+")) {
            this.setState({
                result: this.state.prevResult + this.state.actualResult,
                input: 0,
                prevInput: "",
                actualResult: 0,
                prevResult: 0,
                decimal: false,
                operator: "",
            })
        }     
    }

    //TECLA C
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
                        onClick={() => this.addNumber(8)}>8</div>

                        <div
                        className="calc-key numeral"
                        id="9"
                        onClick={() => this.addNumber(9)}>9</div>

                        <div
                        className="calc-key"
                        id="minus">-</div>

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
                        id="0">0</div>

                        {/*<div
                        className="calc-key numeral"
                        id="0">0</div>*/}

                        <div
                        className="calc-key coma"
                        id="decimal"
                        onClick={() => this.addDecimal()}>,</div>

                        {/*<div
                        className="calc-key equal"
                        id="equal">=</div>*/}
                </div>
            </div>
        )
    }
}

export default Calculator