import "./styles.css";

import TODO from "./js/components/TODO";
import Store from "./js/store/store";
import reducer from "./js/store/reducer";

(function() {
  const store = new Store([]);
  const todo = new TODO(store);
  store.assignReducer(reducer);
})();
