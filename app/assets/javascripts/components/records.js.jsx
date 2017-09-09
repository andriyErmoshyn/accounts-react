class Records extends React.Component{
  render(){
    return(
      <div className='records'>
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
