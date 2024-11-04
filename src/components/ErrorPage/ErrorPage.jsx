import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
     const error = useRouteError();

     return (
          <div>
               <h2>Opsss!!!!</h2>
               <p>{error.statusText || error.message}</p>
               {
                    error.status === 404 && <div>
                         <h3>Page not found</h3>
                         <p>Go back where you form</p>
                         <button>Go Back</button>
                         <Link to="/">Home</Link>
                    </div>
               }
          </div>
     );
};

export default ErrorPage;