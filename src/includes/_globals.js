import _ from 'lodash'

export default {
  install(app) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      eager: true
    })

    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = _.upperFirst(
        _.camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )
      //   console.log(path, componentName)

      // exprt default
      app.component(`Base${componentName}`, module.default)
    })
  }
}
