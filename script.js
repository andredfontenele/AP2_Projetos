window.onload = function () {
  var form = document.getElementById('form')
  form.onsubmit = function (event) {
    event.preventDefault() // Impede o envio do formulário

    var contratante = document.getElementById('contratante').value
    var cnpj = document.getElementById('cnpj').value
    var cep1 = document.getElementById('cep1').value
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var cpf = document.getElementById('cpf').value
    var cep2 = document.getElementById('cep2').value
    var cidade = document.getElementById('cidade').value
    var estado = document.getElementById('estado').value
    var profissao = document.getElementById('profissao').value
    var motivos = document.getElementById('motivos').value
    var declaracao = document.getElementById('declaracao').checked

    var nextPage =
      'pagina2.html?' +
      'contratante=' +
      encodeURIComponent(contratante) +
      '&cnpj=' +
      encodeURIComponent(cnpj) +
      '&cep1=' +
      encodeURIComponent(cep1) +
      '&nome=' +
      encodeURIComponent(nome) +
      '&email=' +
      encodeURIComponent(email) +
      '&cpf=' +
      encodeURIComponent(cpf) +
      '&cep2=' +
      encodeURIComponent(cep2) +
      '&cidade=' +
      encodeURIComponent(cidade) +
      '&estado=' +
      encodeURIComponent(estado) +
      '&profissao=' +
      encodeURIComponent(profissao) +
      '&motivos=' +
      encodeURIComponent(motivos) +
      '&declaracao=' +
      encodeURIComponent(declaracao)

    window.location.href = nextPage // Redireciona para a página 2
  }
}
