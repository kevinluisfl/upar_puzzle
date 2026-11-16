/* =========================================================================
   0. INTERNACIONALIZACIÓN (ES / EN) Y TEMA CLARO/OSCURO
   ========================================================================= */
const I18N = {
    es: {
        badgeInteractive: "Interactivo",
        headerSubtitle: "Generador algorítmico de Sopas de Letras y Crucigramas",
        tabWS: "Sopa de Letras",
        tabCW: "Crucigrama",
        btnPng: "Imagen PNG",
        btnPrint: "Imprimir / PDF",
        generalSettings: "Ajustes Generales",
        wordSingle: "palabra",
        wordPlural: "palabras",
        labelPuzzleTitle: "Título del Pasatiempo",
        placeholderTitle: "Ej. 601 - Ciencias Naturales",
        untitledPuzzle: "Pasatiempo sin título",
        labelPresets: "Cargar Ejemplo Predefinido",
        presetAstro: "Astronomía",
        presetNature: "Naturaleza",
        presetTech: "Tecnología",
        presetGeo: "Geografía",
        labelGridSize: "Tamaño de Cuadrícula",
        size10: "10 × 10 (Compacto)",
        size12: "12 × 12 (Estándar)",
        size15: "15 × 15 (Amplio)",
        size18: "18 × 18 (Experto)",
        labelDirections: "Direcciones Permitidas",
        dirH: "Horizontal (→)",
        dirV: "Vertical (↓)",
        dirD: "Diagonal (↘ ↗)",
        dirR: "Invertidas (← ↑)",
        cwInfo: "El algoritmo entrelaza automáticamente las palabras buscando la mayor cantidad de cruces válidos.",
        wordListTitle: "Lista de Palabras y Pistas",
        btnClearWords: "Vaciar",
        tabSingle: "Una por una",
        tabBulk: "Pegar Lista",
        placeholderWord: "Palabra (ej. GALAXIA)",
        placeholderClue: "Pista opcional (ej. Conjunto de estrellas...)",
        btnAddSingle: "Añadir a la lista",
        bulkSepLabel: "Separador Palabra / Pista:",
        optSepAuto: "Automático (:  -  ;  |)",
        bulkPlaceholder: "SOL : Estrella con luz propia\nLUNA : Satélite natural de la Tierra\nMARTE\nCOMETA",
        bulkHelper: "Una palabra por línea. La descripción después del separador es opcional (puedes agregarla después).",
        btnBulkAppend: "Añadir Lote",
        btnBulkReplace: "Reemplazar Todo",
        emptyWordList: "No hay palabras en la lista. Añade algunas arriba o elige una plantilla predefinida.",
        placeholderItemClue: "Añadir pista para crucigrama...",
        btnRegenerate: "Regenerar Disposición",
        btnFocusMode: "Concentración",
        btnExitFocusMode: "Salir de Concentración",
        savedActivitiesTitle: "Actividades Guardadas",
        btnSaveActivity: "Guardar",
        searchSavedPlaceholder: "Buscar actividad...",
        emptySavedList: "No hay actividades guardadas aún.",
        noSearchResults: "Sin coincidencias para la búsqueda.",
        showLabel: "Ver:",
        pageSizeAll: "Todas",
        pageOf: "de",
        btnExportJson: "Exportar",
        btnImportJson: "Importar",
        btnClearSaved: "Vaciar",
        printWS: "SOPA DE LETRAS",
        printCW: "CRUCIGRAMA",
        printName: "Nombre: ___________________________",
        printDate: "Fecha: _____________________________",
        statusWS: "Arrastra sobre las letras o toca el inicio y fin de cada palabra",
        statusCW: "Toca una casilla y escribe con tu teclado para resolver el crucigrama",
        btnVerify: "Comprobar Letras",
        btnHint: "Dar Letra",
        btnShowSolution: "Mostrar Solución",
        btnHideSolution: "Ocultar Solución",
        wordsToFind: "Palabras a encontrar",
        emptyWS: "Añade palabras para generar la sopa de letras.",
        unplacedWS: "No cupieron por tamaño:",
        unplacedWSHint: "Prueba una cuadrícula más amplia.",
        activeClueDefault: "Selecciona cualquier casilla blanca del crucigrama para comenzar.",
        btnRotate: "Girar",
        emptyCW: "Añade palabras para generar el crucigrama.",
        unplacedCW: "Palabras sin colocar:",
        cluesAcross: "Horizontales",
        cluesDown: "Verticales",
        noAcross: "Ninguna palabra horizontal.",
        noDown: "Ninguna palabra vertical.",
        lettersUnit: "letras",
        footerLeft: "<strong>UparPuzzle Studio</strong> — Generador algorítmico interactivo.",
        footerSolve: "Resolución en pantalla",
        footerPrint: "Listo para imprimir",
        modalContinue: "Seguir viendo",
        modalNew: "Generar Nuevo",
        defaultCluePrefix: "Definición o pista de",
        toastPresetLoaded: "Plantilla cargada:",
        toastMinLetters: "La palabra debe tener al menos 2 letras válidas.",
        toastDuplicate: "Esa palabra ya está en la lista.",
        toastWordAdded: "añadida correctamente",
        toastListCleared: "Lista de palabras vaciada",
        toastWSReset: "Sopa de letras reiniciada",
        toastCWReset: "Crucigrama limpiado",
        toastFoundWord: "¡Encontraste",
        victoryWSTitle: "¡Sopa de Letras Completada!",
        victoryWSMsg: "Has localizado todas las palabras ocultas en el tablero.",
        victoryCWTitle: "¡Crucigrama Resuelto!",
        victoryCWMsg: "Has completado exitosamente todas las palabras horizontales y verticales.",
        toastWrongLetters: "letras incorrectas marcadas en rojo.",
        toastAllCorrect: "¡Todas las letras escritas hasta ahora son correctas!",
        toastWriteFirst: "Escribe algunas letras en el crucigrama primero.",
        toastSelectCell: "Selecciona una casilla del crucigrama primero.",
        toastPngSuccess: "Imagen PNG descargada con éxito",
        toastBulkAdded: "palabras procesadas en la lista",
        toastBulkEmpty: "Escribe o pega al menos una palabra válida.",
        toastActivitySaved: "Actividad guardada",
        toastActivityLoaded: "Actividad cargada:",
        toastActivityDeleted: "Actividad eliminada",
        toastAllActivitiesCleared: "Todas las actividades guardadas fueron eliminadas",
        toastExportSuccess: "Archivo JSON exportado correctamente",
        toastImportSuccess: "Actividades importadas con éxito",
        toastImportError: "El archivo JSON no tiene un formato válido."
    },
    en: {
        badgeInteractive: "Interactive",
        headerSubtitle: "Algorithmic Word Search & Crossword Generator",
        tabWS: "Word Search",
        tabCW: "Crossword",
        btnPng: "PNG Image",
        btnPrint: "Print / PDF",
        generalSettings: "General Settings",
        wordSingle: "word",
        wordPlural: "words",
        labelPuzzleTitle: "Puzzle Title",
        placeholderTitle: "E.g. 601 - Natural Sciences",
        untitledPuzzle: "Untitled Puzzle",
        labelPresets: "Load Preset Template",
        presetAstro: "Astronomy",
        presetNature: "Nature",
        presetTech: "Technology",
        presetGeo: "Geography",
        labelGridSize: "Grid Size",
        size10: "10 × 10 (Compact)",
        size12: "12 × 12 (Standard)",
        size15: "15 × 15 (Large)",
        size18: "18 × 18 (Expert)",
        labelDirections: "Allowed Directions",
        dirH: "Horizontal (→)",
        dirV: "Vertical (↓)",
        dirD: "Diagonal (↘ ↗)",
        dirR: "Reversed (← ↑)",
        cwInfo: "The algorithm automatically interlocks words finding the maximum number of valid intersections.",
        wordListTitle: "Word & Clue List",
        btnClearWords: "Clear",
        tabSingle: "One by one",
        tabBulk: "Paste List",
        placeholderWord: "Word (e.g. GALAXY)",
        placeholderClue: "Optional clue (e.g. System of stars...)",
        btnAddSingle: "Add to list",
        bulkSepLabel: "Word / Clue Separator:",
        optSepAuto: "Auto (:  -  ;  |)",
        bulkPlaceholder: "SUN : Star at the center of the Solar System\nMOON : Earth's natural satellite\nMARS\nCOMET",
        bulkHelper: "One word per line. The clue after the separator is optional (you can add or edit it later).",
        btnBulkAppend: "Append Batch",
        btnBulkReplace: "Replace All",
        emptyWordList: "No words in the list. Add some above or pick a preset template.",
        placeholderItemClue: "Add crossword clue...",
        btnRegenerate: "Regenerate Layout",
        btnFocusMode: "Focus Mode",
        btnExitFocusMode: "Exit Focus",
        savedActivitiesTitle: "Saved Activities",
        btnSaveActivity: "Save",
        searchSavedPlaceholder: "Search activity...",
        emptySavedList: "No saved activities yet.",
        noSearchResults: "No matching activities found.",
        showLabel: "Show:",
        pageSizeAll: "All",
        pageOf: "of",
        btnExportJson: "Export",
        btnImportJson: "Import",
        btnClearSaved: "Clear",
        printWS: "WORD SEARCH",
        printCW: "CROSSWORD",
        printName: "Name: _____________________________",
        printDate: "Date: _____________________________",
        statusWS: "Drag across letters or tap the start and end of each word",
        statusCW: "Tap any cell and type with your keyboard to solve the crossword",
        btnVerify: "Check Letters",
        btnHint: "Reveal Letter",
        btnShowSolution: "Show Solution",
        btnHideSolution: "Hide Solution",
        wordsToFind: "Words to find",
        emptyWS: "Add words to generate the word search.",
        unplacedWS: "Could not fit due to size:",
        unplacedWSHint: "Try a larger grid size.",
        activeClueDefault: "Click any white cell in the crossword to start.",
        btnRotate: "Flip",
        emptyCW: "Add words to generate the crossword.",
        unplacedCW: "Unplaced words:",
        cluesAcross: "Across",
        cluesDown: "Down",
        noAcross: "No horizontal words.",
        noDown: "No vertical words.",
        lettersUnit: "letters",
        footerLeft: "<strong>UparPuzzle Studio</strong> — Interactive algorithmic generator.",
        footerSolve: "On-screen solving",
        footerPrint: "Print-ready",
        modalContinue: "Keep viewing",
        modalNew: "Generate New",
        defaultCluePrefix: "Definition or clue for",
        toastPresetLoaded: "Template loaded:",
        toastMinLetters: "The word must have at least 2 valid letters.",
        toastDuplicate: "That word is already in the list.",
        toastWordAdded: "successfully added",
        toastListCleared: "Word list cleared",
        toastWSReset: "Word search reset",
        toastCWReset: "Crossword cleared",
        toastFoundWord: "You found",
        victoryWSTitle: "Word Search Completed!",
        victoryWSMsg: "You have found all hidden words on the board.",
        victoryCWTitle: "Crossword Solved!",
        victoryCWMsg: "You have successfully completed all across and down words.",
        toastWrongLetters: "wrong letters highlighted in red.",
        toastAllCorrect: "All letters typed so far are correct!",
        toastWriteFirst: "Type some letters in the crossword first.",
        toastSelectCell: "Select a crossword cell first.",
        toastPngSuccess: "PNG image downloaded successfully",
        toastBulkAdded: "words processed into the list",
        toastBulkEmpty: "Type or paste at least one valid word.",
        toastActivitySaved: "Activity saved",
        toastActivityLoaded: "Activity loaded:",
        toastActivityDeleted: "Activity deleted",
        toastAllActivitiesCleared: "All saved activities were deleted",
        toastExportSuccess: "JSON file exported successfully",
        toastImportSuccess: "Activities imported successfully",
        toastImportError: "The JSON file does not have a valid format."
    }
};

let currentLang = localStorage.getItem('uparpuzzle_lang') || 'es';
let currentTheme = localStorage.getItem('uparpuzzle_theme') || 'light';
const STORAGE_ACTIVITIES_KEY = 'uparpuzzle_saved_activities_v1';

// Estado de paginación y búsqueda para actividades guardadas
let savedPagination = {
    currentPage: 1,
    pageSize: 5,
    searchQuery: ''
};

function t(key) {
    return I18N[currentLang][key] || I18N.es[key] || key;
}

function applyTheme() {
    const htmlEl = document.documentElement;
    const icon = document.getElementById('themeIcon');
    if (currentTheme === 'dark') {
        htmlEl.classList.add('dark');
        htmlEl.classList.remove('light');
        if (icon) icon.className = 'fa-solid fa-sun text-amber-400 text-sm';
    } else {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        if (icon) icon.className = 'fa-solid fa-moon text-indigo-600 text-sm';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('uparpuzzle_theme', currentTheme);
    applyTheme();
}

/* Impresión limpia garantizando fondo blanco sin clases oscuras de Tailwind */
function handleCleanPrint() {
    const htmlEl = document.documentElement;
    const wasDark = htmlEl.classList.contains('dark');
    if (wasDark) {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
    }
    setTimeout(() => {
        window.print();
        if (wasDark) {
            htmlEl.classList.add('dark');
            htmlEl.classList.remove('light');
        }
    }, 60);
}

window.addEventListener('beforeprint', () => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
});

window.addEventListener('afterprint', () => {
    applyTheme();
});

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('uparpuzzle_lang', currentLang);
    document.documentElement.lang = currentLang;
    applyTranslations();
}

