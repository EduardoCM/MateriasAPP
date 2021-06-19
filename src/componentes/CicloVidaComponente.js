import React, { Component } from 'react';



class CicloVidaComponente extends Component {

   constructor(props) {
     super(props);

     console.log('Se ejecuta constructor');

     this.state = {
       nombre: 'Codigo Rupestre - Space Native'
     }
   }

   componentWillMount(){
     console.log('Se ejecuta componentWillMount');
   }


   componentDidMount(){
     console.log('Se ejecuta componentDidMount');
     this.state = {nombre: '¿¿Como me visualizo en mi carrera profesional en los proximos 5 años??'}
   }

   handleClick = () => {
     console.log("Se ejecuta Evento");
     this.setState({nombre : ' Me interesa participar en esta tribu por que me quiero formar como lider de proyecto y arquitecto de plataformas digitales cloud'})
   }

   render (){
     console.log('Se ejecuto el render');
     return (
       <div>
              <h2>Ciclo de vida de un componente en react</h2>
              <p>{this.state.nombre}</p>

              <p> Aprendiz: {this.props.aprendiz} </p>

              <button onClick={this.handleClick}>
                   Ejecutar Evento
              </button>
       </div>
     )
   }
}

export default CicloVidaComponente;
