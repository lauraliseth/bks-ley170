// Base de datos de proyectos
const proyectos = [
    {
        id: 1,
        nombre: "Autodiagnóstico socio laboral de las mujeres peinadoras, vendedoras de frutas, pedicuristas y manicuristas de las playas de Cartagena",
        entidad: "Asociación de Mujeres Afrodescendientes Graciela Cha Inés",
        año: "2007",
        categoria: "politica",
        descripcion: "Trabajo para tener claridad sobre la cantidad de mujeres palenqueras, negras, afro y raizal que trabajaban en la economía popular en el centro de Cartagena."
    },
    {
        id: 2,
        nombre: "Al Son de la Champeta y el Barrullo los niños y niñas de Kennedy construyen escenarios de paz",
        entidad: "Ward Child Holanda",
        año: "2009",
        categoria: "cultura",
        descripcion: "Proceso con niñas, niños y jóvenes de estrato 1 y 2 que permitió el fortalecimiento de la identidad."
    },
    {
        id: 3,
        nombre: "I, II, III Festival de expresiones culturales de los niños, niñas y jóvenes afrodescendientes",
        entidad: "IPCC, Asociación de Mujeres Afrodescendientes Graciela Cha Inés",
        año: "2007-2009",
        categoria: "cultura",
        descripcion: "Extensión del Festival de Tambores de Palenque para visibilizar las comunidades negras en Cartagena."
    },
    {
        id: 4,
        nombre: "Hagamos de nuestro entorno un agradable espacio de trabajo",
        entidad: "Global Green Found",
        año: "2007-2008",
        categoria: "medioambiente",
        descripcion: "Proyecto de autocuidado ambiental con mujeres trabajadoras de las playas ante el calentamiento global."
    },
    {
        id: 5,
        nombre: "Al rescate de las historias de vida de mujeres afrodescendientes del Departamento de Bolívar",
        entidad: "Ministerio de Cultura",
        año: "2012",
        categoria: "derechos",
        descripcion: "Proyecto que permitió develar la vida, historia y estrategias de resistencia de las mujeres."
    },
    {
        id: 6,
        nombre: "Sensibilización, denuncia y exigibilidad de derecho 'por una vida libre de violencias'",
        entidad: "UNIFEM",
        año: "2009-2010",
        categoria: "derechos",
        descripcion: "Visibilización de situaciones de violencia contra mujeres Negras, afros, raizal y palenqueras."
    },
    {
        id: 7,
        nombre: "Derechos de género e identidades étnicas",
        entidad: "OIM",
        año: "2011",
        categoria: "derechos",
        descripcion: "Construcción de escenarios sin violencia hacia las mujeres afro cartageneras."
    },
    {
        id: 8,
        nombre: "Montaje y puesta en marcha Acto conmemorativo día de la Mujeres",
        entidad: "Alcaldía Distrital de Cartagena",
        año: "2011",
        categoria: "derechos",
        descripcion: "Implementación de la conmemoración del 8 de marzo con enfoque en mujeres negras y afro."
    },
    {
        id: 9,
        nombre: "Serie de televisión 'Invisibles'",
        entidad: "RTVC",
        año: "2013-2014",
        categoria: "cultura",
        descripcion: "Serie que visibiliza la historia negada de las comunidades afro a través de historiadores."
    },
    {
        id: 10,
        nombre: "Diplomado de Género, Identidad y Movimiento social de Mujeres Negras",
        entidad: "Global Green",
        año: "2015",
        categoria: "educacion",
        descripcion: "Formación de más de 150 personas en Cartagena, Malagana y María La Baja."
    },
    {
        id: 11,
        nombre: "Mujeres Negras Trabajando Por La Paz Desde Los Territorios Ancestrales",
        entidad: "Fokus",
        año: "2015-2016",
        categoria: "paz",
        descripcion: "Reconstrucción del tejido social fracturado por la violencia en las comunidades."
    },
    {
        id: 12,
        nombre: "Fortalecimiento del empoderamiento a procesos organizativos",
        entidad: "OIM",
        año: "2020",
        categoria: "derechos",
        descripcion: "Formación integral en identidad, derechos de géneros, ley 70, violencia de género."
    },
    {
        id: 13,
        nombre: "Fortalecimiento al empoderamiento y emprendimiento",
        entidad: "Ministerio del Interior",
        año: "2021",
        categoria: "educacion",
        descripcion: "Consolidación de la 'Escuela de Formación política de Graciela'."
    },
    {
        id: 14,
        nombre: "Fortalecimiento del proyecto etnoeducativo comunitario",
        entidad: "Ministerio de Educación Nacional",
        año: "2025",
        categoria: "educacion",
        descripcion: "Acompañamiento a instituciones etnoeducativas para la implementación del P.E.C."
    }
];

// Función para mostrar proyectos
function displayProjects(projectsToShow) {
    const container = document.getElementById('projectsContainer');
    const totalElement = document.getElementById('totalProjects');
    const shownElement = document.getElementById('shownProjects');
    
    // Actualizar estadísticas
    totalElement.textContent = proyectos.length;
    shownElement.textContent = projectsToShow.length;
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    if (projectsToShow.length === 0) {
        container.innerHTML = '<p>No se encontraron proyectos con los filtros aplicados.</p>';
        return;
    }
    
    // Mostrar proyectos
    projectsToShow.forEach(proyecto => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p><strong>Entidad:</strong> ${proyecto.entidad}</p>
            <p>${proyecto.descripcion}</p>
            <div class="project-meta">
                <span class="year-badge">${proyecto.año}</span>
                <span>${getCategoryName(proyecto.categoria)}</span>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Función para obtener nombre de categoría
function getCategoryName(categoryCode) {
    const categories = {
        'cultura': 'Cultura e Identidad',
        'derechos': 'Derechos de la Mujer',
        'politica': 'Políticas Públicas',
        'educacion': 'Educación',
        'medioambiente': 'Medio Ambiente',
        'paz': 'Construcción de Paz'
    };
    return categories[categoryCode] || 'General';
}

// Función para filtrar proyectos
function filterProjects() {
    const yearFilter = document.getElementById('yearFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredProjects = proyectos.filter(proyecto => {
        // Filtrar por año
        if (yearFilter && !proyecto.año.includes(yearFilter)) {
            return false;
        }
        
        // Filtrar por categoría
        if (categoryFilter && proyecto.categoria !== categoryFilter) {
            return false;
        }
        
        // Filtrar por búsqueda
        if (searchInput) {
            const searchText = searchInput.toLowerCase();
            const inNombre = proyecto.nombre.toLowerCase().includes(searchText);
            const inDescripcion = proyecto.descripcion.toLowerCase().includes(searchText);
            const inEntidad = proyecto.entidad.toLowerCase().includes(searchText);
            
            if (!inNombre && !inDescripcion && !inEntidad) {
                return false;
            }
        }
        
        return true;
    });
    
    displayProjects(filteredProjects);
}

// Función para resetear filtros
function resetFilters() {
    document.getElementById('yearFilter').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('searchInput').value = '';
    displayProjects(proyectos);
}

// Permitir búsqueda con Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        filterProjects();
    }
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    displayProjects(proyectos);
});
