class RecordForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { date: '', amount: '', title: '' };
    this.handleChange = this.handleChange.bind(this);
    this.valid = this.valid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewRecord = this.handleNewRecord.bind(this);
  }
  handleChange (e){
    let name = e.target.name;
    return(
      this.setState({ [name]: e.target.value })
    )
  }
  valid(){
    return (this.state.date && this.state.title && this.state.amount)
  }
  handleSubmit(e){
    e.preventDefault();
    $.post('/records', { record: this.state }, (data) =>{
      this.handleNewRecord(data);
      this.setState({ date: '', title: '', amount: ''})
    }, 'json')
  }
  handleNewRecord(data){
    return(
      this.props.addRecord(data)
    )
  }
  render(){
    return(
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 placeholder='Date'
                 name='date'
                 value={this.state.date}
                 onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 placeholder='Title'
                 name='title'
                 value={this.state.title}
                 onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
          <input type='number'
                 className='form-control'
                 placeholder='Amount'
                 name='amount'
                 value={this.state.amount}
                 onChange={this.handleChange}
          />
        </div>
        <button className='btn btn-primary'
                type='submit'
                disabled={ !this.valid() }
        >
          Create record
        </button>
      </form>
    )
  }
}
