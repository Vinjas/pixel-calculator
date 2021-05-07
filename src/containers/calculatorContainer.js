import React from "react"
import Calculator from "../components/calculator.js"
import CalculatorTest from "../components/calculator.test.js"


class CalculatorContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="App">
                <CalculatorTest />
            </div>
            
        )
    }
}

export default CalculatorContainer