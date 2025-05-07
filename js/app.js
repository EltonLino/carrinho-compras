function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produtoSelecionado.split('-')[0];
    let precoProduto = produtoSelecionado.split('R$')[1];
    let carrinho = document.getElementById('lista-produtos');
    let subtotal = quantidade * precoProduto;
    if (quantidade != "") {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span>
        </section>`;
        valorTotal = valorTotal + subtotal;
        let valorTotalCarrinho = document.getElementById('valor-total');
        valorTotalCarrinho.textContent = `R$ ${valorTotal}`;
        document.getElementById('quantidade').value = '<input class="quantidade-input" id="quantidade" type="number" placeholder="100">';
    } else {
        alert('Defina a quantidade deste item');
    }
}

function limpar() {
    document.getElementById('quantidade').value = '<input class="quantidade-input" id="quantidade" type="number" placeholder="100">'
    document.getElementById('valor-total').textContent = 'R$ 0'
    document.getElementById('lista-produtos').innerHTML = ''
}

let valorTotal = 0;
limpar();

