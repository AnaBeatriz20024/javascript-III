
document.body.innerHTML += '<h1 id="titulo">Loja Virtual</h1>';
const produto = document.createElement('div');
produto.id = 'produto';


const nome = document.createElement('h2');
nome.innerText = 'Camiseta Preta';

const descricao = document.createElement('p');
descricao.innerText = 'Camiseta 100% algodão, confortável e estilosa. Disponível em diversos tamanhos.';

const preco = document.createElement('p');
preco.innerText = 'Preço: R$ 49,90';


const imagem = document.createElement('img');
imagem.src = 'https://via.placeholder.com/150'; 
imagem.alt = 'Camiseta Preta';


produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);
produto.appendChild(imagem);


document.body.appendChild(produto);
