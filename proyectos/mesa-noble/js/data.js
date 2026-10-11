/* MESA NOBLE — carta de demostración compartida por index.html y plato.html.
   Restaurante ficticio. Precios en ARS, ilustrativos. */
const MN_CONFIG = {
  whatsapp: "56952262331",       // reemplazar por el número del restaurante
  currency: "ARS", locale: "es-AR",
  cartKey: "mesaNobleCartV2"
};
const MN_IMG = "../../assets/img/mesa-noble/";
const pics = (slug, n) => Array.from({ length: n }, (_, i) => `${MN_IMG}${slug}-${i + 1}.jpg`);

const MN_MENU = [
  { id: "pan-masa-madre", name: "Pan de masa madre", category: "Para empezar", price: 6500, tag: "Para compartir",
    images: pics("pan", 4), short: "Hogaza de fermentación lenta, manteca de campo y aceite de oliva.",
    description: "Horneamos cada mañana una hogaza de masa madre con 36 horas de fermentación. Se sirve tibia, con manteca batida con sal de Maras y aceite de oliva extra virgen de Mendoza.",
    pairing: "Vermú de la casa con soda", allergens: "Gluten, lácteos", time: "Listo en 10 min" },
  { id: "empanadas", name: "Empanadas de la casa", category: "Para empezar", price: 9800, tag: "Clásico",
    images: pics("empanadas", 2).concat([MN_IMG + "cocina-1.jpg"]), short: "Tres empanadas de carne cortada a cuchillo, horneadas.",
    description: "Masa hojaldrada hecha en casa y relleno de carne cortada a cuchillo, cebolla de verdeo, huevo y aceitunas. Se acompañan con salsa criolla.",
    pairing: "Malbec joven del Valle de Uco", allergens: "Gluten, huevo", time: "Listo en 15 min" },
  { id: "vegetales-estacion", name: "Vegetales asados de estación", category: "Para empezar", price: 12400, tag: "Vegetariano",
    images: pics("vegetales", 2).concat([MN_IMG + "emplatado-2.jpg"]), short: "Calabaza, zanahorias y cebollas asadas con hierbas y yogur.",
    description: "Vegetales de productores del cordón hortícola asados lentamente en horno de barro, terminados con hierbas frescas, yogur de oveja y semillas tostadas.",
    pairing: "Torrontés de altura", allergens: "Lácteos, frutos secos", time: "Listo en 15 min" },
  { id: "ensalada-noble", name: "Ensalada Noble", category: "Para empezar", price: 11800, tag: "Liviano",
    images: pics("ensalada", 3), short: "Hojas verdes, palta, tomates, garbanzos y vinagreta cítrica.",
    description: "Una ensalada completa y fresca: hojas de la huerta, palta, tomates cherry, garbanzos crocantes, rabanitos y una vinagreta de limón y miel.",
    pairing: "Limonada de menta y jengibre", allergens: "Puede contener sésamo", time: "Listo en 10 min" },
  { id: "pesca-del-dia", name: "Pesca del día", category: "Principales", price: 26900, tag: "Del mar",
    images: pics("pesca", 4), short: "Pescado de temporada a la plancha, vegetales y manteca cítrica.",
    description: "Trabajamos con la pesca que llega cada mañana desde la costa atlántica. Se cocina a la plancha con piel crocante y se sirve con vegetales salteados y manteca de limón y alcaparras.",
    pairing: "Sauvignon blanc patagónico", allergens: "Pescado, lácteos", time: "Listo en 25 min" },
  { id: "ojo-de-bife", name: "Ojo de bife a la brasa", category: "Principales", price: 32500, tag: "Favorito de la casa",
    images: pics("carne", 4), short: "400 g de ojo de bife a las brasas con papas rústicas.",
    description: "Corte de novillo de pastura cocinado a las brasas de quebracho, en el punto que prefieras. Acompañado de papas rústicas, chimichurri de la casa y ensalada de estación.",
    pairing: "Cabernet franc de Gualtallary", allergens: "Sin TACC", time: "Listo en 30 min" },
  { id: "pappardelle-ragu", name: "Pappardelle al ragú", category: "Principales", price: 21400, tag: "Pasta fresca",
    images: pics("pasta", 4), short: "Pasta fresca hecha en casa con ragú de osobuco de cocción lenta.",
    description: "Cortamos los pappardelle a mano cada día. El ragú se cocina durante seis horas con osobuco, vino tinto y tomates, y se termina con queso de oveja estacionado.",
    pairing: "Bonarda de Mendoza", allergens: "Gluten, huevo, lácteos", time: "Listo en 20 min" },
  { id: "risotto-hongos", name: "Risotto de hongos", category: "Principales", price: 19800, tag: "Vegetariano",
    images: pics("risotto", 2).concat([MN_IMG + "emplatado-1.jpg"]), short: "Arroz carnaroli, hongos de pino y portobellos, parmesano.",
    description: "Risotto cremoso de arroz carnaroli con hongos de pino de la Patagonia y portobellos salteados, terminado con manteca, parmesano y rúcula fresca.",
    pairing: "Pinot noir de Río Negro", allergens: "Lácteos", time: "Listo en 25 min" },
  { id: "torta-cacao", name: "Torta de cacao amargo", category: "Postres", price: 9600, tag: "De la casa",
    images: pics("postre", 4), short: "Bizcocho húmedo de cacao 70%, ganache y crema batida.",
    description: "Nuestra pastelera trabaja con cacao 70% para un postre intenso y equilibrado: bizcocho húmedo, ganache sedosa y crema apenas dulce.",
    pairing: "Café de especialidad", allergens: "Gluten, huevo, lácteos", time: "Listo en 5 min" },
  { id: "limonada", name: "Limonada de menta y jengibre", category: "Bebidas", price: 5200, tag: "Sin alcohol",
    images: pics("limonada", 3), short: "Limón exprimido, menta fresca, jengibre y almíbar liviano.",
    description: "Preparada al momento con limones exprimidos, hojas de menta, un toque de jengibre y almíbar liviano. Se sirve con mucho hielo.",
    pairing: "Ideal con la Ensalada Noble", allergens: "—", time: "Listo en 5 min" }
];
const MN_CATEGORIES = ["Para empezar", "Principales", "Postres", "Bebidas"];