function applyTranslations() {
    document.getElementById('langLabel').textContent = currentLang.toUpperCase();
    document.getElementById('uiBadgeInteractive').textContent = t('badgeInteractive');
    document.getElementById('uiHeaderSubtitle').textContent = t('headerSubtitle');
    document.getElementById('uiTabWS').textContent = t('tabWS');
    document.getElementById('uiTabCW').textContent = t('tabCW');
    document.getElementById('uiBtnPng').textContent = t('btnPng');
    document.getElementById('uiBtnPrint').textContent = t('btnPrint');
    document.getElementById('uiGeneralSettings').textContent = t('generalSettings');
    document.getElementById('uiLabelPuzzleTitle').textContent = t('labelPuzzleTitle');
    document.getElementById('puzzleTitleInput').placeholder = t('placeholderTitle');
    document.getElementById('uiLabelPresets').textContent = t('labelPresets');
    document.getElementById('uiPresetAstro').textContent = t('presetAstro');
    document.getElementById('uiPresetNature').textContent = t('presetNature');
    document.getElementById('uiPresetTech').textContent = t('presetTech');
    document.getElementById('uiPresetGeo').textContent = t('presetGeo');
    document.getElementById('uiLabelGridSize').textContent = t('labelGridSize');
    document.getElementById('optSize10').textContent = t('size10');
    document.getElementById('optSize12').textContent = t('size12');
    document.getElementById('optSize15').textContent = t('size15');
    document.getElementById('optSize18').textContent = t('size18');
    document.getElementById('uiLabelDirections').textContent = t('labelDirections');
    document.getElementById('uiDirH').textContent = t('dirH');
    document.getElementById('uiDirV').textContent = t('dirV');
    document.getElementById('uiDirD').textContent = t('dirD');
    document.getElementById('uiDirR').textContent = t('dirR');
    document.getElementById('uiCwInfo').textContent = t('cwInfo');
    document.getElementById('uiWordListTitle').textContent = t('wordListTitle');
    document.getElementById('uiBtnClearWords').textContent = t('btnClearWords');
    document.getElementById('uiTabSingle').textContent = t('tabSingle');
    document.getElementById('uiTabBulk').textContent = t('tabBulk');
    document.getElementById('newWordInput').placeholder = t('placeholderWord');
    document.getElementById('newClueInput').placeholder = t('placeholderClue');
    document.getElementById('uiBtnAddSingle').textContent = t('btnAddSingle');
    document.getElementById('uiBulkSepLabel').textContent = t('bulkSepLabel');
    document.getElementById('optSepAuto').textContent = t('optSepAuto');
    document.getElementById('bulkWordsTextarea').placeholder = t('bulkPlaceholder');
    document.getElementById('uiBulkHelper').textContent = t('bulkHelper');
    document.getElementById('uiBtnBulkAppend').textContent = t('btnBulkAppend');
    document.getElementById('uiBtnBulkReplace').textContent = t('btnBulkReplace');
    document.getElementById('uiBtnRegenerate').textContent = t('btnRegenerate');
    document.getElementById('uiBtnFocusMode').textContent = appState.isFocusMode ? t('btnExitFocusMode') : t('btnFocusMode');
    document.getElementById('uiSavedActivitiesTitle').textContent = t('savedActivitiesTitle');
    document.getElementById('uiBtnSaveActivity').textContent = t('btnSaveActivity');
    document.getElementById('savedSearchInput').placeholder = t('searchSavedPlaceholder');
    document.getElementById('uiShowLabel').textContent = t('showLabel');
    document.getElementById('optPageSizeAll').textContent = t('pageSizeAll');
    document.getElementById('uiBtnExportJson').textContent = t('btnExportJson');
    document.getElementById('uiBtnImportJson').textContent = t('btnImportJson');
    document.getElementById('uiBtnClearSaved').textContent = t('btnClearSaved');
    document.getElementById('uiPrintName').textContent = t('printName');
    document.getElementById('uiPrintDate').textContent = t('printDate');
    document.getElementById('uiBtnVerify').textContent = t('btnVerify');
    document.getElementById('uiBtnHint').textContent = t('btnHint');
    document.getElementById('uiWordsToFind').textContent = t('wordsToFind');
    document.getElementById('uiBtnRotate').textContent = t('btnRotate');
    document.getElementById('uiCluesAcross').textContent = t('cluesAcross');
    document.getElementById('uiCluesDown').textContent = t('cluesDown');
    document.getElementById('uiFooterLeft').innerHTML = t('footerLeft');
    document.getElementById('uiFooterSolve').textContent = t('footerSolve');
    document.getElementById('uiFooterPrint').textContent = t('footerPrint');
    document.getElementById('btnModalContinue').textContent = t('modalContinue');
    document.getElementById('btnModalNew').textContent = t('modalNew');

    const subtitle = document.getElementById('boardStatusSubtitle');
    const printSubtitle = document.getElementById('printSubtitle');
    if (appState.mode === 'wordsearch') {
        subtitle.textContent = t('statusWS');
        printSubtitle.textContent = t('printWS');
    } else {
        subtitle.textContent = t('statusCW');
        printSubtitle.textContent = t('printCW');
    }

    updateSolutionButtonUI();
    renderWordEditorList();
    renderWordSearchList();
    renderCrosswordGrid();
    renderCrosswordClues();
    updateProgressCounter();
    renderSavedActivitiesList();
}

/* =========================================================================
   1. DATOS PREDEFINIDOS Y ESTADO GLOBAL
   ========================================================================= */
const PRESETS = {
    astronomia: {
        es: {
            title: "Exploración del Universo",
            items: [
                { word: "GALAXIA", clue: "Inmenso conjunto de estrellas, nubes de gas, planetas y materia oscura." },
                { word: "NEBULOSA", clue: "Nube gigante de polvo y gas en el espacio donde nacen estrellas." },
                { word: "COMETA", clue: "Cuerpo celeste de hielo y roca que despliega una cola brillante al acercarse al Sol." },
                { word: "SATURNO", clue: "Planeta gigante gaseoso famoso por su espectacular sistema de anillos." },
                { word: "ORBITA", clue: "Trayectoria curva que recorre un cuerpo alrededor de otro bajo la gravedad." },
                { word: "ECLIPSE", clue: "Ocultación transitoria de un astro por interposición de otro cuerpo celeste." },
                { word: "TELESCOPIO", clue: "Instrumento óptico fundamental para observar objetos lejanos del cosmos." },
                { word: "METEORITO", clue: "Fragmento espacial que sobrevive al cruzar la atmósfera y llega a la superficie." },
                { word: "GRAVEDAD", clue: "Fuerza de atracción mutua que experimentan los cuerpos con masa." },
                { word: "SUPERNOVA", clue: "Explosión estelar sumamente luminosa que marca el final de una estrella masiva." }
            ]
        },
        en: {
            title: "Universe Exploration",
            items: [
                { word: "GALAXY", clue: "Massive system of stars, gas clouds, planets, and dark matter." },
                { word: "NEBULA", clue: "Giant cloud of dust and gas in space where new stars are born." },
                { word: "COMET", clue: "Icy celestial body that displays a bright tail when approaching the Sun." },
                { word: "SATURN", clue: "Gas giant planet famous for its spectacular ring system." },
                { word: "ORBIT", clue: "Curved path of a celestial object around another under gravity." },
                { word: "ECLIPSE", clue: "Temporary obscuring of one celestial body by another." },
                { word: "TELESCOPE", clue: "Optical instrument essential for observing distant cosmic objects." },
                { word: "METEORITE", clue: "Space fragment that survives passing through the atmosphere and hits the ground." },
                { word: "GRAVITY", clue: "Natural force of attraction exerted between all objects with mass." },
                { word: "SUPERNOVA", clue: "Powerful and luminous stellar explosion marking the end of a massive star." }
            ]
        }
    },
    animales: {
        es: {
            title: "Fauna y Naturaleza",
            items: [
                { word: "GUEPARDO", clue: "Felino africano considerado el mamífero terrestre más veloz del planeta." },
                { word: "CAMALEON", clue: "Reptil escamoso famoso por cambiar de color y mover sus ojos por separado." },
                { word: "DELFIN", clue: "Mamífero marino cetáceo de gran inteligencia que se comunica con chasquidos." },
                { word: "COLIBRI", clue: "Ave diminuta capaz de batir sus alas tan rápido que puede volar hacia atrás." },
                { word: "CANGURO", clue: "Marsupial australiano que se desplaza dando grandes saltos." },
                { word: "PINGUINO", clue: "Ave marina no voladora adaptada al nado en aguas heladas del hemisferio sur." },
                { word: "ELEFANTE", clue: "El mamífero terrestre de mayor tamaño, dotado de trompa prensil." },
                { word: "TORTUGA", clue: "Reptil cuyo tronco está protegido por un caparazón óseo." },
                { word: "AGUILA", clue: "Ave rapaz diurna de vista aguda y vuelo poderoso." },
                { word: "PULPO", clue: "Molusco marino octópodo de cuerpo blando y gran capacidad de camuflaje." }
            ]
        },
        en: {
            title: "Wildlife and Nature",
            items: [
                { word: "CHEETAH", clue: "African feline known as the fastest land mammal on the planet." },
                { word: "CHAMELEON", clue: "Scaly reptile famous for changing color and moving its eyes independently." },
                { word: "DOLPHIN", clue: "Highly intelligent marine mammal that communicates using clicks and whistles." },
                { word: "HUMMINGBIRD", clue: "Tiny bird capable of flapping its wings so fast it can fly backwards." },
                { word: "KANGAROO", clue: "Australian marsupial that moves by leaping on its strong hind legs." },
                { word: "PENGUIN", clue: "Flightless seabird adapted to swimming in cold Southern Hemisphere waters." },
                { word: "ELEPHANT", clue: "Largest land mammal on Earth, equipped with a prehensile trunk." },
                { word: "TURTLE", clue: "Reptile whose body is shielded by a bony or cartilaginous shell." },
                { word: "EAGLE", clue: "Large diurnal bird of prey renowned for keen eyesight and powerful flight." },
                { word: "OCTOPUS", clue: "Soft-bodied eight-armed marine mollusk with remarkable camouflage skills." }
            ]
        }
    },
    tecnologia: {
        es: {
            title: "Informática y Mundo Digital",
            items: [
                { word: "ALGORITMO", clue: "Secuencia ordenada y finita de pasos para resolver un problema o cálculo." },
                { word: "SERVIDOR", clue: "Computadora que provee datos y servicios a otros equipos en una red." },
                { word: "INTERNET", clue: "Red informática mundial descentralizada que conecta millones de dispositivos." },
                { word: "TECLADO", clue: "Periférico de entrada compuesto por teclas para introducir texto y comandos." },
                { word: "MEMORIA", clue: "Componente donde se almacenan temporal o permanentemente los datos." },
                { word: "PANTALLA", clue: "Dispositivo de salida que muestra visualmente la interfaz y los gráficos." },
                { word: "CODIGO", clue: "Conjunto de instrucciones escritas en un lenguaje de programación." },
                { word: "ROBOTICA", clue: "Rama tecnológica dedicada al diseño y construcción de máquinas automatizadas." },
                { word: "CIBERSEGURIDAD", clue: "Práctica de proteger sistemas, redes y programas frente a ataques digitales." },
                { word: "NAVEGADOR", clue: "Aplicación que permite acceder y visualizar páginas en la web." }
            ]
        },
        en: {
            title: "Computing & Digital World",
            items: [
                { word: "ALGORITHM", clue: "Ordered, finite sequence of steps designed to solve a problem or calculation." },
                { word: "SERVER", clue: "Computer system that provides data and services to other machines on a network." },
                { word: "INTERNET", clue: "Decentralized global network connecting millions of computing devices." },
                { word: "KEYBOARD", clue: "Input peripheral made of keys used to enter text and commands." },
                { word: "MEMORY", clue: "Hardware component where data is stored temporarily or permanently." },
                { word: "MONITOR", clue: "Output display device that visually renders interfaces and graphics." },
                { word: "CODE", clue: "Set of instructions written in a programming language." },
                { word: "ROBOTICS", clue: "Branch of technology focused on designing and building automated machines." },
                { word: "CYBERSECURITY", clue: "Practice of protecting systems, networks, and software from digital attacks." },
                { word: "BROWSER", clue: "Software application used to access and view websites." }
            ]
        }
    },
    geografia: {
        es: {
            title: "Geografía y Relieve",
            items: [
                { word: "CORDILLERA", clue: "Sucesión de montañas enlazadas entre sí que forman una unidad geográfica." },
                { word: "PENINSULA", clue: "Extensión de tierra rodeada de agua por todas partes salvo por un istmo." },
                { word: "ARCHIPIELAGO", clue: "Conjunto de islas próximas entre sí y generalmente con un origen común." },
                { word: "VOLCAN", clue: "Abertura de la corteza terrestre por donde emerge magma y gases." },
                { word: "DESIERTO", clue: "Bioma de clima árido con precipitaciones sumamente escasas." },
                { word: "OCEANO", clue: "Gran masa de agua salada que cubre la mayor parte de la superficie terrestre." },
                { word: "GLACIAR", clue: "Gruesa masa de hielo que se origina en la superficie terrestre por compactación de nieve." },
                { word: "CATARATA", clue: "Caída vertical y caudalosa de agua en el curso de un río." },
                { word: "CONTINENTE", clue: "Cada una de las grandes extensiones en que se divide la superficie terrestre." },
                { word: "ECUADOR", clue: "Línea imaginaria que divide la Tierra en hemisferio norte y hemisferio sur." }
            ]
        },
        en: {
            title: "Geography & Landforms",
            items: [
                { word: "MOUNTAIN", clue: "Large natural elevation of the Earth's surface rising abruptly from surrounding land." },
                { word: "PENINSULA", clue: "Piece of land almost surrounded by water except for an isthmus connecting it." },
                { word: "ARCHIPELAGO", clue: "Group or chain of islands clustered closely together in a body of water." },
                { word: "VOLCANO", clue: "Opening in the Earth's crust through which magma, ash, and gases erupt." },
                { word: "DESERT", clue: "Arid biome characterized by extremely low precipitation and sparse vegetation." },
                { word: "OCEAN", clue: "Vast body of saltwater covering the majority of Earth's surface." },
                { word: "GLACIER", clue: "Thick mass of ice formed over centuries from compacted snow." },
                { word: "WATERFALL", clue: "Steep vertical drop of water along the course of a river or stream." },
                { word: "CONTINENT", clue: "One of the main continuous expanses of land on Earth." },
                { word: "EQUATOR", clue: "Imaginary line dividing the Earth into the Northern and Southern hemispheres." }
            ]
        }
    }
};

