# 💻 LabEddit : Social bookmarks baseado no reedit

### :dart: Objetivo do projeto
Último projeto individual da trilha front-end do bootcamp de desenvolvimento web fullstack da Labenu.  Seu intuito é rever todos os conteúdos do curso de maneira prática e fazer uma aplicação completa. É importante destacar que esse é uma aplicação do tipo Mobile First.

### :small_blue_diamond: Os requisitos do projeto são:
- **Login** 
    * Ao efetuar o login, o usuário deve ser redirecionado para a página de feed
    * Também devera ter um botão que leva a página de cadastro
    *  O token deve ser salvo no LocalStorage

- **Cadastro**
    * Após cadastrar, o usuário deverá ser redirecionado para a página de feed
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

![Screenshot from 2022-08-23 15-41-07](https://user-images.githubusercontent.com/80003041/186209078-56e0436b-da5d-44cf-b06e-4e9a80639561.png)
![Screenshot from 2022-08-23 15-41-16](https://user-images.githubusercontent.com/80003041/186209083-cc653d0f-7018-494b-8a0a-5a181365cc13.png)
![Screenshot from 2022-08-23 15-41-25](https://user-images.githubusercontent.com/80003041/186209088-1408aeb7-f21c-4550-976f-fe158b83b166.png)
![Screenshot from 2022-08-23 15-41-31](https://user-images.githubusercontent.com/80003041/186209091-38e55f22-b0d4-46ce-a475-bf4fe2f44b0f.png)
![Screenshot from 2022-08-23 15-41-45](https://user-images.githubusercontent.com/80003041/186209093-064a4dcf-1238-4702-9148-c2f95f452fba.png)
![Screenshot from 2022-08-23 15-40-55](https://user-images.githubusercontent.com/80003041/186209141-9464bab1-f274-485c-9170-ed0dd63d7ede.png)


#### DESKTOP
![Screenshot from 2022-08-23 15-29-37](https://user-images.githubusercontent.com/80003041/186209000-fedef049-fff5-4512-bf0c-d31ec0089a65.png)
![Screenshot from 2022-08-23 15-30-07](https://user-images.githubusercontent.com/80003041/186209011-31bcc496-6fa0-494c-9bbd-e01f9e305a6a.png)
![Screenshot from 2022-08-23 15-33-05](https://user-images.githubusercontent.com/80003041/186209014-1f89eeb7-a4e4-445d-9c43-6aec6df2de41.png)
![Screenshot from 2022-08-23 15-33-13](https://user-images.githubusercontent.com/80003041/186209019-fc52d431-f607-46da-9455-29347dbe4b97.png)
![Screenshot from 2022-08-23 15-40-45](https://user-images.githubusercontent.com/80003041/186209021-7b5f41cd-7ca9-4d8c-a8da-efa7a58a4bc1.png)

