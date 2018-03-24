import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class Company extends Component{

    constructor(){
        super();
        this.state={a:"a"};

    }


    render(){
    return(
      <div style={{width:'90%',textAlign:"center", margin:"auto"}}>
        <h2>Company</h2>

          <TextField
              type="text"
              fullWidth={true}
              hintText="informe aqui o nome da empresa"
              floatingLabelText="Nome da Empresa"
              floatingLabelFixed={false}
          />
          <TextField
            type="text"
            fullWidth={true}
            hintText="informe o cnpj da empresa"
            floatingLabelText="Cnpj da Empresa"
            floatingLabelFixed={false}
        />
          <TextField
              type="text"
              fullWidth={true}
              hintText="informe o telefone da empresa"
              floatingLabelText="Telefone da Empresa"
              floatingLabelFixed={false}
          />
          <TextField
              type="email"
              fullWidth={true}
              hintText="informe o email da empresa"
              floatingLabelText="Email da Empresa"
              floatingLabelFixed={false}
          />
          <TextField
              type="password"
              fullWidth={true}
              hintText="informe uma senha para login"
              floatingLabelText="Senha"
              floatingLabelFixed={false}
          />


        <RaisedButton label="Primary" primary={true} style={{ marginTop:"12px",float:"right"}}/>
        <RaisedButton label="Primary" default={true} style={{ marginRight:"12px",marginTop:"12px",float:"right"}}/>
      </div>
    );
  }
}
