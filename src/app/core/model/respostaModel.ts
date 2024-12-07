import { Aluno } from './alunoModel';
import { Tarefa } from 'src/app/core/model/tarefaModel';
import { Usuario } from './usuarioModel';

export class Resposta {

  id: number;
  data: Date;
  resposta: string;
  caminho: string;
  tarefa: Tarefa;
  aluno: Aluno;
  comentario: string;
  status: boolean;

}
