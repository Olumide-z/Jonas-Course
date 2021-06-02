import Search from './models/Search';
import * as searchView from './views/searchView'
import { elements } from './views/base'
/**
 * GLOBAL STATE OF THE APP
 * 1. Search object
 * 2. Current recipe object
 * 3. Shopping list object
 * 4. Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query =  searchView.getInput();
    console.log(query)

    if(query){
        // 2. Now search object and add to state
        state.search  = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults()

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        searchView.renderResults(state.search.result) 
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

