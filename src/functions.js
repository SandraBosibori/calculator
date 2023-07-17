const values=()=>{
    const [num, setNum]=useState(0)
  const [num2, setNum2]=useState(0)
  const [operator, setOperator]=useState('')

  const handleNum= (e)=>{
    const selectedNum= e.target.innerText
    console.log(selectedNum)
    if (num===0){
      setNum(selectedNum)
    }else{
      setNum(num+ selectedNum)
    }
  }
}

const clear=()=>{
    if(num!==0){
     const slicedNum= selectedNum.slice(0, -1)
     setNum(slicedNum)
      }else{
     setNum(0)
    }
} 