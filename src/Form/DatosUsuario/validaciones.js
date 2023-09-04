export const validarEmail = (email) => {
    // console.log(email)
    const length = email.length;
    // console.log(length)
    if(length > 8 && length < 50 && email.includes('@')){
        // console.log('Validacion exitosa')
        return true
    }else {
        // console.log('Validacion invalida')
        return false
    }
}

export function validarPassword (password) {
    // console.log(password)
    const length = password.length;
    if(length >= 8 && length < 20){
        // console.log('Validacion exitosa')
        return true
    }else {
        // console.log('Validacion invalida')
        return false
    }

}