import React, { Component } from 'react';

import axios from 'axios';

import { DataGrid } from '@material-ui/data-grid';


export default class Usuarios extends Component {

 state = {
   usuarios: []
 };

 componentDidMount() {
   console.log('Entra a componentdidmount');
   axios.get('http://8f0c420f45dc.ngrok.io/api/v1/usuario')
    .then(res => {
      const usuario = res.data;
      this.setState({usuarios: usuario});
    })
 }


  render(){

   const columns = [
     { field: 'idUsuario', headerName: 'ID USUARIO', width:70},
     { field: 'nombre', headerName: 'NOMBRE', width:200},
     { field: 'apellidos', headerName: 'APELLIDOS', width:200},
     { field: 'correo', headerName: 'CORREO', width:200},
     { field: 'userName', headerName: 'USERNAME', width:200},
   ];
    return(
       <div style={{ height: 400, width: '100%'}}>
         <DataGrid id={Math.random()} rows={this.state.usuarios} columns={columns} />
       </div>
    )
  }

}
