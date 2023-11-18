import React, { useState } from 'react'

export default function TipCalculator({
    bill, setBill,
    tipPercentage, setTipPercentage,
    numberOfPeople, setNumberOfPeople,
    tipPerPerson, totalPerPerson }) {
    return (
        <div>
            <input type="number" placeholder="Bill" value={bill} onChange={(e) => setBill(e.target.value)} />

            <div>
                {
                    [5, 10, 15, 20].map(percent => (
                        <button
                            key={percent}
                            onClick={() => setTipPercentage(percent)}>
                            {percent}%
                        </button>
                    ))}
                <button onClick={() => setTipPercentage(0)}>Custom</button>
            </div>

            {tipPercentage === 0 ? (
                <input type="number" placeholder="Tip" value={tipPercentage} onChange={(e) => setTipPercentage(e.target.value)} />
            ) : (
                <p>Tip Percentage: {tipPercentage}%</p>
            )}

            <input type="number" placeholder="Number of People" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
            <p>Tip Per Person: {tipPerPerson}</p>
            <p>Total Per Person: {totalPerPerson}</p>
        </div>
    )
}


