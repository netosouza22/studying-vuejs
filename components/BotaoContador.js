const BotaoContador = {
    data() {
        return {
            count: 0,
        }
    },
    template: `<button @click="count++"> Clicked: {{count}} </button>`
}

export default BotaoContador;