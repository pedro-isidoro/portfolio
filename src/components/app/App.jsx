/* 
* Objetivo - Criar um Portifólio Brabo
?   1 - Criar um React + vite Project; ✅
?   2 - Criar os components do projeto; ✅
!     a - Sobre; ✅
        1a - Foto; ✅
        2a - Texto; ✅
!     b - Habilidades; ✅
        1b - Skills; ✅
        2b - Soft-Skills; ✅
!     c - Estudos e Cursos; ✅
        1c - Formação Acadêmica: facul; ✅
        2c - Cursos: Dev em Dobro; ✅
!     d - Projetos; ✅
        1d - Gifs; ✅
        2d - GitHub Repository; ✅
        3d - Vercel App; ✅
!     e - Contatos; ✅
        1e - Formulário; ✅
        4e - GitHub; ✅
        5e - LinkedIn; ✅
        6e - Instagram; ✅
        7e - WhatsApp; ✅
        2e - E-mail; ✅
        3e - Telefone; ✅
?   3 - Criar os arquivos css para estilização;
!     a - reset.css; ✅
!     b - variables.css; ✅
!     c - style.css; ✅
!     d - Para cada component;✅
!     e - responsive.css;
?   4 - Criar as funcionalidades JS; ✅
!     a - React Routes; ✅
        1a - Navegação Interna entre as páginas do Component; ✅
!     b - Formulário; ✅
        1b - Baixar o React Hook Form; ✅
          - Criar suas funcionalidades; ✅
        2b - Baixar o EmailJS; ✅
          - Criar suas funcionalidades; ✅
?   5 - Criar arquivos .JSON para os cards; ✅
!     a - Skills; ✅
        1a - Criar objetos com as informações das hard-skills; ✅
!     b - HTML E CSS; ✅
        1b - Criar objetos com as informações dos projetos; ✅
!     c - HTML e CSS e JS; ✅
        1b - Criar objetos com as informações dos projetos; ✅
!     d - HTML e CSS e Js e React; ✅
        1b - Criar objetos com as informações dos projetos; ✅
?   6 - Aplicxar no Projeto;
!     a - Refatorar os arquivos dos cards;
*/
// Para reaproveitar a estrutura usamos o outlet
import { Outlet } from 'react-router-dom'
import NavBar from '../nav-bar/Navbar.jsx'

function App() {
  return (
    <>
        <NavBar />
        <main className='flex-column'>
            <Outlet /> {/*Será aqui que mudará na página*/}
        </main>
    </>
  )
}

export default App
