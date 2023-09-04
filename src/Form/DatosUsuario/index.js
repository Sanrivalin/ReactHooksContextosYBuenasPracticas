import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarPassword, validarEmail } from "./validaciones";

const DatosUsuario = () => {
  const [email,setEmail] = useState({value:'', valid:null})
  const [password,setPassword] = useState({value:'',valid:null})
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     email:{
  //       value:'Santia',
  //       valid: true
  //     },
  //     password: {
  //       value: '123',
  //       valid: true
  //     },
  //   };
  // }
  
    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={(event)=>{
          event.preventDefault()
          if(email.valid && password.valid){
            console.log('Siguiente formulario')
            console.log(email,password)
          }else{
            console.log('No hacer nada')
          }
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          // onBlur={()=>validarEmail(email)}
          type="email"
          error={email.valid===false}
          //Utilizar && instead operador ternario ? :
          helperText={email.valid === false && "Ingresa un correo electrónico válido"}
          // value= {this.state.email.value}
          value= {email.value}
          // onChange={(value)=> {
          //   this.setState({email: {value: value.target.value}})}}
          onChange={(value)=>{
            const email = value.target.value;
            const valido = validarEmail(email)
            setEmail({ value: email, valid:valido})}
          } 
            
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          error={password.valid === false}
          helperText={password.valid === false && "Ingresa una contraseña válida, almenos 8 caracteres y maximo 20"}
          type="password"
          value= {password.value}
          // onChange={(value)=> {
          //   this.setState({password: {value: value.target.value}})}}
          onChange={(value)=>{
            const password = value.target.value            
            setPassword({ value: password, valid:validarPassword(password)})}
          } 
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  
}

export default DatosUsuario;
