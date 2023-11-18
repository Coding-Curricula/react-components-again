import React, { useState } from 'react'
import Library from './components/Library'

import TipCalculator from './components/TipCalculator'
import ResetButton from './components/ResetButton'

export default function App() {
    const [bill, setBill] = useState(0)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(1)

    const calculateTipPerPerson = () => (bill * (tipPercentage / 100) / numberOfPeople)
    const calculateTotalPerPerson = () => (bill / numberOfPeople + calculateTipPerPerson())

    const resetAll = () => {
        setBill(0)
        setTipPercentage(0)
        setNumberOfPeople(1)
        console.log('reset')
    }


    return (
        // <Library />
        <div>
            <h1>Tip Calculator</h1>
            <TipCalculator
                bill={bill}
                setBill={setBill}
                tipPercentage={tipPercentage}
                setTipPercentage={setTipPercentage}
                numberOfPeople={numberOfPeople}
                setNumberOfPeople={setNumberOfPeople}
                tipPerPerson={calculateTipPerPerson()}
                totalPerPerson={calculateTotalPerPerson()}
            />
            <ResetButton resetAll={resetAll} />
        </div>
    )
}
