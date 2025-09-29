import { escrita, leitura } from "./ioLocalStorage"

const divModalAdicionar = document.querySelector("#modalAdd")

function exibeModalAdicionar(){
  divModalAdicionar.innerHTML = `<div class="fixed w-full h-full bg-black/50 -mx-10 -my-62">
          <div class="w-4xl h-4xl bg-gray-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md dark:bg-gray-800">
            <h1 class="text-left text-2xl py-2 mx-10 mt-5 font-medium">Nova Tarefa</h1>
          <form action="" class="flex flex-col mx-10 mb-5 mt-5">
              <label for="nomeTarefa" class="text-lg">Nome da tarefa</label>
              <input type="text" name="nomeTarefa" id="nomeTarefa" required class="border-black border-1 rounded-md p-3 mt-3 dark:border-white" placeholder="Digite o nome aqui">
              
              <label for="descricaoTarefa" class="text-lg mt-5">Descição da tarefa</label>
              <textarea name="descricaoTarefa" id="descricaoTarefa" class="border-black border-1 rounded-md p-2 mt-3 h-30 dark:border-white" placeholder="Digite a descrição da tarefa"></textarea>
          </form>
          <div class="text-white mx-10 mb-5">
            <button id="btnSalvar" class="border-blue-600 border-1 p-2 text-blue-600 rounded-md dark:border-blue-400 dark:text-blue-400">
              <i class="ph ph-floppy-disk"></i>
              Salvar
            </button>
            <button id="btnCancelar" class="bg-red-500 p-2 rounded-md">
              <i class="ph ph-x-circle"></i>
              Cancelar
            </button>
          </div>
        </div>
        <div></div>
        </div>`

  const btnCancelar = document.querySelector("#btnCancelar")
  btnCancelar.addEventListener("click",fechaModalAdicionar)

  const btnSalvar = document.querySelector("#btnSalvar")
  btnSalvar.addEventListener("click",salvaModalAdicionar)

}

function fechaModalAdicionar(){
  divModalAdicionar.innerHTML = ""
}

function salvaModalAdicionar(){
  const dados = leitura();
  let id = 1;
  if (dados != null){
    id = Date.now();
  }

  const dataHoraAt = new Date().toLocaleString("pt-br");
  
  const descricaoTarefa = document.querySelector("#descricaoTarefa")
  const objTarefa = {
    tarefaId: `${id}`,
    nomeTarefa: `${nomeTarefa.value}`,
    descricao:`${descricaoTarefa.value}`,
    dataHora: `${dataHoraAt}`,
    status: false
  } 
  escrita(objTarefa);
  divModalAdicionar.innerHTML = ""
}

export { exibeModalAdicionar }