# Patron de diseño command 

# Definicion: 

Es un patrón de diseño de comportamiento que convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud. Esta transformación te permite parametrizar los métodos con diferentes solicitudes, retrasar o poner en cola la ejecución de una solicitud y soportar operaciones que no se pueden realizar.

![](/img/img1.webp)
# Características: 

Encapsulación de solicitudes:
Representa una solicitud como un objeto independiente.
Aísla al emisor de la solicitud (cliente) del receptor que la ejecuta.

Parámetros y flexibilidad:
Permite parametrizar objetos con diferentes comandos, ya que cada comando es una entidad independiente con su lógica encapsulada.

Reutilización de comandos:
Los comandos pueden ser reutilizados o compartidos entre diferentes partes del sistema.

Soporte para deshacer/rehacer:
Es fácil implementar funcionalidades de deshacer y rehacer porque el comando encapsula toda la información necesaria para ejecutar y revertir una operación.

Encadenamiento y encolado:
Los comandos pueden almacenarse en colas, facilitando la ejecución diferida o en lotes.
Es útil en aplicaciones que necesitan operar de manera asincrónica.

# Ejemplo: 

Menús contextuales 

# Ventajas:

Separa el objeto que envía la solicitud del que la ejecuta.

Los comandos pueden configurarse dinámicamente para realizar tareas específicas.

# Desventajas:

Incremento en el número de clases

Complejidad adicional
