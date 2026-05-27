/* ==========================================================================
   CONFIGURACIÓN Y DATOS DE PROYECTOS (DATABASE LOCAL)
   ========================================================================== */
const PROJECTS_DATA = [
    {
        id: "pytube",
        title: "PyTube Downloader",
        image: "img/img_Pytube.png",
        shortDesc: "Aplicación de escritorio ligera desarrollada en Python para descargar videos y audios desde YouTube de forma rápida.",
        category: "python",
        tags: ["Python", "CustomTkinter", "pytube"],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="project-preview-icon"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
        longDesc: "PyTube es una utilidad interactiva con interfaz de usuario moderna basada en CustomTkinter...",
        features: [
            "Descarga de videos de la más alta calidad disponible.",
            "Conversión automática y extracción de audio a formato MP3.",
            "Selector interactivo de formato (MP3 o MP4).",
            "Barra de progreso visual en tiempo real."
        ],
        techs: ["Python 3", "CustomTkinter", "pytube", "FFmpeg"],
        github: "https://github.com/lumendozu/pytube-downloader",
        demo: "#"
    },
    {
        id: "neovim-config",
        title: "Neovim IDE Config",
        image: "img/img_nvim_config.png",
        shortDesc: "Entorno de desarrollo personalizado basado en Neovim con integraciones de IA.",
        category: "tools",
        tags: ["Lua", "Neovim API", "Bash"],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="project-preview-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
        longDesc: "Una configuración robusta y veloz para programadores...",
        features: [
            "Gestión de plugins modular con Lazy.nvim.",
            "Integración nativa de LSP con Mason.nvim.",
            "Asistente de IA (Copilot / Ollama) integrado.",
            "Fuzzy finder con Telescope."
        ],
        techs: ["Lua", "Vimscript", "Bash", "Neovim v0.9+"],
        github: "https://github.com/lumendozu/nvim-config",
        demo: "#"
    },
    {
        id: "interactive-portfolio",
        title: "Portafolio Interactivo Premium",
        image: "",
        shortDesc: "Sitio web profesional, dinámico y responsivo con sistema de diseño modular.",
        category: "web",
        tags: ["HTML5", "CSS3", "JavaScript"],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="project-preview-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
        longDesc: "Este portafolio fue creado desde cero utilizando estándares web modernos...",
        features: [
            "Arquitectura modular estilo Neovim IDE.",
            "Barra de estado inteligente (Lualine).",
            "Línea de comandos de Vim interactiva.",
            "Formulario de contacto funcional."
        ],
        techs: ["HTML5 Semántico", "CSS3", "Vanilla JavaScript"],
        github: "https://github.com/lumendozu/lumendozu.github.io",
        demo: "#"
    }
];

const TYPEWRITER_WORDS = [
    "Desarrollador de Software",
    "Técnico en Sistemas",
    "Automatizador de Procesos",
    "Entusiasta de Neovim & Linux",
    "Creador de Soluciones Digitales"
];

const BUFFERS = {
    help: { file: "ayuda.txt", type: "text", elId: "buffer-help" },
    about: { file: "sobre_mi.md", type: "markdown", elId: "buffer-about" },
    skills: { file: "habilidades.json", type: "json", elId: "buffer-skills" },
    projects: { file: "proyectos.lua", type: "lua", elId: "buffer-projects" },
    contact: { file: "contacto.sh", type: "sh", elId: "buffer-contact" }
};

let activeBuffer = 'help';
let openBuffers = ['help'];
let isVisualMode = false;
let commandHistory = [];
let historyIndex = -1;

const CMD_DATA = {
    commands: [
        { value: 'help', aliases: ['h'], desc: 'Mostrar ayuda' },
        { value: 'open', aliases: ['o', 'e'], desc: 'Abrir un archivo' },
        { value: 'theme', aliases: ['t'], desc: 'Cambiar tema de color' },
        { value: 'Explorer', aliases: ['Ex', 'NeoTree'], desc: 'Toggle explorador' },
        { value: 'write', aliases: ['w'], desc: 'Guardar archivo' },
        { value: 'quit', aliases: ['q'], desc: 'Cerrar modal o sidebar' },
    ],
    files: [
        { value: 'help', aliases: ['ayuda'], desc: 'ayuda.txt' },
        { value: 'about', aliases: ['sobre_mi'], desc: 'sobre_mi.md' },
        { value: 'skills', aliases: ['habilidades'], desc: 'habilidades.json' },
        { value: 'projects', aliases: ['proyectos'], desc: 'proyectos.lua' },
        { value: 'contact', aliases: ['contacto'], desc: 'contacto.sh' },
    ],
    themes: [
        { value: 'tokyonight', desc: 'Tokyo Night (oscuro)' },
        { value: 'catppuccin', desc: 'Catppuccin Mocha' },
        { value: 'gruvbox', desc: 'Gruvbox Retro Dark' },
        { value: 'light', desc: 'Tokyo Night Light' },
    ],
};

