export default function (props) {
  return `
      <div class="search-wrapper">
        <form id="search-form" class="form_search">
          <input
            type="text"
            name="query"
            autocomplete="off"
            placeholder="Write movie name and click"
            class="input_search"
          />
          <button type="submit" class="button_search"><i class="material-icons">search</i></button>
        </form>
      </div>

      <div>
        <ul class="cards__container" id="films-gallery"></ul>
      </div>

      <div class="pagination">
        <button tupe="button" data-action="load-more" class="load-more-Btn">Next page</button> 
      </div>    
    `;
}
