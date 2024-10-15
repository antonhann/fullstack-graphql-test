// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayUsers/>
    </div>
  );
}
const GET_USERS = gql`

  query {
    getUsers {

      name
      email
    }
  }
`;
function DisplayUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div>
      {data.getUsers.map(({ name, email }: { name: string; email: string }, index: number) => (
        <div key={index}>
          <h3>{name}</h3>
          <p>{email}</p>
          <br />
        </div>
      ))}
    </div>
  );
}