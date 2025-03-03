
import { Field, Input, Button, HStack } from "@chakra-ui/react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const login = () => {};

  return (
    <>
      <h1>Login</h1>
      <div className="card">
        <Field.Root orientation={"horizontal"}>
          <Field.Label>Username</Field.Label>
          <Input placeholder="username" />
        </Field.Root>

        <Field.Root orientation={"horizontal"} paddingTop="3">
          <Field.Label>Email</Field.Label>
          <Input placeholder="me@example.com" />
        </Field.Root>

        <Field.Root orientation={"horizontal"} paddingTop="3">
          <Field.Label>Password</Field.Label>
          <Input type="password" />
        </Field.Root>

        <HStack>
          <Button
            onClick={login}
            paddingTop="3"
            variant="subtle"
            rounded="md"
            colorPalette={"purple"}
          >
            Save
          </Button>
        </HStack>
      </div>
    </>
  );
}

export default App;
