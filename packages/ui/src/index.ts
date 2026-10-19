// API pública de @grupo-laplace/ui. Los estilos se importan aparte: '@grupo-laplace/ui/styles.css'.
export { cn } from './lib/cn'
export type { ContentStatus, Course, Teacher, Testimonial } from './types'

export { Logo } from './components/brand/Logo'
export type { LogoLayout, LogoTone } from './components/brand/Logo'
export { BrandPattern, BrandCurve } from './components/brand/Patterns'

export { Button, TextLink } from './components/ui/Button'
export type { ButtonVariant, ButtonSize } from './components/ui/Button'
export {
  Alert,
  Avatar,
  Badge,
  Breadcrumbs,
  Card,
  IconTile,
  SectionHeader,
  Skeleton,
  Spinner,
  StatusTag,
} from './components/ui/Primitives'
export type { AlertTone, BadgeTone } from './components/ui/Primitives'
export {
  AdvantageList,
  BenefitCard,
  CourseCard,
  FaqCard,
  InfoBlock,
  ModalityCard,
  Stat,
  TeacherCard,
  TestimonialCard,
} from './components/ui/Cards'
export { Checkbox, Field, FieldMessage, Input, RadioGroup, Select, Textarea } from './components/ui/Form'
export { Accordion, Modal, Tabs } from './components/ui/Interactive'