// Colores vibrantes para palabras encontradas en la Sopa de Letras (con código hex para combinar cruces)
const WORD_COLORS = [
    { bg: 'bg-indigo-500', hex: '#6366f1', text: 'text-white', light: 'bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950/80 dark:text-indigo-200 dark:border-indigo-700' },
    { bg: 'bg-emerald-500', hex: '#10b981', text: 'text-white', light: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-700' },
    { bg: 'bg-amber-500', hex: '#f59e0b', text: 'text-white', light: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-700' },
    { bg: 'bg-rose-500', hex: '#f43f5e', text: 'text-white', light: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/80 dark:text-rose-200 dark:border-rose-700' },
    { bg: 'bg-sky-500', hex: '#0ea5e9', text: 'text-white', light: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/80 dark:text-sky-200 dark:border-sky-700' },
    { bg: 'bg-violet-500', hex: '#8b5cf6', text: 'text-white', light: 'bg-violet-100 text-violet-900 border-violet-300 dark:bg-violet-950/80 dark:text-violet-200 dark:border-violet-700' },
    { bg: 'bg-teal-500', hex: '#14b8a6', text: 'text-white', light: 'bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950/80 dark:text-teal-200 dark:border-teal-700' },
    { bg: 'bg-fuchsia-500', hex: '#d946ef', text: 'text-white', light: 'bg-fuchsia-100 text-fuchsia-900 border-fuchsia-300 dark:bg-fuchsia-950/80 dark:text-fuchsia-200 dark:border-fuchsia-700' },
    { bg: 'bg-orange-500', hex: '#f97316', text: 'text-white', light: 'bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/80 dark:text-orange-200 dark:border-orange-700' },
    { bg: 'bg-cyan-600', hex: '#0891b2', text: 'text-white', light: 'bg-cyan-100 text-cyan-900 border-cyan-300 dark:bg-cyan-950/80 dark:text-cyan-200 dark:border-cyan-700' },
    { bg: 'bg-lime-600', hex: '#65a30d', text: 'text-white', light: 'bg-lime-100 text-lime-900 border-lime-300 dark:bg-lime-950/80 dark:text-lime-200 dark:border-lime-700' },
    { bg: 'bg-pink-500', hex: '#ec4899', text: 'text-white', light: 'bg-pink-100 text-pink-900 border-pink-300 dark:bg-pink-950/80 dark:text-pink-200 dark:border-pink-700' },
    { bg: 'bg-blue-600', hex: '#2563eb', text: 'text-white', light: 'bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950/80 dark:text-blue-200 dark:border-blue-700' },
    { bg: 'bg-red-600', hex: '#dc2626', text: 'text-white', light: 'bg-red-100 text-red-900 border-red-300 dark:bg-red-950/80 dark:text-red-200 dark:border-red-700' },
    { bg: 'bg-purple-600', hex: '#9333ea', text: 'text-white', light: 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950/80 dark:text-purple-200 dark:border-purple-700' },
    { bg: 'bg-green-600', hex: '#16a34a', text: 'text-white', light: 'bg-green-100 text-green-900 border-green-300 dark:bg-green-950/80 dark:text-green-200 dark:border-green-700' },
    { bg: 'bg-yellow-500', hex: '#eab308', text: 'text-white', light: 'bg-yellow-100 text-yellow-900 border-yellow-300 dark:bg-yellow-950/80 dark:text-yellow-200 dark:border-yellow-700' },
    { bg: 'bg-indigo-700', hex: '#4338ca', text: 'text-white', light: 'bg-indigo-100 text-indigo-950 border-indigo-400 dark:bg-indigo-900/80 dark:text-indigo-100 dark:border-indigo-600' },
    { bg: 'bg-rose-700', hex: '#be123c', text: 'text-white', light: 'bg-rose-100 text-rose-950 border-rose-400 dark:bg-rose-900/80 dark:text-rose-100 dark:border-rose-600' },
    { bg: 'bg-teal-700', hex: '#0f766e', text: 'text-white', light: 'bg-teal-100 text-teal-950 border-teal-400 dark:bg-teal-900/80 dark:text-teal-100 dark:border-teal-600' }
];

// Estado principal
let appState = {
    mode: 'wordsearch', // 'wordsearch' | 'crossword'
    title: 'Exploración del Universo',
    items: [], // [{ id, word, clue }]
    showingSolution: false,
    isFocusMode: false,

    // Estado de Sopa de Letras
    ws: {
        size: 12,
        grid: [],
        placedWords: [],
        unplacedWords: [],
        isSelecting: false,
        startCell: null,
        currentCell: null,
        selectedCells: [],
        tapStartCell: null // Permite resolver en móvil también con toque inicial + toque final
    },

    // Estado de Crucigrama
    cw: {
        rows: 0,
        cols: 0,
        grid: [],
        placedWords: [],
        unplacedWords: [],
        activeCell: null,
        activeDir: 'across'
    }
};

/* =========================================================================
   2. MODO CONCENTRACIÓN / PANTALLA COMPLETA (PROYECCIÓN TV / VIDEO BEAM)
   ========================================================================= */
function toggleFocusFullscreen() {
    appState.isFocusMode = !appState.isFocusMode;
    applyFocusModeUI();

    if (appState.isFocusMode) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    } else {
        if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        }
    }
}

function applyFocusModeUI() {
    const sidebar = document.getElementById('leftConfigSidebar');
    const rightSection = document.getElementById('rightBoardSection');
    const icon = document.getElementById('focusFullscreenIcon');
    const text = document.getElementById('uiBtnFocusMode');

    if (appState.isFocusMode) {
        document.body.classList.add('focus-mode');
        sidebar.classList.add('hidden');
        rightSection.classList.remove('lg:col-span-8');
        rightSection.classList.add('lg:col-span-12');
        icon.className = 'fa-solid fa-compress';
        text.textContent = t('btnExitFocusMode');
    } else {
        document.body.classList.remove('focus-mode');
        sidebar.classList.remove('hidden');
        rightSection.classList.remove('lg:col-span-12');
        rightSection.classList.add('lg:col-span-8');
        icon.className = 'fa-solid fa-expand';
        text.textContent = t('btnFocusMode');
    }

    if (appState.mode === 'crossword') {
        renderCrosswordGrid();
    } else {
        renderWordSearchGrid();
    }
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && appState.isFocusMode) {
        appState.isFocusMode = false;
        applyFocusModeUI();
    }
});

/* =========================================================================
   3. UTILIDADES DE TEXTO Y NOTIFICACIONES
   ========================================================================= */
function sanitizeWord(raw) {
    if (!raw) return '';
    return raw
        .trim()
        .toUpperCase()
        .replace(/Ñ/g, '__ENYE__')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/__ENYE__/g, 'Ñ')
        .replace(/[^A-ZÑ]/g, '');
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    const colors = {
        info: 'bg-slate-900 text-white border-slate-700',
        success: 'bg-emerald-600 text-white border-emerald-500',
        warning: 'bg-amber-500 text-white border-amber-400',
        error: 'bg-rose-600 text-white border-rose-500'
    };
    const icons = {
        info: 'fa-circle-info',
        success: 'fa-circle-check',
        warning: 'fa-triangle-exclamation',
        error: 'fa-circle-exclamation'
    };

    toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border text-xs sm:text-sm font-semibold transition-all duration-300 transform translate-y-2 opacity-0 ${colors[type] || colors.info}`;
    toast.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i><span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

function showVictoryModal(title, message) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    const modal = document.getElementById('victoryModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('victoryModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

/* =========================================================================
   4. GESTIÓN DE MODO, PLANTILLAS Y LISTA DE PALABRAS (INDIVIDUAL Y MASIVA)
   ========================================================================= */
function switchMode(newMode, skipRegenerate = false) {
    appState.mode = newMode;
    appState.showingSolution = false;
    updateSolutionButtonUI();

    const tabWS = document.getElementById('tabWordSearch');
    const tabCW = document.getElementById('tabCrossword');
    const wsSettings = document.getElementById('wordSearchSettings');
    const cwSettings = document.getElementById('crosswordSettings');
    const wsView = document.getElementById('wordSearchView');
    const cwView = document.getElementById('crosswordView');
    const btnVerify = document.getElementById('btnVerifyCrossword');
    const btnHint = document.getElementById('btnHintCrossword');
    const subtitle = document.getElementById('boardStatusSubtitle');
    const printSubtitle = document.getElementById('printSubtitle');

    if (newMode === 'wordsearch') {
        tabWS.className = "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm";
        tabCW.className = "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
        wsSettings.classList.remove('hidden');
        cwSettings.classList.add('hidden');
        wsView.classList.remove('hidden');
        cwView.classList.add('hidden');
        btnVerify.classList.add('hidden');
        btnVerify.classList.remove('flex');
        btnHint.classList.add('hidden');
        btnHint.classList.remove('flex');
        subtitle.textContent = t('statusWS');
        printSubtitle.textContent = t('printWS');
        if (!skipRegenerate) {
            if (appState.ws.grid && appState.ws.grid.length > 0) {
                renderWordSearchGrid();
                renderWordSearchList();
                updateProgressCounter();
            } else {
                generateWordSearch();
            }
        }
    } else {
        tabCW.className = "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm";
        tabWS.className = "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
        wsSettings.classList.add('hidden');
        cwSettings.classList.remove('hidden');
        wsView.classList.add('hidden');
        cwView.classList.remove('hidden');
        btnVerify.classList.remove('hidden');
        btnVerify.classList.add('flex');
        btnHint.classList.remove('hidden');
        btnHint.classList.add('flex');
        subtitle.textContent = t('statusCW');
        printSubtitle.textContent = t('printCW');
        if (!skipRegenerate) {
            if (appState.cw.grid && appState.cw.grid.length > 0) {
                renderCrosswordGrid();
                renderCrosswordClues();
                updateProgressCounter();
            } else {
                generateCrossword();
            }
        }
    }
}

function switchInputTab(tab) {
    const btnSingle = document.getElementById('tabInputSingle');
    const btnBulk = document.getElementById('tabInputBulk');
    const formSingle = document.getElementById('singleWordForm');
    const formBulk = document.getElementById('bulkWordForm');

    if (tab === 'single') {
        btnSingle.className = "py-1.5 rounded-lg bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm transition";
        btnBulk.className = "py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition";
        formSingle.classList.remove('hidden');
        formBulk.classList.add('hidden');
    } else {
        btnBulk.className = "py-1.5 rounded-lg bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm transition";
        btnSingle.className = "py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition";
        formBulk.classList.remove('hidden');
        formSingle.classList.add('hidden');
    }
}

function updatePuzzleTitle() {
    const val = document.getElementById('puzzleTitleInput').value.trim() || t('untitledPuzzle');
    appState.title = val;
    document.getElementById('boardDisplayTitle').textContent = val;
    document.getElementById('printTitle').textContent = val;
}

function loadPreset(key) {
    const presetGroup = PRESETS[key];
    if (!presetGroup) return;
    const preset = presetGroup[currentLang] || presetGroup.es;

    appState.title = preset.title;
    document.getElementById('puzzleTitleInput').value = preset.title;
    updatePuzzleTitle();

    appState.items = preset.items.map((item, idx) => ({
        id: 'item_' + Date.now() + '_' + idx,
        word: sanitizeWord(item.word),
        clue: item.clue
    }));

    renderWordEditorList();
    generateBothPuzzles();
    showToast(`${t('toastPresetLoaded')} "${preset.title}"`, 'info');
}

function renderWordEditorList() {
    const container = document.getElementById('wordEditorList');
    const badge = document.getElementById('wordCountBadge');
    badge.textContent = `${appState.items.length} ${appState.items.length === 1 ? t('wordSingle') : t('wordPlural')}`;

    if (appState.items.length === 0) {
        container.innerHTML = `
            <div class="text-center py-6 px-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-xs">
                ${t('emptyWordList')}
            </div>
        `;
        return;
    }

    container.innerHTML = appState.items.map((item, index) => `
        <div class="group bg-slate-50 dark:bg-slate-800/70 hover:bg-slate-100/80 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-xl p-2.5 transition flex items-start justify-between gap-2">
            <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">${index + 1}</span>
                    <span class="font-mono font-bold text-xs text-slate-900 dark:text-white tracking-wide truncate">${item.word}</span>
                </div>
                <input
                    type="text"
                    value="${(item.clue || '').replace(/"/g, '"')}"
                    onchange="updateWordClue('${item.id}', this.value)"
                    placeholder="${t('placeholderItemClue')}"
                    class="mt-1 w-full bg-transparent text-[11px] text-slate-600 dark:text-slate-300 focus:text-slate-900 dark:focus:text-white focus:bg-white dark:focus:bg-slate-900 focus:px-1.5 py-0.5 rounded border border-transparent focus:border-slate-300 dark:focus:border-slate-600 outline-none transition"
                />
            </div>
            <button onclick="removeWordItem('${item.id}')" class="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 p-1 rounded-lg transition shrink-0" title="Eliminar palabra">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    `).join('');
}

function handleAddWord(e) {
    e.preventDefault();
    const wordInput = document.getElementById('newWordInput');
    const clueInput = document.getElementById('newClueInput');

    const cleanWord = sanitizeWord(wordInput.value);
    if (cleanWord.length < 2) {
        showToast(t('toastMinLetters'), 'warning');
        return;
    }

    if (appState.items.some(i => i.word === cleanWord)) {
        showToast(t('toastDuplicate'), 'warning');
        return;
    }

    const clue = clueInput.value.trim() || `${t('defaultCluePrefix')} ${cleanWord}`;
    appState.items.unshift({
        id: 'item_' + Date.now(),
        word: cleanWord,
        clue: clue
    });

    wordInput.value = '';
    clueInput.value = '';
    renderWordEditorList();
    generateBothPuzzles();
    showToast(`"${cleanWord}" ${t('toastWordAdded')}`, 'success');
}

function handleBulkAdd(replaceExisting = false) {
    const textarea = document.getElementById('bulkWordsTextarea');
    const sepChoice = document.getElementById('bulkSeparator').value;
    const rawLines = textarea.value.split(/\r?\n/);

    const parsedItems = [];
    const existingSet = replaceExisting ? new Set() : new Set(appState.items.map(i => i.word));

    rawLines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return;

        let rawWord = trimmed;
        let rawClue = '';

        if (sepChoice === 'auto') {
            const match = trimmed.match(/^([^:\-;|]+)[:\-;|](.*)$/);
            if (match) {
                rawWord = match[1].trim();
                rawClue = match[2].trim();
            }
        } else {
            const sepIdx = trimmed.indexOf(sepChoice);
            if (sepIdx !== -1) {
                rawWord = trimmed.slice(0, sepIdx).trim();
                rawClue = trimmed.slice(sepIdx + 1).trim();
            }
        }

        const cleanWord = sanitizeWord(rawWord).slice(0, 18);
        if (cleanWord.length >= 2 && !existingSet.has(cleanWord)) {
            existingSet.add(cleanWord);
            parsedItems.push({
                id: 'item_' + Date.now() + '_' + idx + '_' + Math.floor(Math.random() * 1000),
                word: cleanWord,
                clue: rawClue || `${t('defaultCluePrefix')} ${cleanWord}`
            });
        }
    });

    if (parsedItems.length === 0) {
        showToast(t('toastBulkEmpty'), 'warning');
        return;
    }

    if (replaceExisting) {
        appState.items = parsedItems;
    } else {
        appState.items = [...parsedItems, ...appState.items];
    }

    textarea.value = '';
    renderWordEditorList();
    generateBothPuzzles();
    showToast(`${parsedItems.length} ${t('toastBulkAdded')}`, 'success');
}

function updateWordClue(id, newClue) {
    const item = appState.items.find(i => i.id === id);
    if (item) {
        item.clue = newClue.trim() || `${t('defaultCluePrefix')} ${item.word}`;
        const placed = appState.cw.placedWords.find(w => w.word === item.word);
        if (placed) {
            placed.clue = item.clue;
            renderCrosswordClues();
            updateActiveClueBanner();
        }
    }
}

function removeWordItem(id) {
    appState.items = appState.items.filter(i => i.id !== id);
    renderWordEditorList();
    generateBothPuzzles();
}

function clearAllWords() {
    appState.items = [];
    renderWordEditorList();
    generateBothPuzzles();
    showToast(t('toastListCleared'), 'info');
}

function generateBothPuzzles() {
    appState.showingSolution = false;
    updateSolutionButtonUI();
    generateWordSearch();
    generateCrossword();
}

function regenerateCurrent() {
    appState.showingSolution = false;
    updateSolutionButtonUI();
    if (appState.mode === 'wordsearch') {
        generateWordSearch();
    } else {
        generateCrossword();
    }
}

function resetCurrentSolve() {
    appState.showingSolution = false;
    updateSolutionButtonUI();
    if (appState.mode === 'wordsearch') {
        appState.ws.placedWords.forEach(pw => pw.found = false);
        appState.ws.tapStartCell = null;
        renderWordSearchGrid();
        renderWordSearchList();
        updateProgressCounter();
        showToast(t('toastWSReset'), 'info');
    } else {
        for (let r = 0; r < appState.cw.rows; r++) {
            for (let c = 0; c < appState.cw.cols; c++) {
                if (appState.cw.grid[r][c]) {
                    appState.cw.grid[r][c].userChar = '';
                    appState.cw.grid[r][c].status = null;
                }
            }
        }
        renderCrosswordGrid();
        renderCrosswordClues();
        updateProgressCounter();
        showToast(t('toastCWReset'), 'info');
    }
}

/* =========================================================================
   5. GESTIÓN DE ACTIVIDADES GUARDADAS (CON BUSCADOR Y PAGINACIÓN)
   ========================================================================= */
function getSavedActivities() {
    try {
        const raw = localStorage.getItem(STORAGE_ACTIVITIES_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

function setSavedActivities(list) {
    localStorage.setItem(STORAGE_ACTIVITIES_KEY, JSON.stringify(list));
    renderSavedActivitiesList();
}

function formatActivityDate(isoDate) {
    try {
        const d = new Date(isoDate);
        return d.toLocaleDateString(currentLang === 'es' ? 'es-CO' : 'en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    } catch (e) {
        return isoDate;
    }
}

function handleSavedSearch(query) {
    savedPagination.searchQuery = (query || '').trim().toLowerCase();
    savedPagination.currentPage = 1;
    const clearBtn = document.getElementById('btnClearSavedSearch');
    if (clearBtn) {
        if (savedPagination.searchQuery.length > 0) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }
    }
    renderSavedActivitiesList();
}

function clearSavedSearch() {
    const input = document.getElementById('savedSearchInput');
    if (input) input.value = '';
    handleSavedSearch('');
}

function changeSavedPageSize(newVal) {
    savedPagination.pageSize = newVal === 'all' ? 'all' : parseInt(newVal, 10) || 5;
    savedPagination.currentPage = 1;
    renderSavedActivitiesList();
}

function changeSavedPage(delta) {
    savedPagination.currentPage += delta;
    renderSavedActivitiesList();
}

function saveCurrentActivity() {
    if (appState.items.length === 0) {
        showToast(t('toastBulkEmpty'), 'warning');
        return;
    }

    if (!appState.ws.grid || appState.ws.grid.length === 0) generateWordSearch();
    if (!appState.cw.grid || appState.cw.grid.length === 0) generateCrossword();

    const titleInput = document.getElementById('puzzleTitleInput');
    const activityName = titleInput.value.trim() || appState.title || t('untitledPuzzle');

    appState.title = activityName;
    titleInput.value = activityName;
    updatePuzzleTitle();

    const activities = getSavedActivities();
    const existingIdx = activities.findIndex(a => a.name.toLowerCase() === activityName.toLowerCase());

    const activityPayload = {
        id: existingIdx >= 0 ? activities[existingIdx].id : 'act_' + Date.now(),
        name: activityName,
        title: appState.title,
        createdAt: new Date().toISOString(),
        mode: appState.mode,
        items: JSON.parse(JSON.stringify(appState.items)),
        settings: {
            wsGridSize: document.getElementById('wsGridSize').value,
            dirHorizontal: document.getElementById('dirHorizontal').checked,
            dirVertical: document.getElementById('dirVertical').checked,
            dirDiagonal: document.getElementById('dirDiagonal').checked,
            dirReverse: document.getElementById('dirReverse').checked
        },
        wsLayout: {
            size: appState.ws.size,
            grid: JSON.parse(JSON.stringify(appState.ws.grid)),
            placedWords: JSON.parse(JSON.stringify(appState.ws.placedWords)),
            unplacedWords: JSON.parse(JSON.stringify(appState.ws.unplacedWords))
        },
        cwLayout: {
            rows: appState.cw.rows,
            cols: appState.cw.cols,
            grid: JSON.parse(JSON.stringify(appState.cw.grid)),
            placedWords: JSON.parse(JSON.stringify(appState.cw.placedWords)),
            unplacedWords: JSON.parse(JSON.stringify(appState.cw.unplacedWords))
        }
    };

    if (existingIdx >= 0) {
        activities[existingIdx] = activityPayload;
    } else {
        activities.unshift(activityPayload);
        savedPagination.currentPage = 1;
    }

    setSavedActivities(activities);
    showToast(`${t('toastActivitySaved')}: "${activityName}"`, 'success');
}

function loadSavedActivity(id) {
    const activities = getSavedActivities();
    const act = activities.find(a => a.id === id);
    if (!act) return;

    appState.title = act.title || act.name;
    document.getElementById('puzzleTitleInput').value = appState.title;
    updatePuzzleTitle();

    appState.items = JSON.parse(JSON.stringify(act.items || []));

    if (act.settings) {
        document.getElementById('wsGridSize').value = act.settings.wsGridSize || '12';
        document.getElementById('dirHorizontal').checked = act.settings.dirHorizontal !== false;
        document.getElementById('dirVertical').checked = act.settings.dirVertical !== false;
        document.getElementById('dirDiagonal').checked = act.settings.dirDiagonal !== false;
        document.getElementById('dirReverse').checked = act.settings.dirReverse !== false;
    }

    if (act.wsLayout && act.wsLayout.grid && act.wsLayout.grid.length > 0) {
        appState.ws.size = act.wsLayout.size;
        appState.ws.grid = JSON.parse(JSON.stringify(act.wsLayout.grid));
        appState.ws.placedWords = JSON.parse(JSON.stringify(act.wsLayout.placedWords || []));
        appState.ws.unplacedWords = JSON.parse(JSON.stringify(act.wsLayout.unplacedWords || []));
        appState.ws.selectedCells = [];
        appState.ws.isSelecting = false;
    } else {
        generateWordSearch();
    }

    if (act.cwLayout && act.cwLayout.grid && act.cwLayout.grid.length > 0) {
        appState.cw.rows = act.cwLayout.rows;
        appState.cw.cols = act.cwLayout.cols;
        appState.cw.grid = JSON.parse(JSON.stringify(act.cwLayout.grid));
        appState.cw.placedWords = JSON.parse(JSON.stringify(act.cwLayout.placedWords || []));
        appState.cw.unplacedWords = JSON.parse(JSON.stringify(act.cwLayout.unplacedWords || []));
        if (appState.cw.placedWords.length > 0) {
            const first = [...appState.cw.placedWords].sort((a, b) => a.num - b.num)[0];
            appState.cw.activeCell = { r: first.row, c: first.col };
            appState.cw.activeDir = first.dir;
        } else {
            appState.cw.activeCell = null;
        }
    } else {
        generateCrossword();
    }

    renderWordEditorList();
    renderWordSearchGrid();
    renderWordSearchList();
    renderCrosswordGrid();
    renderCrosswordClues();
    updateProgressCounter();

    if (act.mode) {
        switchMode(act.mode, true);
    }

    showToast(`${t('toastActivityLoaded')} "${act.name}"`, 'info');
}

function openPuzzleConfirmModal({ title, message, confirmText, cancelText, onConfirm }) {
    const existing = document.getElementById('puzzleConfirmModalOverlay');
    if (existing) existing.remove();

    const isDark = document.documentElement.classList.contains('dark');
    const cardBg = isDark ? '#0f172a' : '#ffffff';
    const cardText = isDark ? '#f8fafc' : '#0f172a';
    const descText = isDark ? '#cbd5e1' : '#475569';
    const borderCol = isDark ? '#1e293b' : '#e2e8f0';
    const cancelBg = isDark ? '#1e293b' : '#f1f5f9';
    const cancelTextCol = isDark ? '#e2e8f0' : '#334155';

    const overlay = document.createElement('div');
    overlay.id = 'puzzleConfirmModalOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);backdrop-filter:blur(4px);z-index:200;display:flex;align-items:center;justify-content:center;padding:1rem;';

    overlay.innerHTML = `
        <div style="background:${cardBg};color:${cardText};border:1px solid ${borderCol};border-radius:1rem;padding:1.4rem;max-width:410px;width:100%;box-shadow:0 20px 35px -10px rgba(0,0,0,0.35);text-align:center;">
            <div style="width:46px;height:46px;border-radius:999px;margin:0 auto 0.75rem;background:rgba(244,63,94,0.14);color:#e11d48;display:flex;align-items:center;justify-content:center;font-size:1.15rem;">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3 style="font-size:1rem;font-weight:800;margin-bottom:0.45rem;">${title}</h3>
            <p style="font-size:0.82rem;color:${descText};line-height:1.45;margin-bottom:1.15rem;">${message}</p>
            <div style="display:flex;gap:0.55rem;justify-content:center;flex-wrap:wrap;">
                <button type="button" id="btnPuzzleModalCancel" style="padding:0.5rem 0.95rem;border-radius:0.65rem;border:1px solid ${borderCol};background:${cancelBg};color:${cancelTextCol};font-size:0.78rem;font-weight:700;cursor:pointer;">
                    ${cancelText}
                </button>
                <button type="button" id="btnPuzzleModalConfirm" style="padding:0.5rem 0.95rem;border-radius:0.65rem;border:none;background:#e11d48;color:#ffffff;font-size:0.78rem;font-weight:700;cursor:pointer;">
                    ${confirmText}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const closeModalBox = () => overlay.remove();

    overlay.querySelector('#btnPuzzleModalCancel').addEventListener('click', closeModalBox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModalBox();
    });
    overlay.querySelector('#btnPuzzleModalConfirm').addEventListener('click', () => {
        closeModalBox();
        if (typeof onConfirm === 'function') onConfirm();
    });
}

