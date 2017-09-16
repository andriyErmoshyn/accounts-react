class Records extends React.Component{
  constructor(props){
    super(props);
    this.state = { records: props.records };
    this.addRecord = this.addRecord.bind(this);
  }
  addRecord(record){
    return(
      this.setState(prevState => { records: prevState.records.push(record)})
    )
  }
  render(){
    return(
      <div className='records'>
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
