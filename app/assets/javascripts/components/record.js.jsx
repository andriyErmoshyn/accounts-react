const Record = (props) =>{
  return(
    <tr className='record'>
      <td>{props.date}</td>
      <td>{props.title}</td>
      <td>{amountFormat(props.amount)}</td>
    </tr>
  )
}
