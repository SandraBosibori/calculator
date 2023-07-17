import { useState } from "react"



function App() {
  const [num, setNum]=useState(0)
  const [num2, setNum2]=useState(0)
  const [operator, setOperator]=useState('')


  const handleNum= (e)=>{
    const selectedNum= e.target.innerText
    
    
    console.log(selectedNum)
    if (num=== 0){
      setNum(selectedNum)
    }else{
      setNum(num + selectedNum)
    }
    

  }
  const clear=()=>{
    const sliced= num.slice(0, -1)
    setNum(sliced)
  }
  const start=()=>{
    setNum(0)
  }
  const percent=()=>{
    setNum(num/100)
  }
  const operatorHandler=(e)=>{
    setOperator(e.target.innerText)
    setNum2(num)
    setNum(0)
  }
  const calculate = ()=>{
    switch(operator){
      case '+':
        setNum(parseFloat(num2) + parseFloat(num))
        break
      case '-':
        setNum(parseFloat(num2) - parseFloat(num))
        break
      case 'x':
        setNum(parseFloat(num2) * parseFloat(num))
        break
      case '/':
        setNum(parseFloat(num2) / parseFloat(num))
        break
      default:
        break
    }
  }
  

  

  return (
    <div className="w-full h-screen bg-white-800 flex items-center justify-center">
      <div className="w-1/4 h-5/6 bg-black">
        <div className="flex w-full text-white justify-end pr-10 text-3xl mt-6 pt-5">{num}</div>
        <div className="w-full flex flex-wrap mt-5 items-center justify-center">
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-gray-400 rounded-full" onClick={clear}>AC</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-gray-400 rounded-full" onClick={handleNum}>(  )</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-gray-400 rounded-full" onClick={percent}>%</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-green-400 rounded-full" onClick={operatorHandler}>/</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>7</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>8</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>9</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-green-400 rounded-full" onClick={operatorHandler}>x</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>4</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>5</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>6</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-green-400 rounded-full" onClick={operatorHandler}>-</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>1</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>2</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>3</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-green-400 rounded-full" onClick={operatorHandler}>+</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>0</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-orange-400 rounded-full" onClick={handleNum}>.</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-gray-400 rounded-full" onClick={calculate}>=</div>
          <div className="m-2 w-14 h-14 flex text-black items-center justify-center bg-gray-400 rounded-full" onClick={start}>C</div>
        </div>
      </div>
    
    </div>
  
  )}
  export default App