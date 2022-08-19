import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>About</h1>
      <p>This is a React App to leave feedback on a service or producto</p>
      <p>Version: 1.0.0</p>

      <Link to="/">Back to Home</Link>
    </Card>
  );
}
export default AboutPage;
