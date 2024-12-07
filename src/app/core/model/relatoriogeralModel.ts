import { Aluno } from "./alunoModel";
import { Tarefa } from "./tarefaModel";
import { Rubrica } from "./rubricaModel";

export class RelatorioGeral {
    id: number;
    aluno: Aluno;
    tarefa: Tarefa;
    rubrica: Rubrica;
    
}