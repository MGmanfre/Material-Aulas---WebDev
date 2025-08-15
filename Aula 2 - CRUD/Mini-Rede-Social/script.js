// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        image: "https://placedog.net/150?random=3",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function() {
    displayPosts();
    document.querySelector("#postForm").addEventListener("submit", addPost);
};

// CRUD - Create, Read, Update, Delete
// Create
function addPost(e) {
    e.preventDefault(); // Evita o reset do formulário
    const text = document.querySelector("#postText").value;
    const category = document.querySelector("#postCategory").value;
    const image = document.querySelector("#postImage").value;

    const newPost = {
        text: text,
        category: category,
        image: image,
        date: new Date().toLocaleString("pt-BR")
    }

    posts.unshift(newPost); // Adiciona o novo post no início do array
    displayPosts(); // Atualiza a exibição dos posts
}
// Read
function displayPosts() {
    const listaPosts = document.querySelector("#postList");// Seleciona o elemento onde os posts serão exibidos
    listaPosts.innerHTML = ""; // Limpa a lista antes de exibir os posts
    posts.forEach((pegaItem) =>{
        const cardPost = document.createElement("div");
        cardPost.classList.add("cardPost");
        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            <img src="${pegaItem.image}"/>
            <p><strong>Categoria:</strong> ${pegaItem.category}</p>
            <p><strong>Data e Hora:</strong> ${pegaItem.date}</p>
            <div>
                <button><img id="symbols" src="./editSymbol.png"/> Editar</button>
                <button><img id="symbols" src="./deleteSymbol.png"/> Deletar</button>
            </div>`;// Cria o HTML do post
        listaPosts.append(cardPost);// Adiciona o post à lista
    })
}
// Update
function editPost() {}
// Delete
function deletePost() {}


// Exemplo de objeto
// const pessoa = {
//     nome: "Miguel",
//     idade: 18,
//     tags: ["programador", "gamer", "estudante"],
//     isAdmin: true,
// }

// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.tags[0]);
// console.log(pessoa.isAdmin);
// console.log(pessoa["idade"]);

