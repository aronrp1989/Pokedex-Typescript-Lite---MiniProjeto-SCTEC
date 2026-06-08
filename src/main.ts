import { CatalogoPokemon } from './models/CatalogoPokemon';
import { PcBoxService } from './services/PcBoxService';
import { PokeApiService } from './services/PokeApiService';

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();
  const pcBoxService = new PcBoxService();

  const pokemonsSalvos = await pcBoxService.carregar();

  console.log(
    `[INFO] ${String(pokemonsSalvos.length)} Pokémon(s) carregado(s) do PC Box.`,
  );

  const catalogo = new CatalogoPokemon(pokemonsSalvos);

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

  await pcBoxService.salvar(catalogo.obterTodos());
}

main().catch(() => {
  console.log('[ERRO] Falha na execução da aplicação.');
});
