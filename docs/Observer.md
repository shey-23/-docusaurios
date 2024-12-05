# Patron de diseño(Observer)

## Observer

### Definicion

Es un patrón de diseño de software en el que un objeto, llamado sujeto, mantiene una lista de sus dependientes, llamados observadores, ygvit les notifica automáticamente cualquier cambio de estado, normalmente llamando a uno de sus métodos.

### Estructura

- **Sujeto Observable:** Objeto que mantiene una lista de observadores y notifica a estos observadores cuando cambia su estado. Puede haber varios sujetos observables en una aplicación, y cada uno puede tener su propia lista de observadores. 

- **Observadores:** Objetos que desean ser notificados cuando cambia el estado del sujeto observable. Cada observador implementa una interfaz o clase abstracta que define un método de actualización. Este método se llama automáticamente cuando el sujeto observable notifica un cambio. 


## Implementacion 

- **Definir la interfaz del observador:** Crea una interfaz o clase abstracta que declare el método de actualización que los observadores deben implementar 

- **Implementacion de observadores:** Crea clases concretas que implementen la interfaz del observador. Estas clases definirán cómo reaccionarán ante las notificaciones del sujeto observable. 

- **Definir sujeto observable:** Crea una clase para el sujeto observable y agregue métodos para registrar, eliminar y notificar observadores 

- **Notificar a los observadores** Cuando el estado del sujeto observable cambie, llame al método de notificación y pase los datos relevantes a todos los observadores registrados. 


### Beneficios 

- **Desacoplamieto:** Los sujetos observables y los observadores están desacoplados, lo que significa que pueden cambiar y evolucionar de forma independiente sin afectarse mutuamente. *

- **Modularidad:** Puede agregar nuevos observadores sin modificar el código del sujeto observable *

- **Reutizacion de codigo:**  Los observadores se pueden reutilizar en diferentes contextos, ya que no dependen del sujeto observable específico. *

## Pros y contras 

### Pros

- Principio de abierto/cerrado. Puedes introducir nuevas clases suscriptoras sin tener que cambiar el código de la notificadora (y viceversa si hay una interfaz notificadora).

- Puedes establecer relaciones entre objetos durante el tiempo de ejecución.

### Contras 

-  Los suscriptores son notificados en un orden aleatorio.

### Analogia en el mundo real 

Si te suscribes a un periódico o una revista, ya no necesitarás ir a la tienda a comprobar si el siguiente número está disponible. En lugar de eso, el notificador envía nuevos números directamente a tu buzón justo después de la publicación, o incluso antes.El notificador mantiene una lista de suscriptores y sabe qué revistas les interesan. Los suscriptores pueden abandonar la lista en cualquier momento si quieren que el notificador deje de enviarles nuevos números


[Referencia](https://refactoring.guru/es/design-patterns/observer)
[Referencia](https://keepcoding.io/blog/patron-observer-y-como-se-usa/)