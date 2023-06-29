import {useLoaderData} from '@remix-run/react'

import en from './en.js'
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

export function useTranslation() {
  const {locale} = useLoaderData()

  const lowercaseLocale = locale.toLocaleLowerCase()

  switch (lowercaseLocale) {
    case 'au':
      return au
    case 'mx':
      return mx
    case 'sg':
      return sg
    case 'ca':
      return ca
    case 'de':
      return de
    case 'es':
      return es
    case 'fr':
      return fr
    case 'it':
      return it
    case 'jp':
      return jp
    case 'uk':
      return uk
    case 'in':
      return india
    default:
      return en
  }
}