function deleteSavedActivity(id) {
    const allActivities = getSavedActivities();
    const target = allActivities.find(a => a.id === id);
    if (!target) return;

    const safeName = (target.name || t('untitledPuzzle')).replace(/</g, '<').replace(/>/g, '>');
    const title = currentLang === 'en' ? 'Delete saved activity?' : '¿Eliminar actividad guardada?';
    const message = currentLang === 'en'
        ? `Are you sure you want to delete <strong>"${safeName}"</strong>?`
        : `¿Seguro que deseas eliminar <strong>"${safeName}"</strong>?`;
    const confirmText = currentLang === 'en' ? 'Yes, delete' : 'Sí, eliminar';
    const cancelText = currentLang === 'en' ? 'Cancel' : 'Cancelar';

    openPuzzleConfirmModal({
        title,
        message,
        confirmText,
        cancelText,
        onConfirm: () => {
            const updated = getSavedActivities().filter(a => a.id !== id);
            setSavedActivities(updated);
            showToast(t('toastActivityDeleted'), 'info');
        }
    });
}

function deleteAllSavedActivities() {
    const activities = getSavedActivities();
    if (activities.length === 0) return;

    const title = currentLang === 'en' ? 'Clear all saved activities?' : '¿Vaciar todas las actividades guardadas?';
    const message = currentLang === 'en'
        ? `This will permanently delete <strong>${activities.length}</strong> saved activity/activities.`
        : `Esto eliminará de forma permanente <strong>${activities.length}</strong> actividad(es) guardada(s).`;
    const confirmText = currentLang === 'en' ? 'Yes, clear all' : 'Sí, vaciar todo';
    const cancelText = currentLang === 'en' ? 'Cancel' : 'Cancelar';

    openPuzzleConfirmModal({
        title,
        message,
        confirmText,
        cancelText,
        onConfirm: () => {
            savedPagination.currentPage = 1;
            setSavedActivities([]);
            showToast(t('toastAllActivitiesCleared'), 'info');
        }
    });
}

