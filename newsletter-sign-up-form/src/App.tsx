import Form from "./components/Form/Form";
import "./styles/styles.css";
const App = () => {
  return (
    <main id="main-container">
      <Form />
    </main>
  );
};

export default App;

// const LoginSchema = z.object({
//   email: z
//     .string()
//     .min(1, { message: "This field has to be filled." })
//     .email("This is not a valid email.")
//   })
// });
