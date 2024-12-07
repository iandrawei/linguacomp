import { Atitude } from 'src/app/core/model/atitudeModel';
import { Habilidade } from './habilidadeModel';
import { Conhecimento } from 'src/app/core/model/conhecimentoModel';
import { Professor } from './professorModel';

export class Competencia {
  id: number;
  nome: string;
  descricao: string;
  conhecimentos: Array<Conhecimento>;
  habilidades: Array<Habilidade>;
  atitudes: Array<Atitude>;
  professor: Professor;

}
