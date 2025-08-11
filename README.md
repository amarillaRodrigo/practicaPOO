# Punto 5

## 1. Diferencias entre funciones constructoras con prototype y usar class

- La sintaxis de class es mas limpia y organizada, debido a que toda la logica de la clase se ubica en un solo bloque, mientras que prototype puede ser mas confusa porque los metodos se definen fuera de la funcion constructora.
- Hoisting: Cuando se utilizan clases no se pueden crear instancias antes de declarar la clase, mientras que con prototype se puede llamar a la funcion antes de su declaracion.
- Metodos privados: Class usa # mientras que prototype usa el guion bajo como convencion y en class los metodos son verdaderamente privados, es decir, no accesibles desde fuera de la clase. Mientras que en prototype cualquier codigo puede acceder a ellos.

### Ventajas clases
-   Sintaxis clara
-   Mayor legibilidad

### Ventajas de funciones constructoras

- Mayor control sobre el prototipo

## 2. Ventajas de usar getters y setters

- Permite el encapsulamiento, que es ocultar los detalles de implementacion y controlar el acceso a los datos.
- Validacion de datos antes de asignarlos.

## 3. Problemas al modificar prototipos nativos

- Colisiones de nombre, si otro script o biblioteca utiliza el mismo nombre de metodo, se sobreescriben mutuamente. Es decir, si dos bibliotecas definen Array.prototype.find. de forma diferente, solo funcionara la ultima que se cargue.
- Puede afectar el rendimiento, ya que javascript esta optimizado para operar con prototipos nativos.


## 4. Object.assign vs funcion constructora

La funcion constructora permite control selectivo sobre el metodo a copiar, mientras que Object.assign copia todos los metodos del objeto.
Ademas no modifica los metodos ya existentes, mientras que object assign si sobreescribe propiedades existentes con el mismo nombre.
La funcion constructora tambien permite modificar un metodo especifico.
