/* LUMEN DENTAL — datos de demostración compartidos por index.html y agendar.html.
   Clínica ficticia. Valores referenciales en CLP. */
const LD = {
  whatsapp: "56952262331",
  address: "Providencia, Santiago (dirección de ejemplo)",
  hours: [["Lunes a viernes", "9:00 – 20:00"], ["Sábado", "9:00 – 14:00"], ["Domingo", "Cerrado"]]
};
const LDI = "../../assets/img/clinica-dental/";

const LD_TREATMENTS = [
  { id: "evaluacion", name: "Evaluación y diagnóstico", short: "Revisión completa, radiografías digitales y plan de tratamiento.", price: 0, priceLabel: "Sin costo", duration: "40 min", img: "consulta.jpg", spec: "general",
    includes: ["Examen clínico completo", "Radiografías digitales", "Plan de tratamiento por escrito", "Presupuesto detallado"] },
  { id: "limpieza", name: "Limpieza dental", short: "Destartraje y pulido para encías sanas y sin sarro.", price: 35000, duration: "45 min", img: "limpieza.jpg", spec: "general",
    includes: ["Destartraje con ultrasonido", "Pulido coronario", "Aplicación de flúor", "Instrucciones de higiene"] },
  { id: "ortodoncia", name: "Ortodoncia con brackets", short: "Brackets metálicos o estéticos para alinear tu sonrisa.", price: 890000, duration: "12 a 24 meses", img: "ortodoncia.jpg", spec: "ortodoncia",
    includes: ["Estudio de ortodoncia", "Instalación de brackets", "Controles mensuales", "Retenedores al finalizar"] },
  { id: "alineadores", name: "Alineadores invisibles", short: "Ortodoncia transparente y removible, casi imperceptible.", price: 1890000, duration: "6 a 18 meses", img: "alineadores.jpg", spec: "ortodoncia",
    includes: ["Escaneo digital 3D", "Simulación de tu nueva sonrisa", "Set completo de alineadores", "Controles cada 6 semanas"] },
  { id: "implantes", name: "Implantes dentales", short: "Reemplaza dientes perdidos con resultados naturales y duraderos.", price: 690000, duration: "3 a 6 meses", img: "implantes.jpg", spec: "implantologia",
    includes: ["Evaluación con escáner", "Implante de titanio", "Corona de porcelana", "Controles de oseointegración"] },
  { id: "blanqueamiento", name: "Blanqueamiento", short: "Hasta varios tonos más claros en una sesión clínica.", price: 149000, duration: "90 min", img: "blanqueamiento.jpg", spec: "estetica",
    includes: ["Limpieza previa", "Blanqueamiento en clínica", "Kit de mantención en casa", "Control a los 15 días"] },
  { id: "estetica", name: "Carillas y estética", short: "Carillas de resina o porcelana para una sonrisa armónica.", price: 180000, priceUnit: "por pieza", duration: "2 a 3 sesiones", img: "estetica.jpg", spec: "estetica",
    includes: ["Diseño digital de sonrisa", "Prueba estética previa", "Carillas de resina o porcelana", "Ajustes y pulido"] },
  { id: "odontopediatria", name: "Odontopediatría", short: "Atención amable para niños desde su primer diente.", price: 25000, duration: "30 min", img: "odontopediatria.jpg", spec: "pediatria",
    includes: ["Control y diagnóstico", "Sellantes y flúor", "Educación en higiene", "Ambiente pensado para niños"] },
  { id: "endodoncia", name: "Endodoncia", short: "Tratamiento de conducto para salvar tu diente sin dolor.", price: 190000, duration: "1 a 2 sesiones", img: "endodoncia.jpg", spec: "general",
    includes: ["Anestesia local", "Tratamiento de conductos", "Radiografías de control", "Restauración provisoria"] }
];

const LD_TEAM = [
  { id: "carolina", name: "Dra. Carolina Méndez", role: "Directora clínica · Ortodoncia", spec: "ortodoncia", years: 14, img: "dra-carolina.jpg",
    bio: "Especialista en ortodoncia y alineadores invisibles. Lidera el equipo y define los protocolos de atención." },
  { id: "andres", name: "Dr. Andrés Rojas", role: "Implantología y rehabilitación", spec: "implantologia", years: 18, img: "dr-andres.jpg",
    bio: "Más de 1.500 implantes realizados. Planifica cada caso con escáner digital para cirugías más precisas." },
  { id: "javiera", name: "Dra. Javiera Soto", role: "Odontopediatría", spec: "pediatria", years: 9, img: "dra-javiera.jpg",
    bio: "Acompaña a niños y familias con paciencia y juego, para que ir al dentista sea una buena experiencia." },
  { id: "matias", name: "Dr. Matías Fuentes", role: "Estética dental", spec: "estetica", years: 8, img: "dr-matias.jpg",
    bio: "Diseño digital de sonrisa, carillas y blanqueamiento con resultados naturales." },
  { id: "valentina", name: "Dra. Valentina Pérez", role: "Odontología general y endodoncia", spec: "general", years: 11, img: "dra-valentina.jpg",
    bio: "Diagnóstico, limpiezas y tratamientos de conducto. Tu primera consulta suele ser con ella." }
];

/* Horas disponibles de demostración: se generan siempre igual para cada día */
function ldSlots(dateStr, docId) {
  const d = new Date(dateStr + "T12:00");
  const dow = d.getDay();
  if (dow === 0) return [];
  const end = dow === 6 ? 14 : 20;
  const all = [];
  for (let h = 9; h < end; h++) for (const m of [0, 30]) all.push(`${String(h).padStart(2, "0")}:${m ? "30" : "00"}`);
  let seed = [...(dateStr + docId)].reduce((n, c) => (n * 31 + c.charCodeAt(0)) % 9973, 7);
  return all.filter(() => { seed = (seed * 73 + 41) % 997; return seed % 3 !== 0; });
}
const ldMoney = n => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
const ldISO = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
