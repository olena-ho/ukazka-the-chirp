import { render } from '@czechitas/render';
import '../global.css';
import './profil.css';

const fetchUsers = async () => {
  const response = await fetch(`http://localhost:4000/api/users`);
  const json = await response.json();
  return json.data;
};

const users = await fetchUsers();

const params = new URLSearchParams(window.location.search);
const id = params.get('user');

const user = users.find((user) => user.id === Number(id));

console.log(users);
console.log( id);

document.querySelector('#root').innerHTML = render(
  <>
    <h1>Profil uživatele</h1>

    <p>Name: {user.name}</p>
    <p>Handle: {user.handle}</p>
    <p>A bit about me: {user.bio}</p>
  </>,
);
