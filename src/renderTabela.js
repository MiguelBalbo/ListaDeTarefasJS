import { leitura } from "./ioLocalStorage"
import { modalApagarFunc, modalConcluirFunc } from "./main";

const lista = document.querySelector("#tabela")
const vetorObj = leitura();

function guiasTabela(){
    lista.innerHTML = `<tr class="bg-gray-200 w-max dark:bg-gray-800">
            <td class="py-5 text-xl w-51">ID</td>
            <td class="py-5 text-xl w-51">Nome da Tarefa</td>
            <td class="py-5 text-xl w-51">Descrição</td>
            <td class="py-5 text-xl w-51">Data e Hora de Criação</td>
            <td class="py-5 text-xl w-51">Status</td>
            <td class="py-5 text-xl w-51">Concluir</td>
            <td class="py-5 text-xl w-51">Apagar</td>
          </tr>`
}

function populaObjetoTabela(objeto){
    let status = "Pendente"
    let disabledSts = "";
    let disabledStsBtn = "";
    let disabledStsBtnClr = "";
    if(Boolean(objeto.status)){
        disabledSts = "text-gray-500"
        disabledStsBtn = "disabled"
        disabledStsBtnClr = "/50"
        status = "Concluído"
    }
    lista.innerHTML += `<tr class="border-b-1 border-b-black dark:border-b-white ${disabledSts}">
                            <td class="px-10 py-5 text-md">${objeto.tarefaId}</td>
                            <td class="px-10 py-5 text-md">${objeto.nomeTarefa}</td>
                            <td class="px-10 py-10 break-words text-xs">${objeto.descricao}</td>
                            <td class="px-10 py-5 text-md">${objeto.dataHora}</td>
                            <td class="px-10 py-5 text-md">${status}</td>
                            <td class="px-6 py-5 text-md"><button class="bg-green-600${disabledStsBtnClr} text-white px-5 py-2 rounded-md concluirBtn" ${disabledStsBtn}> <i class="ph ph-check-circle"></i> Concluir</button></td>
                            <td class="px-6 py-5 text-md"><button class="bg-red-600${disabledStsBtnClr} text-white px-5 py-2 rounded-md apagarBtn" ${disabledStsBtn}><i class="ph ph-trash"></i>Apagar</button></td>
                        </tr>`
    modalApagarFunc();
    modalConcluirFunc();
}


function populaTabela(){
    lista.innerHTML = "";
    guiasTabela();
    for (let i in vetorObj){
        populaObjetoTabela(vetorObj[i])
    }
}

function filtraTabela(filtro){
    lista.innerHTML = "";
    guiasTabela();
    for (let i in vetorObj){
        let statusI = Boolean(vetorObj[i].status);
        
        if (filtro == null){
            populaTabela();
        }

        if(statusI==filtro){
            populaObjetoTabela(vetorObj[i])
        }
    }
}

export { populaTabela,filtraTabela,populaObjetoTabela }