import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userarr:[]
    }
  }
  componentDidMount(){

    fetch("https://demo1779595.mockable.io/companies",{
    method:"POST"
  })
    .then(res=>res.json())
    .then(data=>{
      // const datacomp=data.companiesList;
      // const randomname=datacomp[Math.floor(Math.random()*datacomp.length)];
      // console.log(data.companiesList[0].name);}
      this.setState({userarr:data.companiesList})
      console.log(this.state.userarr)
    }
  )

}
  render() {
    return(
      <div>
        <table>
          <thead id='head'>
            <tr>
              <th>name</th>
              <th>company</th>
              <th>role</th>
              {/* <th>verified</th> */}
              <th>status</th>
              <th>companyImageURL</th>
            </tr>
          </thead>
          <tbody id='body'>
            {
              this.state.userarr.map(user=>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.company}</td>
                  <td>{user.role}</td>
                  {/* <td>{user.verified}</td> */}
                  <td>{user.status}</td>
                  <td>{user.companyImageURL}</td>
                </tr>
              )
            }         
          </tbody>
        </table>
      </div>
    );

    

  }
}

export default App