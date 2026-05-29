// class contato

let contatos = [];

class contato {
    constructor(nome, email, telefone, tipoContato, mensagem, aceitouTermos, receberNovidades) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
        this.aceitouTermos = aceitouTermos;
        this.receberNovidades = receberNovidades;
    }
}

function Post(form) {

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value,
        document.getElementById("termos").checked,
        document.getElementById("novidades").checked
    );

    contatos.push(data);

    console.log("Dados armazenados:");
    console.log(contatos);

    Enviar();

    form.reset();
    HabilitarEnvio();
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ', os seus dados foram encaminhados com sucesso');
    }

}

function HabilitarEnvio() {
    let termos = document.getElementById("termos");
    let btnEnviar = document.getElementById("btnEnviar");

    if (termos.checked) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}