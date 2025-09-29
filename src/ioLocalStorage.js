import { populaObjetoTabela, populaTabela } from "./renderTabela";

function escrita(objetoTarefa){
  let dados = leitura()
  if (dados == null){
    dados = [];
    dados[0] = objetoTarefa;
  }else{
    dados[dados.length] = objetoTarefa;
  }
  localStorage.setItem("tarefas", JSON.stringify(dados));
  populaObjetoTabela(objetoTarefa)
  
}

function leitura(){
    const json = localStorage.getItem("tarefas")
    const dados = JSON.parse(json)
    //console.log(dados)
    return dados
}

function apagaItem(id){
    const vetorObj = leitura();
    for (let i in vetorObj){
      if(vetorObj[i].tarefaId == id){
          vetorObj.splice(i, 1)
          //console.log(vetorObj);
          localStorage.setItem("tarefas", JSON.stringify(vetorObj));
        }
    }
    location.reload(true);
}

function marcarConcluido(id){
  const vetorObj = leitura();
    for (let i in vetorObj){
      if(vetorObj[i].tarefaId == id){
          vetorObj[i].status = true
          localStorage.setItem("tarefas", JSON.stringify(vetorObj));
        }
    }
    location.reload(true);
}


export { marcarConcluido, apagaItem, leitura, escrita }