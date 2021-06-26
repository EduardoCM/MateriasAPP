import React, {Component} from 'react';


class Registros extends Component {
  constructor(props){
    super(props);
    this.state = {
      materias: []
    }

    fetch('http://071f78d94e90.ngrok.io/api/materia')
        .then(res => res.json())
        .then(data => {
          this.setState({materias: data })

          console.log("Se recuperar registros");
          console.log(this.state.materias);
        })
  }

  componentDidMount () {

  }


  render(){
    return (
      <div>
        <h1>Mostrar Lista de registros</h1>
        <ul>
           {
             this.state.materias.map((materia, indice) =>
             <li key={indice}><strong>Codigo: </strong> {materia.codigo} <strong>Materia: </strong> {materia.nombre} </li>

           )
           }

        </ul>

      </div>
    )
  }
}


class Formulario extends Component {

 constructor(props) {
   super(props);
   this.state = {
     id: "",
     codigo: "",
     nombre: "",
     creditos: "",
     duracionHrs: ""
   }
 }


 enviarRegistro = (e) => {
   e.preventDefault();
   console.log("Se enviar valores");
   console.log(this.state);

   fetch('http://071f78d94e90.ngrok.io/api/materia', {
     method: 'POST',
     body: JSON.stringify({
       id: this.state.id,
       codigo: this.state.codigo,
       nombre: this.state.nombre,
       creditos: this.state.creditos,
       duracionHrs: this.state.duracionHrs
     }),
     headers: {
       "Content-type": "Application/json; charset=UTF-8"
     }
   })
   .then(response => response.json())
   .then(json => {
     console.log(json);
     console.log("Envio de materia de forma correcta");
     this.limpiarDatos();
   })
 }

 limpiarDatos = () => {
   console.log("Metodo para limpiar formulario");
   this.setState({id: ""})
   this.setState({codigo: ""})
   this.setState({nombre: ""})
   this.setState({creditos: ""})
   this.setState({duracionHrs: ""})
   console.log("Datos limpios");
 }


 render() {

   return (
     <form onSubmit={this.enviarRegistro}>
       <div>
         <label> Codigo </label>
         <input type="text"
                id="codigo"
                value={this.state.codigo}
                onChange={ev => this.setState({codigo: ev.target.value})} />
        </div>

        <div>
          <label> Nombre </label>
          <input type="text"
                 id="nombre"
                 value={this.state.nombre}
                 onChange={ev => this.setState({nombre: ev.target.value})} />
         </div>

         <div>
           <label> Creditos </label>
           <input type="text"
                  id="creditos"
                  value={this.state.creditos}
                  onChange={ev => this.setState({creditos: ev.target.value})} />
          </div>

          <div>
            <label> duracionHrs </label>
            <input type="text"
                   id="duracionHrs"
                   value={this.state.duracionHrs}
                   onChange={ev => this.setState({duracionHrs: ev.target.value})} />
           </div>

       <input type="submit" value="Enviar" />
     </form>
   )
 }
}


class MiPrimerFormulario extends Component {
  render(){
    return(
      <div>
        <Formulario />
        <Registros />
      </div>
    )
  }
}

export default MiPrimerFormulario;
