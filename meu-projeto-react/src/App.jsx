
function App() {

  return (
    <div>

      <h1>Olá mundo, react!</h1>
      <MeuComponente />
      <MeuBotao />
    </div>
  )
}
function MeuBotao() {
  return (
    <button>Clique aqui</button>
  )
}

function MeuComponente() {
  return (
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic quidem atque excepturi
      quam magnam optio aperiam reiciendis consectetur doloremque? Rerum aliquam deserunt
      necessitatibus culpa ab quisquam dolorem modi facere!</p>
  )
}

export default App

