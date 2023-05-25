import { Keyboard } from "./Keyboard";
import { Actions } from "./Actions";
import { Info } from "./info";

function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}

export default App;
