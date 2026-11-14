# 🧩 UparPuzzle Studio

**UparPuzzle Studio** es una aplicación web interactiva y modular para diseñar, resolver e imprimir **Sopas de Letras** y **Crucigramas** de forma algorítmica. Está pensada especialmente para docentes, estudiantes y creadores de contenido educativo que buscan generar material didáctico listo para imprimir o para proyectar y resolver en el aula (TV, Video Beam o dispositivos móviles).

---

## ✨ Características Principales

### 1. Dos Modos de Juego y Creación
* **Sopa de Letras:**
  * Tamaño de cuadrícula configurable (`10×10`, `12×12`, `15×15`, `18×18`) con ajuste automático según la longitud de las palabras.
  * Control de direcciones permitidas: Horizontal (`→`), Vertical (`↓`), Diagonal (`↘ ↗`) e Invertidas (`← ↑`).
  * **Paleta de 20 Colores y Fusión en Cruces:** Asigna colores vibrantes distintos a cada palabra encontrada y, cuando dos o más palabras se cruzan en una misma letra, combina visualmente todos sus colores mediante un degradado multicolor proporcional.
  * **Soporte Táctil y de Ratón:** Selección fluida tanto arrastrando con el ratón/dedo como tocando la primera y la última letra en pantallas móviles o tableros digitales.
* **Crucigrama Inteligente:**
  * Algoritmo de entrelazamiento automático que evalúa múltiples disposiciones para lograr la mayor cantidad de cruces y la cuadrícula más compacta.
  * Resolución interactiva con teclado físico (PC) y **teclado virtual automático en móviles (Android / iOS)**.
  * Navegación con flechas y cambio de orientación (`Horizontal`/`Vertical`) haciendo clic en la misma casilla, usando el botón **Girar** o presionando la barra espaciadora[cite: 1, 4].
  * Herramientas de ayuda en pantalla: **Comprobar Letras** (marca aciertos en verde y errores en rojo) y **Dar Letra** (revela la casilla activa)[cite: 1].

### 2. Modo Concentración / Pantalla Completa (Aula y Proyección)
* Incluye el botón **Concentración** en la barra del tablero que oculta los paneles de configuración, expande el área de juego al 100% del ancho disponible y activa la pantalla completa nativa para proyectar cómodamente en **TV o Video Beam**.

### 3. Gestión de Palabras (Individual y Carga Masiva)
* **Modo Individual:** Añade palabras una por una con su respectiva pista o definición[cite: 1].
* **Modo Pegar Lista (Por Lotes):** Pega listas completas de palabras separadas por salto de línea con detección automática o manual de separadores (`:`, `-`, `;`, `|`). La pista es opcional para que puedas crear sopas de letras al instante y añadir definiciones después.
* **Edición en Vivo:** Modifica cualquier pista directamente desde la lista lateral sin perder el progreso actual del tablero[cite: 1].
* **Plantillas Predefinidas:** Incluye 4 categorías listas para usar (*Astronomía*, *Naturaleza*, *Tecnología* y *Geografía*) tanto en Español como en Inglés[cite: 1].

### 4. Almacenamiento Local y Portabilidad (`localStorage` + JSON)
* **Actividades Guardadas Integradas:** Guarda tus actividades directamente en el navegador conservando el título, la lista de palabras, las pistas y la disposición exacta generada tanto para la sopa de letras como para el crucigrama[cite: 2].
* **Buscador y Paginación Dinámica:** Filtra tus actividades en tiempo real por título o palabra y organiza listas extensas con selector de paginación (`5`, `10`, `15`, `50` o `Todas`).
* **Exportar e Importar (`.json`):** Descarga copias de seguridad completas de tus actividades para compartirlas o abrirlas en cualquier otro dispositivo[cite: 2].

### 5. Impresión Optimizada y Exportación a Imagen PNG
* **Impresión / PDF Blindada contra Modo Oscuro:** Reglas `@media print` y conmutación automática que garantizan impresiones 100% limpias en fondo blanco, con encabezado de *Nombre* y *Fecha* y visualización completa de todas las pistas sin recortes de texto[cite: 1].
* **Descarga en Imagen PNG:** Renderizado directo en HTML5 Canvas en alta resolución (`1200px` de ancho con altura dinámica y *word-wrap* automático en las definiciones), ideal para insertar en guías o presentaciones[cite: 1].

### 6. Personalización de Interfaz
* **Bilingüe (ES / EN):** Traducción instantánea de toda la interfaz, plantillas e impresiones entre Español e Inglés.
* **Tema Claro / Oscuro:** Modo oscuro nativo con persistencia en `localStorage`.

---

## 🚀 Instalación y Uso

La aplicación funciona de forma **100% cliente** (sin servidores ni instalación de dependencias externas):

1. Clona este repositorio o descarga los archivos del proyecto:
   ```bash
   git clone [https://github.com/kevinluisfl/uparpuzzle-studio.git](https://github.com/kevinluisfl/uparpuzzle-studio.git)