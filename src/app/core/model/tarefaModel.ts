import { Turma } from './turmaModel';
import { Competencia } from './competenciaModel';
import { Rubrica } from './rubricaModel';
import { Professor } from './professorModel';

export class Tarefa {

  id: number;
  descricao: string;
  tipo: string;
  data: Date;
  dataLimite: Date;
  avaliacaoAluno: number;
  turma: Turma;
  competencia: Competencia;
  rubrica: Rubrica;
  professor: Professor;
}
