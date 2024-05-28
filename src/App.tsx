import { Dropdown } from "./components/dropdown/Dropdown";
import { items } from "./models/data";


const App  = ()=> {

  return (
    <div>
     <Dropdown items={items}/>
    </div>
  );
};

export default App