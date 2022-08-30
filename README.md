# 💻 LabEddit : Social bookmarks baseado no reedit

### :dart: Objetivo do projeto
Último projeto individual da trilha front-end do bootcamp de desenvolvimento web fullstack da Labenu.  Seu intuito é rever todos os conteúdos do curso de maneira prática e fazer uma aplicação completa. É importante destacar que esse é uma aplicação do tipo Mobile First.

### :small_blue_diamond: Os requisitos do projeto são:
- **Login** 
    * Ao efetuar o login, o usuário deve ser redirecionado para a página de feed
    * Também devera ter um botão que leva a página de cadastro
    *  O token deve ser salvo no LocalStorage

- **SignUp**
    * Após o signup, o usuário deverá ser redirecionado para a página de feed
    *  O token deve ser salvo no LocalStorage

- **Feed**
    *  Deve mostrar todos os posts
    *  Deve permitir a criação de um novo post
    *  Só pode ser acessada por usuários logados
    *  Quando o usuário clicar em um post, ele deverá ser redirecionado para a página do respectivo post. 
    * Quando um usuário clicar em votar (positiva ou negativamente), uma requisição deverá ser feita indicando a "direção" do voto. 

- **Post**
    *  Mostra as informações do post que foi clicado
    *  Deve permitir a criação de comentários
    *  Só pode ser acessada por usuários logados
    *  Deve mostrar todos os comentários do post
    *  Cada comentário também deverá ter a lógica dos votos
   

## ⚙️ Funcionalidades
- Navegação entre as páginas utilizando o react-router-dom
- Autenticação e Proteção das páginas privadas
- Usuários não logados são redirecionados para a página de login
- Pessoas autenticadas (logadas) conseguem acessar as páginas de feed e post
- Loadings nas telas que fazem as requisições
- Formulários com validações

- A lógica dos votos nos post e comentários
-  Realizar a votação ou a criação de um novo post ou comentário a lista com todos são atualizadas
-  Paginação no feed e nos comentários
- Botão de logout
- Responsividade

## :books: Bibliotecas utilizadas
- [styled-components](https://styled-components.com/)
- [axios](https://github.com/axios/axios)
- [react-router-dom](https://v5.reactrouter.com/)
- [material ui](https://mui.com/pt/)

## 🔗 Link Surge 
Acesse a página do LabEddit [clicando aqui](https://bewildered-metal.surge.sh)


## 📷 Imagens
#### MOBILE (Usando como modelo o iphone 12 Pro)
<img width="293" alt="Captura de ecrã 2022-08-30, às 11 36 03" src="https://user-images.githubusercontent.com/46450381/187416879-e908c904-824d-44bc-bf07-407ca25ee083.png"><img width="293" alt="Captura de ecrã 2022-08-30, às 11 36 16" src="https://user-images.githubusercontent.com/46450381/187416901-95364106-5736-4ac5-8498-8b5a8de1a60b.png"><img width="288" alt="Captura de ecrã 2022-08-30, às 11 37 34" src="https://user-images.githubusercontent.com/46450381/187417024-64304f0b-e180-4538-b81a-728a0771dbaf.png"><img width="293" alt="Captura de ecrã 2022-08-30, às 11 37 49" src="https://user-images.githubusercontent.com/46450381/187417201-dd50a16b-9a37-4233-a899-2575bae2c0cf.png">

#### DESKTOP

<img width="1440" alt="Captura de ecrã 2022-08-30, às 11 40 47" src="https://user-images.githubusercontent.com/46450381/187417311-a2648d2b-dd62-4b65-be1f-035725561b9e.png">
<img width="1440" alt="Captura de ecrã 2022-08-30, às 11 40 59" src="https://user-images.githubusercontent.com/46450381/187417328-e74e6b93-0cd2-4f9e-9787-052d3623102f.png">
<img width="1440" alt="Captura de ecrã 2022-08-30, às 11 41 25" src="https://user-images.githubusercontent.com/46450381/187417357-183e3474-ed67-46b4-b394-f2f90740fad9.png">
<img width="1440" alt="Captura de ecrã 2022-08-30, às 11 41 36" src="https://user-images.githubusercontent.com/46450381/187417374-60aa03d7-7087-4c74-aa57-0663b05d5def.png">


