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
        date: "12/10/2023 12:00:00"
    }
];


// Inicialização
window.onload = function() {
    getPosts();
    displayPosts();

    document.querySelector('#postForm').addEventListener('submit', addPost); 
    document.querySelector('#postList').addEventListener('click', handleClick);
};

// Função para lidar com os cliques nos botões de editar e apagar
function handleClick(e) {
    const action = e.target.dataset.action;
    const index = e.target.dataset.index;
    if (action === 'Editar'){
        editPost(index);
    }
    else if (action === 'Apagar'){
        deletePost(index);
    }

};

// Função para exibir os posts
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((pegaPost, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card-post');
  
            postElement.innerHTML = `
                <p>${pegaPost.text}</p>
                ${pegaPost.image ? `<img src="${pegaPost.image}" alt="Imagem do post" style="max-width:150px;">` : ""}
                <p><em>Categoria: ${pegaPost.category}</em></p>
                <p><em>Data e Hora: ${pegaPost.date}</em></p>
                <button data-action="Editar" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button data-action="Apagar" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                <hr style="margin:30px;">`;
               
            postList.append(postElement);
        });
}

// Função para adicionar um novo post
function addPost(e) {
    e.preventDefault();
    
    const postText = document.getElementById('postText').value;
    const postCategory = document.getElementById('postCategory').value;
    const postImage = document.getElementById('postImage').value
    const postDate = new Date().toLocaleString(); 

    const post = { 
        text: postText, 
        category: postCategory, 
        image: postImage, 
        date: postDate 
    };
    
    posts.unshift(post);
    
    document.querySelector('#postForm').reset();
    setPosts();    
    displayPosts();
}

// Função para editar um post
function editPost(index){
    const novoTexto = prompt("Edite o texto do post:", posts[index].text);
    const novaData = new Date().toLocaleString();
    posts[index].text = novoTexto;
    posts[index].date = `${novaData} [Editado]`;

    displayPosts();
};
// Função para apagar um post
function deletePost(index){
    const confirmar = confirm("Tem certeza que deseja apagar este post?") || alert("Post não apagado.");
    if (confirmar){
        posts.splice(index,1);
        setPosts();
    }
    displayPosts();
};

function setPosts(){
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getPosts(){
    const storedPosts = localStorage.getItem('posts');
    if(storedPosts){
        posts = JSON.parse(storedPosts)
    }

}