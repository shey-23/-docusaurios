# Patron de Diseño (Strategy)

## Strategy 

### Definicon

**es un patrón de diseño de software que permite a una clase cambiar su comportamiento en tiempo de ejecución**

### Estructura

- **Contexto**  referencia a una de las estrategias concretas y se comunica con este objeto únicamente a través de la interfaz estrategia *4

- **Estrategia** Declara un método que la clase contexto utiliza para ejecutar una estrategia. *

- **Estrategias Concretas** implementan distintas variaciones de un algoritmo que la clase contexto utiliza. *

- **Cliente** crea un objeto de estrategia específico y lo pasa a la clase contexto. La clase contexto expone un modificador set que permite a los clientes sustituir la estrategia asociada al contexto durante el tiempo de ejecución. *