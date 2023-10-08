
const Button = (props) => {
    const title = props.title
    const color = props.color
    const subTitle = props.subTitle
    // const {title} = props
 
  return (
   <div style={{border:"1px solid red"}}>
     <button style={{height:"50px",width:"100px",backgroundColor:color}} >{title } + 12</button>
    <p>{subTitle}</p>
   </div>
  )
}

export default Button