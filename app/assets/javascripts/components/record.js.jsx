class Record extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteRecord = this.handleDeleteRecord.bind(this);
  }
  handleDeleteRecord(e){
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      success: () =>{
        this.props.deleteRecord(this.props.record)
      }
    });
  }
  render(){
    return(
      <tr className='record'>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td><a className='btn btn-danger' onClick={this.handleDeleteRecord}>Delete</a></td>
      </tr>
    )
  }
}
