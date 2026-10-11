# Publicar el portafolio gratis con GitHub Pages

El sitio es estático (HTML, CSS y JavaScript), así que no necesita servidor propio. Todas las fotos e íconos están dentro de `assets/`, por lo que el sitio no depende de enlaces externos para las imágenes.

## Antes de subir
1. Descomprime el ZIP.
2. Verifica que `index.html`, `assets/` y `proyectos/` estén juntos en la misma carpeta.
3. Sube la carpeta completa: `index.html` solo no funciona sin `assets/` y `proyectos/`.

## Publicación con GitHub Pages
1. Inicia sesión en https://github.com/ y crea un repositorio nuevo, por ejemplo `portafolio`.
2. Con GitHub Free, déjalo **Public** para poder usar GitHub Pages.
3. En el repositorio elige **Add file → Upload files** y arrastra el **contenido** de la carpeta (no la carpeta exterior), incluido el archivo `.nojekyll`.
4. Confirma con **Commit changes**.
5. Ve a **Settings → Pages**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`, y guarda.
6. Espera unos minutos y abre la URL que aparece en esa misma sección.

Documentación oficial: https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Probar en tu computador
Puedes abrir `index.html` con doble clic. Para una prueba más fiel (rutas y carrito), abre una terminal en la carpeta y ejecuta:

```
python -m http.server 8000
```

y visita http://localhost:8000

## Antes de compartirlo
- Revisa el número de WhatsApp (`56952262331`) en cada `data.js` y en `index.html`.
- Mantén visible que Zona Sport, Mesa Noble y Paraísos Sur son proyectos de demostración.
- El carrito y los formularios no cobran ni guardan datos: preparan un mensaje para WhatsApp.
