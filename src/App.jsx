import Lottie from 'lottie-react'
import CarLottie from './lotties/icons8-car.json'
import Form from './components/Form.jsx'
import Spinner from './components/Spinner'
import Result from './components/Result'
import useQuoting from './hooks/useContextHooks/useQuoting'
function App () {
  const style = {
    color: '#FFFF',
    width: '50px'
  }

  const { result, loading } = useQuoting()

  return (
    <>
      <header className='p-10 flex justify-center items-center gap-5'>
        <Lottie animationData={CarLottie} loop style={style} />
        <h1 className='text-white text-center text-l sm:text-2xl uppercase font-bold'>Car Insurance Quoting Tool</h1>
      </header>

      <main className='bg-white w-10/12 md:w-2/3 lg:w-1/2 mx-auto shadow rounded-lg p-5 sm:p-10 '>

        {loading && <Spinner />}
        {(result === 0 && !loading) && <Form />}
        {(result !== 0 && !loading) && <Result />}
      </main>
    </>
  )
}

export default App
