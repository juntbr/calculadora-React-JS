import React, { Component } from 'react'
import './Calculator.css'
import Display from './Display'
import BotaoIndividual from './BotaoIndividual'



const initialState = {
    displayValue: ' ',
    clearDisplay: false,
    operation: null,
    value: 0,
    current: 0
}

export default class Calculator extends Component {
    state = { ...initialState }



    clearMemory() {
        this.setState({ ...initialState })
    }
    concatena(valor) {
        if (valor === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === ' ' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + valor
        this.setState({ displayValue, clearDisplay: false })
    }
    verificarOperacao(valor) {
        if (valor === "+") {
            this.setState({ operation: "+" })
        }
        if (valor === "-") {
            this.setState({ operation: "-" })
        }
        if (valor === "/") {
            this.setState({ operation: "/" })
        }
        if (valor === "*") {
            this.setState({ operation: "*" })
        }
        if (valor === "^") {
            this.setState({ operation: "^" })
        }
        
        this.setState({ value: this.state.displayValue, displayValue: " " })

    }
    fazerOperacao() {
        const a = parseInt(this.state.value)
        const b = parseInt(this.state.displayValue)
        if (this.state.operation === "+") {
            this.setState({ displayValue: a + b })
        }
        if (this.state.operation === "-") {
            this.setState({ displayValue: a - b })
        }
        if (this.state.operation === "/") {
            this.setState({ displayValue: a / b })
        }
        if (this.state.operation === "*") {
            this.setState({ displayValue: a * b })
        }
        if (this.state.operation === "^") {
            this.setState({ displayValue: a ** b })
        }
        this.setState({
            clearDisplay: false,
            operation: null,
            value: 0

        })
        
    }

    render() {
        const concatena = valor => this.concatena(valor)
        const clearMemory = () => this.clearMemory()
        const verificarOperacao = verifica => this.verificarOperacao(verifica)
        const fazerOperacao = () => this.fazerOperacao()
        return (
            <div>
                <Display valor={this.state.displayValue}></Display>
                <div className="Calculator">
                    <BotaoIndividual label="1" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="2" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="3" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="+" func={verificarOperacao}></BotaoIndividual>
                    <BotaoIndividual label="4" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="5" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="6" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="-" func={verificarOperacao}></BotaoIndividual>
                    <BotaoIndividual label="7" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="8" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="9" func={concatena}></BotaoIndividual>
                    <BotaoIndividual label="*" func={verificarOperacao}></BotaoIndividual>
                    <BotaoIndividual label="^" func={verificarOperacao}></BotaoIndividual>
                    <BotaoIndividual label="C" func={clearMemory}></BotaoIndividual>
                    <BotaoIndividual label="=" func={fazerOperacao}></BotaoIndividual>
                    <BotaoIndividual label="/" func={verificarOperacao}></BotaoIndividual>
                </div>
            </div>

        )
    }
}