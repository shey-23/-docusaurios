# Visitor

## que es 

Visitor es un patrón de diseño de comportamiento que permite añadir nuevos comportamientos a una jerarquía de clases existente sin alterar el código.

## Aplicabilidad

Usa el patrón Visitor cuando:

1-Una estructura de objetos contiene muchas clases de
objetos con interfaces distintas, y se quiere realizar
sobre ellos operaciones que son distintas en cada clase
concreta.

2-Se quieren realizar muchas operaciones distintas sobre
los objetos de una estructura, sin incluir dichas
operaciones en las clases.

2-Las clases que forman la estructura de objetos no
cambian, pero las operaciones sobre ellas sí.

## Participantes

1- Visitor (NodeVisitor): define una operación de visita para cada clase de
elemento concreto en la estructura de objetos
2- ConcreteVisitor (TypeCheckingVisitor):
3- Implementa la interfaz Visitor
4- Cada operación implementa un fragmento de la labor global del visitor concreto, pudiendo almacenar información local
5- Element (Node): define una operación accept con un visitor como argumento
6- ConcreteElement (AssignmentNode): implementa la operación accept
7- ObjectStructure (Compiler):
8- Gestiona la estructura de objetos, y puede enumerar sus elementos
9- Puede ser un compuesto (patrón composite) o una colección de objetos
10- Puede ofrecer una interfaz que permita al visitor visitar a sus elementos

<!-- ---
sidebar_position: 1
---

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page). -->
