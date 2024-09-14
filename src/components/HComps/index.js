const modules = import.meta.glob('./*.vue')
export default {
    install(app) {
        for (const module in modules) {
            let name = module.split('/').pop().split('.')[0]
            app.component(name, defineAsyncComponent(modules[module]))
        }
    }
}
