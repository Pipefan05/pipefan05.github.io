# Portafolio de Felipe Antunez Mardones — v3

Sitio estático (HTML, CSS y JavaScript sin frameworks) con el portafolio principal y cinco proyectos de demostración.

## Estructura

```
index.html                     Portafolio principal
caso.html                      Caso de estudio (caso.html?p=zona-sport | mesa-noble | paraisos-sur | clinica-dental | inmobiliaria)
assets/css/portfolio.css       Estilos del portafolio
assets/css/caso.css            Estilos de los casos de estudio
assets/img/                    Fotografías reales, guardadas localmente (no dependen de internet)
  zona-sport/  mesa-noble/  paraisos-sur/  clinica-dental/  inmobiliaria/  portafolio/
  capturas/                    Capturas reales de cada sitio (escritorio 1440 px y celular 390 px)
assets/icons/                  Íconos PNG (sin emojis)
  pf/ zs/ mn/ ps/ cd/ in/      Un set por proyecto, en sus colores (-d oscuro, -l claro, -a acento)
  whatsapp-*.png               Logo oficial de WhatsApp (badge, blanco, verde, oscuro)
proyectos/
  zona-sport/    index.html, producto.html, css/zs.css, js/data.js, js/store.js
  mesa-noble/    index.html, plato.html,    css/mn.css, js/data.js, js/app.js
  paraisos-sur/  index.html, destino.html,  css/ps.css, js/data.js, js/app.js
  clinica-dental/ index.html, agendar.html, css/ld.css, js/data.js, js/app.js
  inmobiliaria/  index.html, propiedad.html, css/ap.css, js/data.js, js/app.js
```

## Cada proyecto tiene identidad propia

| Proyecto | Estilo | Tipografías | Colores |
|---|---|---|---|
| Portafolio | Estudio moderno, claro | Geist + Instrument Serif | Marfil, negro, dorado |
| Zona Sport | Marca deportiva, oscuro y enérgico | Barlow Condensed + Inter | Negro, lima |
| Mesa Noble | Editorial gastronómico, carta impresa | Cormorant Garamond + Jost | Crema, terracota |
| Paraísos Sur | Aventura y naturaleza | Fraunces + DM Sans | Verde bosque, ámbar |
| Lumen Dental | Salud cercana, formas redondeadas | Sora + Nunito Sans | Azul profundo, menta |
| Altura Propiedades | Arquitectónico | Space Grotesk + Manrope | Grafito, arena, cobalto |

## Cómo editar contenido

- **Productos de Zona Sport**: `proyectos/zona-sport/js/data.js`. Un solo listado alimenta el catálogo y la ficha de producto (ya no hay que sincronizar dos listas).
- **Carta de Mesa Noble**: `proyectos/mesa-noble/js/data.js`.
- **Destinos y paquetes de Paraísos Sur**: `proyectos/paraisos-sur/js/data.js`.
- **Tratamientos y especialistas de Lumen Dental**: `proyectos/clinica-dental/js/data.js` (las horas disponibles son de ejemplo y se generan en `ldSlots`).
- **Propiedades y corredores de Altura**: `proyectos/inmobiliaria/js/data.js` (incluye el valor UF referencial usado en precios y simulador).
- **Número de WhatsApp**: está en el `CONFIG` de cada `data.js` y al final de `index.html` (`const WA`). Formato: código de país + número, sin `+` ni espacios.
- **Fotos nuevas**: guárdalas en `assets/img/<proyecto>/` con el mismo nombre que reemplazas, o agrega el archivo y actualiza la ruta en `data.js`. Recomendado: JPG de 800×800 px para productos y 1600 px de ancho para portadas.

## Funcionalidades

- **Zona Sport**: 15 productos con 3–4 fotos reales cada uno; búsqueda, filtros por deporte y orden por precio/valoración; segunda foto al pasar el cursor; favoritos; ficha con galería, tallas/variantes, guía de tallas, cantidad y productos relacionados; carrito lateral con barra de envío gratis que arma el pedido para WhatsApp; sección de ayuda y barra de compra fija en celular.
- **Mesa Noble**: carta con estilo de menú impreso por secciones; menú degustación; eventos privados; mapa; ficha de cada plato con galería, maridaje y alérgenos; equipo (fotos acordes a cada nombre); reservas y pedido para retirar en dos pasos, confirmados por WhatsApp.
- **Paraísos Sur**: portada con imágenes rotativas, guía de temporadas, mapa por destino, buscador por país/experiencia/duración, 6 destinos con galería ampliable, itinerario, qué llevar, paquetes comparables, preguntas frecuentes y cotización por WhatsApp.

- **Lumen Dental**: agenda online en 4 pasos (tratamiento, especialista, día y hora) con resumen y confirmación por WhatsApp; fichas de tratamiento con valores desde; equipo; convenios; preguntas frecuentes y mapa.
- **Altura Propiedades**: buscador por operación, comuna, tipo, dormitorios y precio; vista cuadrícula o lista; favoritas; fichas con galería ampliable, ficha técnica, simulador de dividendo en UF y agenda de visita con el corredor; formulario de tasación.

## Casos de estudio

Cada proyecto tiene una página de caso de estudio con el desafío, la solución, la paleta de color, las tipografías, capturas reales en escritorio y celular, y las funcionalidades. Si cambias el diseño de un proyecto, vuelve a tomar sus capturas y reemplaza los archivos en `assets/img/capturas/`.

## Versiones de estilos

Los enlaces a CSS y JS llevan `?v=5` (en el portafolio). Cuando publiques cambios, sube ese número (por ejemplo a `?v=5`) para que los visitantes vean la versión nueva y no una guardada en su navegador.

## Créditos y avisos

- Fotografías de [Unsplash](https://unsplash.com) (licencia Unsplash: uso gratuito, comercial y no comercial, sin atribución obligatoria).
- Íconos de [Lucide](https://lucide.dev) (licencia ISC) convertidos a PNG. Logo de WhatsApp de Simple Icons (CC0); la marca WhatsApp pertenece a Meta.
- Zona Sport, Mesa Noble, Paraísos Sur, Lumen Dental, Altura Propiedades y sus equipos, precios, opiniones y datos de contacto son **ficticios** y se presentan como demostración. Algunos productos fotografiados muestran marcas reales (por ejemplo, el calzado); si usas una plantilla para un cliente real, reemplaza las fotos por las de sus propios productos.
- El carrito y los formularios no procesan pagos ni guardan datos en un servidor: preparan un mensaje para WhatsApp.
