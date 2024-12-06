Es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.

Características: 

Separación de responsabilidades:
Descompone los estados en clases separadas, lo que evita la acumulación de lógica condicional en una única clase principal. Facilita la organización del código al encapsular el comportamiento relacionado con cada estado.

Cambio de comportamiento dinámico:
El objeto principal (contexto) delega las acciones al estado actual.
Es posible cambiar el estado en tiempo de ejecución para modificar el comportamiento del objeto sin necesidad de modificar su código.

Encapsulación de estados:
Cada estado es representado como una clase concreta que implementa una interfaz común.
Esto asegura que el contexto no tenga que preocuparse por los detalles específicos de cada estado.

Facilidad para añadir nuevos estados:
Se pueden agregar nuevos estados sin modificar el código existente, cumpliendo con el principio de abierto/cerrado.

Interfaz común:
Los estados comparten una interfaz común, lo que asegura que el contexto no necesite saber qué estado está activo, solo invoca los métodos definidos en la interfaz.

Ejemplo: 

Máquina expendedora con diferentes estados

Ventajas: 

Reducción de código duplicado al encapsular el comportamiento.
Mayor legibilidad y mantenibilidad del código.

Desventajas: 

Aumenta la cantidad de clases en el sistema.
Puede ser complejo si hay demasiados estados interdependientes.