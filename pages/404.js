//import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
//import { getRegularPage } from "@lib/contentParser";

const notFound = () => {
  return (
    <Base>
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">Error 404</h1>
            Page Not Found
          </div>
        </div>
      </div>
    </section>
    </Base>
  );
};


export default notFound;
