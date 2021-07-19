import Header from "./components/header/index";
import Jobs from "./components/jobs/index";
import Footer from "./components/footer/index";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Jobs
          className="job red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        ></Jobs>
        <Jobs
          className="job green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Jobs>
        <Jobs
          className="job yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Jobs>
        <Jobs
          className="job blue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Jobs>
        <Jobs
          className="job pink"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        ></Jobs>
        <Jobs
          className="job red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        ></Jobs>
        <Jobs
          className="job green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        ></Jobs>
        <Jobs
          className="job yellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New-York"
        ></Jobs>
        <Jobs
          className="job blue"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Jobs>
      </div>
      <Footer />
    </div>
  );
}

export default App;
