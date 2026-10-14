/* ALTURA PROPIEDADES — datos de demostración (index.html y propiedad.html).
   Corredora ficticia. Precios y valor UF referenciales. */
const AP = { whatsapp: "56952262331", uf: 39800, favKey: "alturaFavV1" };
const API = "../../assets/img/inmobiliaria/";
const pics = n => [1, 2, 3, 4].map(i => `${API}p${n}-${i}.jpg`);

const AP_AGENTS = {
  fernanda: { name: "Fernanda Ruiz", role: "Corredora · Las Condes y Vitacura", img: "fernanda.jpg" },
  camila: { name: "Camila Torres", role: "Corredora · Providencia y Ñuñoa", img: "camila.jpg" },
  rodrigo: { name: "Rodrigo Silva", role: "Corredor · Sector oriente", img: "rodrigo.jpg" },
  diego: { name: "Diego Morales", role: "Corredor · Chicureo y Lo Barnechea", img: "diego.jpg" }
};

const AP_PROPS = [
  { id: 1, title: "Casa moderna con quincho y piscina", type: "Casa", op: "Venta", comuna: "Lo Barnechea", price: 21500, cur: "UF", m2: 380, m2t: 900, dorms: 4, baths: 5, parking: 3, year: 2019, badge: "Exclusiva", agent: "diego", images: pics(1),
    description: "Casa de arquitectura contemporánea en condominio con seguridad 24 horas. Grandes ventanales hacia el jardín, living y comedor de doble altura, cocina equipada con isla y suite principal con walk-in closet y terraza propia.",
    features: ["Piscina temperada", "Quincho techado", "Calefacción por losa radiante", "Paneles solares", "Bodega", "Condominio con seguridad"] },
  { id: 2, title: "Casa familiar con piscina en condominio", type: "Casa", op: "Venta", comuna: "Colina (Chicureo)", price: 14900, cur: "UF", m2: 260, m2t: 650, dorms: 4, baths: 4, parking: 2, year: 2021, badge: "Nuevo", agent: "diego", images: pics(2),
    description: "Casa de dos pisos con amplio jardín y piscina, en condominio con áreas verdes y ciclovía. Cocina abierta al living, sala de estar familiar y dormitorio de servicio.",
    features: ["Piscina", "Jardín con riego automático", "Cocina americana", "Sala de estar", "Dormitorio de servicio", "Áreas verdes comunes"] },
  { id: 3, title: "Departamento luminoso a pasos del metro", type: "Departamento", op: "Arriendo", comuna: "Providencia", price: 890000, cur: "CLP", m2: 78, m2t: 84, dorms: 2, baths: 2, parking: 1, year: 2017, gc: 145000, agent: "camila", images: pics(3),
    description: "Departamento orientación nororiente, muy luminoso, a dos cuadras del metro. Living comedor con salida a terraza, cocina equipada y dos dormitorios en suite. Edificio con gimnasio y quincho.",
    features: ["A 2 cuadras del metro", "Terraza", "Cocina equipada", "Gimnasio", "Quincho en azotea", "Conserjería 24 h"] },
  { id: 4, title: "Departamento con vista despejada", type: "Departamento", op: "Venta", comuna: "Las Condes", price: 9800, cur: "UF", m2: 112, m2t: 124, dorms: 3, baths: 2, parking: 2, year: 2018, gc: 210000, badge: "Rebajado", agent: "fernanda", images: pics(4),
    description: "Departamento en piso alto con vista a la cordillera. Planta eficiente, living amplio con ventanales de piso a techo, dormitorio principal en suite y terraza corrida.",
    features: ["Vista a la cordillera", "Piso alto", "Terraza corrida", "Piscina en el edificio", "Sala multiuso", "2 estacionamientos y bodega"] },
  { id: 5, title: "Casa con jardín en barrio residencial", type: "Casa", op: "Venta", comuna: "La Reina", price: 17200, cur: "UF", m2: 240, m2t: 520, dorms: 4, baths: 3, parking: 2, year: 2012, agent: "rodrigo", images: pics(5),
    description: "Casa remodelada en calle tranquila, cerca de colegios y parques. Comedor independiente, cocina con desayunador, escritorio y jardín consolidado con terraza.",
    features: ["Remodelada", "Jardín consolidado", "Escritorio", "Comedor independiente", "Cerca de colegios", "Calle tranquila"] },
  { id: 6, title: "Loft industrial en Barrio Italia", type: "Loft", op: "Arriendo", comuna: "Ñuñoa", price: 720000, cur: "CLP", m2: 65, m2t: 65, dorms: 1, baths: 1, parking: 1, year: 2016, gc: 98000, badge: "Nuevo", agent: "camila", images: pics(6),
    description: "Loft de doble altura con estilo industrial, ladrillo a la vista y grandes ventanales. Ideal para quien busca vivir cerca de cafés, tiendas de diseño y la vida de barrio.",
    features: ["Doble altura", "Ladrillo a la vista", "Amoblado opcional", "Cerca de Barrio Italia", "Bicicletero", "Admite mascotas"] },
  { id: 7, title: "Departamento de diseño en edificio boutique", type: "Departamento", op: "Venta", comuna: "Vitacura", price: 12400, cur: "UF", m2: 135, m2t: 150, dorms: 3, baths: 3, parking: 2, year: 2022, agent: "fernanda", images: pics(7),
    description: "Departamento en edificio boutique de pocas unidades, con terminaciones de primer nivel: piso de madera, cocina integrada con artefactos empotrados y baños con revestimientos de piedra.",
    features: ["Edificio boutique", "Terminaciones premium", "Cocina integrada", "Domótica", "Terraza con jardinera", "Seguridad 24 h"] },
  { id: 8, title: "Casa amplia cerca de la precordillera", type: "Casa", op: "Arriendo", comuna: "Peñalolén", price: 1650000, cur: "CLP", m2: 190, m2t: 400, dorms: 4, baths: 3, parking: 2, year: 2015, agent: "rodrigo", images: pics(8),
    description: "Casa en condominio con vista a la precordillera. Living con chimenea, cocina con isla, patio con quincho y espacio para niños. Disponible desde el próximo mes.",
    features: ["Vista a la precordillera", "Chimenea", "Quincho", "Patio amplio", "Condominio", "Disponible inmediato"] },
  { id: 9, title: "Penthouse con terraza y piscina privada", type: "Penthouse", op: "Venta", comuna: "Las Condes", price: 32000, cur: "UF", m2: 280, m2t: 400, dorms: 4, baths: 4, parking: 3, year: 2020, badge: "Exclusiva", agent: "fernanda", images: pics(9),
    description: "Penthouse de dos niveles con terraza de 120 m² y piscina privada con vista panorámica de Santiago. Ascensor directo, cocina gourmet y suite principal con baño en mármol.",
    features: ["Piscina privada", "Terraza de 120 m²", "Ascensor directo", "Cocina gourmet", "Vista panorámica", "3 estacionamientos"] }
];

const clp = n => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
const uf = n => "UF " + new Intl.NumberFormat("es-CL", { maximumFractionDigits: 0 }).format(n);
const priceMain = p => p.cur === "UF" ? uf(p.price) : clp(p.price) + (p.op === "Arriendo" ? "/mes" : "");
const priceAlt = p => p.cur === "UF" ? "≈ " + clp(p.price * AP.uf) : (p.op === "Arriendo" ? "Arriendo mensual" : "≈ " + uf(p.price / AP.uf));
const priceCLP = p => p.cur === "UF" ? p.price * AP.uf : p.price;
