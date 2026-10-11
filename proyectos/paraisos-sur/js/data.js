/* PARAÍSOS SUR — destinos y paquetes de demostración (compartido por index y destino). */
const PS_CONFIG = { whatsapp: "56952262331" };
const PI = "../../assets/img/paraisos-sur/";
const shots = (slug) => [1, 2, 3, 4].map(n => `${PI}${slug}-${n}.jpg`);

const PS_DESTINOS = [
  { id: "petrohue", map: "Saltos del Petrohué, Chile", name: "Saltos del Petrohué", country: "Chile", region: "Región de Los Lagos", type: ["Naturaleza", "Aventura"],
    tagline: "Agua turquesa a los pies del volcán Osorno", images: shots("petrohue"),
    intro: "Dentro del Parque Nacional Vicente Pérez Rosales, el río Petrohué se abre paso entre rocas volcánicas formando saltos de un color turquesa intenso. Una de las postales más impresionantes del sur de Chile.",
    facts: { season: "Todo el año · mejor de octubre a abril", duration: "Día completo", level: "Baja", from: "Puerto Varas (65 km)" },
    highlights: ["Pasarelas y miradores sobre los saltos", "Vista directa al volcán Osorno", "Navegación opcional por el lago Todos los Santos", "Sendero Los Enamorados entre bosque nativo"],
    itinerary: [["08:30", "Salida desde Puerto Varas", "Recorrido por la ribera del lago Llanquihue con parada en Ensenada."], ["10:30", "Saltos del Petrohué", "Caminata guiada por las pasarelas y tiempo libre para fotografías."], ["13:00", "Almuerzo en Petrohué", "Almuerzo típico junto al lago (no incluido)."], ["14:30", "Lago Todos los Santos", "Navegación opcional o caminata por la playa de arena volcánica."], ["18:00", "Regreso", "Llegada a Puerto Varas al atardecer."]],
    bring: ["Calzado de trekking o zapatillas con buena suela", "Cortaviento impermeable", "Protector solar y gorro", "Agua y snack"],
    price: 49000 },
  { id: "puertovaras", map: "Puerto Varas, Chile", name: "Puerto Varas y Frutillar", country: "Chile", region: "Lago Llanquihue", type: ["Ciudad y cultura", "Gastronomía"],
    tagline: "Herencia alemana frente a dos volcanes", images: shots("varas"),
    intro: "Puerto Varas y Frutillar miran al lago Llanquihue con los volcanes Osorno y Calbuco en el horizonte. Casas de madera, muelles, cocina sureña y el Teatro del Lago hacen de esta ruta un clásico del sur.",
    facts: { season: "Todo el año · verano ideal", duration: "1 a 3 días", level: "Baja", from: "Puerto Montt (20 km)" },
    highlights: ["Costanera e iglesia del Sagrado Corazón", "Muelle de Frutillar y Teatro del Lago", "Kuchen y cocina de tradición alemana", "Atardeceres sobre el lago Llanquihue"],
    itinerary: [["09:30", "City tour Puerto Varas", "Costanera, barrio patrimonial y miradores."], ["12:00", "Ruta por la orilla del lago", "Paradas fotográficas en Llanquihue."], ["13:30", "Frutillar", "Almuerzo y visita al Museo Colonial Alemán."], ["16:30", "Teatro del Lago", "Recorrido exterior y muelle."], ["18:30", "Regreso", "Tiempo libre en Puerto Varas."]],
    bring: ["Ropa por capas", "Paraguas o chaqueta impermeable", "Calzado cómodo para caminar"],
    price: 39000 },
  { id: "puyehue", map: "Termas Aguas Calientes, Puyehue, Chile", name: "Puyehue y Aguas Calientes", country: "Chile", region: "Región de Los Lagos", type: ["Naturaleza", "Bienestar"],
    tagline: "Termas y bosque valdiviano", images: shots("puyehue"),
    intro: "El Parque Nacional Puyehue combina bosque valdiviano, cascadas escondidas y aguas termales. Ideal para una escapada de descanso con caminatas suaves entre coigües, helechos y musgo.",
    facts: { season: "Todo el año · otoño muy recomendado", duration: "1 a 2 días", level: "Baja a media", from: "Osorno (80 km)" },
    highlights: ["Piscinas termales al aire libre", "Sendero El Pionero con mirador", "Salto de la Princesa", "Bosque valdiviano milenario"],
    itinerary: [["08:00", "Salida desde Osorno", "Ruta internacional 215 hacia la cordillera."], ["10:00", "Sendero El Pionero", "Caminata guiada de 1,5 h con vista al lago Puyehue."], ["12:30", "Salto de la Princesa", "Recorrido corto entre bosque nativo."], ["14:00", "Termas Aguas Calientes", "Tarde libre en piscinas termales (entrada aparte)."], ["18:00", "Regreso", "Llegada a Osorno."]],
    bring: ["Traje de baño y toalla", "Chaqueta impermeable", "Calzado de trekking", "Muda de ropa seca"],
    price: 55000 },
  { id: "antillanca", map: "Centro de Ski Antillanca, Chile", name: "Volcán Casablanca y Antillanca", country: "Chile", region: "Parque Nacional Puyehue", type: ["Montaña", "Aventura"],
    tagline: "Nieve en invierno, cráteres en verano", images: shots("antillanca"),
    intro: "En la ladera del volcán Casablanca, Antillanca ofrece esquí en invierno y caminatas volcánicas en verano, con vistas a los volcanes Osorno, Puntiagudo y Tronador.",
    facts: { season: "Invierno (nieve) y verano (trekking)", duration: "Día completo", level: "Media", from: "Osorno (98 km)" },
    highlights: ["Centro de ski con vista a cinco volcanes", "Cráter Raihuén en verano", "Andarivel panorámico", "Lagunas de altura"],
    itinerary: [["07:30", "Salida desde Osorno", "Traslado con parada en Aguas Calientes."], ["10:00", "Llegada a Antillanca", "Arriendo de equipo o preparación del trekking."], ["10:30", "Actividad principal", "Clase de esquí (invierno) o subida al cráter Raihuén (verano)."], ["14:00", "Almuerzo en refugio", "Comida caliente con vista al volcán (no incluido)."], ["17:30", "Regreso", "Llegada a Osorno."]],
    bring: ["Ropa térmica y guantes", "Lentes de sol", "Protector solar factor alto", "Bastones si haces trekking"],
    price: 69000 },
  { id: "bariloche", map: "San Carlos de Bariloche, Argentina", name: "Bariloche y Nahuel Huapi", country: "Argentina", region: "Río Negro", type: ["Montaña", "Lagos"],
    tagline: "El Circuito Chico y sus miradores", images: shots("bariloche"),
    intro: "San Carlos de Bariloche se recuesta sobre el lago Nahuel Huapi. El Circuito Chico, el cerro Campanario y la península Llao Llao regalan algunas de las vistas más famosas de la Patagonia argentina.",
    facts: { season: "Todo el año", duration: "3 a 5 días", level: "Baja a media", from: "Osorno vía Cardenal Samoré (235 km)" },
    highlights: ["Cerro Campanario en aerosilla", "Península y hotel Llao Llao", "Bahía López y Punto Panorámico", "Chocolaterías del centro cívico"],
    itinerary: [["Día 1", "Cruce de la cordillera", "Paso Cardenal Samoré y llegada a Bariloche."], ["Día 2", "Circuito Chico", "Cerro Campanario, Llao Llao y Bahía López."], ["Día 3", "Cerro Catedral o navegación", "Actividad según temporada."], ["Día 4", "Día libre", "Centro cívico, compras y gastronomía."], ["Día 5", "Regreso", "Cruce a Chile por la mañana."]],
    bring: ["Pasaporte o cédula vigente", "Ropa por capas", "Calzado de trekking", "Pesos argentinos o tarjeta"],
    price: 289000 },
  { id: "sanmartin", map: "San Martín de los Andes, Neuquén, Argentina", name: "San Martín de los Andes", country: "Argentina", region: "Neuquén", type: ["Lagos", "Naturaleza"],
    tagline: "El lago Lácar y la Ruta de los Siete Lagos", images: shots("sanmartin"),
    intro: "Un pueblo de montaña a orillas del lago Lácar, puerta de entrada al Parque Nacional Lanín y punto de partida de la Ruta de los Siete Lagos hacia Villa La Angostura.",
    facts: { season: "Primavera a otoño", duration: "3 a 4 días", level: "Baja", from: "Pucón vía paso Mamuil Malal (170 km)" },
    highlights: ["Mirador Arrayán sobre el lago Lácar", "Ruta de los Siete Lagos", "Playa Quila Quina", "Volcán Lanín"],
    itinerary: [["Día 1", "Llegada y costanera", "Paseo por el pueblo y el muelle."], ["Día 2", "Siete Lagos", "Ruta escénica hasta Villa La Angostura."], ["Día 3", "Quila Quina", "Navegación y caminata en la comunidad mapuche Curruhuinca."], ["Día 4", "Regreso", "Mirador Arrayán y viaje de vuelta."]],
    bring: ["Documentación para cruce fronterizo", "Traje de baño en verano", "Cortaviento", "Cámara con batería extra"],
    price: 249000 }
];

const PS_PAQUETES = [
  { id: "escapada", name: "Escapada de un día", kicker: "Ideal para empezar", price: "desde $39.000", unit: "por persona",
    items: ["Traslado ida y vuelta desde Puerto Varas u Osorno", "Guía local durante todo el recorrido", "Paradas fotográficas", "Seguro de pasajero"] },
  { id: "fin-de-semana", name: "Fin de semana en el sur", kicker: "El más elegido", featured: true, price: "desde $189.000", unit: "por persona, base doble",
    items: ["2 noches en cabaña o lodge", "2 excursiones guiadas a elección", "Desayunos incluidos", "Entrada a termas (1 día)", "Asistencia por WhatsApp 24/7"] },
  { id: "patagonia", name: "Patagonia binacional", kicker: "Chile + Argentina", price: "desde $459.000", unit: "por persona, base doble",
    items: ["5 noches entre Puerto Varas y Bariloche", "Cruce de cordillera con trámites asistidos", "Circuito Chico y Saltos del Petrohué", "Desayunos y 2 cenas", "Coordinador durante el viaje"] }
];
