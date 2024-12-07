import { Criterio } from './criterioModel';
import { Professor } from './professorModel';

export class Rubrica {
  id: number;
  descricao: string;
  tipo: string;
  professor: Professor;
  criterios: Array<Criterio>;
}
