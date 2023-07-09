import Counting from "./Numberget.js";
import FunctionEvent from "./FunctionEvent.js";
const MoreInformation = () => {
  return (
    <div className="getReact">
      <p>
        React is a widely used JavaScript library for building user interfaces.
        It offers a component-based approach, making it easy to create reusable
        UI elements. React's virtual DOM efficiently updates and renders
        changes, resulting in fast and responsive web applications.
      </p>
      <Counting/>
      <FunctionEvent/>
    </div>

  );
};



export default MoreInformation;
