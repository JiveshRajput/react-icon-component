import IconHOC from "./utils/icons/getIcon";
import ReactIconSvg from './utils/icons/reactIconSvg'
function App() {
  return (
    <>
      {/* <ReactIconSvg name='RxCrossCircled' className='w-8 h-8 text-cyan-600' />
      <ReactIconSvg name='BsFill1SquareFill' className='w-8 h-8 ' /> */}
      <IconHOC icon="BsFill1SquareFill" className='w-8 h-8 ' />
      <IconHOC icon="FaAngrycreative" className='w-8 h-8 text-cyan-600 ' />
      <IconHOC icon="RxAccessibility" className='w-8 h-8 text-cyan-600 ' />
      <IconHOC icon="RxCrossCircled" className='w-8 h-8 text-cyan-600 ' />


    </>
  );
}

export default App;
