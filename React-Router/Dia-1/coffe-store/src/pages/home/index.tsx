import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Cafeteria do Hiro</h1>
      <Link to='/coffees'>
        <button>Conheça nossos cafés seu corno</button>
      </Link>
    </>
  );
}
