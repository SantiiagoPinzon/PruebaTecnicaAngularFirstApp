# Angular First App – Prueba Técnica

## Lesson 01 – Create the project
- Proyecto creado con Angular CLI.
- Servidor iniciado con `npm run start`.
- Se identificó y editó el componente raíz `app.ts`.
- Se utilizó interpolación `{{ title }}` en el template inline.
- Se agregaron estilos básicos en `app.css`.
- Confirmado funcionamiento visitando `http://localhost:4200/`.

Commit asociado: feat(lesson-01): Hello world

## Lesson 02 – Create home component

En esta lección aprendí a crear mi primer componente en Angular llamado `Home`.  
El componente tiene un pequeño formulario con un input y un botón para simular una búsqueda por ciudad. 

También actualicé el componente principal (`App`) para que use `<app-home>`, de modo que el formulario aparece dentro del layout principal junto con el logo.  
Agregué algunos estilos básicos en el CSS para que el formulario y la página se vieran un poco más ordenados.

Al final, abrí `http://localhost:4200/` y pude ver el logo y el formulario del componente `Home`, lo cual confirma que todo quedó funcionando bien.

Commit asociado: `feat(lesson-02): Create home component`

## Lesson 03 – Display housing location

En esta lección aprendí a mostrar en pantalla un nuevo componente llamado `HousingLocation`.

Lo que hice fue importar el componente `HousingLocation` dentro del componente `Home` y mostrarlo en una sección llamada `.results`. Esto me sirvió para entender cómo un componente puede renderizar a otro y cómo se comienza a armar la estructura visual de la página.  

Probé todo en `http://localhost:4200/` y pude ver el texto “housing-location works!” dentro del área de resultados, así que supe que todo quedó funcionando bien.

Commit asociado: `feat(lesson-03): Display housing location`
