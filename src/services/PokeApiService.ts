import { PokemonResumo } from '../models/Pokemon';
import { isPokemonApiResponse } from '../utils/pokemonTypeGuard';

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

      const dados: unknown = await resposta.json();

      if (!isPokemonApiResponse(dados)) {
        console.log('[ERRO] Resposta inválida da API.');
        return null;
      }

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
