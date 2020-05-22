const Hello = who => `<h1>Hello ${who}!</h1>`

const App = () => {
    return `
        <div class="app">
            ${Hello('world')}
        </div>
    `
}

const $root = document.getElementById('root')
$root.innerHTML = App()
