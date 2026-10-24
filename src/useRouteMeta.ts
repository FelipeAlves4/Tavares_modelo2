import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from './data/projects'

const defaults = { title: 'Tavares Construção — Construindo o que permanece.', description: 'Arquitetura, engenharia e construção com precisão em cada detalhe.', image: '/images/hero.jpg' }
const setMeta = (selector: string, content: string) => document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)

export function useRouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const project = projects.find((item) => pathname === `/projetos/${item.slug}`)
    const values = project ? { title: `${project.name} — Tavares Construção`, description: `${project.description} Projeto ilustrativo em ${project.location}.`, image: project.image } : pathname === '/projetos' ? { title: 'Projetos — Tavares Construção', description: 'Portfólio demonstrativo de residências, espaços corporativos e obras em andamento.', image: '/images/project-aurora.jpg' } : pathname === '/sobre' ? { title: 'Sobre — Tavares Construção', description: 'Posicionamento e filosofia da Tavares Construção.', image: '/images/project-linea.jpg' } : pathname === '/servicos' ? { title: 'Serviços — Tavares Construção', description: 'Construção residencial, corporativa, engenharia e gerenciamento.', image: '/images/construction.jpg' } : pathname === '/contato' ? { title: 'Contato — Tavares Construção', description: 'Inicie uma conversa sobre o seu próximo projeto.', image: '/images/hero.jpg' } : pathname !== '/' ? { title: 'Página não encontrada — Tavares Construção', description: 'A página solicitada não foi encontrada.', image: defaults.image } : defaults
    document.title = values.title
    setMeta('meta[name="description"]', values.description)
    setMeta('meta[property="og:title"]', values.title)
    setMeta('meta[property="og:description"]', values.description)
    setMeta('meta[property="og:image"]', values.image)
    setMeta('meta[name="twitter:title"]', values.title)
    setMeta('meta[name="twitter:description"]', values.description)
    setMeta('meta[name="twitter:image"]', values.image)
  }, [pathname])
}
