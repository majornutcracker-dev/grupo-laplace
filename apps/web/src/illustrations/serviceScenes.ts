import type { Service } from '../data/content'
import { GuidanceScene, RecordedScene, TutoringScene, UniversityScene } from './Scenes'

/** Ilustración que acompaña a cada servicio en cards, pestañas y catálogo. */
export const serviceScenes: Record<Service['id'], typeof TutoringScene> = {
  escolar: TutoringScene,
  universitario: UniversityScene,
  orientacion: GuidanceScene,
  grabados: RecordedScene,
}
