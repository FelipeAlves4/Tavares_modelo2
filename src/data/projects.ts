export type Project = {
  slug: string
  name: string
  category: 'Residencial' | 'Corporativo' | 'Em andamento'
  location: string
  year: string
  image: string
  gallery: { src: string; alt: string }[]
  description: string
  materials: string
}

const image = (name: string) => `/images/${name}`

export const projects: Project[] = [
  { slug: 'casa-aurora', name: 'Casa Aurora', category: 'Residencial', location: 'Nova Lima, MG', year: 'Conceito 2026', image: image('project-aurora.jpg'), gallery: [{ src: image('project-aurora.jpg'), alt: 'Vista externa da Casa Aurora, projeto ilustrativo' }, { src: image('detail-stone.jpg'), alt: 'Acabamento em pedra da Casa Aurora, projeto ilustrativo' }, { src: image('hero.jpg'), alt: 'Integração entre casa e paisagismo, projeto ilustrativo' }], description: 'Uma residência demonstrativa onde volumes horizontais, luz natural e paisagismo definem um cotidiano sereno.', materials: 'Pedra natural, madeira e concreto aparente' },
  { slug: 'residencia-brisa', name: 'Residência Brisa', category: 'Residencial', location: 'Campinas, SP', year: 'Conceito 2026', image: image('project-brisa.jpg'), gallery: [{ src: image('project-brisa.jpg'), alt: 'Fachada da Residência Brisa, projeto ilustrativo' }, { src: image('hero.jpg'), alt: 'Área externa da Residência Brisa, projeto ilustrativo' }, { src: image('detail-stone.jpg'), alt: 'Textura de material da Residência Brisa, projeto ilustrativo' }], description: 'Arquitetura de linhas precisas, pensada para aproximar os ambientes internos da paisagem.', materials: 'Travertino, vidro e marcenaria' },
  { slug: 'edificio-linea', name: 'Edifício Linea', category: 'Corporativo', location: 'São Paulo, SP', year: 'Conceito 2026', image: image('project-linea.jpg'), gallery: [{ src: image('project-linea.jpg'), alt: 'Perspectiva do Edifício Linea, projeto ilustrativo' }, { src: image('corporate.jpg'), alt: 'Ambiente corporativo do Edifício Linea, projeto ilustrativo' }, { src: image('construction.jpg'), alt: 'Detalhe construtivo do Edifício Linea, projeto ilustrativo' }], description: 'Um espaço corporativo demonstrativo que transforma desempenho técnico em presença urbana.', materials: 'Metal, painéis minerais e vegetação' },
  { slug: 'casa-norte', name: 'Casa Norte', category: 'Em andamento', location: 'Goiânia, GO', year: 'Conceito 2026', image: image('project-norte.jpg'), gallery: [{ src: image('project-norte.jpg'), alt: 'Volume da Casa Norte, projeto ilustrativo' }, { src: image('construction.jpg'), alt: 'Etapa de obra da Casa Norte, projeto ilustrativo' }, { src: image('process.jpg'), alt: 'Acompanhamento técnico da Casa Norte, projeto ilustrativo' }], description: 'Uma obra demonstrativa orientada pelo diálogo entre sombra, ventilação e matéria.', materials: 'Concreto, madeira e esquadrias' },
  { slug: 'pavilhao-atlas', name: 'Pavilhão Atlas', category: 'Corporativo', location: 'Belo Horizonte, MG', year: 'Conceito 2026', image: image('corporate.jpg'), gallery: [{ src: image('corporate.jpg'), alt: 'Espaço corporativo do Pavilhão Atlas, projeto ilustrativo' }, { src: image('project-linea.jpg'), alt: 'Fachada do Pavilhão Atlas, projeto ilustrativo' }, { src: image('detail-stone.jpg'), alt: 'Materialidade do Pavilhão Atlas, projeto ilustrativo' }], description: 'Um estudo demonstrativo para uma sede corporativa luminosa, flexível e construída para durar.', materials: 'Estrutura metálica, vidro e pedra' },
  { slug: 'casa-vale', name: 'Casa Vale', category: 'Residencial', location: 'Itu, SP', year: 'Conceito 2026', image: image('hero.jpg'), gallery: [{ src: image('hero.jpg'), alt: 'Casa Vale e espelho d’água, projeto ilustrativo' }, { src: image('project-brisa.jpg'), alt: 'Ambiente da Casa Vale, projeto ilustrativo' }, { src: image('process.jpg'), alt: 'Vistoria de obra da Casa Vale, projeto ilustrativo' }], description: 'Uma casa demonstrativa que organiza o programa residencial em torno da luz, da sombra e do jardim.', materials: 'Concreto, pedra e madeira natural' },
]
