# Angular First App – Prueba Técnica

## Lesson 01 – Create the project
 Proyecto creado con Angular CLI.
 Servidor iniciado con `npm run start`.
 Se identificó y editó el componente raíz `app.ts`.
 Se utilizó interpolación `{{ title }}` en el template inline.
 Se agregaron estilos básicos en `app.css`.
 Confirmado funcionamiento visitando `http://localhost:4200/`.

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

## Lesson 06 – Property binding

En esta lección se empezó a usar property binding para pasar datos desde el componente `Home` hacia el componente `HousingLocation`. Para eso, definió un objeto `housingLocation` tipado con la interfaz `HousingLocationInfo` dentro de `Home`, con todos los datos de una vivienda de prueba (id, nombre, ciudad, estado, foto, etc.).

Luego, en el template de `Home`, se utilizó la sintaxis de property binding `[housingLocation]="housingLocation"` sobre la etiqueta `<app-housing-location>`. De esta forma, el componente hijo recibe el objeto completo y queda listo para mostrar esos datos en su propia plantilla. Esta lección le ayudó a entender mejor cómo Angular conecta componentes padre e hijo a través de propiedades.

Commit asociado: `feat(lesson-06): Add property binding`

## Lesson 07 – Dynamic template values

En esta lección se aprendió a mostrar valores dinámicos directamente dentro del template.  
Esto quiere decir que, en lugar de escribir texto estático, el componente ahora usa valores que vienen de propiedades definidas en TypeScript.

Para lograrlo, se aseguró de que los datos del objeto `housingLocation`, como el nombre, la ciudad o la foto, estén listos para ser usados desde la plantilla del componente hijo (`HousingLocation`).  
De esta manera, cuando el template haga referencia a esas propiedades, Angular las mostrará automáticamente sin necesidad de código adicional.

Aunque todavía no se están renderizando todas esas propiedades en pantalla, este paso dejó claro cómo Angular permite conectar los datos del componente con el template y cómo esos valores pueden cambiar de forma dinámica según lo que el componente reciba.

Commit asociado: `feat(lesson-07): Add dynamic template values`

## Lesson 08 – Use @for to list housing locations

En esta lección se pasó de mostrar una sola vivienda a preparar el componente para manejar varias. Para eso, convirtió la información en una colección de ubicaciones y utilizó la nueva sintaxis de Angular para recorrer la lista directamente en el template.

En el componente `Home` se definió un arreglo de objetos con el tipo `HousingLocationInfo`, y en la plantilla se usó un bloque de repetición (`@for` / `ngFor`) para renderizar varias veces el componente `HousingLocation`, pasando en cada vuelta una de las ubicaciones como input. De esta forma, la página dejó de estar “quemada” con un solo ejemplo y empezó a comportarse como un listado dinámico.

Esta lección  ayudó a entender cómo Angular puede generar varias tarjetas en la vista a partir de un arreglo de datos, simplemente declarando la estructura en TypeScript y recorriéndola dentro del template. Al probar en `http://localhost:4200/`, se pudo ver múltiples tarjetas de vivienda en la sección de resultados.

Commit asociado: `feat(lesson-08): Use '@for' block in templates`





