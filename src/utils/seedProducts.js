import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"


const productos = [
  {
    id: "Art 001",
    nombre: "Maceta de barro",
    descripcion: "Las macetas de barro se caracterizan por su material poroso y natural, que permite una buena circulación de aire y agua en las raíces de las plantas. Además, son resistentes y duraderas, y su tonalidad terracota le da un toque cálido y acogedor al espacio donde se encuentran.",
    precio: 6000,
    stock: 5,
    imagen: "/img/macetaDeBarro.jpg",
    categoria: "macetas"
  },
  {
    id: "Art 002",
    nombre: "Maceta de plastico",
    descripcion: "Las macetas de plástico son una excelente elección para cultivar plantas en interiores y exteriores debido a su ligereza, durabilidad y versatilidad. Son ideales para darle un toque estético a tus espacios, ya que vienen en una amplia variedad de colores y diseños para combinar con la decoración de tu hogar o jardín. ¡Elige la que mejor se adapte a tus necesidades y disfruta de un cultivo exitoso!",
    precio: 3000,
    stock: 10,
    imagen: "/img/macetaPlastico.jpeg",
    categoria: "macetas"
  },
  {
    id: "Art 003",
    nombre: "Maceta de madera",
    descripcion: "A diferencia de las macetas de plástico o metal, las de madera tienen excelentes propiedades de aislamiento térmico. Esto significa que ayudan a proteger las raíces de las plantas de cambios bruscos de temperatura, manteniéndolas más frescas en verano y más cálidas en invierno. Este factor es especialmente importante si vives en un lugar con climas extremos.",
    precio: 5000,
    stock: 7,
    imagen: "/img/macetaMadera.jpg",
    categoria: "macetas"
  },
  {
    id: "Art 004",
    nombre: "Helecho",
    descripcion: "El helecho espada, cuyo nombre científico es Nephrolepis exaltata, es una planta que alcanza una altura de 40-45 centímetros de altura. Sus hojas son de color verde, y muy, muy numerosas. Se cultiva mucho en interiores, aunque también queda genial en un lugar protegido del jardín. Necesita sombra, y un clima suave para vivir. En una zona resguardada, bajo techo y/o rodeado de plantas, puede resistir el frío y las heladas débiles de hasta los -2ºC.",
    precio: 4000,
    stock: 15,
    imagen: "/img/helecho.jpg",
    categoria: "plantas para exterior"
  },
  {
    id: "Art 005",
    nombre: "Hortensia",
    descripcion: "Las hortensias son arbustos de flores vistosas que provienen de Asia y América y se adaptan a climas templados y húmedos. Sus flores pueden ser de varios colores, desde el blanco al azul, pasando por el rosa y el morado, según la acidez del suelo y el aluminio que contenga. La poda de las hortensias se realiza en invierno o a principios de primavera, eliminando las ramas secas, débiles o dañadas y las flores marchitas.",
    precio: 3500,
    stock: 6,
    imagen: "/img/hortensia.jpg",
    categoria: "plantas para exterior"
  },
  {
    id: "Art 006",
    nombre: "Planta de Jade",
    descripcion: "La planta de jade es una de las más utilizadas en el mundo de la decoración por varios motivos. El primero, porque es una planta apta para principiantes y muy (muy) duradera. Y el segundo, y quizás el más relevante, por ser conocida como la 'planta del dinero', que simboliza la abundancia y prosperidad en la cultura china, y en algunas prácticas del Feng Shui.",
    precio: 4000,
    stock: 5,
    imagen: "/img/plantaJade.jpg",
    categoria: "plantas para exterior"
  },
  {
    id: "Art 007",
    nombre: "Potus",
    descripcion: "El potus o poto es una planta ampliamente extendida por los hogares de todo el mundo. Las claves de su éxito radican en lo poco exigente que es con sus cuidados, siendo una planta ideal para cualquier aficionado a la jardinería o para aquellos que buscan iniciarse con algo sencillo",
    precio: 3000,
    stock: 8,
    imagen: "/img/potus.jpg",
    categoria: "plantas para interior"
  },
  {
    id: "Art 008",
    nombre: "Ficus Lyrata",
    descripcion: "El Ficus lyrata, también llamado Ficus pandurata, ficus lira o higuera de hojas de violín, entre otros, es una planta única en su aspecto, sobre todo cuando se cultiva en interior. Y es que, aunque en exterior puede alcanzar alturas de hasta 20 metros, incluso en maceta su porte es marcadamente arbóreo, siendo posible tener dentro de casa una planta que prácticamente parece un árbol.",
    precio: 6000,
    stock: 11,
    imagen: "/img/ficus.jpg",
    categoria: "plantas para interior"
  },
  {
    id: "Art 009",
    nombre: "Monstera",
    descripcion: "La Monstera deliciosa, también llamada costilla de Adán, cerimán o planta esqueleto, es una especie del género Filodendro muy popular en decoración de interiores gracias a sus bonitas y grandes hojas, que parecen simular un costillar. El fruto de la planta costilla de Adán puede consumirse aproximadamente tras un año de maduración, siendo de forma alargada y considerable tamaño, aunque es muy importante asegurarse de que está maduro al 100%, o puede ser perjudicial y dañino.",
    precio: 5000,
    stock: 12,
    imagen: "/img/monstera.jpg",
    categoria: "plantas para interior"
  }
]

const seedProducts = () => {
  const productsRef = collection(db, "productos")
  productos.map(({ id, ...dataProduct }) => {
    addDoc(productsRef, dataProduct)
  })

  console.log("productos sibidos")
  return
}
seedProducts()