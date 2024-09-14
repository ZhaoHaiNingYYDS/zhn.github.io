import copyText from './common/copyText'
import drag from './drag/index'
export default function directive(app) {
  app.directive('copyText', copyText)
  app.directive('drag', drag)
}
