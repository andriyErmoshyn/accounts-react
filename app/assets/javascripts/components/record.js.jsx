class Record extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                   edit: false,
                   dateEdit: this.props.record.date,
                   titleEdit: this.props.record.title,
                   amountEdit: this.props.record.amount
                 };
    this.handleDeleteRecord = this.handleDeleteRecord.bind(this);
    this.recordRow = this.recordRow.bind(this);
    this.recordForm = this.recordForm.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange(e){
    let name = e.target.name;
    this.setState({ [name]: e.target.value })
  }
  handleEdit(e){
    e.preventDefault();
    data = {
             date: this.state.dateEdit,
             title: this.state.titleEdit,
             amount: this.state.amountEdit
           };
    $.ajax({
      method: 'PUT',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      data: { record: data },
      success: (data) =>{
        this.setState({ edit: false });
        this.props.handleEditRecord(this.props.record, data);
      }
    })
  }
  recordForm(){
    return(
      <tr className='record'>
        <td>
          <input className='form-control'
                 value={this.state.dateEdit}
                 type='text'
                 name='dateEdit'
                 onChange={this.handleChange}
          />
        </td>
        <td>
          <input className='form-control'
                 type='text'
                 name='titleEdit'
                 value={this.state.titleEdit}
                 onChange={this.handleChange}
          />
        </td>
        <td>
          <input className='form-control'
                 type='number'
                 name='amountEdit'
                 value={this.state.amountEdit}
                 onChange={this.handleChange}
          />
        </td>
        <td>
          <a style={{'marginRight':'20'}} className='btn btn-info' onClick={this.handleEdit}>Update</a>
          <a className='btn btn-danger' onClick={this.handleDeleteRecord}>Delete</a>
        </td>
      </tr>
    )
  }
  recordRow(){
    return(
      <tr className='record'>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <a style={{'marginRight':'20'}} className='btn btn-info' onClick={this.handleToggle}>Edit</a>
          <a className='btn btn-danger' onClick={this.handleDeleteRecord}>Delete</a>
        </td>
      </tr>
    )
  }
  handleToggle(e){
    e.preventDefault();
    this.setState({ edit: !this.state.edit })
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
      this.state.edit ? this.recordForm() : this.recordRow()
    )
  }
}
