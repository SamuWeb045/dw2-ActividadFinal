//Definimos la constante HEROES como un conjunto de 10 héroes y expórtamos


import { Hero } from './hero';

export const HEROES: Hero[] = [
  {
    imagen: 'assets/fender_70_aniversario.png',
    id: 1, 
    name: 'Fender 70s',
    color: 'Plum',
    descripcion: 'La Fender 70th Anniversary Stratocaster es una guitarra eléctrica con un diseño clásico de Stratocaster y características especiales para conmemorar el septuagésimo aniversario de Fender. Ofrece un tono versátil y un acabado distintivo, como el Plum para el modelo de edición limitada.',
  },
  {
    imagen: 'assets/fender_stratocaster_squier.png',
    id: 2, 
    name: 'Fender Squier',
    color: 'Natural',
    descripcion: 'La Fender Stratocaster Squier es una guitarra eléctrica asequible que ofrece una versión accesible de la legendaria Stratocaster de Fender, manteniendo su forma icónica y gran parte de su versatilidad sonora.',
  },
  {
    imagen: 'assets/g&l_placentia_asat_classic.png',
    id: 3, 
    name: 'G&L Asat Classic ',
    color: 'Butterscotch Blonde',
    descripcion: 'La G&L Placentia ASAT Classic es una guitarra eléctrica de primera calidad con un diseño atemporal, construida con materiales de alta gama y ofrece un sonido versátil y excepcional.',
  },
  {
    imagen: 'assets/g&L_tribute_lrgacy.jpg',
    id: 4, 
    name: 'G&L Tribute Legacy',
    color: 'Sunburst',
    descripcion: 'Esta guitarra presenta un cuerpo de aliso o fresno, dependiendo del acabado, con un mástil de arce atornillado y diapasón de palisandro o arce, según la elección del modelo. Cuenta con tres pastillas de bobina simple G&L Alnico V, que ofrecen un tono clásico y versátil. Además, tiene un puente de trémolo de dos puntos y clavijeros de afinación de alta calidad para una estabilidad y ajuste preciso. La G&L Tribute Legacy es una opción popular para aquellos que buscan una guitarra versátil y de alta calidad a un precio más accesible.',
  },
  {
    imagen: 'assets/Gibson_SG_Standard.png',
    id: 5, 
    name: 'Gibson SG Standard',
    color: 'Black',
    descripcion: 'Esta guitarra presenta un cuerpo de caoba con un mástil de caoba encolado y diapasón de palisandro. Está equipada con dos potentes pastillas humbucker Gibson, que ofrecen un sonido característico y lleno de sustain. Además, cuenta con un puente Tune-O-Matic y clavijeros Grover para una estabilidad y afinación precisa. La Gibson SG Standard es una guitarra icónica conocida por su forma distintiva y tonos de rock clásico, siendo elegida por muchos guitarristas profesionales.',
  },
  {
    imagen: 'assets/gibson-es-335.png',
    id: 6,
    name: 'Gibson ES-335',
    color: 'Blue Burst',
    descripcion: 'La Gibson ES-335 es una guitarra semiacústica que cuenta con una mezcla única de tonos azules y rojos en su acabado. Presenta un cuerpo de arce laminado con un bloque central de madera para mayor sustentación y resistencia al feedback. Su mástil de caoba encolado y diapasón de palisandro ofrecen una excelente jugabilidad. Está equipada con dos pastillas humbucker Gibson, brindando un sonido cálido, rico y versátil. La Gibson ES-335 también cuenta con un puente Tune-O-Matic y clavijeros Grover para una afinación precisa y estabilidad. Es una guitarra reconocida por su belleza estética y su capacidad para abarcar una amplia gama de géneros musicales, desde el blues al rock y más allá.',
  },
  {
    imagen: 'assets/jeff_beck_signature_fender.png',
    id: 7, 
    name: 'Fender Jeff Beck',
    color: 'Olympic White',
    descripcion: 'Esta guitarra eléctrica presenta un cuerpo de aliso sólido con un mástil de arce en forma de "C" y un diapasón de palisandro. Está equipada con tres pastillas de bobina simple Fender Hot Noiseless, que ofrecen un sonido potente y versátil con una menor interferencia de ruido. Además, cuenta con un trémolo sincronizado de dos puntos y clavijeros de afinación estilo vintage. La Fender Jeff Beck Signature Stratocaster es una guitarra diseñada en colaboración con el legendario guitarrista Jeff Beck, y se destaca por su tono distintivo y su capacidad para abarcar una amplia gama de estilos musicales.',
  },
  {
    imagen: 'assets/Les_Paul_Standard 50s.png',
    id: 8, 
    name: 'Les Paul Standar 50s',
    color: 'Cherry Sunburst',
    descripcion: 'La Gibson Les Paul Standard 50s Cherry Sunburst es una guitarra eléctrica icónica con cuerpo de caoba, acabado en Cherry Sunburst y pastillas humbucker Gibson Burstbucker.',
  },
  {
    imagen: 'assets/prs_custom_24_eriza_verde.jpg',
    id: 9, 
    name: 'PRS Custom 24',
    color: 'Eriza Verde',
    descripcion: 'La PRS Custom 24 Eriza Verde es una guitarra eléctrica de alta calidad y diseño impresionante. Presenta un cuerpo de caoba con una tapa de arce figurado y un acabado llamativo en Eriza Verde, que combina tonos verdes y negros en un patrón distintivo. Su mástil encolado de arce y palisandro proporciona una gran comodidad y facilidad de ejecución. Está equipada con dos pastillas humbucker PRS 85/15, que ofrecen un sonido potente y versátil con una excelente claridad y sustain.',
  },
  {
    imagen: 'assets/prs_silver_sky.png',
    id: 10, 
    name: 'PRS Silver Sky',
    color: 'Verde',
    descripcion: 'La PRS Silver Sky es una guitarra eléctrica diseñada en colaboración con John Mayer. Este modelo particular es de color verde, conocido como "Green" en la línea de colores de la Silver Sky. La guitarra presenta una forma clásica de tipo "Stratocaster" con cuerpo de aliso y un mástil de arce en forma de "C". El diapasón de palisandro ofrece una sensación suave al tocar. Está equipada con tres pastillas single-coil PRS 635JM que ofrecen un tono versátil y equilibrado con claridad y calidez. La PRS Silver Sky en verde es una opción popular para aquellos que buscan una guitarra elegante, con un tono clásico y contemporáneo.',
  }
];