function renderSavedActivitiesList() {
    const listEl = document.getElementById('savedActivitiesList');
    const badgeEl = document.getElementById('savedCountBadge');
    const pageSizeWrapper = document.getElementById('savedPageSizeWrapper');
    const paginationControls = document.getElementById('savedPaginationControls');
    const pageIndicator = document.getElementById('savedPageIndicator');
    const btnPrev = document.getElementById('btnPrevSavedPage');
    const btnNext = document.getElementById('btnNextSavedPage');

    const allActivities = getSavedActivities();
    badgeEl.textContent = allActivities.length;

    const q = savedPagination.searchQuery;
    const filteredActivities = q
        ? allActivities.filter(act =>
            (act.name || '').toLowerCase().includes(q) ||
            (Array.isArray(act.items) && act.items.some(i => (i.word || '').toLowerCase().includes(q)))
          )
        : allActivities;

    const total = filteredActivities.length;

    if (allActivities.length > 5) {
        pageSizeWrapper.classList.remove('hidden');
        pageSizeWrapper.classList.add('flex');
    } else {
        pageSizeWrapper.classList.add('hidden');
        pageSizeWrapper.classList.remove('flex');
    }

    if (total === 0) {
        paginationControls.classList.add('hidden');
        paginationControls.classList.remove('flex');
        const emptyText = allActivities.length === 0 ? t('emptySavedList') : t('noSearchResults');
        listEl.innerHTML = `
            <div class="text-center py-3.5 px-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-[11px]">
                ${emptyText}
            </div>
        `;
        return;
    }

    const effectivePageSize = (total <= 5 || savedPagination.pageSize === 'all')
        ? total
        : savedPagination.pageSize;

    const totalPages = Math.max(1, Math.ceil(total / effectivePageSize));
    if (savedPagination.currentPage > totalPages) {
        savedPagination.currentPage = totalPages;
    }
    if (savedPagination.currentPage < 1) {
        savedPagination.currentPage = 1;
    }

    const startIdx = (savedPagination.currentPage - 1) * effectivePageSize;
    const endIdx = Math.min(startIdx + effectivePageSize, total);
    const visibleActivities = filteredActivities.slice(startIdx, endIdx);

    if (total > 5 && totalPages > 1) {
        paginationControls.classList.remove('hidden');
        paginationControls.classList.add('flex');
        pageIndicator.textContent = `${startIdx + 1}-${endIdx} ${t('pageOf')} ${total}`;
        btnPrev.disabled = savedPagination.currentPage <= 1;
        btnNext.disabled = savedPagination.currentPage >= totalPages;
    } else {
        paginationControls.classList.add('hidden');
        paginationControls.classList.remove('flex');
    }

    listEl.innerHTML = visibleActivities.map(act => {
        const count = Array.isArray(act.items) ? act.items.length : 0;
        const wordLabel = count === 1 ? t('wordSingle') : t('wordPlural');
        const dateStr = formatActivityDate(act.createdAt);
        const safeName = (act.name || '').replace(/</g, '<').replace(/>/g, '>');

        return `
            <div class="group p-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700/90 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-500/80 transition flex items-center justify-between gap-2 shadow-2xs">
                <div onclick="loadSavedActivity('${act.id}')" class="min-w-0 flex-1 cursor-pointer">
                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate transition">${safeName}</h4>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1.5">
                        <i class="fa-regular fa-calendar text-indigo-400"></i>
                        <span>${dateStr} • ${count} ${wordLabel}</span>
                    </p>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                    <button type="button" onclick="loadSavedActivity('${act.id}')" class="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 hover:bg-indigo-600 hover:text-white text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs transition" title="Cargar actividad">
                        <i class="fa-regular fa-folder-open"></i>
                    </button>
                    <button type="button" onclick="deleteSavedActivity('${act.id}')" class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-100 dark:hover:bg-rose-950/80 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center text-xs transition" title="Eliminar actividad">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function exportActivitiesJSON() {
    if (!appState.ws.grid || appState.ws.grid.length === 0) generateWordSearch();
    if (!appState.cw.grid || appState.cw.grid.length === 0) generateCrossword();

    const savedActivities = getSavedActivities();
    const currentActivitySnapshot = {
        id: 'act_current_' + Date.now(),
        name: document.getElementById('puzzleTitleInput').value.trim() || appState.title,
        title: appState.title,
        createdAt: new Date().toISOString(),
        mode: appState.mode,
        items: appState.items,
        settings: {
            wsGridSize: document.getElementById('wsGridSize').value,
            dirHorizontal: document.getElementById('dirHorizontal').checked,
            dirVertical: document.getElementById('dirVertical').checked,
            dirDiagonal: document.getElementById('dirDiagonal').checked,
            dirReverse: document.getElementById('dirReverse').checked
        },
        wsLayout: {
            size: appState.ws.size,
            grid: appState.ws.grid,
            placedWords: appState.ws.placedWords,
            unplacedWords: appState.ws.unplacedWords
        },
        cwLayout: {
            rows: appState.cw.rows,
            cols: appState.cw.cols,
            grid: appState.cw.grid,
            placedWords: appState.cw.placedWords,
            unplacedWords: appState.cw.unplacedWords
        }
    };

    const exportBundle = {
        app: "UparPuzzle Studio",
        version: "2.2",
        exportedAt: new Date().toISOString(),
        currentActivity: currentActivitySnapshot,
        savedActivities: savedActivities
    };

    const blob = new Blob([JSON.stringify(exportBundle, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const slug = (appState.title || 'actividades').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    a.href = url;
    a.download = `uparpuzzle-${slug}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(t('toastExportSuccess'), 'success');
}

function triggerImportJSON() {
    document.getElementById('importJsonInput').click();
}

function handleImportJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            let existing = getSavedActivities();
            let importedToLoad = null;

            if (Array.isArray(data)) {
                data.forEach(act => {
                    if (act && act.name && Array.isArray(act.items)) {
                        existing = existing.filter(x => x.name.toLowerCase() !== act.name.toLowerCase());
                        existing.unshift(act);
                        if (!importedToLoad) importedToLoad = act;
                    }
                });
            } else if (data && typeof data === 'object') {
                if (Array.isArray(data.savedActivities)) {
                    data.savedActivities.forEach(act => {
                        if (act && act.name && Array.isArray(act.items)) {
                            existing = existing.filter(x => x.name.toLowerCase() !== act.name.toLowerCase());
                            existing.push(act);
                            if (!importedToLoad) importedToLoad = act;
                        }
                    });
                }
                if (data.currentActivity && Array.isArray(data.currentActivity.items)) {
                    const curr = data.currentActivity;
                    const alreadyInSaved = existing.some(x => x.name.toLowerCase() === (curr.name || '').toLowerCase());
                    if (!alreadyInSaved) {
                        existing.unshift(curr);
                    }
                    importedToLoad = curr;
                } else if (data.items && Array.isArray(data.items)) {
                    const singleAct = {
                        id: data.id || 'act_' + Date.now(),
                        name: data.name || data.title || 'Actividad Importada',
                        title: data.title || data.name || 'Actividad Importada',
                        createdAt: data.createdAt || new Date().toISOString(),
                        mode: data.mode || 'wordsearch',
                        items: data.items,
                        settings: data.settings,
                        wsLayout: data.wsLayout,
                        cwLayout: data.cwLayout
                    };
                    existing = existing.filter(x => x.name.toLowerCase() !== singleAct.name.toLowerCase());
                    existing.unshift(singleAct);
                    importedToLoad = singleAct;
                }
            }

            if (!importedToLoad && existing.length === 0) {
                showToast(t('toastImportError'), 'error');
                return;
            }

            savedPagination.currentPage = 1;
            setSavedActivities(existing);
            if (importedToLoad) {
                loadSavedActivity(importedToLoad.id);
            }
            showToast(t('toastImportSuccess'), 'success');
        } catch (err) {
            showToast(t('toastImportError'), 'error');
        } finally {
            event.target.value = '';
        }
    };
    reader.readAsText(file);
}

/* =========================================================================
   6. MOTOR ALGORÍTMICO DE SOPA DE LETRAS Y SOPORTE TÁCTIL MÓVIL ROBUSTO
   ========================================================================= */
function getAllowedDirections() {
    const horiz = document.getElementById('dirHorizontal').checked;
    const vert = document.getElementById('dirVertical').checked;
    const diag = document.getElementById('dirDiagonal').checked;
    const rev = document.getElementById('dirReverse').checked;

    let dirs = [];
    if (horiz) {
        dirs.push([0, 1]);
        if (rev) dirs.push([0, -1]);
    }
    if (vert) {
        dirs.push([1, 0]);
        if (rev) dirs.push([-1, 0]);
    }
    if (diag) {
        dirs.push([1, 1], [-1, 1]);
        if (rev) dirs.push([1, -1], [-1, -1]);
    }

    if (dirs.length === 0) {
        document.getElementById('dirHorizontal').checked = true;
        dirs.push([0, 1]);
    }
    return dirs;
}

function generateWordSearch() {
    const requestedSize = parseInt(document.getElementById('wsGridSize').value, 10) || 12;
    const longestWordLength = appState.items.reduce((max, item) => Math.max(max, item.word.length), 0);
    const size = Math.max(requestedSize, Math.min(20, longestWordLength));

    const dirs = getAllowedDirections();
    const grid = Array.from({ length: size }, () => Array(size).fill(''));

    const sortedItems = [...appState.items].sort((a, b) => b.word.length - a.word.length);
    const placedWords = [];
    const unplacedWords = [];

    sortedItems.forEach((item, idx) => {
        const word = item.word;
        if (word.length > size) {
            unplacedWords.push(word);
            return;
        }

        let placed = false;
        const candidates = [];
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                for (const [dr, dc] of dirs) {
                    const endR = r + dr * (word.length - 1);
                    const endC = c + dc * (word.length - 1);
                    if (endR < 0 || endR >= size || endC < 0 || endC >= size) continue;

                    let valid = true;
                    let overlaps = 0;
                    for (let k = 0; k < word.length; k++) {
                        const nr = r + dr * k;
                        const nc = c + dc * k;
                        const existing = grid[nr][nc];
                        if (existing !== '' && existing !== word[k]) {
                            valid = false;
                            break;
                        }
                        if (existing === word[k]) overlaps++;
                    }
                    if (valid) {
                        candidates.push({ r, c, dr, dc, overlaps, rand: Math.random() });
                    }
                }
            }
        }

        if (candidates.length > 0) {
            candidates.sort((a, b) => {
                if (b.overlaps !== a.overlaps && Math.random() < 0.65) {
                    return b.overlaps - a.overlaps;
                }
                return a.rand - b.rand;
            });

            const chosen = candidates[0];
            const cells = [];
            for (let k = 0; k < word.length; k++) {
                const nr = chosen.r + chosen.dr * k;
                const nc = chosen.c + chosen.dc * k;
                grid[nr][nc] = word[k];
                cells.push({ r: nr, c: nc });
            }

            placedWords.push({
                id: item.id,
                word: word,
                row: chosen.r,
                col: chosen.c,
                dr: chosen.dr,
                dc: chosen.dc,
                cells: cells,
                found: false,
                colorIdx: idx % WORD_COLORS.length
            });
            placed = true;
        }

        if (!placed) {
            unplacedWords.push(word);
        }
    });

    const includeEnye = appState.items.some(i => i.word.includes('Ñ'));
    const alphabet = includeEnye ? "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }

    appState.ws.size = size;
    appState.ws.grid = grid;
    appState.ws.placedWords = placedWords;
    appState.ws.unplacedWords = unplacedWords;
    appState.ws.selectedCells = [];
    appState.ws.isSelecting = false;
    appState.ws.tapStartCell = null;

    renderWordSearchGrid();
    renderWordSearchList();
    updateProgressCounter();
}

function renderWordSearchGrid() {
    const gridEl = document.getElementById('wsGrid');
    const size = appState.ws.size;
    gridEl.style.gridTemplateColumns = `repeat(${size}, minmax(0, 1fr))`;
    gridEl.style.gridTemplateRows = `repeat(${size}, minmax(0, 1fr))`;

    // Acumular todos los colores de palabras encontradas que pasan por cada celda (r,c)
    const cellFoundColorsMap = {};
    const cellSolutionMap = {};

    appState.ws.placedWords.forEach(pw => {
        const colorObj = WORD_COLORS[pw.colorIdx];
        if (pw.found) {
            pw.cells.forEach(({ r, c }) => {
                const key = `${r},${c}`;
                if (!cellFoundColorsMap[key]) cellFoundColorsMap[key] = [];
                cellFoundColorsMap[key].push(colorObj);
            });
        } else if (appState.showingSolution) {
            pw.cells.forEach(({ r, c }) => {
                const key = `${r},${c}`;
                cellSolutionMap[key] = true;
            });
        }
    });

    const activeSelectionSet = new Set(appState.ws.selectedCells.map(cell => `${cell.r},${cell.c}`));
    if (appState.ws.tapStartCell) {
        activeSelectionSet.add(`${appState.ws.tapStartCell.r},${appState.ws.tapStartCell.c}`);
    }

    let fontSizeClass = 'text-sm sm:text-base';
    if (size >= 15) fontSizeClass = 'text-xs sm:text-sm';
    if (size >= 18) fontSizeClass = 'text-[11px] sm:text-xs';

    let html = '';
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const key = `${r},${c}`;
            const letter = appState.ws.grid[r]?.[c] || '';
            let cellClasses = 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 font-bold';
            let inlineStyle = '';

            if (activeSelectionSet.has(key)) {
                cellClasses = 'bg-indigo-600 text-white scale-105 shadow-md z-10 font-extrabold';
            } else if (cellFoundColorsMap[key] && cellFoundColorsMap[key].length > 0) {
                const colors = cellFoundColorsMap[key];
                if (colors.length === 1) {
                    // Una sola palabra pasa por esta letra
                    cellClasses = `${colors[0].bg} ${colors[0].text} shadow-sm font-extrabold`;
                } else {
                    // 2, 3, 4 o más palabras se cruzan en esta letra: combinar todos sus colores
                    const step = 100 / colors.length;
                    const stops = colors.map((col, idx) => {
                        const startPct = (idx * step).toFixed(1);
                        const endPct = ((idx + 1) * step).toFixed(1);
                        return `${col.hex} ${startPct}%, ${col.hex} ${endPct}%`;
                    }).join(', ');
                    cellClasses = 'text-white shadow-md ring-1 ring-white/50 font-extrabold';
                    inlineStyle = `style="background: linear-gradient(135deg, ${stops});"`;
                }
            } else if (cellSolutionMap[key]) {
                cellClasses = 'bg-amber-200 dark:bg-amber-500 text-amber-950 ring-2 ring-amber-400 font-extrabold';
            }

            html += `
                <div
                    data-r="${r}"
                    data-c="${c}"
                    onmousedown="onWsCellMouseDown(${r}, ${c}, event)"
                    onmouseenter="onWsCellMouseEnter(${r}, ${c})"
                    ${inlineStyle}
                    class="wordsearch-cell rounded-lg flex items-center justify-center font-mono ${fontSizeClass} cursor-pointer ${cellClasses}"
                >
                    ${letter}
                </div>
            `;
        }
    }
    gridEl.innerHTML = html;
}

