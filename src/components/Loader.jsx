import { Puff } from  'react-loader-spinner'
import "../style/loader.css"

function Loader () {
  return (
    <div className='loader'>
<Puff
  height="80"
  width="80"
  radius={1}
  color="#306BFF"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default Loader;