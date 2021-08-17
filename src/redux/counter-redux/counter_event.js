export const increment =(value)=>{
    return {
      type: "Increment",
      data:value
    }
  }
  
export const decrement = (value)=> {
    return {
      type: "Decrement",
      data:value
    }
  }
export const reset = ()=>{
  return {
    type:"Reset"
  }
}