document.addEventListener('DOMContentLoaded', () => {
    let encripter = document.getElementById('boton1');
    let desencripter = document.getElementById('boton2')
    let muneco = document.querySelector('.cuatroPrimaveras')
    let parrafos = document.querySelector('.parrafosImagen')
    let resultText = document.getElementById('textResultant')

    encripter.addEventListener('click', buttonEncripter)
    desencripter.addEventListener('click', buttonDesencripter)



    function buttonEncripter(){
        ocultarAdelante();
        let cajaTexto = recuperartexto()
        resultText.textContent = encriptarTexto(cajaTexto);

    }


    function  buttonDesencripter(){
        ocultarAdelante();
        let cajaTexto = recuperartexto()
        resultText.textContent = desencriptarTexto(cajaTexto)
    }


    function recuperartexto(){
        console.log('hola')
        let cajaTexto = document.getElementById('textArea').value
        return cajaTexto
    }


    function ocultarAdelante(){
        muneco.classList.add('ocultar');
        parrafos.classList.add('ocultar');

    }

    function encriptarTexto(mensaje){
        let textoFinal = ''
        for (let lt = 0; lt < mensaje.length; lt++ ){
            if(mensaje[lt] == 'a'){
                textoFinal = textoFinal + 'ai'
            }
            else if (mensaje[lt] == 'e'){
                textoFinal = textoFinal + 'enter'
            }
            else if (mensaje[lt] == 'i'){
                textoFinal = textoFinal + 'imes'
            }
            else if (mensaje[lt] == 'o'){
                textoFinal = textoFinal + 'ober'
            }
            else if (mensaje[lt] == 'u'){
                textoFinal = textoFinal + 'ufat'
            }
            else{
                textoFinal = textoFinal + mensaje[lt]
            }

        }
        return textoFinal;
    } 


    function desencriptarTexto(mensaje){
        let textoFinal = ''
        for (let lt = 0; lt < mensaje.length; lt++){
            if(mensaje[lt] == 'a'){
                textoFinal = textoFinal + 'a'
                lt = lt+1;
            }
            else if(mensaje[lt] == 'e'){
                textoFinal = textoFinal + 'e'
                lt = lt+4;
            }
            else if(mensaje[lt] == 'i'){
                textoFinal = textoFinal + 'i'
                lt = lt+3;
            }
            else if(mensaje[lt] == 'o'){
                textoFinal = textoFinal + 'o'
                lt = lt+3;
            }
            else if(mensaje[lt] == 'u'){
                textoFinal = textoFinal + 'u'
                lt = lt+3;
            }
            else{
                textoFinal = textoFinal + mensaje[lt];
            }
        }
        return textoFinal
    }




})