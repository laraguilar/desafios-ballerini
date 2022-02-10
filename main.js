

function cadastrar(){
    usuarios = [];


    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var skills = document.getElementById("skills");
    console.log('chegou');


    if(name.value != "" && age.value != "" && skills.value != ""){

        var pessoa = {
            name: name.value, age: age.value, skills: skills.value
        }


        if(localStorage.usuarios == null){
            usuarios = []
        } else{
            usuarios = JSON.parse(localStorage.usuarios)
        }

        
        usuarios.push(pessoa)

        let usuarios_json = JSON.stringify(usuarios)
        
        localStorage.setItem('usuarios', usuarios_json)

    } else{
        alert("Por favor, preencha todos os dados!")
    }
}

