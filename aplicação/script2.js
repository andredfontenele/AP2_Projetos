window.onload = function () {
  var urlParams = new URLSearchParams(window.location.search)
  var contratante = urlParams.get('contratante')
  var cnpj = urlParams.get('cnpj')
  var cep1 = urlParams.get('cep1')
  var nome = urlParams.get('nome')
  var email = urlParams.get('email')
  var cpf = urlParams.get('cpf')
  var cep2 = urlParams.get('cep2')
  var cidade = urlParams.get('cidade')
  var estado = urlParams.get('estado')
  var profissao = urlParams.get('profissao')
  var motivos = urlParams.get('motivos')
  var declaracao = urlParams.get('declaracao')

  var valoresContainer = document.getElementById('valores-container')
  valoresContainer.innerHTML = `
    <p>CONTRATANTE: ${contratante}</p>
    <p>CNPJ: ${cnpj}</p>
    <p>CEP: ${cep1}</p>
    <p>Nome Completo do Profissional: ${nome}</p>
    <p>Email do Profissional: ${email}</p>
    <p>CPF do Profissional: ${cpf}</p>
    <p>CEP: ${cep2}</p>
    <p>Cidade: ${cidade}</p>
    <p>Estado: ${estado}</p>
    <p>Profissão: ${profissao}</p>
    <p>Descrição dos Motivos de Emissão da ART: ${motivos}</p>
    <p>O profissional declara que está cumprindo as normas específicas da sua profissão.</p>
  `
}
