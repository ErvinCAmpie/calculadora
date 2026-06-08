


 export function Button (props){

  return(
    <button className={props.theme}
     onClick={() => props.onClick(props.text)}
    >
      {props.text}
    </button>
  )

 
}