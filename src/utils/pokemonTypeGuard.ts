import { PokemonApiResponse } from '../models/Pokemon';

export function isPokemonApiResponse(
  dados: unknown,
): dados is PokemonApiResponse {
  if (typeof dados !== 'object' || dados === null) {
    return false;
  }

  return (
    'id' in dados &&
    'name' in dados &&
    'height' in dados &&
    'weight' in dados &&
    'types' in dados
  );
}
