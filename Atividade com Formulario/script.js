function validacao(){

    var erro = false

    if(document.formCriarConta.username.value=="" || document.formCriarConta.username.value.length < 8){
        alert("Por Favor Insira um Nome de Usuario com mais de 8 caracteres!!");
        document.formCriarConta.username.focus();
        erro = true;
        return false;
    }

    if(document.formCriarConta.senha.value=="" || document.formCriarConta.senha.value.length < 6){
        alert("Por Favor Digite uma Senha mais forte!!");
        document.formCriarConta.senha.focus();
        erro = true;
        return false;
    }

    if(document.formCriarConta.confsenha.value!= document.formCriarConta.senha.value){
        alert("As Senhas Não São Iguais! Tente Novamente.");
        document.formCriarConta.confsenha.focus();
        erro = true;
        return false;
    }
    
    alert("Novo Usuário Cadastrado!");
    return true;

}