function renderWordSearchList() {
    const listEl = document.getElementById('wsWordList');
    const noticeEl = document.getElementById('wsUnplacedNotice');

    if (appState.ws.placedWords.length === 0) {
        listEl.innerHTML = `<p class="text-xs text-slate-400 dark:text-slate-500 col-span-full">${t('emptyWS')}</p>`;
    } else {
        listEl.innerHTML = appState.ws.placedWords.map(pw => {
            const colorObj = WORD_COLORS[pw.colorIdx];
            const foundStyle = pw.found
                ? `${colorObj.light} line-through opacity-85`
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700';
            const icon = pw.found
                ? `<i class="fa-solid fa-check text-emerald-600 dark:text-emerald-400 no-print"></i>`
                : `<span class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 no-print"></span>`;

            return `
                <div class="px-3 py-2 rounded-xl border text-xs font-mono font-bold flex items-center justify-between transition ${foundStyle}">
                    <span class="truncate">${pw.word}</span>
                    ${icon}
                </div>
            `;
        }).join('');
    }

    if (appState.ws.unplacedWords.length > 0) {
        noticeEl.classList.remove('hidden');
        noticeEl.innerHTML = `<i class="fa-solid fa-circle-info mr-1"></i> ${t('unplacedWS')} <strong>${appState.ws.unplacedWords.join(', ')}</strong>. ${t('unplacedWSHint')}`;
    } else {
        noticeEl.classList.add('hidden');
    }
}

function computeLineCells(r1, c1, r2, c2) {
    const dr = r2 - r1;
    const dc = c2 - c1;
    const steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) return [{ r: r1, c: c1 }];

    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) {
        return null;
    }

    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

    const cells = [];
    for (let k = 0; k <= steps; k++) {
        cells.push({ r: r1 + stepR * k, c: c1 + stepC * k });
    }
    return cells;
}

/**
 * Calcula matemáticamente qué fila y columna corresponden a las coordenadas (clientX, clientY)
 * dentro de #wsGrid. Esto evita que el re-renderizado de innerHTML rompa el evento táctil en móviles.
 */
function getGridCellFromClientPoint(clientX, clientY) {
    const gridEl = document.getElementById('wsGrid');
    if (!gridEl) return null;
    const rect = gridEl.getBoundingClientRect();
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
        return null;
    }
    const size = appState.ws.size;
    const col = Math.min(size - 1, Math.max(0, Math.floor(((clientX - rect.left) / rect.width) * size)));
    const row = Math.min(size - 1, Math.max(0, Math.floor(((clientY - rect.top) / rect.height) * size)));
    return { r: row, c: col };
}

function onWsCellMouseDown(r, c, e) {
    if (e) e.preventDefault();
    if (appState.ws.tapStartCell && (appState.ws.tapStartCell.r !== r || appState.ws.tapStartCell.c !== c)) {
        const line = computeLineCells(appState.ws.tapStartCell.r, appState.ws.tapStartCell.c, r, c);
        if (line) {
            appState.ws.selectedCells = line;
            appState.ws.isSelecting = true;
            appState.ws.tapStartCell = null;
            finishWordSearchSelection();
            return;
        }
    }

    appState.ws.isSelecting = true;
    appState.ws.startCell = { r, c };
    appState.ws.currentCell = { r, c };
    appState.ws.selectedCells = [{ r, c }];
    renderWordSearchGrid();
}

function onWsCellMouseEnter(r, c) {
    if (!appState.ws.isSelecting || !appState.ws.startCell) return;
    if (appState.ws.currentCell && appState.ws.currentCell.r === r && appState.ws.currentCell.c === c) return;
    const line = computeLineCells(appState.ws.startCell.r, appState.ws.startCell.c, r, c);
    if (line) {
        appState.ws.currentCell = { r, c };
        appState.ws.selectedCells = line;
        renderWordSearchGrid();
    }
}

function finishWordSearchSelection() {
    if (!appState.ws.isSelecting) return;
    const selected = appState.ws.selectedCells;
    appState.ws.isSelecting = false;

    if (selected.length > 1) {
        appState.ws.tapStartCell = null;
        const formedWord = selected.map(({ r, c }) => appState.ws.grid[r][c]).join('');
        const reversedWord = formedWord.split('').reverse().join('');

        const match = appState.ws.placedWords.find(
            pw => !pw.found && (pw.word === formedWord || pw.word === reversedWord)
        );

        if (match) {
            match.found = true;
            showToast(`${t('toastFoundWord')} "${match.word}"!`, 'success');
            renderWordSearchList();
            updateProgressCounter();

            if (appState.ws.placedWords.length > 0 && appState.ws.placedWords.every(pw => pw.found)) {
                setTimeout(() => {
                    showVictoryModal(t('victoryWSTitle'), t('victoryWSMsg'));
                }, 250);
            }
        }
    } else if (selected.length === 1) {
        // Si fue un toque simple en una sola letra, guardarla como inicio para permitir toque inicio + toque fin
        const tapped = selected[0];
        if (appState.ws.tapStartCell && appState.ws.tapStartCell.r === tapped.r && appState.ws.tapStartCell.c === tapped.c) {
            appState.ws.tapStartCell = null;
        } else {
            appState.ws.tapStartCell = tapped;
        }
    }

    appState.ws.selectedCells = [];
    renderWordSearchGrid();
}

/* Eventos táctiles delegados directamente sobre #wsGrid (soporta deslizar el dedo y también toque inicio + toque fin sin dejar la última letra pegada) */
function initWordSearchTouchEvents() {
    const gridEl = document.getElementById('wsGrid');
    if (!gridEl) return;

    let ignoreMouseUntil = 0;

    // Bloquear mousedown/mouseenter sintéticos que el teléfono dispara después de tocar la pantalla
    gridEl.addEventListener('mousedown', (e) => {
        if (Date.now() < ignoreMouseUntil) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, true);

    gridEl.addEventListener('touchstart', (e) => {
        if (appState.mode !== 'wordsearch') return;
        ignoreMouseUntil = Date.now() + 1000;

        const touch = e.touches[0];
        if (!touch) return;
        const cell = getGridCellFromClientPoint(touch.clientX, touch.clientY);
        if (!cell) return;
        if (e.cancelable) e.preventDefault();

        // Si ya había una primera letra tocada (modo toque inicio + toque fin)
        if (appState.ws.tapStartCell && (appState.ws.tapStartCell.r !== cell.r || appState.ws.tapStartCell.c !== cell.c)) {
            const line = computeLineCells(appState.ws.tapStartCell.r, appState.ws.tapStartCell.c, cell.r, cell.c);
            if (line) {
                appState.ws.selectedCells = line;
                appState.ws.isSelecting = true;
                appState.ws.tapStartCell = null;
                finishWordSearchSelection();
                // Asegurar que no vuelva a seleccionarse la última letra al levantar el dedo
                appState.ws.isSelecting = false;
                appState.ws.tapStartCell = null;
                appState.ws.selectedCells = [];
                renderWordSearchGrid();
                return;
            }
        }

        // Iniciar selección sin destruir el DOM en touchstart (para que touchmove siga vivo en móvil)
        appState.ws.isSelecting = true;
        appState.ws.startCell = cell;
        appState.ws.currentCell = cell;
        appState.ws.selectedCells = [cell];

        const targetDomCell = gridEl.querySelector(`[data-r="${cell.r}"][data-c="${cell.c}"]`);
        if (targetDomCell) {
            targetDomCell.classList.add('bg-indigo-600', 'text-white', 'scale-105');
        }
    }, { passive: false });

    gridEl.addEventListener('touchmove', (e) => {
        if (appState.mode !== 'wordsearch' || !appState.ws.isSelecting) return;
        ignoreMouseUntil = Date.now() + 1000;

        const touch = e.touches[0];
        if (!touch) return;
        if (e.cancelable) e.preventDefault();

        const cell = getGridCellFromClientPoint(touch.clientX, touch.clientY);
        if (cell) {
            onWsCellMouseEnter(cell.r, cell.c);
        }
    }, { passive: false });

    gridEl.addEventListener('touchend', (e) => {
        if (appState.mode !== 'wordsearch') return;
        ignoreMouseUntil = Date.now() + 1000;
        if (e.cancelable) e.preventDefault();

        if (appState.ws.isSelecting) {
            finishWordSearchSelection();
        }
    }, { passive: false });
}

window.addEventListener('mouseup', () => {
    if (appState.mode === 'wordsearch' && appState.ws.isSelecting) {
        finishWordSearchSelection();
    }
});

/* =========================================================================
   7. MOTOR ALGORÍTMICO DE CRUCIGRAMA + SOPORTE DE TECLADO MÓVIL
   ========================================================================= */
function generateCrossword() {
    const validItems = appState.items.filter(i => i.word.length >= 2);
    if (validItems.length === 0) {
        appState.cw.rows = 0;
        appState.cw.cols = 0;
        appState.cw.grid = [];
        appState.cw.placedWords = [];
        appState.cw.unplacedWords = [];
        renderCrosswordGrid();
        renderCrosswordClues();
        updateProgressCounter();
        return;
    }

    let bestAttempt = null;

    for (let attempt = 0; attempt < 10; attempt++) {
        const result = buildCrosswordLayoutAttempt(validItems, attempt);
        if (!bestAttempt ||
            result.placed.length > bestAttempt.placed.length ||
            (result.placed.length === bestAttempt.placed.length && result.area < bestAttempt.area)) {
            bestAttempt = result;
        }
    }

    finalizeCrosswordState(bestAttempt);
    renderCrosswordGrid();
    renderCrosswordClues();
    updateProgressCounter();
}

function buildCrosswordLayoutAttempt(items, attemptIndex) {
    const MAX_DIM = 42;
    const board = Array.from({ length: MAX_DIM }, () => Array(MAX_DIM).fill(null));
    const sorted = [...items].sort((a, b) => b.word.length - a.word.length);

    if (attemptIndex > 0 && sorted.length > 2) {
        const first = sorted[0];
        const rest = sorted.slice(1).sort(() => Math.random() - 0.5);
        sorted.splice(0, sorted.length, first, ...rest);
    }

    const placed = [];
    const unplaced = [];

    const firstItem = sorted[0];
    const startR = Math.floor(MAX_DIM / 2);
    const startC = Math.floor((MAX_DIM - firstItem.word.length) / 2);

    placeWordOnVirtualBoard(board, firstItem, startR, startC, 'across');
    placed.push({
        ...firstItem,
        row: startR,
        col: startC,
        dir: 'across'
    });

    let remaining = sorted.slice(1);
    let madeProgress = true;

    while (madeProgress && remaining.length > 0) {
        madeProgress = false;
        const stillRemaining = [];

        for (const item of remaining) {
            const candidateMoves = findBestCrosswordPlacements(board, item.word, MAX_DIM);
            if (candidateMoves.length > 0) {
                candidateMoves.sort((a, b) => (b.intersections * 10 - b.centerDist) - (a.intersections * 10 - a.centerDist));
                const chosen = candidateMoves[0];
                placeWordOnVirtualBoard(board, item, chosen.r, chosen.c, chosen.dir);
                placed.push({
                    ...item,
                    row: chosen.r,
                    col: chosen.c,
                    dir: chosen.dir
                });
                madeProgress = true;
            } else {
                stillRemaining.push(item);
            }
        }
        remaining = stillRemaining;
    }

    for (const item of remaining) {
        const fallback = findIsolatedSpot(board, item.word, MAX_DIM);
        if (fallback) {
            placeWordOnVirtualBoard(board, item, fallback.r, fallback.c, fallback.dir);
            placed.push({
                ...item,
                row: fallback.r,
                col: fallback.c,
                dir: fallback.dir
            });
        } else {
            unplaced.push(item.word);
        }
    }

    let minR = MAX_DIM, maxR = 0, minC = MAX_DIM, maxC = 0;
    for (let r = 0; r < MAX_DIM; r++) {
        for (let c = 0; c < MAX_DIM; c++) {
            if (board[r][c] !== null) {
                minR = Math.min(minR, r);
                maxR = Math.max(maxR, r);
                minC = Math.min(minC, c);
                maxC = Math.max(maxC, c);
            }
        }
    }

    const height = maxR - minR + 1;
    const width = maxC - minC + 1;
    return {
        board,
        placed,
        unplaced,
        minR,
        maxR,
        minC,
        maxC,
        area: height * width + Math.abs(height - width) * 4
    };
}

function findBestCrosswordPlacements(board, word, MAX_DIM) {
    const moves = [];
    const center = MAX_DIM / 2;

    for (let r = 0; r < MAX_DIM; r++) {
        for (let c = 0; c < MAX_DIM; c++) {
            const cell = board[r][c];
            if (!cell) continue;

            for (let i = 0; i < word.length; i++) {
                if (word[i] === cell.char) {
                    const startC = c - i;
                    const interH = canPlaceCrosswordWord(board, word, r, startC, 'across', MAX_DIM);
                    if (interH > 0) {
                        const dist = Math.hypot(r - center, (startC + word.length / 2) - center);
                        moves.push({ r, c: startC, dir: 'across', intersections: interH, centerDist: dist });
                    }

                    const startR = r - i;
                    const interV = canPlaceCrosswordWord(board, word, startR, c, 'down', MAX_DIM);
                    if (interV > 0) {
                        const dist = Math.hypot((startR + word.length / 2) - center, c - center);
                        moves.push({ r: startR, c, dir: 'down', intersections: interV, centerDist: dist });
                    }
                }
            }
        }
    }
    return moves;
}

function canPlaceCrosswordWord(board, word, startR, startC, dir, MAX_DIM) {
    const dr = dir === 'down' ? 1 : 0;
    const dc = dir === 'across' ? 1 : 0;

    const endR = startR + dr * (word.length - 1);
    const endC = startC + dc * (word.length - 1);

    if (startR < 1 || startC < 1 || endR >= MAX_DIM - 1 || endC >= MAX_DIM - 1) {
        return 0;
    }

    const beforeR = startR - dr;
    const beforeC = startC - dc;
    const afterR = endR + dr;
    const afterC = endC + dc;
    if (board[beforeR][beforeC] !== null || board[afterR][afterC] !== null) {
        return 0;
    }

    let intersections = 0;

    for (let k = 0; k < word.length; k++) {
        const r = startR + dr * k;
        const c = startC + dc * k;
        const existing = board[r][c];

        if (existing !== null) {
            if (existing.char !== word[k]) return 0;
            if (dir === 'across' && existing.hasAcross) return 0;
            if (dir === 'down' && existing.hasDown) return 0;
            intersections++;
        } else {
            if (dir === 'across') {
                if (board[r - 1][c] !== null || board[r + 1][c] !== null) return 0;
            } else {
                if (board[r][c - 1] !== null || board[r][c + 1] !== null) return 0;
            }
        }
    }

    return intersections;
}

function findIsolatedSpot(board, word, MAX_DIM) {
    let maxR = 0;
    let minC = MAX_DIM;
    for (let r = 0; r < MAX_DIM; r++) {
        for (let c = 0; c < MAX_DIM; c++) {
            if (board[r][c] !== null) {
                maxR = Math.max(maxR, r);
                minC = Math.min(minC, c);
            }
        }
    }
    const targetR = maxR + 2;
    const targetC = Math.max(2, minC);
    if (targetR < MAX_DIM - 2 && targetC + word.length < MAX_DIM - 2) {
        return { r: targetR, c: targetC, dir: 'across' };
    }
    return null;
}

function placeWordOnVirtualBoard(board, item, startR, startC, dir) {
    const dr = dir === 'down' ? 1 : 0;
    const dc = dir === 'across' ? 1 : 0;
    for (let k = 0; k < item.word.length; k++) {
        const r = startR + dr * k;
        const c = startC + dc * k;
        if (!board[r][c]) {
            board[r][c] = { char: item.word[k], hasAcross: false, hasDown: false };
        }
        if (dir === 'across') board[r][c].hasAcross = true;
        if (dir === 'down') board[r][c].hasDown = true;
    }
}

function finalizeCrosswordState(attempt) {
    const { minR, maxR, minC, maxC, placed, unplaced } = attempt;
    const rows = maxR - minR + 1;
    const cols = maxC - minC + 1;

    const grid = Array.from({ length: rows }, () => Array(cols).fill(null));

    const normalizedWords = placed.map(pw => ({
        id: pw.id,
        word: pw.word,
        clue: pw.clue,
        row: pw.row - minR,
        col: pw.col - minC,
        dir: pw.dir,
        num: 0
    }));

    normalizedWords.forEach(pw => {
        const dr = pw.dir === 'down' ? 1 : 0;
        const dc = pw.dir === 'across' ? 1 : 0;
        for (let k = 0; k < pw.word.length; k++) {
            const r = pw.row + dr * k;
            const c = pw.col + dc * k;
            if (!grid[r][c]) {
                grid[r][c] = {
                    char: pw.word[k],
                    userChar: '',
                    num: null,
                    acrossWordId: null,
                    downWordId: null,
                    status: null
                };
            }
            if (pw.dir === 'across') grid[r][c].acrossWordId = pw.id;
            if (pw.dir === 'down') grid[r][c].downWordId = pw.id;
        }
    });

    let currentNumber = 1;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const startsHere = normalizedWords.filter(pw => pw.row === r && pw.col === c);
            if (startsHere.length > 0) {
                grid[r][c].num = currentNumber;
                startsHere.forEach(pw => pw.num = currentNumber);
                currentNumber++;
            }
        }
    }

    appState.cw.rows = rows;
    appState.cw.cols = cols;
    appState.cw.grid = grid;
    appState.cw.placedWords = normalizedWords;
    appState.cw.unplacedWords = unplaced;

    if (normalizedWords.length > 0) {
        const first = normalizedWords.sort((a, b) => a.num - b.num)[0];
        appState.cw.activeCell = { r: first.row, c: first.col };
        appState.cw.activeDir = first.dir;
    } else {
        appState.cw.activeCell = null;
    }
}

