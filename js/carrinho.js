const carrinho = [];
const carrinhoCount = document.getElementById("carrinho-count");

document.querySelectorAll(".carrinho").forEach(botao => {
botao.addEventListener("click", () => {
    if (carrinho.length >= 3) {
      alert("Você só pode adicionar até 3 itens ao carrinho.");
      return;
    }
    
    const nome = botao.getAttribute("data-nome");
    carrinho.push(nome);
    carrinhoCount.textContent = carrinho.length;
    alert(`${nome} adicionado ao carrinho!`);
    });
});

document.getElementById("carrinho-icon").addEventListener("click", () => {
    if (carrinho.length === 0) {
      alert("Carrinho vazio.");
    } else {
      alert("Itens no carrinho:\\n" + carrinho.join("\\n"));
    }
});
