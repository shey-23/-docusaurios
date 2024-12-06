<!-- # Themplate Method

## Definicion

Es un patron de diseño de comportamiento que define la estructura de un algoritmo en una clase base, pero delega la implementacion de algunos pasos espesificos a las subclases. 

## Carecteristicas principales

1-Método Template: Es el método principal que define el esqueleto de un algoritmo. Este método no suele ser modificado por las subclases.


2-Métodos abstractos o ganchos: Son métodos que el Template Method llama, pero que son implementados en las subclases. Pueden ser abstractos (sin implementación) o con una implementación predeterminada que puede ser sobrescrita.

## Problema

Imagina que estás creando una aplicación de minería de datos que analiza documentos corporativos. Los usuarios suben a la aplicación documentos en varios formatos (PDF, DOC, CSV) y ésta intenta extraer la información relevante de estos documentos en un formato uniforme.

La primera versión de la aplicación sólo funcionaba con archivos DOC. La siguiente versión podía soportar archivos CSV. Un mes después, le “enseñaste” a extraer datos de archivos PDF

## Solucion

El patrón Template Method sugiere que dividas un algoritmo en una serie de pasos, conviertas estos pasos en métodos y coloques una serie de llamadas a esos métodos dentro de un único método plantilla. Los pasos pueden ser abstractos, o contar con una implementación por defecto. Para utilizar el algoritmo, el cliente debe aportar su propia subclase, implementar todos los pasos abstractos y sobrescribir algunos de los opcionales si es necesario (pero no el propio método plantilla).

Veamos cómo funciona en nuestra aplicación de minería de datos. Podemos crear una clase base para los tres algoritmos de análisis. Esta clase define un método plantilla consistente en una serie de llamadas a varios pasos de procesamiento de documentos.
 -->
