import React from 'react'
import './App.scss'
import AddOption from "./components/AddOption"
import Options from "./components/Options"
import Action from "./components/Action"
import Header from "./components/Header"
import OptionModal from "./components/OptionModal"

class App extends React.Component {
    state = {
        options: [],
        error: undefined,
        selectedOption: undefined
    }

    removeAll = () => this.setState(() => ({ options: [] }))

    closeModal = () => this.setState(() => ({ selectedOption: undefined }))

    deleteOption = (selectedOption) => {
        this.setState((pS) => ({
            options: pS.options.filter((option) => option !== selectedOption)
        }))
    }

    makeDecision = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => ({ selectedOption: this.state.options[randomNum] }))
    }

    addOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value
        e.target.elements.option.value = ''

        if (!option) {
            return this.setState(() => ({ error: 'введи ченить плз' }))
        }
        else if (this.state.options.indexOf(option) > -1) {
            return this.setState(() => ({ error: 'это уже есть' }))
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option),
            error: undefined
        }))
    }

    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if (options)
            this.setState(() => ({ options }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options)
            localStorage.setItem('options', options)
        }
    }

    render() {
        const subtitle = 'Trust the machine!!1'

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="App">
                    <Action
                    hasOptions={this.state.options.length > 0}
                    makeDecision={this.makeDecision}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            removeAll={this.removeAll}
                            deleteOption={this.deleteOption}
                        />
                        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                        <AddOption addOption={this.addOption}/>
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        closeModal={this.closeModal}
                    />
                </div>
                {/*<Toggle />*/}
            </div>
        )
    }
}

export default App
