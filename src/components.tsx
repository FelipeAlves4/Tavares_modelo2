import { FormEvent, ReactNode, useId, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'

type RevealProps = { children: ReactNode; className?: string }
type ImageRevealProps = { src: string; alt: string; className?: string; width?: number; height?: number; priority?: boolean }

export function Reveal({ children, className = '' }: RevealProps) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .72, ease: [0.2, .8, .2, 1] }}>{children}</motion.div>
}

export function ImageReveal({ src, alt, className = '', width = 1600, height = 1100, priority = false }: ImageRevealProps) {
  const reduce = useReducedMotion()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapperRef, { once: true, amount: 0.08 })
  const [loaded, setLoaded] = useState(false)
  const revealed = reduce || inView || loaded
  return <div ref={wrapperRef} className={`image-reveal ${className}`}><motion.div className="image-reveal-content" initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }} animate={revealed ? { clipPath: 'inset(0 0 0% 0)', opacity: 1 } : undefined} transition={{ duration: reduce ? 0 : 1, ease: [0.76, 0, .24, 1] }}><img src={src} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} onLoad={() => setLoaded(true)} /></motion.div></div>
}

export function Brand({ inverse = false }: { inverse?: boolean }) {
  const source = inverse ? '/images/tavares-logo-dark.png' : '/images/tavares-logo-light.png'
  return <Link className={`brand ${inverse ? 'brand-inverse' : ''}`} to="/" aria-label="Tavares Construção — página inicial"><img src={source} width="260" height="260" alt="Tavares — Construindo o que permanece." /></Link>
}

const nav = [['/projetos', 'Projetos'], ['/sobre', 'Sobre'], ['/servicos', 'Serviços'], ['/contato', 'Contato']] as const

export function Header({ inverse = false }: { inverse?: boolean }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  return <header className={`header ${inverse ? 'inverse' : ''}`}><Brand inverse={inverse}/><nav className="desktop-nav" aria-label="Navegação principal">{nav.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav><button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X/> : <Menu/>}</button><AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" initial={reduce ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -12 }} aria-label="Navegação móvel">{nav.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}</motion.nav>}</AnimatePresence></header>
}

export function ArrowLink({ to, children, dark = false }: { to: string; children: ReactNode; dark?: boolean }) {
  return <Link className={`arrow-link ${dark ? 'dark' : ''}`} to={to}>{children}<ArrowUpRight size={18}/></Link>
}

export function Footer() {
  return <footer><div><Brand inverse/><p>Construindo o que permanece.</p></div><div className="footer-links">{nav.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</div><small>Projeto demonstrativo — 2026. Imagens ilustrativas.</small></footer>
}

type FormValues = { name: string; email: string; message: string }
const emptyValues: FormValues = { name: '', email: '', message: '' }

export function ContactForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [complete, setComplete] = useState(false)
  const messageId = useId()
  const update = (field: keyof FormValues, value: string) => { setValues((current) => ({ ...current, [field]: value })); setErrors((current) => ({ ...current, [field]: undefined })); setComplete(false) }
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: Partial<FormValues> = {}
    if (values.name.trim().length < 2) next.name = 'Informe um nome com ao menos dois caracteres.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Informe um e-mail válido.'
    if (values.message.trim().length < 12) next.message = 'Descreva sua ideia em pelo menos 12 caracteres.'
    setErrors(next)
    setComplete(Object.keys(next).length === 0)
  }
  return <form className="contact-form" noValidate onSubmit={submit}><p className="form-disclaimer">Formulário demonstrativo: os dados não são enviados nem armazenados.</p><label htmlFor="contact-name">Nome*<input id="contact-name" name="name" value={values.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${messageId}-name` : undefined} /></label>{errors.name && <p className="form-error" id={`${messageId}-name`}>{errors.name}</p>}<label htmlFor="contact-email">E-mail*<input id="contact-email" name="email" type="email" value={values.email} onChange={(event) => update('email', event.target.value)} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${messageId}-email` : undefined} /></label>{errors.email && <p className="form-error" id={`${messageId}-email`}>{errors.email}</p>}<label htmlFor="contact-message">Como podemos ajudar?*<textarea id="contact-message" name="message" rows={5} value={values.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${messageId}-message` : undefined} /></label>{errors.message && <p className="form-error" id={`${messageId}-message`}>{errors.message}</p>}<button className="button" type="submit">Validar interesse <ArrowUpRight size={18}/></button>{complete && <div className="form-note" role="status">Dados validados apenas neste navegador. Nenhuma mensagem foi enviada, pois este protótipo não possui backend.</div>}</form>
}
