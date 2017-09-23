class Records extends React.Component{
  constructor(props){
    super(props);
    this.state = { records: props.records };
    this.addRecord = this.addRecord.bind(this);
    this.credits = this.credits.bind(this);
    this.debits = this.debits.bind(this);
    this.balance = this.balance.bind(this);
  }
  addRecord(record){
    return(
      this.setState(prevState => { records: prevState.records.push(record)})
    )
  }
  credits(){
    return this.state.records
      .filter(val => {
        return val.amount >= 0;
      })
      .reduce((prev, curr) => {
        return prev + parseFloat(curr.amount);
    }, 0);
  }
  debits(){
    return this.state.records
      .filter(val =>{
        return val.amount < 0;
      })
      .reduce((prev, curr) =>{
        return prev + parseFloat(curr.amount);
      }, 0);
  }
  balance(){
    return this.debits() + this.credits();
  }
  render(){
    return(
      <div className='records'>
        <div className='row'>
          <AmountBox type='success' amount={this.credits()} text='Credit'/>
          <AmountBox type='danger' amount={this.debits()} text='Debit'/>
          <AmountBox type='info' amount={this.balance()} text='Balance'/>
        </div>
        <RecordForm addRecord={this.addRecord} />
        <hr />
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            { this.props.records.map(record => <Record key={record.id} {...record} />)}
          </tbody>
        </table>
      </div>
    )
  }
}
