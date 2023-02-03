function validateCPF(cpf) {
    
    cpf = cpf.replace(/\D/g, '')
  
    
    if (cpf.length !== 11) {
      return false;
    }
  
    
    if (/([0-9])\1{10}/.test(cpf)) {
      return false;
    }
  
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i)
    }
    let firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i)
    }
    let secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  
    
    return firstDigit === parseInt(cpf.charAt(9)) && secondDigit === parseInt(cpf.charAt(10))
  }
  
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault()
  
    let cpf = document.getElementById("cpf").value
    if (!validateCPF(cpf)) {
      alert("CPF inválido")
      return false
    }
    return true
});
 




document.getElementById('btn-gerar-pdf').addEventListener('click', function () {
    const form = document.getElementById('form')
    const nome = form.elements.nome.value
    const sobrenome = form.elements.sobrenome.value
    const cpf = form.elements.cpf.value
    const email = form.elements.email.value
    const senha = form.elements.senha.value

    if (!nome || !sobrenome || !cpf || !email || !senha) {
        alert('Preencha todos os campos')
        return;
    }

    if(!validateCPF(cpf)) {
        alert('CPF inválido')
        return false
    }
    
    const doc = new jsPDF()

    doc.text('Nome: ' + nome, 10, 10)
    doc.text('Sobrenome: ' + sobrenome, 10, 20)
    doc.text('CPF: ' + cpf, 10, 30)
    doc.text('E-mail: ' + email, 10, 40)
    doc.text('Senha: ' + senha, 10, 50)
    doc.output('dataurlnewwindow')

    
  });