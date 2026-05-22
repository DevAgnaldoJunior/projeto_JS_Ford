// class contato

let contatos = [];

class contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );

    contatos.push(data);

    console.log("Dados armazenados:");
    console.log(contatos);

    Enviar();

    form.reset();
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ', os seus dados foram encaminhados com sucesso');
    }

}