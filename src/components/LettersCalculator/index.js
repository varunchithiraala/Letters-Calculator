// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
    state = {
        inputPhrase: '',
    }

    onChangeInputphrase = event => {
        this.setState({inputPhrase: event.target.value})
    }

    render() {
        const {inputPhrase} = this.state
        return (
            <div className="letters-calculator-app-container">
                <div className="letters-calculator-container">
                    <div className="calculator-container">
                        <h1 className="calculator-heading">Calculate the letters you enter</h1>
                        <div className="input-phrase-container">
                            <label className="phrase-label" htmlFor="phraseText">Enter the phrase</label>
                            <input
                                type="text" 
                                className="input-phrase"
                                id="phraseText"
                                placeholder="Enter the phrase"
                                onChange={this.onChangeInputphrase}
                                value={inputPhrase}
                            />
                        </div>
                        <p className="letters-count">No.of letters: {inputPhrase.length}</p>
                    </div>
                    <img 
                        src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                        className="calculator-img"
                        alt="letters calculator"
                    />
                </div>
            </div>
        )
    }
}

export default LettersCalculator