
# Patron de Diseño (Strategy)

## Strategy 

### Definicon

Es un patrón de diseño de software que permite a una clase cambiar su comportamiento en tiempo de ejecución

### Estructura

- **Contexto:** Referencia a una de las estrategias concretas y se comunica con este objeto únicamente a través de la interfaz estrategia 

- **Estrategia:** Declara un método que la clase contexto utiliza para ejecutar una estrategia. 

- **Estrategias Concretas:** Implementan distintas variaciones de un algoritmo que la clase contexto utiliza. 

- **Cliente:** Crea un objeto de estrategia específico y lo pasa a la clase contexto. La clase contexto expone un modificador set que permite a los clientes sustituir la estrategia asociada al contexto durante el tiempo de ejecución. 

### Implementacion 

- **1-**  Identifica un algoritmo que tienda a sufrir cambios frecuentes. También puede ser un enorme condicional que seleccione y ejecute una variante del mismo algoritmo durante el tiempo de ejecución. 

- **2-** Declara la interfaz estrategia común a todas las variantes del algoritmo. 

- **3-** Extrae todos los algoritmos y ponlos en sus propias clases. Todas deben implementar la misma interfaz estrategia 

- **4-** Añade un campo para almacenar una referencia a un objeto de estrategia. Proporciona un modificador set para sustituir valores de ese campo. La clase contexto debe trabajar con el objeto de estrategia únicamente a través de la interfaz estrategia. La clase contexto puede definir una interfaz que permita a la estrategia acceder a sus datos

- **5-** Clase contexto deben asociarla con una estrategia adecuada que coincida con la forma en la que esperan que la clase contexto realice su trabajo principal. 

## Pros y Contras 

### Pros

- Puedes intercambiar algoritmos usados dentro de un objeto durante el tiempo de ejecución.

- Puedes aislar los detalles de implementación de un algoritmo del código que lo utiliza.

- Puedes sustituir la herencia por composición.

- Principio de abierto/cerrado. Puedes introducir nuevas estrategias sin tener que cambiar el contexto.

### Contras

- Si sólo tienes un par de algoritmos que raramente cambian, no hay una razón real para complicar el programa en exceso con nuevas clases e interfaces que vengan con el patrón

-  Los clientes deben conocer las diferencias entre estrategias para poder seleccionar la adecuada.

- Muchos lenguajes de programación modernos tienen un soporte de tipo funcional que te permite implementar distintas versiones de un algoritmo dentro de un grupo de funciones anónimas. Entonces puedes utilizar estas funciones exactamente como habrías utilizado los objetos de estrategia, pero sin saturar tu código con clases e interfaces adicionales

### Analogia en el mundo real 

Imagina que tienes que llegar al aeropuerto. Puedes tomar el autobús, pedir un taxi o ir en bicicleta. Éstas son tus estrategias de transporte. Puedes elegir una de las estrategias, dependiendo de factores como el presupuesto o los límites de tiempo. 

[Referencia](https://refactoring.guru/es/design-patterns/strategy)
<!-- ---

sidebar_position: 3
---

# Create a Blog Post

Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

## Create your first Post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings). -->
