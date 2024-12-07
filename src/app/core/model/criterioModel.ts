import { Professor } from './professorModel';
import { Rubrica } from './rubricaModel';
import { Niveldesempenho } from './niveldesempenhoModel';

export class Criterio {
  id: number;
  descricao: string;
  peso: number;
  professor: Professor;
  rubrica: Rubrica;
  nivelDesempenhos: Array<Niveldesempenho>;
}
