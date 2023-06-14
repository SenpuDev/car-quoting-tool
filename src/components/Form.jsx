import dataJson from './../json/data.json'
import { getLastYears } from './../helpers/getLastYears'
import { Fragment } from 'react'
import useQuoting from '../hooks/useContextHooks/useQuoting'
import Error from './Error'

const Form = () => {
  const { brands, plans } = dataJson
  const lastYears = getLastYears()

  const { handleChange, error, setError, data, quoteData } = useQuoting()

  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(data).includes('')) {
      setError('All fields are required.')
      return
    }
    setError('')
    quoteData()
  }

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className='py-5'>
          <label className='block pb-3 font-bold text-slate-400 uppercase'>Car Brand</label>
          <select name='brand' className='w-full p-3 bg-white border rounded-md border-slate-400' onChange={handleChange}>
            <option value=''>-- Select Brand --</option>
            {brands.map(brand => (
              <option key={brand.id} value={brand.id}>{brand.name}</option>
            ))}
          </select>
        </div>

        <div className='py-5'>
          <label className='block pb-3 font-bold text-slate-400 uppercase'>Car Year</label>
          <select name='year' className='w-full p-3 bg-white border rounded-md border-slate-400' onChange={handleChange}>
            <option value=''>-- Select Year --</option>
            {lastYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className='py-5'>
          <label className='block pb-3 font-bold text-slate-400 uppercase'>Choose a plan</label>
          <div className='flex gap-2'>
            {plans.map(plan => (
              <Fragment key={plan.id}>
                <input type='radio' name='plan' id={plan.id} value={plan.id} onChange={handleChange} />
                <label htmlFor={plan.id} className='mr-5'>
                  {plan.name}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type='submit'
          className='w-full mt-5 bg-slate-700 hover:bg-slate-500 hover:scale-95 transition-all rounded-md text-white cursor-pointer p-3 uppercase font-bold'
          value='Get Quote'

        />
      </form>
    </>
  )
}
export default Form
