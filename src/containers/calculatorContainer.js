import React from "react"
import Calculator from "../components/calculator.js"

class CalculatorContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="App">
                <Calculator />
            </div>
            
        )
    }
}

export default CalculatorContainer