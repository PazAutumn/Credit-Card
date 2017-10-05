function isValidCard() { //creo una función para validar mi tarjeta de credito

   do{ 
     
      creditCardNumber = (prompt("Ingresa un número de tarjeta de crédito de 16 dígitos", "0000000000000000"));  //creo una variable llamada CreditCard cuyo valor será el número de la tarjeta de crédito que el usuario ingrese mediante un prompt

      }while(creditCardNumber === ""); //Mientras el campo esté vacio el prompt le vuelve a pedir al usuario que ingrese un número de tarjeta de credito
   
     
  var numberLength = creditCardNumber.length;
  
  var numeroInvertido = "";
 
  while (numberLength>=0) {
    numeroInvertido = numeroInvertido + creditCardNumber.charAt(numberLength);
    numberLength--;
  
  } 

  numeroInvertido,
    separador = "",
    arregloDeSubCadenas = numeroInvertido.split(separador);
creditCard = arregloDeSubCadenas;



   var numLuhn = 0; //creo variable numLuhn con valor 0 la cual almacenará la suma de los cálculos de cada uno de los dígitos de la tarjeta de crédito según el algoritmo de Luhn
   
   var value;// declaro variable value para realizar cálculos de cada dígito
   
   for (var i = 0; i < creditCard.length; i++) { //con el ciclo for recorro los 16 dígitos de la tarjeta de credito para averiguar si es válida según al algoritmo de Luhn
        
       if (i % 2 == 1) { //si el residuo de i entre dos es 0 significará que el número es par
           
           value = 2 * creditCard[i]; // la variable value será igual a 2 multiplicado por cada uno de los 16 números de la tarjeta de credito (creditCard[i])
           
           if (value >= 10) { // si el valor de value es mayor o igual a 10
               
               value = (parseInt(value / 10) + value % 10);//value será igual a value divido en 10 y parseado a entero + el módulo de value entre 10 
           }
           
       } else {// si i no es par...
          
           value = +creditCard[i]; //value es igual a uno de los dígitos de la tarjeta segun el ciclo for
       }
       
       numLuhn += value; //finalmente a la variable numLuhn le sumamos el valor de cada uno de los digitos en cada uno de los 16 ciclos.
   }
   
   var result = (numLuhn % 10 == 0); //ahora estamos fuera del ciclo con el calculo realizado según Luhn. declaro variable result e igual a lo siguiente respuesta de condicional: si modulo 10 de numPar es igual a 0 (numPar/10 da resto 0) la tarjeta es valida, sino es invalida.
   
   if (result == true) { //valido si numLuhn es 0 o no y escribo en pantalla el mensaje
       
       alert("¡La tarjeta "+creditCardNumber+" es válida!");
   }else if (result == false) {
       
       alert("¡La tarjeta "+creditCardNumber+" es inválida!");
   }
}
