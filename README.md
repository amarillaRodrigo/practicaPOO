# Punto 5

## 1. Diferencias entre funciones constructoras con prototype y usar class

- La sintaxis de class es mas clara
- Hoisting: Las funciones constructoras con prototype se elevan, mientras que las clases no.
- Modo estricto: Las clases se ejecutan en modo estricto por defecto.
- Herencia: Las clases pueden heredar de otras clases, mientras que las funciones constructoras con prototype no.


## 2. Ventajas de usar getters y setters

- Permite el encapsulamiento, que es ocultar los detalles de implementacion y controlar el acceso a los datos.
- Validacion de datos antes de asignarlos.

## 3. Problemas al modificar prototipos nativos

- Comportamientos inesperados, si otro script utiliza el mismo nombre, se sobreescribe el prototipo original.
- Puede afectar el rendimiento, ya que javascript esta optimizado para operar con prototipos nativos.

## 4. Object.assign vs funcion constructora

La funcion constructora permite control selectivo sobre el metodo a copiar, mientras que Object.assign copia todos los metodos del objeto.
Esto es una ventaja si queremos metodos especificos o renombrarlos. Pero una desventaja cuando tenemos numerosos metodos. 
