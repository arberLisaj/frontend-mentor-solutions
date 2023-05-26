import Form from "./components/Form/Form";
import "./styles/styles.css";
const App = () => {
  return (
    <div>
      <Form />
    </div>
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