const TOOLTIP_DATA = {
    fileHelp: 'ayuda.txt - Instrucciones del portafolio',
    fileAbout: 'sobre_mi.md - Información personal',
    fileSkills: 'habilidades.json - Stack técnico',
    fileProjects: 'proyectos.lua - Proyectos destacados',
    fileContact: 'contacto.sh - Información de contacto',
};

/* ==========================================================================
   INICIALIZACIÓN PRINCIPAL
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSidebarAndTabs();
    initTypewriter();
    initCursorGlow();
    initProjectsGrid();
    initProjectFilters();
    initModalControls();
    initEmailCopy();
    initCommandLine();
    initMobileMenu();
    initTooltips();
    initSplashScreen();
    updateGreetingComment();
    updateTabline('help');
    updateStatusBarForBuffer('help');
    setTimeout(updateGutterLineNumbers, 100);
});

function updateStatusBarForBuffer(bufferKey) {
    const statusFile = document.getElementById('statusFile');
    const statusFiletype = document.getElementById('statusFiletype');
    if (statusFile) statusFile.textContent = BUFFERS[bufferKey].file;
    if (statusFiletype) statusFiletype.textContent = BUFFERS[bufferKey].type;
}

/* ==========================================================================
   1. GESTIÓN DEL TEMA
   ========================================================================== */
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'tokyonight';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function changeTheme(themeName) {
    const validThemes = ['tokyonight', 'catppuccin', 'gruvbox', 'tokyonight-light'];
    if (themeName === 'light') themeName = 'tokyonight-light';
    if (themeName === 'dark') themeName = 'tokyonight';

    if (validThemes.includes(themeName)) {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
        return `Theme changed to ${themeName}`;
    }
    return `Unknown theme: ${themeName}. Try: tokyonight, catppuccin, gruvbox, light.`;
}

/* ==========================================================================
   2. CONTROLADOR DE TABS Y SIDEBAR
   ========================================================================== */
function initSidebarAndTabs() {
    document.querySelectorAll('.tree-file').forEach(file => {
        file.addEventListener('click', () => {
            const bufferName = file.getAttribute('data-buffer');
            if (bufferName) openBuffer(bufferName);
        });
    });
}

function openBuffer(bufferKey) {
    if (!BUFFERS[bufferKey]) return;
    activeBuffer = bufferKey;

    document.querySelectorAll('.tree-file').forEach(f => {
        f.classList.remove('active');
        if (f.getAttribute('data-buffer') === bufferKey) f.classList.add('active');
    });

    document.querySelectorAll('.editor-buffer').forEach(buf => buf.classList.remove('active'));
    const targetBuffer = document.getElementById(BUFFERS[bufferKey].elId);
    if (targetBuffer) {
        targetBuffer.classList.add('active');
        document.getElementById('ideEditor').scrollTop = 0;
    }

    updateTabline(bufferKey);
    updateStatusBarForBuffer(bufferKey);
    setTimeout(updateGutterLineNumbers, 50);
}

function updateTabline(bufferKey) {
    const tabline = document.getElementById('ideTabline');
    if (!tabline) return;
    if (!openBuffers.includes(bufferKey)) openBuffers.push(bufferKey);

    tabline.innerHTML = openBuffers.map(key => `
        <div class="ide-tab ${key === bufferKey ? 'active' : ''}" data-buffer="${key}">
            <span>${BUFFERS[key].file}</span>
            <span class="tab-close" data-close="${key}">&times;</span>
        </div>
    `).join('');

    document.querySelectorAll('.ide-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-close')) {
                e.stopPropagation();
                closeBuffer(tab.getAttribute('data-buffer'));
            } else {
                openBuffer(tab.getAttribute('data-buffer'));
            }
        });
    });
}

function closeBuffer(bufferKey) {
    if (openBuffers.length <= 1) return;
    const index = openBuffers.indexOf(bufferKey);
    if (index > -1) openBuffers.splice(index, 1);
    if (activeBuffer === bufferKey) openBuffer(openBuffers[Math.max(0, index - 1)]);
    else updateTabline(activeBuffer);
}

