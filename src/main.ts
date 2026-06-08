import { CatalogoPokemon } from './models/CatalogoPokemon';
import { PokeApiService } from './services/PokeApiService';

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();
  const catalogo = new CatalogoPokemon();

  const pikachu = await pokeApiService.buscarPokemon('pikachu');

  if (pikachu) {
    catalogo.adicionar(pikachu);
  }

  const charmander = await pokeApiService.buscarPokemon('charmander');

  if (charmander) {
    catalogo.adicionar(charmander);
  }

  if (pikachu) {
    catalogo.adicionar(pikachu);
  }

  catalogo.listar();

  catalogo.remover(25);

  catalogo.listar();

  await pokeApiService.buscarPokemon('pokemon-inexistente');
}

main().catch(() => {
  console.log('[ERRO] Falha na execução da aplicação.');
});
