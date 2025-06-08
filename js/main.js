document.getElementById("whatsapp-btn").addEventListener("click", function () {
      const form = document.getElementById("formCliente");

      const dados = {
        id: Date.now(), 
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cpf: document.getElementById("cpf").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value,
        sexo: document.getElementById("sexo").value
      };

      
      if (!dados.nome || !dados.email || !dados.telefone || !dados.cpf || !dados.sexo) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      
      const json = JSON.stringify(dados, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `cliente_${dados.id}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      setTimeout(() => {
        window.location.href = "https://chat.whatsapp.com/KMMBtNoL6ZNEgoh4JM2eBC"; 
      }, 1500);
    });