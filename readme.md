# Mundo Deportivo

## Descripción del Proyecto

**Mundo Deportivo** es un sitio web diseñado para informar sobre el impacto de las apuestas deportivas en los adolescentes en Argentina. El sitio incluye artículos periodísticos y una sección interactiva donde los usuarios pueden puntuar la nota y dejar su opinión.

## Visualización del Sitio en GitHub Pages

Para visualizar el sitio en GitHub Pages, sigue estos pasos:

1. El repositorio del proyecto tiene que estar alojado en GitHub.
2. Ve a la configuración del repositorio en GitHub.
3. En la sección **Pages**, seleccionar la rama desde la cual deseas publicar y la carpeta raíz.
4. Guardar los cambios.
5. Acceder al sitio utilizando la URL proporcionada, que tendrá el formato: `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`

## Funcionalidad JavaScript Implementada

### Cambiar el Color de Fondo

El botón de alternar color de fondo permite cambiar entre un fondo blanco con texto negro y un fondo negro con texto blanco. Esto se logra mediante la manipulación del estilo del elemento `body` y otros elemento como el encabezado, los artículos y el pie de página.

### Contador de Puntuación

El contador permite a los usuarios puntuar la nota con un valor entre 0 y 10. Los botones de incremento y decremento ajustan el valor del contador, y se muestra una alerta si se intenta superar el límite.

### Alternar Visibilidad de Artículos

Cada artículo tiene un botón que permite mostrar u ocultar su contenido. Esto se logra manipulando el estilo `display` del contenido del artículo.

### Desplazamiento Suave

Los enlaces del menú de navegación permiten desplazarse suavemente a las secciones correspondientes del sitio. Esto se implementa utilizando el método `scrollIntoView` con la opción `behavior: "smooth"`.

---
¡Gracias por visitar **Mundo Deportivo**!