import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaCalculator } from 'react-icons/fa'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [prevValue, setPrevValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(String(num))
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.')
      setNewNumber(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const handleOperation = (op) => {
    const currentValue = parseFloat(display)
    if (prevValue === null) {
      setPrevValue(currentValue)
    } else if (operation) {
      const result = calculate(prevValue, currentValue, operation)
      setDisplay(String(result))
      setPrevValue(result)
    }
    setOperation(op)
    setNewNumber(true)
  }

  const calculate = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current
      case '-':
        return prev - current
      case '×':
        return prev * current
      case '÷':
        return prev / current
      default:
        return current
    }
  }

  const handleEquals = () => {
    if (operation && prevValue !== null) {
      const result = calculate(prevValue, parseFloat(display), operation)
      setDisplay(String(result))
      setPrevValue(null)
      setOperation(null)
      setNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPrevValue(null)
    setOperation(null)
    setNewNumber(true)
  }

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
      setNewNumber(true)
    }
  }

  return (
    <>
      <Head>
        <title>Calculator - Charles n Charge</title>
      </Head>
      <Header />
      
      <section className="bg-dark-bg min-h-screen py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold neon-glow mb-4 flex items-center justify-center gap-4">
              <FaCalculator /> Calculator
            </h1>
            <p className="text-xl text-gray-300">Quick calculations for your business</p>
          </div>

          <div className="bg-dark-secondary p-8 rounded-lg border-2 border-neon-green neon-glow-box max-w-md mx-auto">
            {/* Display */}
            <div className="bg-dark-bg border-2 border-neon-green rounded-lg p-6 mb-6">
              <div className="text-right">
                <div className="text-gray-500 text-sm mb-2 h-6">
                  {prevValue !== null && `${prevValue} ${operation}`}
                </div>
                <div className="text-5xl font-bold text-neon-green break-words">
                  {display}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-4 gap-4">
              {/* Row 1 */}
              <button
                onClick={handleClear}
                className="col-span-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded text-lg"
              >
                CLEAR
              </button>
              <button
                onClick={handleBackspace}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 rounded text-lg"
              >
                ←
              </button>
              <button
                onClick={() => handleOperation('÷')}
                className="bg-neon-green hover:bg-neon-green-light text-black font-bold py-4 rounded text-lg"
              >
                ÷
              </button>

              {/* Row 2 */}
              {[7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumber(num)}
                  className="bg-dark-bg border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-4 rounded text-lg"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handleOperation('×')}
                className="bg-neon-green hover:bg-neon-green-light text-black font-bold py-4 rounded text-lg"
              >
                ×
              </button>

              {/* Row 3 */}
              {[4, 5, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumber(num)}
                  className="bg-dark-bg border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-4 rounded text-lg"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handleOperation('-')}
                className="bg-neon-green hover:bg-neon-green-light text-black font-bold py-4 rounded text-lg"
              >
                -
              </button>

              {/* Row 4 */}
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumber(num)}
                  className="bg-dark-bg border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-4 rounded text-lg"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handleOperation('+')}
                className="bg-neon-green hover:bg-neon-green-light text-black font-bold py-4 rounded text-lg"
              >
                +
              </button>

              {/* Row 5 */}
              <button
                onClick={() => handleNumber(0)}
                className="col-span-2 bg-dark-bg border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-4 rounded text-lg"
              >
                0
              </button>
              <button
                onClick={handleDecimal}
                className="bg-dark-bg border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-4 rounded text-lg"
              >
                .
              </button>
              <button
                onClick={handleEquals}
                className="bg-neon-green hover:bg-neon-green-light text-black font-bold py-4 rounded text-lg"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
