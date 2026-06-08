import { writeFile } from 'fs/promises';

import { PokemonResumo } from '../models/Pokemon';

export class PcBoxService {
  async salvar(pokemons: PokemonResumo[]): Promise<void> {
    await writeFile('pc_box.json', JSON.stringify(pokemons, null, 2), 'utf-8');
  }
}
