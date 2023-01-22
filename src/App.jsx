// import logo from './logo.svg';
import "./App.css";
import User from "./components/User/User";
import { data } from "./data/data";
import UsersList from "./components/UsersList/UsersList";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title='List of users'>
        <UsersList users={data} />
      </Section>
    </>
  );
}

export default App;
