import { createContext, useState } from 'react'
import { getYearDiference, brandIncrease, planIncrease, formatToPrice } from '../helpers/quotingFunctions'
/* eslint-disable react/prop-types */

// Create the context - That is our extract value
export const QuotingContext = createContext()

// Provide the App the context
export function QuotingProvider ({ children }) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(0)
  const [error, setError] = useState('')
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: ''
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const resetForm = () => {
    setResult(0)
    setData({
      brand: '',
      year: '',
      plan: ''
    })
  }

  const quoteData = () => {
    // Base price 2000
    let amount = 2000

    // Year modifier (Calculate diference between actualYear - selectedYear & -3% for each diference year):
    amount -= ((getYearDiference(data.year) * 3) * amount) / 100

    // Brand modifier (European + 30% || American + 15% || Asian + 5%)
    amount *= brandIncrease(data.brand)

    // Plan modifier (Basic + 20% || Full + 50%)
    amount *= planIncrease(data.plan)

    setLoading(true)

    setTimeout(() => {
      setResult(formatToPrice(amount))
      setLoading(false)
    }, 3000)
  }

  return (
    <QuotingContext.Provider value={{ handleChange, setError, quoteData, resetForm, error, data, loading, result }}>{children}</QuotingContext.Provider>
  )
}
