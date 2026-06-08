import { readFile, writeFile } from 'fs/promises';

import { PokemonResumo } from '../models/Pokemon';

export class PcBoxService {
  async salvar(pokemons: PokemonResumo[]): Promise<void> {
    await writeFile('pc_box.json', JSON.stringify(pokemons, null, 2), 'utf-8');
  }

  async carregar(): Promise<PokemonResumo[]> {
    try {
      const conteudo = await readFile('pc_box.json', 'utf-8');

      const dados: unknown = JSON.parse(conteudo);

      if (!Array.isArray(dados)) {
        return [];
      }

      return dados as PokemonResumo[];
    } catch (_erro) {
      return [];
    }
  }
}
