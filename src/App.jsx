import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'

function App() {

  const livros = [
    { 
      id: 1,
      favorito: false,
      nomeDoLivro: "A culpa é das estrelas",
      nomeDoAutor: "John Green",
      capaDoLivro: "/a_culpa_e_das_estrelas.webp",
      generoDoLivro: "Romance"
    },
    {     
      id: 2,
      favorito: false,
      nomeDoLivro: "Como eu era antes de você",
      nomeDoAutor: "Jojo Moyes",
      capaDoLivro: "/como_eu_era_antes_de_voce.webp",
      generoDoLivro: "Romance"   
    },
    {
      id: 3,
      favorito: false,
      nomeDoLivro: "Continência ao amor",
      nomeDoAutor: "Tess Wakefield",
      capaDoLivro: "/continencia_ao_amor.webp",
      generoDoLivro: "Romance"
    },
    {
      id: 4,
      favorito: false,
      nomeDoLivro: "É assim que acaba",
      nomeDoAutor: "Coleen Hoover",
      capaDoLivro: "/e_assim_que_acaba.webp",
      generoDoLivro: "Romance"
    },
    {
      id: 5,
      nomeDoLivro: "Cadê você Bernadette?",
      nomeDoAutor: "Maria Semple",
      capaDoLivro: "/cade_voce_bernadette.jpeg",
      generoDoLivro: "Comédia"
    },
    {
      id: 6,
      favorito: false,
      nomeDoLivro: "A divina comédia",
      nomeDoAutor: "Dante Alighiere",
      capaDoLivro: "/a_divina_comedia.jpeg",
      generoDoLivro: "Comédia"
    },
    {
      id: 7,
      favorito: false,
      nomeDoLivro: "Melhor do que nos filmes",
      nomeDoAutor: "Lynn Painter",
      capaDoLivro: "/melhor_do_que_nos_filmes.png",
      generoDoLivro: "Comédia"
    },
    {
      id: 8,
      favorito: false,
      nomeDoLivro: "Minha vida não é uma comédia romântica",
      nomeDoAutor: "Lola Salgado",
      capaDoLivro: "/minha_vida_nao_e_uma_comedia_romantica.jpeg",
      generoDoLivro: "Comédia"
    },
    {
      id: 9,
      favorito: false,
      nomeDoLivro: "FeiticeiroTerramar",
      nomeDoAutor: "Ursula K. Leguin",
      capaDoLivro: "/feiticeiro_terramar.jpeg",
      generoDoLivro: "Aventura" 
    },
    {
      id: 10,
      favorito: false,
      nomeDoLivro: "O aprendiz",
      nomeDoAutor: "Taran Matharu",
      capaDoLivro: "/o_aprendiz.jpeg",
      generoDoLivro: "Aventura" 
    },
    {
      id: 11,
      favorito: false,
      nomeDoLivro: "O nome do vento",
      nomeDoAutor: "Patrick Rotbfuss",
      capaDoLivro: "/o_nome_do_vento.jpeg",
      generoDoLivro: "Aventura" 
    },
    {
      id: 12,
      favorito: false,
      nomeDoLivro: "Um pouco de aventura",
      nomeDoAutor: "Christina Lauren",
      capaDoLivro: "/um_pouco_de_aventura.jpeg",
      generoDoLivro: "Aventura" 
    },
    {
      id: 13,
      favorito: false,
      nomeDoLivro: "O paciente",
      nomeDoAutor: "Jasper Dewitt",
      capaDoLivro: "/o_paciente.jpeg",
      generoDoLivro: "Terror" 
    },
    {
      id: 14,
      favorito: false,
      nomeDoLivro: "O vilarejo",
      nomeDoAutor: "Raphael Montes",
      capaDoLivro: "/o_vilarejo.jpeg",
      generoDoLivro: "Terror" 
    },
    {
      id: 15,
      favorito: false,
      nomeDoLivro: "O iluminado",
      nomeDoAutor: "Stephen King",
      capaDoLivro: "/o_iluminado.jpeg",
      generoDoLivro: "Terror" 
    },
    {
      id: 16,
      favorito: false,
      nomeDoLivro: "Amigo imaginário",
      nomeDoAutor: "Stephen Chbosky",
      capaDoLivro: "/amigo_imaginario.jpeg",
      generoDoLivro: "Terror" 
    },
    {
      id: 17,
      favorito: false,
      nomeDoLivro: "Contos de suspense e terror",
      nomeDoAutor: "Edgar Allan Poe",
      capaDoLivro: "/contos_de_suspense_e_terror.jpeg",
      generoDoLivro: "Suspense" 
    },
    {
      id: 18,
      favorito: false,
      nomeDoLivro: "Jantar secreto",
      nomeDoAutor: "Raphael Montes",
      capaDoLivro: "/jantar_secreto.jpeg",
      generoDoLivro: "Suspense" 
    },
    {
      id: 19,
      favorito: false,
      nomeDoLivro: "A empregada",
      nomeDoAutor: "Freida McFadden",
      capaDoLivro: "/a_empregada.jpeg",
      generoDoLivro: "Suspense" 
    },
    {
      id: 20,
      favorito: false,
      nomeDoLivro: "Oito assassinatos perfeitos",
      nomeDoAutor: "Peter Swanson",
      capaDoLivro: "/oito_assassinatos_perfeitos.jpeg",
      generoDoLivro: "Suspense" 
    },
    {
      id: 21,
      favorito: false,
      nomeDoLivro: "Cortes de espinhos e rosas",
      nomeDoAutor: "Sarah J. Maas",
      capaDoLivro: "/corte_de_espinhos_e_rosas.jpeg",
      generoDoLivro: "Ficção" 
    },
    {
      id: 22,
      favorito: false,
      nomeDoLivro: "A máquina do tempo",
      nomeDoAutor: "H. G. Wells",
      capaDoLivro: "/a_maquina_do_tempo.jpeg",
      generoDoLivro: "Ficção" 
    },
    {
      id: 23,
      favorito: false,
      nomeDoLivro: "Escrevendo ficção científica e fantasia",
      nomeDoAutor: "Eldes Saullo",
      capaDoLivro: "/escrevendo_ficcao_cientifica_e_fantasia.jpeg",
      generoDoLivro: "Ficção" 
    },
    {
      id: 24,
      favorito: false,
      nomeDoLivro: "A odisséia de Papanicolau",
      nomeDoAutor: "Manoel Luiz Varela",
      capaDoLivro: "/a_odisseia_de_papanicolau.jpeg",
      generoDoLivro: "Ficção" 
    }
  ]
 

  return (
    <>
      <Header/>
      <section className="secao_livros">
        {livros.map((livro) => (
          <Card capaDoLivro={livro.capaDoLivro} nomeDoLivro={livro.nomeDoLivro} nomeDoAutor={livro.nomeDoAutor} generoDoLivro={livro.generoDoLivro}/>
        ))}
      </section>
      <Form/>
      <Footer/>
      
     
    </>
  )
}

export default App
