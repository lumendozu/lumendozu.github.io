![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
# Portafolio Profesional - Luis Mendoza

Bienvenido al repositorio de mi portafolio web personal. Este proyecto ha sido desarrollado desde cero utilizando estándares web modernos, priorizando la velocidad de carga, la responsividad y una experiencia de usuario fluida y segura. Está optimizado para ser alojado directamente en GitHub Pages.

> **Nota:** Puedes visualizar el portafolio en vivo en: **[lumendozu.github.io](https://lumendozu.github.io)** *(una vez activado en GitHub Pages)*.

---

## Características Principales

*   **Tema Dual (Claro / Oscuro):** Interruptor de tema integrado con transiciones de color fluidas que guarda la preferencia del usuario en `localStorage` y detecta la configuración del sistema operativo por defecto.
*   **Saludo Dinámico:** Detecta la hora local del visitante para mostrar un saludo en tiempo real personalizado (*"Buenos días"*, *"Buenas tardes"* o *"Buenas noches"*).
*   **Efecto de Escritura (Typewriter):** Animación dinámica en la sección principal que itera sobre mis roles principales y áreas de interés técnico.
*   **Fondo Dinámico (Cursor Glow & Blobs):** Elementos visuales dinámicos que incluyen halos luminosos y gradientes desenfocados que se mueven de forma orgánica y reaccionan al movimiento del cursor.
*   **Galería de Proyectos Dinámica:** Renderizada a partir de un archivo estructurado de datos local, con filtros instantáneos por categorías (Python, Web, Herramientas).
*   **Modales de Detalles (Glassmorphism):** Ventanas emergentes elegantes con efecto de vidrio templado que muestran descripciones detalladas, características del proyecto, stacks tecnológicos y enlaces a código/demos.
*   **Formulario de Contacto Seguro:** Integrado con Web3Forms mediante solicitudes asíncronas AJAX (Fetch), con validación interactiva y retroalimentación inmediata.
*   **Sistema Anti-Spam Integrado:**
    *   *Honeypot invisible* (`botcheck`) para bloquear automáticamente envíos de bots de spam.
    *   *Limitación de frecuencia* (Rate Limiting de 60 segundos) mediante `localStorage` para evitar el reenvío excesivo de mensajes.

---

## Tecnologías Utilizadas

Para garantizar tiempos de carga óptimos y una total compatibilidad con GitHub Pages, el proyecto se construyó sin dependencias externas complejas:

*   **HTML5 Semántico:** Estructura limpia y optimizada para motores de búsqueda (SEO) y accesibilidad.
*   **CSS3 Custom Properties (Variables):** Gestión centralizada del diseño de colores y transiciones de temas duales.
*   **Vanilla JavaScript (ES6+):** Lógica modular para controlar las interacciones del DOM, animaciones y solicitudes de red.
*   **Fuentes y Vectores:** Tipografías modernas (*Outfit* y *Plus Jakarta Sans*) e iconos vectoriales SVG integrados directamente en el código.
*   **Web3Forms API:** Integración sin servidor para la recepción y reenvío de correos electrónicos.

---

## Configuración del Formulario de Contacto

El formulario de contacto está preparado para recibir mensajes reales. Para activarlo:

1.  Obtén tu clave de acceso (Access Key) ingresando tu correo electrónico en [web3forms.com](https://web3forms.com).
2. Abre el archivo [index.html](./index.html) de este repositorio.
3.  Busca el campo oculto `access_key` y reemplaza el valor por la clave recibida:
    ```html
    <input type="hidden" name="access_key" value="TU_ACCESS_KEY_AQUI">
    ```
4.  Una vez guardado, los mensajes se enviarán automáticamente a tu buzón de correo.

---

## Ejecución Local

Para probar o hacer modificaciones en el proyecto localmente, clona el repositorio y abre el archivo principal en tu navegador:

```bash
# Clonar el repositorio
git clone https://github.com/lumendozu/lumendozu.github.io.git

# Entrar al directorio
cd lumendozu.github.io

# Levantar un servidor local de pruebas (Opcional)
python -m http.server 8000
```
Luego abre tu navegador en `http://localhost:8000`.

---

## Despliegue en GitHub Pages

1.  Sube todos tus cambios a la rama principal de tu repositorio de GitHub:
    ```bash
    git add .
    git commit -m "feat: implementar portafolio interactivo y formulario seguro"
    git push origin main
    ```
2.  En GitHub, entra a la configuración de tu repositorio (**Settings** -> **Pages**).
3.  En la sección *Build and deployment*, elige la rama `main` y la carpeta `/ (root)`.
4.  Haz clic en **Save**. Tu sitio estará disponible en pocos minutos en la dirección asignada.

---

## Estructura del Proyecto

La estructura del código fuente está organizada de la siguiente manera:

```text
lumendozu.github.io/
├── css/
│   └── styles.css          # Estilos globales, variables de tema y responsive
├── img/
│   ├── img_Pytube.png      # Captura de pantalla de PyTube Downloader
│   └── img_nvim_config.png # Captura de pantalla de Neovim IDE Config
├── js/
│   └── main.js             # Lógica de interacciones, efectos y peticiones AJAX
├── .gitignore              # Archivos y carpetas excluidas del control de versiones
├── index.html              # Estructura semántica principal del portafolio
└── README.md               # Documentación técnica del proyecto
```

---

## Licencia

Este proyecto está bajo la Licencia MIT.


