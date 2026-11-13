import imgMetalmecanica from '../assets/images/servicio-metalmecanica.jpg';
import imgVias from '../assets/images/servicio-vias.jpg';
import imgRoceria from '../assets/images/servicio-roceria.jpg';
import imgObrasElectricas from '../assets/images/servicio-obras-electricas.jpg';
import imgCanalAlamosa from '../assets/images/canal-alamosa-obra.jpeg';
import imgObraCivil from '../assets/images/servicio-obra-civil.jpg';

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDetails: string;
  image?: string;
  iconName: string;
  deliverables: string[];
  equipment?: string[];
  norms?: string[];
}

export interface Project {
  id: string;
  title: string;
  client?: string;
  contractTag: string;
  location: string;
  category: 'civil' | 'vial' | 'electricas';
  summary: string;
  fullDescription: string;
  metrics?: { label: string; value: string }[];
  image?: string;
  year?: string;
  status?: 'Completado' | 'En Ejecución';
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
  nit: "900302289-2",
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
    weekdays: "Lunes a Viernes: 8:00 a.m. a 12:00 m. / 2:00 p.m. a 5:30 p.m.",
    saturdays: "Sábados: 8:00 a.m. a 12:00 m."
  },
  mission: "GIRALDO RAMÍREZ COMERCIALIZADORA LTDA. es una compañía dedicada a la ejecución de proyectos de ingeniería, obras civiles, mantenimiento de vías, redes eléctricas, proyectos ambientales, suministro de personal y logística operativa, apoyada en talento humano calificado y garantizando el cumplimiento de normas de calidad, seguridad y salud en el trabajo (SG-SST) y protección del medio ambiente, generando valor a nuestros clientes, colaboradores y comunidades de nuestra región.",
  vision: "Para el año 2029, ser una organización líder en soluciones de ingeniería integral en el Cesar, Santander y la región Caribe, destacándonos por la excelencia operativa, prontitud de respuesta y adaptación a las necesidades del sector minero, vial e institucional, aplicando metodologías de vanguardia y manteniendo certificaciones de alta exigencia que garanticen la sostenibilidad de nuestras operaciones y el bienestar de nuestro equipo humano."
};

