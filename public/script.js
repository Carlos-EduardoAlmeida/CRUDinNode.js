const criarUsuario = ()=>{
    document.body.querySelector('#info').innerHTML = `
    <form action="/enviar" method="post">
        <h1>Crie um novo usuário</h1>
        <p>Primeiro nome: <br><input type="text" name="Fnome" id="Fnome" action="/Post" method="POST" required></p>
        <p>Último nome: <br><input type="text" name="Lnome" id="Lnome" required></p>
        <p>Email: <br><input type="text" name="email" id="email" required></p>
        <p>Senha: <br><input type="password" name="senha" id="senha" required></p>
        <input class="button" type="submit" value="Enviar">
    </form>`
}

const verUsuario = ()=>{
    document.body.querySelector('#info').innerHTML = `
    <form action="/usuarios" method="get">
        <p><h1>Veja todos usuários</h1><input type="submit" class="button" value="Ver"></p>
    </form>`;
}

const modificarUsuario = ()=>{
    document.body.querySelector('#info').innerHTML = `
    <form action="/modificar" method="post">
        <h1>Modifique as informações do usuário</h1>
        <p>Id do usuário(obrigatório): <br><input type="text" name="idusuar" id="idusuar" required></p>
        <p>Primeiro nome: <br><input type="text" name="Fnome" id="Fnome" action="/Post" method="POST" required></p>
        <p>Último nome: <br><input type="text" name="Lnome" id="Lnome" required></p>
        <p>Email: <br><input type="text" name="email" id="email" required></p>
        <p>Senha: <br><input type="password" name="senha" id="senha" required></p>
        <input type="submit" class="button" value="Enviar">
    </form>`
}

const excluirUsuario = ()=>{
    document.body.querySelector('#info').innerHTML = `
    <form action="/excluir" method="post">
        <h1>Insira o "id" do usuário a ser excluído</h1>
        <p>ID do usuário: <br><input type="text" name="idusuar" id="idusuar" action="/excluir" method="post" required></p>
        <input type="submit" class="button" value="Excluir">
    </form>`;  
}