function renderCrosswordGrid() {
    const gridEl = document.getElementById('cwGrid');
    const noticeEl = document.getElementById('cwUnplacedNotice');
    const { rows, cols, grid, activeCell, activeDir } = appState.cw;

    if (rows === 0 || cols === 0) {
        gridEl.innerHTML = `<div class="p-8 text-slate-300 text-sm">${t('emptyCW')}</div>`;
        return;
    }

    let cellSizePx = appState.isFocusMode ? 44 : 38;
    const maxDim = Math.max(rows, cols);
    if (maxDim > 14) cellSizePx = appState.isFocusMode ? 38 : 32;
    if (maxDim > 18) cellSizePx = appState.isFocusMode ? 32 : 28;

    gridEl.style.gridTemplateColumns = `repeat(${cols}, ${cellSizePx}px)`;
    gridEl.style.gridTemplateRows = `repeat(${rows}, ${cellSizePx}px)`;

    let activeWordId = null;
    if (activeCell && grid[activeCell.r] && grid[activeCell.r][activeCell.c]) {
        const cObj = grid[activeCell.r][activeCell.c];
        activeWordId = activeDir === 'across'
            ? (cObj.acrossWordId || cObj.downWordId)
            : (cObj.downWordId || cObj.acrossWordId);
    }

    let html = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            if (!cell) {
                html += `<div class="bg-slate-900 rounded-[3px]"></div>`;
                continue;
            }

            const isFocused = activeCell && activeCell.r === r && activeCell.c === c;
            const isInActiveWord = activeWordId && (cell.acrossWordId === activeWordId || cell.downWordId === activeWordId);

            let bgClass = 'bg-white text-slate-900';
            if (isFocused) {
                bgClass = 'bg-amber-200 text-slate-950 ring-2 ring-indigo-600 z-10';
            } else if (isInActiveWord) {
                bgClass = 'bg-indigo-50 text-slate-900';
            }

            if (appState.showingSolution) {
                bgClass = 'bg-emerald-50 text-emerald-800';
            } else if (cell.status === 'correct') {
                bgClass = isFocused ? 'bg-emerald-200 text-emerald-950 ring-2 ring-emerald-600 z-10' : 'bg-emerald-50 text-emerald-800';
            } else if (cell.status === 'wrong') {
                bgClass = isFocused ? 'bg-rose-200 text-rose-950 ring-2 ring-rose-600 z-10' : 'bg-rose-50 text-rose-700';
            }

            const displayedChar = appState.showingSolution ? cell.char : cell.userChar;
            const numberBadge = cell.num
                ? `<span class="absolute top-[1px] left-[3px] text-[9px] leading-none font-bold text-slate-500 select-none pointer-events-none">${cell.num}</span>`
                : '';

            html += `
                <div
                    onclick="onCwCellClick(${r}, ${c})"
                    class="relative rounded-[3px] flex items-center justify-center cursor-pointer transition-colors select-none ${bgClass}"
                >
                    ${numberBadge}
                    <span class="font-mono font-extrabold text-sm sm:text-base mt-1">${displayedChar}</span>
                </div>
            `;
        }
    }

    gridEl.innerHTML = html;

    if (appState.cw.unplacedWords.length > 0) {
        noticeEl.classList.remove('hidden');
        noticeEl.innerHTML = `<i class="fa-solid fa-circle-info mr-1"></i> ${t('unplacedCW')} <strong>${appState.cw.unplacedWords.join(', ')}</strong>.`;
    } else {
        noticeEl.classList.add('hidden');
    }

    updateActiveClueBanner();
    highlightActiveClueInList(activeWordId);
}

function renderCrosswordClues() {
    const acrossEl = document.getElementById('cwCluesAcross');
    const downEl = document.getElementById('cwCluesDown');

    const acrossWords = appState.cw.placedWords
        .filter(w => w.dir === 'across')
        .sort((a, b) => a.num - b.num);
    const downWords = appState.cw.placedWords
        .filter(w => w.dir === 'down')
        .sort((a, b) => a.num - b.num);

    const formatClueItem = (pw) => {
        const isWordComplete = checkIsWordFilledCorrectly(pw);
        const badgeColor = pw.dir === 'across'
            ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
            : 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300';
        const strikeClass = isWordComplete
            ? 'line-through text-slate-400 dark:text-slate-500'
            : 'text-slate-700 dark:text-slate-200';

        return `
            <div
                id="clue_${pw.id}"
                onclick="focusCrosswordWord('${pw.id}')"
                class="clue-item-print p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-500 cursor-pointer transition flex items-start gap-2.5"
            >
                <span class="font-mono font-bold text-xs px-2 py-0.5 rounded-md shrink-0 ${badgeColor}">${pw.num}</span>
                <div class="flex-1 min-w-0">
                    <p class="clue-text-print leading-snug break-words ${strikeClass}">${pw.clue}</p>
                    <span class="text-[10px] font-mono text-slate-400 dark:text-slate-500">(${pw.word.length} ${t('lettersUnit')})</span>
                </div>
                ${isWordComplete ? '<i class="fa-solid fa-circle-check text-emerald-500 mt-1 no-print"></i>' : ''}
            </div>
        `;
    };

    acrossEl.innerHTML = acrossWords.length > 0
        ? acrossWords.map(formatClueItem).join('')
        : `<p class="text-xs text-slate-400">${t('noAcross')}</p>`;

    downEl.innerHTML = downWords.length > 0
        ? downWords.map(formatClueItem).join('')
        : `<p class="text-xs text-slate-400">${t('noDown')}</p>`;
}

function checkIsWordFilledCorrectly(pw) {
    const dr = pw.dir === 'down' ? 1 : 0;
    const dc = pw.dir === 'across' ? 1 : 0;
    for (let k = 0; k < pw.word.length; k++) {
        const cell = appState.cw.grid[pw.row + dr * k]?.[pw.col + dc * k];
        if (!cell || cell.userChar !== cell.char) return false;
    }
    return true;
}

function focusMobileCrosswordInput() {
    const mobileInput = document.getElementById('mobileCrosswordInput');
    if (!mobileInput) return;
    mobileInput.value = ' ';
    mobileInput.focus({ preventScroll: true });
}

function onCwCellClick(r, c) {
    const cell = appState.cw.grid[r]?.[c];
    if (!cell) return;

    if (appState.cw.activeCell && appState.cw.activeCell.r === r && appState.cw.activeCell.c === c) {
        toggleCrosswordDirection();
        focusMobileCrosswordInput();
        return;
    }

    appState.cw.activeCell = { r, c };
    if (appState.cw.activeDir === 'across' && !cell.acrossWordId && cell.downWordId) {
        appState.cw.activeDir = 'down';
    } else if (appState.cw.activeDir === 'down' && !cell.downWordId && cell.acrossWordId) {
        appState.cw.activeDir = 'across';
    }

    renderCrosswordGrid();
    focusMobileCrosswordInput();
}

function toggleCrosswordDirection() {
    if (!appState.cw.activeCell) return;
    const { r, c } = appState.cw.activeCell;
    const cell = appState.cw.grid[r]?.[c];
    if (!cell) return;

    if (appState.cw.activeDir === 'across' && cell.downWordId) {
        appState.cw.activeDir = 'down';
    } else if (appState.cw.activeDir === 'down' && cell.acrossWordId) {
        appState.cw.activeDir = 'across';
    }
    renderCrosswordGrid();
}

function focusCrosswordWord(wordId) {
    const pw = appState.cw.placedWords.find(w => w.id === wordId);
    if (!pw) return;
    appState.cw.activeCell = { r: pw.row, c: pw.col };
    appState.cw.activeDir = pw.dir;
    renderCrosswordGrid();
    focusMobileCrosswordInput();
}

function updateActiveClueBanner() {
    const badge = document.getElementById('activeClueBadge');
    const text = document.getElementById('activeClueText');
    const { activeCell, activeDir, grid, placedWords } = appState.cw;

    if (!activeCell || !grid[activeCell.r]?.[activeCell.c]) {
        badge.textContent = '--';
        text.textContent = t('activeClueDefault');
        return;
    }

    const cell = grid[activeCell.r][activeCell.c];
    const wordId = activeDir === 'across'
        ? (cell.acrossWordId || cell.downWordId)
        : (cell.downWordId || cell.acrossWordId);

    const pw = placedWords.find(w => w.id === wordId);
    if (pw) {
        badge.textContent = `${pw.num}${pw.dir === 'across' ? 'H' : 'V'}`;
        text.textContent = `${pw.clue} (${pw.word.length} ${t('lettersUnit')})`;
    }
}

function highlightActiveClueInList(activeWordId) {
    appState.cw.placedWords.forEach(pw => {
        const el = document.getElementById(`clue_${pw.id}`);
        if (!el) return;
        if (pw.id === activeWordId) {
            el.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50/60', 'dark:bg-indigo-950/40');
        } else {
            el.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50/60', 'dark:bg-indigo-950/40');
        }
    });
}

