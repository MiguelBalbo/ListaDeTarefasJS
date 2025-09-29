import { apagaItem } from "./ioLocalStorage.js"

const divModalApg = document.querySelector("#modalApaga")

function modalApagar(id){
    divModalApg.innerHTML = `<div class="fixed w-full h-full bg-black/50 -mx-10 -my-62">
          <div class="w-4xl h-4xl bg-gray-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md dark:bg-gray-800">
            <h1 class="text-left text-2xl py-2 mx-10 mt-5 font-medium">Confirmação de exclusão</h1>
            <p class="mx-10 mb-5 py-2">Deseja realmente excluir essa tarefa? Não é possível reverter essa ação</p>
          <div class="text-white mx-10 mb-5">
            <button id="btnCancelar" class="bg-red-500 p-2 rounded-md">
              <i class="ph ph-x-circle"></i>
              Cancelar
            </button>
            <button id="btnConfirmar" class="border-red-600 border-1 text-red-600 p-2 rounded-md dark:border-red-400 dark:text-red-400">
              <i class="ph ph-trash"></i>
              Excluir
            </button>
          </div>
        </div>
        <div></div>
        </div>`
    
 
        const btnConfirmar = document.querySelector("#btnConfirmar")
        btnConfirmar.addEventListener("click", () => {
            divModalApg.innerHTML = ""
            apagaItem(id);
        })

        const btnCancelar = document.querySelector("#btnCancelar")
        btnCancelar.addEventListener("click", () => {
            divModalApg.innerHTML = ""
        })

}


export { modalApagar }