import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss"
library.add(fas)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  options: {
    storySort: {
      order: ['Welcome', 'Button 组件', 'Alert 组件', 'Menu 组件', 'Tabs 组件', 'Icon 组件', 'Input 组件', 'AutoComplete 组件', 'Select 组件', 'Upload 组件'], 
    },
  },
}