function handleCrosswordBackspace() {
    const { activeCell, grid } = appState.cw;
    if (!activeCell) return;
    const cell = grid[activeCell.r]?.[activeCell.c];
    if (!cell) return;

    cell.status = null;
    if (cell.userChar !== '') {
        cell.userChar = '';
    } else {
        moveCrosswordCursor(-1);
        const prev = appState.cw.activeCell;
        if (grid[prev.r]?.[prev.c]) {
            grid[prev.r][prev.c].userChar = '';
            grid[prev.r][prev.c].status = null;
        }
    }
    renderCrosswordGrid();
    renderCrosswordClues();
    updateProgressCounter();
}

function handleCrosswordCharInput(rawChar) {
    const { activeCell, grid } = appState.cw;
    if (!activeCell) return;
    const cell = grid[activeCell.r]?.[activeCell.c];
    if (!cell) return;

    const clean = sanitizeWord(rawChar);
    if (clean.length === 1) {
        cell.userChar = clean;
        cell.status = null;
        moveCrosswordCursor(1);
        renderCrosswordGrid();
        renderCrosswordClues();
        updateProgressCounter();
        checkCrosswordCompletion();
    }
}

/* Soporte de entrada para el teclado virtual móvil (Android / iOS) */
function initMobileCrosswordKeyboard() {
    const mobileInput = document.getElementById('mobileCrosswordInput');
    if (!mobileInput) return;

    mobileInput.addEventListener('input', () => {
        if (appState.mode !== 'crossword' || appState.showingSolution) {
            mobileInput.value = ' ';
            return;
        }
        const val = mobileInput.value;
        if (val === '') {
            handleCrosswordBackspace();
        } else {
            const lastChar = val.slice(-1);
            if (lastChar === ' ') {
                toggleCrosswordDirection();
            } else {
                handleCrosswordCharInput(lastChar);
            }
        }
        mobileInput.value = ' ';
    });
}

window.addEventListener('keydown', (e) => {
    if (appState.mode !== 'crossword' || appState.showingSolution) return;
    const activeEl = document.activeElement;
    const tag = activeEl?.tagName;
    if ((tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') && activeEl.id !== 'mobileCrosswordInput') return;

    const { activeCell, grid } = appState.cw;
    if (!activeCell) return;
    const { r, c } = activeCell;
    const cell = grid[r]?.[c];
    if (!cell) return;

    if (e.key === ' ') {
        e.preventDefault();
        toggleCrosswordDirection();
        return;
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        handleCrosswordBackspace();
        return;
    }

    if (e.key === 'ArrowRight') { e.preventDefault(); moveToAdjacentCell(0, 1); return; }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); moveToAdjacentCell(0, -1); return; }
    if (e.key === 'ArrowDown')  { e.preventDefault(); moveToAdjacentCell(1, 0); return; }
    if (e.key === 'ArrowUp')    { e.preventDefault(); moveToAdjacentCell(-1, 0); return; }

    if (e.key.length === 1) {
        const clean = sanitizeWord(e.key);
        if (clean.length === 1) {
            e.preventDefault();
            handleCrosswordCharInput(clean);
        }
    }
});

function moveCrosswordCursor(step) {
    const { activeCell, activeDir, grid, rows, cols } = appState.cw;
    if (!activeCell) return;
    const dr = activeDir === 'down' ? step : 0;
    const dc = activeDir === 'across' ? step : 0;
    const nr = activeCell.r + dr;
    const nc = activeCell.c + dc;

    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc]) {
        appState.cw.activeCell = { r: nr, c: nc };
    }
}

function moveToAdjacentCell(dr, dc) {
    const { activeCell, grid, rows, cols } = appState.cw;
    if (!activeCell) return;
    let nr = activeCell.r + dr;
    let nc = activeCell.c + dc;

    while (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        if (grid[nr][nc]) {
            appState.cw.activeCell = { r: nr, c: nc };
            renderCrosswordGrid();
            return;
        }
        nr += dr;
        nc += dc;
    }
}

function verifyCrosswordProgress() {
    let correctCount = 0;
    let wrongCount = 0;
    const { rows, cols, grid } = appState.cw;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            if (cell && cell.userChar !== '') {
                if (cell.userChar === cell.char) {
                    cell.status = 'correct';
                    correctCount++;
                } else {
                    cell.status = 'wrong';
                    wrongCount++;
                }
            }
        }
    }

    renderCrosswordGrid();
    if (wrongCount > 0) {
        showToast(`${wrongCount} ${t('toastWrongLetters')}`, 'warning');
    } else if (correctCount > 0) {
        showToast(t('toastAllCorrect'), 'success');
    } else {
        showToast(t('toastWriteFirst'), 'info');
    }
}

function revealActiveCellLetter() {
    const { activeCell, grid } = appState.cw;
    if (!activeCell || !grid[activeCell.r]?.[activeCell.c]) {
        showToast(t('toastSelectCell'), 'info');
        return;
    }
    const cell = grid[activeCell.r][activeCell.c];
    cell.userChar = cell.char;
    cell.status = 'correct';
    moveCrosswordCursor(1);
    renderCrosswordGrid();
    renderCrosswordClues();
    updateProgressCounter();
    checkCrosswordCompletion();
}

function checkCrosswordCompletion() {
    const words = appState.cw.placedWords;
    if (words.length > 0 && words.every(pw => checkIsWordFilledCorrectly(pw))) {
        setTimeout(() => {
            showVictoryModal(t('victoryCWTitle'), t('victoryCWMsg'));
        }, 200);
    }
}

/* =========================================================================
   8. SOLUCIÓN, PROGRESO Y EXPORTACIÓN A IMAGEN PNG (CON WORD-WRAP COMPLETO)
   ========================================================================= */
function toggleSolution() {
    appState.showingSolution = !appState.showingSolution;
    updateSolutionButtonUI();

    if (appState.mode === 'wordsearch') {
        renderWordSearchGrid();
    } else {
        renderCrosswordGrid();
    }
}

function updateSolutionButtonUI() {
    const btn = document.getElementById('btnToggleSolution');
    const icon = document.getElementById('solutionIcon');
    const text = document.getElementById('solutionBtnText');

    if (appState.showingSolution) {
        btn.className = "px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition";
        icon.className = "fa-regular fa-eye-slash";
        text.textContent = t('btnHideSolution');
    } else {
        btn.className = "px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition";
        icon.className = "fa-regular fa-eye";
        text.textContent = t('btnShowSolution');
    }
}

function updateProgressCounter() {
    const el = document.getElementById('progressCounter');
    if (appState.mode === 'wordsearch') {
        const total = appState.ws.placedWords.length;
        const found = appState.ws.placedWords.filter(pw => pw.found).length;
        el.textContent = `${found} / ${total} ${t('wordPlural')}`;
    } else {
        const total = appState.cw.placedWords.length;
        const solved = appState.cw.placedWords.filter(pw => checkIsWordFilledCorrectly(pw)).length;
        el.textContent = `${solved} / ${total} ${t('wordPlural')}`;
    }
}

function wrapCanvasText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
        const testLine = currentLine ? currentLine + ' ' + words[i] : words[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = words[i];
        } else {
            currentLine = testLine;
        }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
}

function exportAsImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = 1200;

    let height = 1350;
    if (appState.mode === 'crossword') {
        ctx.font = '15px Inter, sans-serif';
        const across = appState.cw.placedWords.filter(w => w.dir === 'across');
        const down = appState.cw.placedWords.filter(w => w.dir === 'down');
        let linesA = 0, linesD = 0;
        across.forEach(pw => {
            linesA += wrapCanvasText(ctx, `${pw.num}. ${pw.clue} (${pw.word.length})`, 500).length;
        });
        down.forEach(pw => {
            linesD += wrapCanvasText(ctx, `${pw.num}. ${pw.clue} (${pw.word.length})`, 500).length;
        });
        const maxClueHeight = Math.max(linesA, linesD) * 24 + 140;
        height = Math.max(1350, 860 + maxClueHeight);
    }

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#4f46e5';
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText(appState.mode === 'wordsearch' ? t('printWS') : t('printCW'), 60, 60);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 36px Inter, sans-serif';
    ctx.fillText(appState.title, 60, 105);

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(60, 125);
    ctx.lineTo(width - 60, 125);
    ctx.stroke();

    if (appState.mode === 'wordsearch') {
        const size = appState.ws.size;
        const gridBoxSize = 720;
        const startX = (width - gridBoxSize) / 2;
        const startY = 160;
        const cellSize = gridBoxSize / size;

        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                const x = startX + c * cellSize;
                const y = startY + r * cellSize;

                ctx.strokeStyle = '#cbd5e1';
                ctx.lineWidth = 1.5;
                ctx.strokeRect(x, y, cellSize, cellSize);

                ctx.fillStyle = '#1e293b';
                ctx.font = `bold ${Math.floor(cellSize * 0.5)}px monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(appState.ws.grid[r][c], x + cellSize / 2, y + cellSize / 2);
            }
        }

        if (appState.showingSolution) {
            appState.ws.placedWords.forEach((pw) => {
                const first = pw.cells[0];
                const last = pw.cells[pw.cells.length - 1];
                ctx.strokeStyle = 'rgba(79, 70, 229, 0.45)';
                ctx.lineWidth = cellSize * 0.65;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(startX + (first.c + 0.5) * cellSize, startY + (first.r + 0.5) * cellSize);
                ctx.lineTo(startX + (last.c + 0.5) * cellSize, startY + (last.r + 0.5) * cellSize);
                ctx.stroke();
            });
        }

        ctx.textAlign = 'left';
        ctx.fillStyle = '#475569';
        ctx.font = 'bold 20px Inter, sans-serif';
        ctx.fillText(t('wordsToFind').toUpperCase() + ':', 60, 940);

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 20px monospace';
        const cols = 4;
        const colWidth = (width - 120) / cols;
        appState.ws.placedWords.forEach((pw, idx) => {
            const colIdx = idx % cols;
            const rowIdx = Math.floor(idx / cols);
            ctx.fillText(`• ${pw.word}`, 60 + colIdx * colWidth, 985 + rowIdx * 38);
        });
    } else {
        const { rows, cols, grid, placedWords } = appState.cw;
        if (rows > 0 && cols > 0) {
            const maxGridArea = 640;
            const cellSize = Math.min(Math.floor(maxGridArea / Math.max(rows, cols)), 48);
            const totalW = cols * cellSize;
            const startX = (width - totalW) / 2;
            const startY = 155;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const cell = grid[r][c];
                    const x = startX + c * cellSize;
                    const y = startY + r * cellSize;

                    if (!cell) continue;

                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(x, y, cellSize, cellSize);
                    ctx.strokeStyle = '#0f172a';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x, y, cellSize, cellSize);

                    if (cell.num) {
                        ctx.fillStyle = '#475569';
                        ctx.font = `bold ${Math.max(10, Math.floor(cellSize * 0.26))}px Inter, sans-serif`;
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'top';
                        ctx.fillText(String(cell.num), x + 3, y + 2);
                    }

                    const charToDraw = appState.showingSolution ? cell.char : cell.userChar;
                    if (charToDraw) {
                        ctx.fillStyle = '#0f172a';
                        ctx.font = `bold ${Math.floor(cellSize * 0.52)}px monospace`;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(charToDraw, x + cellSize / 2, y + cellSize * 0.56);
                    }
                }
            }

            const cluesStartY = startY + rows * cellSize + 50;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'alphabetic';

            const across = placedWords.filter(w => w.dir === 'across').sort((a, b) => a.num - b.num);
            const down = placedWords.filter(w => w.dir === 'down').sort((a, b) => a.num - b.num);

            ctx.fillStyle = '#4f46e5';
            ctx.font = 'bold 18px Inter, sans-serif';
            ctx.fillText(t('cluesAcross').toUpperCase(), 60, cluesStartY);
            ctx.fillText(t('cluesDown').toUpperCase(), width / 2 + 20, cluesStartY);

            ctx.fillStyle = '#1e293b';
            ctx.font = '15px Inter, sans-serif';

            let yA = cluesStartY + 30;
            across.forEach(pw => {
                const wrapped = wrapCanvasText(ctx, `${pw.num}. ${pw.clue} (${pw.word.length})`, 500);
                wrapped.forEach(line => {
                    ctx.fillText(line, 60, yA);
                    yA += 22;
                });
                yA += 6;
            });

            let yD = cluesStartY + 30;
            down.forEach(pw => {
                const wrapped = wrapCanvasText(ctx, `${pw.num}. ${pw.clue} (${pw.word.length})`, 500);
                wrapped.forEach(line => {
                    ctx.fillText(line, width / 2 + 20, yD);
                    yD += 22;
                });
                yD += 6;
            });
        }
    }

    const link = document.createElement('a');
    const slug = appState.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    link.download = `${appState.mode}-${slug}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast(t('toastPngSuccess'), 'success');
}

/* =========================================================================
   9. INICIALIZACIÓN AL CARGAR LA PÁGINA
   ========================================================================= */
window.onload = function () {
    applyTheme();
    applyTranslations();
    initWordSearchTouchEvents();
    initMobileCrosswordKeyboard();
    loadPreset('astronomia');
    renderSavedActivitiesList();
};

/* --- Receptor automático cuando corre dentro de UparApp Studio --- */
if (window.self !== window.top || window.location.search.includes('suite=1')) {
    const st = document.createElement('style');
    st.textContent = `.brand-group, #appMainHeader .flex.items-center.gap-3:first-child, .app-header .header-top > div:first-child, #btnLangToggle, #btnThemeToggle, #langToggleBtn, #themeToggleBtn, footer, .app-footer, #appMainFooter { display: none !important; } .app-header .header-container, #appMainHeader > div { padding-top: 0.4rem !important; padding-bottom: 0.4rem !important; justify-content: center !important; } .subnav-bar { border-top: none !important; padding-top: 0 !important; }`;
    document.head.appendChild(st);
}
window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'UPAR_SUITE_SYNC') {
        if (typeof appState === 'object') { appState.theme = e.data.theme; appState.lang = e.data.lang; }
        if (typeof currentTheme !== 'undefined') currentTheme = e.data.theme;
        if (typeof currentLang !== 'undefined') currentLang = e.data.lang;
        if (typeof applyTheme === 'function') applyTheme();
        if (typeof applyTranslations === 'function') applyTranslations();
    }
});