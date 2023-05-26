import Title from './Title';
import ModuleDetails from './ModuleDetails';
import { calculateAge } from '../utils/age';

function HelloWorld() {
  const name = 'Ian Jonas Hiroce';
  const dataNascimento = '01/02/2001';
  const idade = calculateAge(dataNascimento);

  return (
    <>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <p>{`Idade ${idade}`}</p>
      <Title />
      <ModuleDetails />
    </>
  );
}

export default HelloWorld;
