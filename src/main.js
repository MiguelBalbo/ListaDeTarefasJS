import './style.css'
import { filtraTabela, populaTabela } from './renderTabela';
import { exibeModalAdicionar } from './modalBoxAdd';
import { modalApagar } from './modalBoxRem';
import { modalConcluir } from './modalBoxConc';

//sistema do relógio
setInterval(() => {
  const relogio = document.querySelector("#relogio");
  const horarioAtual = new Date().toLocaleTimeString("pt-br")
  relogio.textContent = horarioAtual
}, 1000)


//popula tabela
populaTabela();

//chamado modal adicionar
const modalAddBtn = document.querySelector("#modalAddBtn")
modalAddBtn.addEventListener("click",exibeModalAdicionar)


//filtros
const botoesFiltros = document.querySelectorAll(".botaoFiltro")
const ativo = "ativo"
botoesFiltros.forEach(btn => {
  btn.addEventListener("click",()=>{
    botoesFiltros.forEach(b => {
      b.classList.remove("bg-black")
      b.classList.remove("text-white")
      b.classList.remove("dark:bg-white")
      b.classList.remove("dark:text-black")
    })
    
    btn.classList.add("bg-black")
    btn.classList.add("text-white")
    btn.classList.add("dark:bg-white")
    btn.classList.add("dark:text-black")
    
    //console.log(btn.textContent);
    
    if (btn.textContent == "Pendente"){
      filtraTabela(false) 
    } else if (btn.textContent == "Concluído"){
      filtraTabela(true)
    } else{
      filtraTabela(null)
    }
    
    
  })
})

//modal de apagar

function modalApagarFunc(){
  const botoesApagar = document.querySelectorAll(".apagarBtn")
  botoesApagar.forEach(btn => {
    btn.addEventListener("click",()=>{
      const linha = btn.closest("tr")
      const id = linha.querySelector("td").textContent
      modalApagar(id)
    });  
  })
}
//modalApagarFunc()


//modal de concluir
function modalConcluirFunc(){

  const botoesConfirmar = document.querySelectorAll(".concluirBtn")
  botoesConfirmar.forEach(btn => {
    btn.addEventListener("click",()=>{
      const linha = btn.closest("tr")
      const id = linha.querySelector("td").textContent
      modalConcluir(id)
    });  
  })
  
}

//modalConcluirFunc()

export {modalApagarFunc,modalConcluirFunc}