export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDetails: string;
  image?: string;
  iconName: string;
  deliverables: string[];
  equipment: string[];
  norms: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  contractTag: string;
  location: string;
  category: 'civil' | 'vial' | 'hidraulica' | 'facilidades' | 'social';
  summary: string;
  fullDescription: string;
  metrics: { label: string; value: string }[];
  image?: string;
  year: string;
  status: 'Completado' | 'En Ejecución';
}

export interface ClientPartner {
  name: string;
  scope: string;
  category: 'principal' | 'relevante';
  iconType: string;
}

export const COMPANY_INFO = {
  name: "Giraldo Ramírez Comercializadora Ltda.",
  shortName: "Giraldo Ramírez",
  nit: "900302280-2",
  foundationYear: "2009",
  slogan: "Construyendo para un futuro mejor.",
  phones: [
    { label: "PBX Valledupar", number: "(+575) 589 3189", raw: "5755893189" },
    { label: "Móvil / WhatsApp", number: "(+57) 318 344 1355", raw: "573183441355" }
  ],
  emails: [
    "gr.comercializadora1@gmail.com",
    "gr.recursoshumanos1@gmail.com"
  ],
  addresses: {
    principal: "Carrera 4G No. 21-93, Valledupar, Cesar, Colombia",
    laLoma: "La Loma, Cesar",
    bosconia: "Bosconia, Cesar"
  },
  hours: {
    weekdays: "Lunes a Viernes: 8:00 a.m. a 12:00 m. / 2:00 p.m. a 6:00 p.m.",
    saturdays: "Sábados: 8:00 a.m. a 12:00 m."
  },
  mission: "GIRALDO RAMÍREZ COMERCIALIZADORA LTDA. es una compañía dedicada a la ejecución de proyectos de ingeniería, obras civiles, mantenimiento de vías, redes eléctricas, proyectos ambientales, suministro de personal y logística operativa, apoyada en talento humano calificado y garantizando el cumplimiento de normas de calidad, seguridad y salud en el trabajo (SG-SST) y protección del medio ambiente, generando valor a nuestros clientes, colaboradores y comunidades de nuestra región.",
  vision: "Para el año 2029, ser una organización líder en soluciones de ingeniería integral en el Cesar, Santander y la región Caribe, destacándonos por la excelencia operativa, prontitud de respuesta y adaptación a las necesidades del sector minero, vial e institucional, aplicando metodologías de vanguardia y manteniendo certificaciones de alta exigencia que garanticen la sostenibilidad de nuestras operaciones y el bienestar de nuestro equipo humano."
};

