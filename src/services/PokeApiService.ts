import { PokemonApiResponse, PokemonResumo } from '../models/Pokemon';

export class PokeApiService {
  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`,
      );

      if (!resposta.ok) {
        console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
        return null;
      }

      const dados = (await resposta.json()) as PokemonApiResponse;

      const pokemon: PokemonResumo = {
        id: dados.id,
        nome: dados.name,
        tipos: dados.types.map((item) => item.type.name),
        altura: dados.height,
        peso: dados.weight,
      };

      return pokemon;
    } catch (_erro) {
      console.log('[ERRO] Não foi possível buscar o Pokémon.');
      return null;
    }
  }
}
