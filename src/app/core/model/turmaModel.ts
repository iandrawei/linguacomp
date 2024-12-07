import { Professor } from './professorModel';
import { Aluno } from './alunoModel';

export class Turma {
  id: number;
  nome: string;
  professor: Professor;
  alunos: Array<Aluno>;
}
