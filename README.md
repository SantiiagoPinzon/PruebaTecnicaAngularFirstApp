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

## Lesson 09 – Create a service

En esta lección se aprendió a separar la lógica de datos del componente usando un servicio.  
Hasta ahora, el componente `Home` tenía directamente en su interior toda la información de las viviendas, lo que hacía que creciera muy rápido. Para solucionar esto, se creó un servicio dedicado a manejar esos datos.

Dentro del nuevo servicio se movieron tanto el arreglo de ubicaciones como los métodos necesarios para obtener la información. Luego, el servicio se inyectó en el componente `Home` utilizando el constructor, lo que permitió reemplazar los datos “quemados” por los que devuelve el servicio.

Con este cambio, el componente quedó más ordenado porque ahora solo se encarga de pedir los datos y mostrarlos, mientras que el servicio es el responsable de proveer la información. Esta lección reforzó la idea de que Angular fomenta componentes simples y servicios que centralizan la lógica.

Commit asociado: `feat(lesson-09): `

## Lesson 10 – Add routing

En esta lección se  aprendió a agregar rutas a la aplicación para poder navegar entre diferentes pantallas. Hasta este punto, toda la información se veía en una sola vista, pero el tutorial introduce el sistema de routing de Angular para mostrar un detalle de cada vivienda.

Primero se creó la configuración de rutas, donde se definió una ruta principal para el componente `Home` y una ruta con parámetro para el detalle de cada ubicación. Después, esta configuración se importó en el componente raíz para que Angular pudiera manejar la navegación según la URL.

También se reemplazó el contenido estático en `App` por la directiva del enrutador (`<router-outlet>` o su equivalente en Angular moderno), lo que permite que cada componente se cargue dinámicamente según la ruta seleccionada.

Con esto, la aplicación dejó de ser una sola pantalla fija y empezó a comportarse como una app real, donde es posible cambiar de vista mediante enlaces o escribiendo la URL.

Commit asociado: `feat(lesson-10): Add routing setup`

## Lesson 11 – Customize the details page

En esta lección se creó la página de detalles para cada vivienda. Hasta ahora solo existía una lista de ubicaciones, pero no había forma de ver la información completa de cada una. El tutorial enseñó cómo resolver esto usando rutas dinámicas.

Primero, se añadió un componente de detalle que recibe el `id` de la vivienda desde la URL. Ese `id` se usa para pedirle al servicio la información específica de esa ubicación. Esto hizo que la navegación fuera más útil, porque ahora cada tarjeta puede llevar a su propia página.

Después se actualizó la configuración de rutas para incluir una ruta con parámetro, de forma que Angular pueda cargar el componente de detalle cuando la URL contiene un identificador. También se agregaron enlaces desde la lista principal hacia la nueva página.

Con estos cambios, la aplicación pasó de ser una simple lista a tener navegación real entre pantallas. Al probarla en `http://localhost:4200/`, se pudo abrir la página de detalles de una vivienda y ver su información completa.

Commit asociado: `feat(lesson-11): Add details page with dynamic route`

## Lesson 12 – Integrate Angular Forms

En esta lección se aprendió a crear un formulario dentro de la página de detalles para que el usuario pueda enviar su información si está interesado en una vivienda. Hasta ahora la aplicación solo mostraba datos, pero no recibía nada del usuario.

El tutorial mostró cómo agregar un formulario con tres campos: nombre, correo electrónico y número de unidades deseadas. Se siguió esos pasos y se añadió el formulario directamente en el componente de detalles, usando `ngModel` para enlazar los campos con propiedades en el componente.

También se creó un método para manejar el envío del formulario, que por ahora solo imprime los valores en la consola. Aunque todavía no se procesa esa información, esta lección sirvió para entender cómo Angular maneja formularios simples y cómo se enlazan los inputs con variables en la clase.

Después de agregar el formulario y su lógica básica, la aplicación siguió funcionando correctamente en `http://localhost:4200/`, mostrando los campos y permitiendo capturar la información del usuario.

Commit asociado: `feat(lesson-12): Integrate Angular Forms`

## Lesson 13 – Add search functionality

En esta lección se agregó la funcionalidad de búsqueda dentro del componente `Home`. Hasta este punto el formulario tenía un input y un botón, pero no hacía nada. El tutorial enseñó cómo filtrar la lista de viviendas según la ciudad que el usuario escriba.

Para lograrlo, se creó una propiedad que almacena el texto ingresado por el usuario y un método que ejecuta la búsqueda cada vez que el botón es presionado. Ese método toma la lista completa de ubicaciones del servicio y devuelve solo aquellas que coinciden con lo escrito en el campo de búsqueda.

Luego, en el template, se reemplazó el listado fijo por el resultado filtrado, de modo que solo se muestran las viviendas que coinciden con la ciudad buscada. También se actualizó el input para escuchar los cambios del usuario y mantener sincronizado el valor ingresado.

Commit asociado: `feat(lesson-13): Add search functionality`

## Lesson 14 – Add HTTP communication to your app

En esta última lección se aprendió a reemplazar los datos estáticos por información real obtenida desde un archivo JSON usando solicitudes HTTP. Hasta este punto, las viviendas estaban “quemadas” directamente en el código o en el servicio, pero el tutorial mostró cómo obtenerlas desde un backend simple.

Primero se actualizó el servicio para usar `HttpClient` y hacer una petición a un archivo JSON que contiene la lista de viviendas. Después se configuró la aplicación para incluir el módulo de HTTP de Angular, permitiendo que el servicio pudiera realizar la solicitud sin errores.

Una vez hecho esto, el componente `Home` dejó de depender de datos locales y pasó a obtener la información directamente desde el servicio, el cual ahora entrega los datos cargados desde el archivo remoto. También se agregó la misma lógica en la página de detalles para cargar una sola vivienda según el id seleccionado.

Gracias a este cambio, la aplicación quedó conectada a un origen de datos real, comportándose más como una aplicación completa y no como un ejemplo cualquiera. Al probar en `http://localhost:4200/`, se confirmó que las viviendas y sus detalles se estaban cargando correctamente desde la solicitud HTTP.
(PARA EJECUTAR El `http://localhost:4200/`, se debera abrir otra terminal y mantener encendido el json server, mediante el comando json-server --watch db.json --port 3000, y luego si se podra ejecutar npm run start. para ver los respectivos resultados del challenge )

Commit asociado: `feat(lesson-14): Add HTTP communication to your app`









