export type Project = { slug: string; name: string; category: string; location: string; year: string; image: string; description: string; materials: string }

export const projects: Project[] = [
  { slug: 'casa-aurora', name: 'Casa Aurora', category: 'Residencial', location: 'Nova Lima, MG', year: 'Conceito 2026', image: '/images/project-aurora.jpg', description: 'Uma residência demonstrativa onde volumes horizontais, luz natural e paisagismo definem um cotidiano sereno.', materials: 'Pedra natural, madeira e concreto aparente' },
  { slug: 'residencia-brisa', name: 'Residência Brisa', category: 'Residencial', location: 'Campinas, SP', year: 'Conceito 2026', image: '/images/project-brisa.jpg', description: 'Arquitetura de linhas precisas, pensada para aproximar os ambientes internos da paisagem.', materials: 'Travertino, vidro e marcenaria' },
  { slug: 'edificio-linea', name: 'Edifício Linea', category: 'Corporativo', location: 'São Paulo, SP', year: 'Conceito 2026', image: '/images/project-linea.jpg', description: 'Um espaço corporativo demonstrativo que transforma desempenho técnico em presença urbana.', materials: 'Metal, painéis minerais e vegetação' },
  { slug: 'casa-norte', name: 'Casa Norte', category: 'Em andamento', location: 'Goiânia, GO', year: 'Conceito 2026', image: '/images/project-norte.jpg', description: 'Uma obra demonstrativa orientada pelo diálogo entre sombra, ventilação e matéria.', materials: 'Concreto, madeira e esquadrias' },
]
