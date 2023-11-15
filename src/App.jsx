import Store from "././components/Store";
import { data } from "./data";
import './App.css';

export default function App() {
  return (
    <div>
      <Store products={data} />
    </div>
  );
}
