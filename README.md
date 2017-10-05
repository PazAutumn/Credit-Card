EJERCICIO TARJETA DE CREDITO VÁLIDA
===================================

Enunciado: 
----------
   Crea una web que pida, por medio de un *prompt()*, el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

Consideraciones Específicas
---------------------------
1. Tu código debe estar compuesto por 1 función: *isValidCard*

2. El usuario no debe poder ingresar un campo vacío


Proceso
----------------------------------------------------------------------------------------------------------------------------------------
   Primero creo una función para validar mi tarjeta de credito,
```
function isValidCard(){}
```
luego creo un *do... while*, un blucle que continuará corriendo hasta que obtenga algo que no sea una cadena vacía, dentro del *do...while* creo una variable llamada *CreditCardNumber* cuyo valor será el número de la tarjeta de crédito que el usuario ingrese mediante un *prompt*,  mientras el campo esté vacio el *prompt* le vuelve a pedir al usuario que ingrese un número de tarjeta de credito.
   
   
   ```
   do{ 
      
      var creditCardNumber = (prompt("Ingresa un número de tarjeta de crédito de 16 dígitos", "0000000000000000"));  

      }while(creditCardNumber === "");
  
   ```

Para invertir el número dado por el usuario
------------------------------------------- 
   Una vez que el usuario ingresó los datos creo una variable llamada *numberLength* y la igualo al largo de la variable *creditCardNumber* que debería ser igual a 16, luego creo una variable vacía llamada *numeroInvertido* donde guardaré el número de la tarjeta de credito en orden inverso.
  

   ```
  
  var numberLength = creditCardNumber.length;
    
  var numeroInvertido = ""; 
  

   ```
  
   Luego creo un *while* con la condición de que mientras el largo del número sea mayor o igual a 0 itere en la variable *numberLength* y en cada vuelta del bucle y con el método *.charAt()* irá componiendo la cadena invertida. En la primera iteración obtendremos el último carácter de la cadena y lo ponemos al principio de la cadena invertida, en la segunda iteracción obtenemos el penúltimo carácter y lo ponemos como segundo carácter de la cadena invertida y así hasta que hayamos recorrido la cadena por completo.


   ```

  while (numberLength>=0) { 
    numeroInvertido = numeroInvertido + creditCardNumber.charAt(numberLength); 
    numberLength--; //
  
  } 


   ```

Para agregar cada número ya invertido como un elemento en un array
------------------------------------------------------------------

   Creamos una variable que contiene *un separador ("")* para utilizar el método *split* en el número en orden inverso que quedó en la variable *numeroInvertido*. La variable *arregloDeSubCadenas* será igual a cada número guardado en *numeroInvertido* pero ahora, cada uno como un elemento diferente dentro de un array, finalmente declaramos que *creditCard* será igual al resultado de *arregloDeSubCadenas*.

```
  numeroInvertido, 
    separador = "", 
    arregloDeSubCadenas = numeroInvertido.split(separador); 
creditCard = arregloDeSubCadenas; 

```
Algoritmo de Luhn
-----------------
   Creo variable *numLuhn* con valor 0 la cual almacenará la suma de los cálculos de cada uno de los dígitos de la tarjeta de crédito según el algoritmo de Luhn. Declaro una variable llamada *value* para realizar cálculos de cada dígito. creo un *if* con una condición que me dice que si el residuo de i entre dos es igual a 1 significará que el número del indice será impar(ya que en el ejemplo de Michele las posiciones comenzaban en el 1 y en mi array comienzan en el 0). La variable *value* será igual a 2 multiplicado por cada uno de los 16 números de la tarjeta de credito (*creditCard[i]*), si el valor de *value* es mayor o igual a 10 con el ciclo for recorro los 16 dígitos de la tarjeta de credito para averiguar si es válida según al algoritmo de Luhn. *value* será igual a *value* divido en 10 y parseado a entero + el módulo de value entre 10.

```
   var numLuhn = 0; 
   
   var value;
   
   for (var i = 0; i < creditCard.length; i++) { 
        
       if (i % 2 == 1) { 
           
           value = 2 * creditCard[i]; 
           
           if (value >= 10) { 
               
               value = (parseInt(value / 10) + value % 10);
           } 
    }
 ```
 
   Si *i* no es impar se ejecutará *else*. *value* es igual a uno de los dígitos de la tarjeta segun el ciclo for. Finalmente a la variable *numLuhn* le sumamos el valor de cada uno de los digitos en cada uno de los 16 ciclos.
 
   
 ```
       } else {
          
           value = +creditCard[i]; 
       }
       
       numLuhn += value; 
 ```       
   
   Ahora estamos fuera del ciclo con el calculo realizado según Luhn. declaro variable *result* que será igual a la siguiente respuesta de condicional; si modulo 10 de *numLuhn* es igual a 0 (numLuhn/10 da resto 0), la tarjeta es válida, sino, es inválida. Valido si numLuhn es 0 o no y según el caso envió un mensaje al usuario por medio de *alert*
          
   
  ```   
   var result = (numLuhn % 10 == 0); 
   
   
   if (result == true) { 
       alert("¡La tarjeta "+creditCardNumber+" es válida!"); //Si la tarjeta es válida
   }else if (result == false) {
       
       alert("¡La tarjeta "+creditCardNumber+" es inválida!"); //Si la tarjeta es inválida
   }
}
 ``` 
----------------------------------------------------------------------------------------------------------------------------------------

Puedes ver el diagrama de flujo aquí:

![Diagrama de flujo](/DiagramaDeFlujo.jpeg)

*OffComent: Eso fue todo chicos, denle like, suscribanse, besitos ahahhahhaha :D*


*Paz.*
