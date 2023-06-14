import useQuoting from '../hooks/useContextHooks/useQuoting'
import dataJson from './../json/data.json'

const Result = () => {
  const { brands, plans } = dataJson
  const { result, data, resetForm } = useQuoting()
  const { brand, plan, year } = data

  const [selectedBrand] = brands.filter(b => b.id === Number(brand))
  const [selectedPlan] = plans.filter(p => p.id === Number(plan))

  return (
    <div className='text-center p-5'>
      <button className='flex items-center gap-2' onClick={resetForm}><span className='text-xl'>&#8592;</span> New Quote</button>
      <h2 className='text-slate-400 uppercase font-black text-3xl mt-5'>Summary</h2>
      <div className='flex justify-between flex-col sm:flex-row mt-4'>
        <p className='mt-2 flex gap-1'>
          <span className='block pb-3 font-bold text-slate-400 uppercase'>Brand:</span>
          {selectedBrand.name}
        </p>
        <p className='mt-2 flex gap-1'>
          <span className='block pb-3 font-bold text-slate-400 uppercase'>Plan:</span>
          {selectedPlan.name}
        </p>
        <p className='mt-2 flex gap-1'>
          <span className='block pb-3 font-bold text-slate-400 uppercase'>Year:</span>
          {year}
        </p>
      </div>
      <p className='mt-4 flex gap-3 justify-center text-xl sm:text-3xl text-slate-700'>
        <span className='block pb-3 font-bold text-xl sm:text-3xl text-slate-400 uppercase'>Total:</span>
        {result}
      </p>
    </div>
  )
}

export default Result
