import forms, { fields, widgets } from 'forms'
import { defaultEmpty } from '../util/forms'
import layout from './_layout'

export default (accessKeys) => {
  const loginForm = forms.create({
    name: fields.string({ required: true }),
    url: fields.string({ required: true, label: 'Repository URL' }),
    accessKeyId: fields.number({
      choices: defaultEmpty(accessKeys),
      widget: widgets.select(),
      label: 'SSH Key for Repository Access'
    })
  })

  layout(loginForm)

  return loginForm
}