function updateGutterLineNumbers() {
    const gutter = document.getElementById('editorGutter');
    const container = document.getElementById('bufferContainer');
    if (!gutter || !container) return;
    
    const lineHeight = parseFloat(getComputedStyle(gutter).lineHeight) || 24;
    const scrollHeight = container.scrollHeight;
    const lineCount = Math.max(15, Math.floor(scrollHeight / lineHeight));
    
    gutter.innerHTML = '';
    for (let i = 1; i <= lineCount; i++) {
        gutter.innerHTML += `<div class="editor-gutter-num">${i}</div>`;
    }
}

/* ==========================================================================
   3. STATUSLINE MODOS
   ========================================================================== */
function setStatusMode(mode) {
    const statusMode = document.getElementById('statusMode');
    if (!statusMode) return;
    statusMode.classList.remove('mode-normal', 'mode-insert', 'mode-visual');
    statusMode.classList.add(`mode-${mode.toLowerCase()}`);
    statusMode.textContent = mode;
}

/* ==========================================================================
   4. SALUDO DINÁMICO
   ========================================================================== */
function updateGreetingComment() {
    const aboutBuffer = document.getElementById('buffer-about');
    if (!aboutBuffer) return;
    
    const hour = new Date().getHours();
    let greeting = hour >= 6 && hour < 12 ? "-- ¡Buenos días! Un gusto saludarte."
        : (hour >= 12 && hour < 18 ? "-- ¡Buenas tardes! Un gusto saludarte."
        : "-- ¡Buenas noches! Gracias por visitarme.");

    let welcomeComment = document.getElementById('welcomeComment');
    if (!welcomeComment) {
        welcomeComment = document.createElement('p');
        welcomeComment.className = 'code-comment';
        welcomeComment.id = 'welcomeComment';
        const aboutMd = aboutBuffer.querySelector('.about-md');
        if (aboutMd) aboutMd.prepend(welcomeComment);
    }
    welcomeComment.textContent = greeting;
}

/* ==========================================================================
   5. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
    const typewriterEl = document.getElementById('typewriterText');
    if (!typewriterEl) return;

    let wordIndex = 0, charIndex = 0, isDeleting = false;
    
    function type() {
        const targetWord = TYPEWRITER_WORDS[wordIndex];
        if (isDeleting) {
            charIndex--;
            typewriterEl.textContent = targetWord.substring(0, charIndex);
        } else {
            charIndex++;
            typewriterEl.textContent = targetWord.substring(0, charIndex);
        }

        let speed = isDeleting ? 40 : 80;
        if (!isDeleting && charIndex === targetWord.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % TYPEWRITER_WORDS.length;
            speed = 500;
        }
        setTimeout(type, speed);
    }
    setTimeout(type, 1000);
}

/* ==========================================================================
   6. CURSOR GLOW
   ========================================================================== */
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    const blob1 = document.getElementById('blob1');
    const blob2 = document.getElementById('blob2');
    if (!cursorGlow) return;

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    let animFrameId = null;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function update() {
        if (!document.hidden) {
            currentX += (targetX - currentX) * 0.15;
            currentY += (targetY - currentY) * 0.15;
            cursorGlow.style.left = `${currentX}px`;
            cursorGlow.style.top = `${currentY}px`;

            if (blob1 && blob2) {
                const shiftX = (targetX - window.innerWidth / 2) * 0.015;
                const shiftY = (targetY - window.innerHeight / 2) * 0.015;
                blob1.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
                blob2.style.transform = `translate(${-shiftX}px, ${-shiftY}px)`;
            }
        }
        animFrameId = requestAnimationFrame(update);
    }
    update();
}

/* ==========================================================================
   7. PROYECTOS
   ========================================================================== */
