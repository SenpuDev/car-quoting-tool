import { useContext } from 'react'
import { QuotingContext } from '../../context/quoting'

const useQuoting = () => {
  return useContext(QuotingContext)
}

export default useQuoting
