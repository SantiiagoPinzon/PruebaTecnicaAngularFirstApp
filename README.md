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

## Lesson 04 – Create housing location interface

En esta lección empecé a darle más estructura a los datos creando una interfaz llamada `HousingLocationInfo`.  
Con esta interfaz definí el “molde” de lo que debe tener una ubicación de vivienda: id, nombre, ciudad, estado, foto, cantidad de unidades disponibles, si tiene wifi y si tiene lavandería.

Luego importé esta interfaz en el componente `Home` y creé un objeto de prueba llamado `housingLocation`, con datos de ejemplo y una imagen tomada de la ruta base del tutorial.  


Como se ha venido haciendo y es requerimento probé la aplicación en `http://localhost:4200/` y todo sigue compilando bien, así que la interfaz quedó integrada sin romper nada.

Commit asociado: `feat(lesson-04): Create housing location interface`

## Lesson 05 – Use the interface in a component

En esta lección se empezó a conectar realmente la interfaz creada en la lección anterior con los componentes de la aplicación. La persona creó un objeto `housingLocation` usando la interfaz `HousingLocationInfo`, asegurándose de que todos los campos exigidos por la interfaz estuvieran presentes.

Luego, configuró el componente `HousingLocation` para que pudiera recibir datos desde afuera mediante `input()`, que es la forma moderna en Angular de declarar propiedades de entrada.  
Después de esto, en el componente `Home`, se pasó el objeto `housingLocation` al componente hijo usando la sintaxis `[housingLocation]="housingLocation"`.

Con este cambio, el flujo de datos empezó a tener más sentido: `Home` ahora envía información real hacia `HousingLocation`, y este último queda listo para mostrar esa información en próximas lecciones.  
Al final, la aplicación siguió compilando correctamente y era posible ver que el binding entre componentes ya estaba funcionando.

Commit asociado: `feat(lesson-05): Use interface in component`