export const SERVICES_LIST: Service[] = [
  {
    id: "metalmecanica",
    title: "Metalmecánica",
    category: "Soldadura y Montajes",
    description: "Aplicación de soldadura en general, fabricación de partes industriales y montajes metalmecánicos.",
    fullDetails: "Obras metalmecánicas en fabricación de partes industriales, montajes metalmecánicos y aplicación de soldadura en general, con personal calificado y elementos de protección.",
    image: imgMetalmecanica,
    iconName: "Wrench",
    deliverables: [
      "Soldadura en general",
      "Fabricación de partes industriales",
      "Montajes metalmecánicos"
    ]
  },
  {
    id: "vias",
    title: "Vías y Señalización",
    category: "Infraestructura Vial",
    description: "Construcción y mantenimiento de vías, y señalización vial horizontal y vertical.",
    fullDetails: "Construcción y mantenimiento de vías, con señalización de pavimentos y señales verticales (demarcación, zonas escolares, pasos peatonales y señales de pare) para un tránsito más seguro.",
    image: imgVias,
    iconName: "Truck",
    deliverables: [
      "Construcción y mantenimiento de vías",
      "Demarcación y señalización horizontal",
      "Señalización vertical (por ejemplo, señales de pare)"
    ]
  },
  {
    id: "roceria",
    title: "Rocería",
    category: "Mantenimiento de Zonas Verdes",
    description: "Limpieza y corte de maleza, y poda de árboles.",
    fullDetails: "Limpieza y corte de maleza y poda de árboles, dentro del mantenimiento de zonas verdes, con cuadrillas uniformadas y con elementos de protección.",
    image: imgRoceria,
    iconName: "Leaf",
    deliverables: [
      "Limpieza y corte de maleza",
      "Poda de árboles",
      "Mantenimiento de zonas verdes"
    ]
  },
  {
    id: "obras-electricas",
    title: "Obras Eléctricas",
    category: "Sistemas Eléctricos",
    description: "Instalaciones, montajes y mantenimiento eléctrico de alta, media y baja tensión.",
    fullDetails: "Obras eléctricas de alta, media y baja tensión: instalaciones y montajes eléctricos, mantenimiento eléctrico, alumbrado, cableado estructurado y subestaciones.",
    image: imgObrasElectricas,
    iconName: "Zap",
    deliverables: [
      "Instalaciones y montajes eléctricos",
      "Mantenimiento eléctrico",
      "Alumbrado y cableado estructurado",
      "Subestaciones y plantas eléctricas"
    ]
  },
  {
    id: "obra-civil",
    title: "Obra Civil",
    category: "Construcción y Mantenimiento",
    description: "Construcción y mantenimiento de edificaciones, vías y puentes; postes en concreto y cercas.",
    fullDetails: "Obras civiles en construcción y mantenimiento de edificaciones, vías y puentes; elaboración de postes en concreto y desmontes e instalación de cercas.",
    image: imgObraCivil,
    iconName: "Building2",
    deliverables: [
      "Construcción y mantenimiento de edificaciones",
      "Vías y puentes",
      "Postes en concreto",
      "Desmontes e instalación de cercas"
    ]
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "canal-alamosa",
    title: "Canal Alamosa",
    contractTag: "OBRA CIVIL",
    location: "Mina Drummond",
    category: "civil",
    summary: "Instalación de estructuras prefabricadas de concreto tipo cajón para el canal Alamosa, con cuadrilla y maquinaria en sitio.",
    fullDescription: "Obra civil de canal con instalación de módulos prefabricados de concreto en excavación, ejecutada por personal de Giraldo Ramírez con maquinaria de movimiento de tierras. Ubicación indicada en el material de la empresa: Mina Drummond.",
    image: imgCanalAlamosa
  },
  {
    id: "vivienda-antes-despues",
    title: "Construcción de vivienda: antes y después",
    contractTag: "OBRA CIVIL",
    location: "Por confirmar",
    category: "civil",
    summary: "Vivienda llevada desde la obra negra en mampostería y concreto hasta su terminación con acabados y pintura.",
    fullDescription: "Registro del avance de una vivienda, desde la estructura en ladrillo y columnas de concreto hasta la obra terminada con fachada pintada, ventanería y piso en baldosa.",
    image: imgObraCivil
  },
  {
    id: "senalizacion-vial",
    title: "Señalización de vías",
    contractTag: "VÍAS Y SEÑALIZACIÓN",
    location: "Navelena, Consol y Campamento Aguachica",
    category: "vial",
    summary: "Demarcación de pavimentos, zonas escolares, flechas direccionales y señales verticales de pare.",
    fullDescription: "Trabajos de señalización vial horizontal y vertical en las instalaciones de Navelena, Consol y el Campamento Aguachica: demarcación de parqueaderos y pasos peatonales, zona escolar, flechas direccionales, palabra PARE y señal vertical.",
    image: imgVias
  },
  {
    id: "obras-electricas-yuma",
    title: "Obras eléctricas: subestación y planta eléctrica",
    contractTag: "OBRAS ELÉCTRICAS",
    location: "Yuma, Navelena, Consol y otras sedes",
    category: "electricas",
    summary: "Subestación y planta eléctrica, instalaciones eléctricas, cableado estructurado, alumbrado y video wall.",
    fullDescription: "Instalaciones eléctricas en varias sedes, entre ellas la subestación y planta eléctrica de Yuma, instalación de rack y cableado estructurado, alumbrado, instalaciones en Navelena y Consol y video wall.",
    image: imgObrasElectricas
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