export const SERVICES_LIST: Service[] = [
  {
    id: "obras-civiles",
    title: "Obras Civiles y Arquitectónicas",
    category: "Construcción Estructural",
    description: "Construcción de edificaciones, campamentos, muros de contención, losas de cimentación, bodegas y adecuación de áreas institucionales y residenciales.",
    fullDetails: "Diseño y ejecución de infraestructuras permanentes y temporales. Especialistas en cimentaciones profundas y superficiales, estructuras aporticadas en concreto reforzado, campamentos modulares para industria minera e hidrocarburos, y edificaciones institucionales y de vivienda social.",
    image: "/src/assets/images/social_housing_project_1792186839294.jpg",
    iconName: "Building2",
    deliverables: [
      "Estructuras sismorresistentes NSR-10",
      "Campamentos y baterías sanitarias industriales",
      "Muros de contención y gaviones",
      "Bodegas de almacenamiento logístico y talleres"
    ],
    equipment: ["Mezcladoras de concreto", "Formaleta metálica modular", "Vibradores de inmersión", "Torregrúas y telehandlers"],
    norms: ["NSR-10", "ISO 9001", "SG-SST Decreto 1072"]
  },
  {
    id: "gestion-proyectos",
    title: "Intervención y Gestión de Proyectos",
    category: "Ingeniería & Topografía",
    description: "Planeación, supervisión técnica, excavaciones masivas, estabilización de taludes, compactación de suelos y control topográfico de alta precisión.",
    fullDetails: "Control integral de obra desde el replanteo inicial hasta la entrega final. Servicios de topografía satelital RTK, cálculo de movimientos de tierra, control de densidades in situ, ensayos geotécnicos y dirección técnica conforme a cronograma y matriz de riesgos.",
    image: "/src/assets/images/excavation_mining_1792186837961.jpg",
    iconName: "Compass",
    deliverables: [
      "Levantamientos topográficos y curvas de nivel RTK",
      "Excavaciones masivas a cielo abierto",
      "Cálculo volumétrico de corte y relleno",
      "Estudios de estabilidad de taludes y suelos"
    ],
    equipment: ["Estaciones totales y GPS Geodésico GNSS", "Retroexcavadoras de oruga CAT", "Compactadores vibratorios monocilíndricos", "Densímetros nucleares"],
    norms: ["Especificaciones INVÍAS", "Manual de Topografía", "Normas ASTM de Suelos"]
  },
  {
    id: "obras-hidromecanicas",
    title: "Obras Hidromecánicas",
    category: "Ingeniería Hidráulica",
    description: "Estructuras de captación, redes de acueducto y alcantarillado, tanques de almacenamiento y sistemas de bombeo industrial.",
    fullDetails: "Soluciones de transporte de fluidos, líneas de aducción, redes de conducción en polietileno de alta densidad (PEAD) y acero al carbono, montaje de bombas de alta presión, válvulas reguladoras y plantas de tratamiento de agua potable y residual.",
    iconName: "Wrench",
    deliverables: [
      "Instalación de redes maestras en PEAD y PVC",
      "Estaciones de bombeo e hidroflotación",
      "Tanques en concreto y geomembrana",
      "Desarenadores y trampas de grasas mineras"
    ],
    equipment: ["Termofusionadoras para PEAD", "Equipos de bombeo sumergible", "Motobombas diésel de achique", "Zanjadoras"],
    norms: ["RAS 2017", "AWWA", "Resolución 0330"]
  },
  {
    id: "redes-electricas",
    title: "Redes Eléctricas",
    category: "Sistemas Energéticos",
    description: "Líneas de baja y media tensión, subestaciones eléctricas, alumbrado público, cableado estructurado y redes de energía fotovoltaica / solar.",
    fullDetails: "Instalación de redes eléctricas aéreas y subterráneas, hincado de postes de concreto para líneas de 13.2 kV y 34.5 kV, bancos de transformadores, tableros de distribución industrial, sistemas de puesta a tierra (mallas SPT) y sistemas fotovoltaicos aislados y conectados a la red.",
    iconName: "Zap",
    deliverables: [
      "Redes aéreas y subterráneas de media y baja tensión",
      "Subestaciones en poste y tipo encapsulado",
      "Iluminación LED perimetral y vial de alto flujo",
      "Sistemas de apantallamiento y puesta a tierra"
    ],
    equipment: ["Camión canasta dieléctrico", "Tensadores de conductor", "Megóhmetro y telurómetros calibrados", "Ponchadoras hidráulicas"],
    norms: ["RETIE", "RETILAP", "Normas Técnicas Afinia / EPM"]
  },
  {
    id: "mantenimiento-vias",
    title: "Mantenimiento de Vías",
    category: "Infraestructura Vial",
    description: "Mantenimiento preventivo y correctivo sobre corredores viales, afirmados, cunetas, perfilado, bacheo y señalización.",
    fullDetails: "Intervención de corredores no pavimentados y pavimentados en entornos de tráfico pesado minero e intermunicipal. Conformación y compactación de subrasante, aplicación de material seleccionado, construcción de bateas, cunetas revestidas y rocería perimetral.",
    iconName: "Truck",
    deliverables: [
      "Perfilado y compactación de calzadas afirmadas",
      "Bacheo asfáltico en caliente y frío",
      "Limpieza y conformación mecánica de cunetas",
      "Señalización vertical y horizontal preventiva"
    ],
    equipment: ["Motoniveladoras CAT 140M", "Carrotanques de agua de 3000 gal", "Vibrocompactadores de 10 ton", "Volquetas dobletroque"],
    norms: ["Normas de Ensayos del INVÍAS", "Manual de Señalización Vial", "Plan de Manejo de Tráfico (PMT)"]
  },
  {
    id: "obras-hidraulicas",
    title: "Obras Hidráulicas y Sanitarias",
    category: "Drenaje e Hidráulica",
    description: "Prefabricación e instalación de box culvert, canales perimetrales, drenajes de gran capacidad, disipadores y estructuras de paso pluvial.",
    fullDetails: "Diseño, izaje y ensamble de estructuras tipo cajón en concreto reforzado (Box Culvert) de secciones 1.5x1.5m hasta 3.0x3.0m para cruces de cuerpos de agua bajo calzadas de alta densidad. Filtros franceses, subdrenes, alcantarillas de tubería corrugada y muros de cabezal.",
    image: "/src/assets/images/box_culvert_installation_1792186838120.jpg",
    iconName: "ShieldAlert",
    deliverables: [
      "Módulos prefabricados de box culvert y aletas",
      "Cajas de inspección y cámaras de caída",
      "Canales trapezoidales revestidos en concreto",
      "Drenes longitudinales y geotextiles de filtración"
    ],
    equipment: ["Grúa telescópica de alto tonelaje", "Camabajas para transporte de prefabricados", "Excavadora con martillo hidráulico", "Bombas de lodo"],
    norms: ["INVÍAS Artículo 600", "AASHTO LRFD Bridge Design", "Norma ACI 318"]
  },
  {
    id: "pintura-acabados",
    title: "Pintura, Acabados y Terminaciones",
    category: "Mantenimiento Especializado",
    description: "Aplicación de pinturas epóxicas, recubrimientos industriales, impermeabilización, resanes, acabados de alta durabilidad y mantenimiento estético integral.",
    fullDetails: "Protección anticorrosiva de estructuras metálicas, aplicación de recubrimientos epóxicos de alto tráfico en plantas industriales, impermeabilización de cubiertas y tanques con membranas elastoméricas y acabados arquitectónicos en estuco y vinilo lavable.",
    iconName: "Paintbrush",
    deliverables: [
      "Pintura epóxica para pisos de talleres y plantas",
      "Sandblasting y recubrimiento anticorrosivo",
      "Impermeabilización de cubiertas y sótanos",
      "Pintura arquitectónica vinílica lavable"
    ],
    equipment: ["Compresores industriales de pintura airless", "Equipo de granallado y arenado", "Medidores de película húmeda y seca", "Andamios certificados multidireccionales"],
    norms: ["SSPC / NACE Internacional", "Norma Técnica Colombiana NTC", "Reglamento de Trabajo Seguro en Alturas"]
  },
  {
    id: "cercas-perimetrales",
    title: "Desmonte e Instalación de Cercas Perimetrales",
    category: "Delimitación y Seguridad",
    description: "Despeje de franja vial, hincado de postes de concreto, instalación de alambre de púas, concertinas y cercas metálicas para delimitación de predios y derechos de vía.",
    fullDetails: "Desmonte de cercado existente, replanteo de linderos prediales, perforación de hoyos, hincado de postes de concreto vibrado de 2.10m a 2.40m e instalación de alambre galvanizado calibre 12.5 con tensores de seguridad.",
    image: "/src/assets/images/fencing_crew_field_1792186839603.jpg",
    iconName: "Fence",
    deliverables: [
      "Cercas en postes de concreto de alta resistencia",
      "Cercas metálicas eslabonadas tipo ciclón",
      "Instalación de concertina galvanizada y alambre de púas",
      "Portones vehiculares y peatonales metálicos"
    ],
    equipment: ["Hoyadoras mecánicas a combustión", "Tensadores de cadena de alambre", "Camiones estacas 4x4", "Mezcladoras portátiles para anclajes"],
    norms: ["Especificaciones ANI para Derecho de Vía", "Norma NTC de Alambres Galvanizados"]
  },
  {
    id: "proyectos-ambientales",
    title: "Proyectos Ambientales",
    category: "Gestión Sostenible",
    description: "Restauración vegetal, manejo de cuencas hidrográficas, compensación ambiental, reforestación, control de erosión y manejo integral de residuos de obra.",
    fullDetails: "Implementación de Planes de Manejo Ambiental (PMA). Revegetalización de taludes mediante hidrosiembra y biomantas de fibra de coco, siembra de especies nativas del bosque seco tropical, rescate de epífitas y fauna, y gestión de escombros y materiales sobrantes de excavación (ZODME).",
    iconName: "Leaf",
    deliverables: [
      "Planes de reforestación y compensación 1x10",
      "Instalación de biomantas y trinchos contra erosión",
      "Viveros temporales y rescate de flora silvestre",
      "Manejo y disposición final certificada de residuos (RESPEL y RCD)"
    ],
    equipment: ["Hidrosembradoras de presión", "Ahoyadoras para plántulas", "Trituradoras de biomasa", "Sistemas de riego por goteo"],
    norms: ["Guías Ambientales del MinAmbiente", "Lineamientos ANLA", "Planes de Manejo de Corpocesar / CAS"]
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "calenturitas-talleres",
    title: "Ampliación Talleres de Mantenimiento - Mina Calenturitas",
    client: "Sector Minero Carbón Cesar",
    contractTag: "MINA CALENTURITAS, CESAR",
    location: "La Jagua de Ibirico / El Paso, Cesar",
    category: "civil",
    summary: "Adecuación de terreno, excavación a cielo abierto y cimentaciones para soporte de talleres de maquinaria pesada en complejo minero.",
    fullDescription: "Proyecto de alta exigencia geotécnica consistente en el movimiento masivo de 45,000 m³ de tierra, estabilización con pedraplén y fundición de losas reforzadas de alto espesor para soportar el tránsito de camiones mineros de 240 toneladas. Incluyó drenajes subterráneos y redes eléctricas industriales.",
    metrics: [
      { label: "Volumen Movido", value: "45,000 m³" },
      { label: "Área Intervenida", value: "18,500 m²" },
      { label: "Tiempo de Ejecución", value: "5 Meses" },
      { label: "Cero Accidentes", value: "100% Cumplido" }
    ],
    image: "/src/assets/images/excavation_mining_1792186837961.jpg",
    year: "2023 - 2024",
    status: "Completado"
  },
  {
    id: "campamento-bosconia",
    title: "Oficinas y Campamento de Producción en Bosconia",
    client: "Operación Propia & Aliados",
    contractTag: "FACILIDADES OPERATIVAS",
    location: "Bosconia, Cesar",
    category: "facilidades",
    summary: "Adecuación de oficinas operativas, bodegas y talleres para almacenamiento de repuestos y despacho de cuadrillas de campo en el centro del Cesar.",
    fullDescription: "Centro logístico estratégico que sirve de soporte para las cuadrillas que atienden emergencias viales y mantenimiento minero. Cuenta con patio de maquinaria pesada, planta eléctrica de emergencia, almacén de herramientas certificadas y estación de abastecimiento seguro de combustible.",
    metrics: [
      { label: "Área de Patio", value: "8,000 m²" },
      { label: "Capacidad de Alojamiento", value: "40 Técnicos" },
      { label: "Talleres Mecánicos", value: "2 Bahías" },
      { label: "Autonomía", value: "24/7 Operativo" }
    ],
    year: "2022 - Activo",
    status: "Completado"
  },
  {
    id: "vivienda-social",
    title: "Proyecto Habitacional e Infraestructura Social",
    client: "Comunidades y Entidades Aliadas",
    contractTag: "VIVIENDA Y COMUNIDAD",
    location: "Norte del Cesar y Guajira",
    category: "social",
    summary: "Construcción de viviendas de interés social y salones comunales con acabados en mampostería reforzada, cubierta termoacústica y redes de servicios básicos.",
    fullDescription: "Entrega de unidades habitacionales dignas para familias reasentadas o vulnerables. El diseño contempló arquitectura bioclimática con ventilación cruzada, porches frontales en baldosín cerámico, instalaciones hidrosanitarias completas con pozo séptico ecológico y conexión eléctrica normalizada.",
    metrics: [
      { label: "Viviendas Entregadas", value: "32 Unidades" },
      { label: "Área por Vivienda", value: "64 m²" },
      { label: "Beneficiarios Directos", value: "140 Personas" },
      { label: "Mano de Obra Local", value: "70% Contratada" }
    ],
    image: "/src/assets/images/social_housing_project_1792186839294.jpg",
    year: "2024",
    status: "Completado"
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    name: "Drummond Ltd.",
    scope: "Operaciones mineras y soporte en el Cesar",
    category: "principal",
    iconType: "mining"
  },
  {
    name: "Prodeco",
    scope: "Sector minero y gestión ambiental de frentes de explotación",
    category: "relevante",
    iconType: "mining"
  },
  {
    name: "Ecopetrol",
    scope: "Red de transporte de hidrocarburos y facilidades auxiliares",
    category: "relevante",
    iconType: "energy"
  },
];

export const CORPORATE_VALUES = [
  {
    name: "Calidad",
    desc: "Rigor técnico en cada proceso constructivo con base en normatividad vigente y ensayos de laboratorio certificados.",
    iconName: "CheckCircle2"
  },
  {
    name: "Cumplimiento",
    desc: "Puntualidad irrestricta en cronogramas, especificaciones técnicas y metas contractuales acordadas con nuestros clientes.",
    iconName: "Clock"
  },
  {
    name: "Eficiencia",
    desc: "Optimización de recursos de ingeniería, maquinaria de alto rendimiento y tecnología para maximizar rentabilidad y tiempo.",
    iconName: "Gauge"
  },
  {
    name: "Compromiso",
    desc: "Responsabilidad técnica, social y ambiental en cada zona de intervención con las comunidades vecinas y contratantes.",
    iconName: "HeartHandshake"
  },
  {
    name: "Trabajo en equipo",
    desc: "Sinergia multidisciplinaria entre cuadrillas de campo, supervisión de seguridad industrial y la gerencia de proyectos.",
    iconName: "Users"
  }
];
