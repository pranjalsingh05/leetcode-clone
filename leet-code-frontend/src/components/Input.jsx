

const Input = (props) => {
  const { email } = props;
  return (
      <input 
      className=" flex items-start p-3 outline outline-1 hover:outline-2 focus:outline-2 rounded-sm outline-slate-300 hover:outline-slate-400 focus:outline-slate-500" 
       onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type} 
      
      />
  )
}

export default Input