function initProjectsGrid() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = PROJECTS_DATA.map(proj => `
        <article class="project-card" data-category="${proj.category}">
            <div class="project-preview">
                ${proj.image ? `<img src="${proj.image}" alt="${proj.title}" class="project-preview-img">` : proj.icon}
            </div>
            <div class="project-body">
                <div class="project-tags">
                    ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
                <h3>${proj.title}</h3>
                <p>${proj.shortDesc}</p>
                <div class="project-footer">
                    <button class="project-more-btn" data-project-id="${proj.id}">
                        Ver detalles
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function initProjectFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setStatusMode('VISUAL');
            setTimeout(() => setStatusMode('NORMAL'), 600);

            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            document.querySelectorAll('.project-card').forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.display = 'none';
                }
            });
            setTimeout(updateGutterLineNumbers, 300);
        });
    });
}

/* ==========================================================================
   8. MODAL
   ========================================================================== */
function initModalControls() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalClose');
    if (!modal || !closeBtn) return;

    function openModal(projectId) {
        const proj = PROJECTS_DATA.find(p => p.id === projectId);
        if (!proj) return;
        setStatusMode('VISUAL');

        document.getElementById('modalHero').innerHTML = proj.image ? `<img src="${proj.image}" class="modal-hero-img">` : proj.icon;
        document.getElementById('modalTitle').textContent = proj.title;
        document.getElementById('modalDescription').textContent = proj.longDesc;
        document.getElementById('modalTags').innerHTML = proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
        document.getElementById('modalFeatures').innerHTML = proj.features.map(f => `<li>${f}</li>`).join('');
        document.getElementById('modalTech').innerHTML = proj.techs.map(t => `<span class="skill-badge">${t}</span>`).join('');
        document.getElementById('modalActions').innerHTML = `
            <a href="${proj.github}" target="_blank" class="btn btn-primary">Ver en GitHub</a>
            ${proj.demo !== '#' ? `<a href="${proj.demo}" target="_blank" class="btn btn-secondary">Demo en Vivo</a>` : ''}
        `;
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
        setStatusMode('NORMAL');
    }

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.project-more-btn');
        if (btn) openModal(btn.getAttribute('data-project-id'));
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
}

/* ==========================================================================
   9. EMAIL COPY
   ========================================================================== */
function initEmailCopy() {
    const emailCard = document.getElementById('emailCard');
    if (emailCard) {
        emailCard.addEventListener('click', () => {
            const emailText = document.getElementById('contactEmail').textContent;
            const copyMsg = document.getElementById('copyMessage');
            const original = copyMsg ? copyMsg.textContent : '';
            navigator.clipboard.writeText(emailText).then(() => {
                if (copyMsg) {
                    copyMsg.textContent = "¡Copiado!";
                    copyMsg.style.color = "var(--success)";
                    setTimeout(() => {
                        copyMsg.textContent = original;
                        copyMsg.style.color = "var(--accent)";
                    }, 2500);
                }
            }).catch(() => {
                if (copyMsg) {
                    copyMsg.textContent = "Error al copiar";
                    copyMsg.style.color = "#f7768e";
                    setTimeout(() => {
                        copyMsg.textContent = original;
                        copyMsg.style.color = "var(--accent)";
                    }, 2500);
                }
            });
        });
    }
}

/* ==========================================================================
   10. LÍNEA DE COMANDOS (AUTOCOMPLETADO + HISTORIAL)
   ========================================================================== */
function initCommandLine() {
    const cmdInput = document.getElementById('cmdInput');
    const cmdLine = document.querySelector('.ide-commandline');
    const autocomplete = document.getElementById('cmdAutocomplete');
    if (!cmdInput) return;

    let acItems = [];
    let acIndex = -1;
    let blurTimeout = null;

    cmdInput.addEventListener('focus', () => setStatusMode('INSERT'));
    cmdInput.addEventListener('blur', () => {
        setStatusMode('NORMAL');
        blurTimeout = setTimeout(() => hideAutocomplete(), 150);
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === ':' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            cmdInput.focus();
            cmdInput.value = '';
            updateAutocomplete();
        }
    });

    cmdInput.addEventListener('input', updateAutocomplete);

    cmdInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (acItems.length > 0 && acIndex >= 0) {
                cmdInput.value = applyAutocomplete(cmdInput.value, acItems[acIndex].value);
            }
            const rawCmd = cmdInput.value.trim();
            if (rawCmd) {
                commandHistory.push(rawCmd);
                historyIndex = commandHistory.length;
            }
            hideAutocomplete();
            cmdInput.value = '';
            const response = executeVimCommand(rawCmd);
            cmdInput.placeholder = response;
            cmdInput.blur();
            return;
        }

        if (e.key === 'Tab') {
            e.preventDefault();
            if (acItems.length > 0) {
                cmdInput.value = applyAutocomplete(cmdInput.value, acItems[acIndex].value);
                hideAutocomplete();
                const len = cmdInput.value.length;
                cmdInput.setSelectionRange(len, len);
            }
            return;
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (acItems.length > 0) {
                acIndex = acIndex <= 0 ? acItems.length - 1 : acIndex - 1;
                renderAutocomplete(acItems, acIndex);
                return;
            }
            if (commandHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                cmdInput.value = commandHistory[historyIndex];
                const len = cmdInput.value.length;
                cmdInput.setSelectionRange(len, len);
            }
            return;
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (acItems.length > 0) {
                acIndex = (acIndex + 1) % acItems.length;
                renderAutocomplete(acItems, acIndex);
                return;
            }
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                cmdInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                cmdInput.value = '';
            }
            return;
        }

        if (e.key === 'Escape') {
            hideAutocomplete();
            cmdInput.blur();
        }
    });

    function applyAutocomplete(currentValue, selectedValue) {
        const parts = currentValue.split(' ');
        if (parts.length > 1) {
            return parts.slice(0, -1).join(' ') + ' ' + selectedValue;
        }
        return selectedValue;
    }

    autocomplete.addEventListener('mousedown', (e) => {
        const item = e.target.closest('.ac-item');
        if (!item) return;
        e.preventDefault();
        if (blurTimeout) clearTimeout(blurTimeout);
        const idx = parseInt(item.getAttribute('data-index'));
        if (idx >= 0 && idx < acItems.length) {
            const isSubCmd = cmdInput.value.split(' ').length > 1;
            let val = applyAutocomplete(cmdInput.value, acItems[idx].value);
            if (!isSubCmd) {
                val += ' ';
                cmdInput.value = val;
                hideAutocomplete();
                cmdInput.focus();
                const event = new Event('input', { bubbles: true });
                cmdInput.dispatchEvent(event);
            } else {
                cmdInput.value = val;
                hideAutocomplete();
                const rawCmd = val.trim();
                if (rawCmd) {
                    commandHistory.push(rawCmd);
                    historyIndex = commandHistory.length;
                }
                cmdInput.value = '';
                const response = executeVimCommand(rawCmd);
                cmdInput.placeholder = response;
                cmdInput.blur();
            }
        }
    });

    autocomplete.addEventListener('mouseover', (e) => {
        const item = e.target.closest('.ac-item');
        if (!item) return;
        const idx = parseInt(item.getAttribute('data-index'));
        if (idx >= 0 && idx < acItems.length && idx !== acIndex) {
            acIndex = idx;
            renderAutocomplete(acItems, acIndex);
        }
    });

    function updateAutocomplete() {
        const text = cmdInput.value;
        if (!text) { hideAutocomplete(); return; }

        const parts = text.split(' ');
        const action = parts[0].toLowerCase();
        const arg = (parts.slice(1).join(' ')).toLowerCase();
        let items = [];

        if (parts.length === 1) {
            items = CMD_DATA.commands
                .filter(c => c.value.startsWith(action) || c.aliases.some(a => a.startsWith(action)))
                .map(c => ({ value: c.value, desc: c.desc }));
        } else if (['open', 'o', 'e'].includes(action)) {
            items = CMD_DATA.files
                .filter(f => f.value.startsWith(arg) || f.aliases.some(a => a.startsWith(arg)))
                .map(f => ({ value: f.value, desc: f.desc }));
        } else if (['theme', 't'].includes(action)) {
            items = CMD_DATA.themes
                .filter(t => t.value.startsWith(arg))
                .map(t => ({ value: t.value, desc: t.desc }));
        }

        if (items.length > 0) {
            acItems = items;
            acIndex = 0;
            renderAutocomplete(items, 0);
        } else {
            hideAutocomplete();
        }
    }

    function renderAutocomplete(items, selected) {
        if (!autocomplete || !cmdLine) return;
        if (blurTimeout) clearTimeout(blurTimeout);
        autocomplete.innerHTML = items.map((item, i) => `
            <div class="ac-item ${i === selected ? 'ac-selected' : ''}" data-index="${i}">
                <span class="ac-value">${item.value}</span>
                <span class="ac-desc">${item.desc}</span>
            </div>
        `).join('');
        const rect = cmdLine.getBoundingClientRect();
        autocomplete.style.left = `${rect.left + 24}px`;
        autocomplete.style.right = `${window.innerWidth - rect.right - 12}px`;
        autocomplete.style.bottom = `${window.innerHeight - rect.top}px`;
        autocomplete.style.display = 'block';
    }

    function hideAutocomplete() {
        if (!autocomplete) return;
        autocomplete.style.display = 'none';
        autocomplete.innerHTML = '';
        acItems = [];
        acIndex = -1;
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('ideSidebar');
    const container = document.querySelector('.ide-container');
    if (!sidebar) return;

    if (window.innerWidth > 768) {
        // Para desktop: usar clase sidebar-closed
        if (container) container.classList.toggle('sidebar-closed');
    } else {
        sidebar.classList.toggle('active');
    }
}

function executeVimCommand(commandString) {
    if (!commandString.startsWith(':')) {
        commandString = ':' + commandString;
    }

    const cmdBody = commandString.substring(1).trim();
    const parts = cmdBody.split(' ');
    const action = parts[0].toLowerCase();
    const argument = parts[1];

    const fileMapping = {
        'help': 'help', 'ayuda': 'help',
        'about': 'about', 'sobre_mi': 'about',
        'skills': 'skills', 'habilidades': 'skills',
        'projects': 'projects', 'proyectos': 'projects',
        'contact': 'contact', 'contacto': 'contact'
    };

    switch(action) {
        case 'help': case 'h':
            openBuffer('help');
            return "Opened help.txt";

        case 'explorer': case 'ex': case 'neotree':
            toggleSidebar();
            return "Toggled file explorer.";

        case 'theme': case 't':
            if (!argument) return "Ejemplo: :theme catppuccin";
            return changeTheme(argument);

        case 'open': case 'o': case 'e':
            if (!argument) return "Ejemplo: :open sobre_mi";
            const target = fileMapping[argument.toLowerCase()];
            if (target) {
                openBuffer(target);
                return `Opened: ${BUFFERS[target].file}`;
            }
            return `File not found: ${argument}`;

        case 'write': case 'w':
            return `"${BUFFERS[activeBuffer].file}" written.`;

        case 'quit': case 'q':
            const modal = document.getElementById('projectModal');
            if (modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
                setStatusMode('NORMAL');
                return "Closed modal.";
            }
            toggleSidebar();
            return "Toggled sidebar.";

        default:
            return `Not an editor command: ${action}. Type :help`;
    }
}

/* ==========================================================================
   11. SPLASH SCREEN
   ========================================================================== */
function initSplashScreen() {
    const splash = document.getElementById('splashOverlay');
    if (!splash) return;

    function dismiss() {
        splash.classList.add('hidden');
        setTimeout(() => splash.style.display = 'none', 500);
    }

    setTimeout(dismiss, 3000);

    splash.addEventListener('click', dismiss);
    window.addEventListener('keydown', function handler(e) {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            dismiss();
            window.removeEventListener('keydown', handler);
        }
    });
}

/* ==========================================================================
   12. TOOLTIPS
   ========================================================================== */
function initTooltips() {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;

    Object.entries(TOOLTIP_DATA).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('mouseenter', (e) => {
            tooltip.textContent = text;
            const rect = el.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom + 6}px`;
            tooltip.classList.add('visible');
        });
        el.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.clientX}px`;
            tooltip.style.top = `${e.clientY + 16}px`;
        });
        el.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });
    });
}

/* ==========================================================================
   13. MENÚ MÓVIL
   ========================================================================== */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('ideSidebar');
    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    const workspace = document.querySelector('.ide-workspace');
    if (workspace) {
        workspace.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) sidebar.classList.remove('active');
        });
    }

    document.querySelectorAll('.tree-file').forEach(f => {
        f.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) sidebar.classList.remove('active');
        });
    });
}

// Atajos de teclado globales
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (isVisualMode) {
            isVisualMode = false;
            document.body.classList.remove('visual-mode');
            document.querySelectorAll('.editor-buffer').forEach(b => b.classList.remove('selectable'));
            setStatusMode('NORMAL');
            return;
        }
        const cmdInput = document.getElementById('cmdInput');
        if (cmdInput && document.activeElement === cmdInput) {
            cmdInput.value = '';
            cmdInput.blur();
        }
        const modal = document.getElementById('projectModal');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            setStatusMode('NORMAL');
        }
        const sidebar = document.getElementById('ideSidebar');
        if (sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }

    if (e.key === 'V' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        isVisualMode = !isVisualMode;
        if (isVisualMode) {
            document.body.classList.add('visual-mode');
            document.querySelectorAll('.editor-buffer.active').forEach(b => b.classList.add('selectable'));
            setStatusMode('VISUAL');
        } else {
            document.body.classList.remove('visual-mode');
            document.querySelectorAll('.editor-buffer').forEach(b => b.classList.remove('selectable'));
            setStatusMode('NORMAL');
        }
    }
    
    if (e.ctrlKey && (e.key.toLowerCase() === 'n' || e.key.toLowerCase() === 'b')) {
        e.preventDefault();
        toggleSidebar();
    }
});
