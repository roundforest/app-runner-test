import {useLoaderData} from '@remix-run/react'

import us from './us.js'
import au from './au.js'
import mx from './mx.js'
import sg from './sg.js'
import ca from './ca.js'
import de from './de.js'
import es from './es.js'
import fr from './fr.js'
import it from './it.js'
import jp from './jp.js'
import uk from './uk.js'
import india from './in.js'
import type {LoaderDataProps} from '~/models/index.js'

type TranslationByLocale = Record<string, typeof us>

export const mapTranslationByLocale: TranslationByLocale = {
  us: us,
  au: au,
  mx: mx,
  sg: sg,
  ca: ca,
  de: de,
  es: es,
  fr: fr,
  it: it,
  jp: jp,
  uk: uk,
  in: india,
}

export function useTranslation() {
  const {locale} = useLoaderData<LoaderDataProps>()

  const lowercaseLocale = locale.toLocaleLowerCase()

  return mapTranslationByLocale[lowercaseLocale as keyof TranslationByLocale]
}
