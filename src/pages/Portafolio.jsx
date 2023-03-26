import "./portafolio.css";
import gmail from "../assets/gmail.png";
import git from "../assets/github.png";
import linke from "../assets/linkedin.png";
import what from "../assets/whatsapp.png";
import { Cards } from "../components/Cards";
import logo from "../assets/logo.png";
import { Button } from "react-bootstrap";
import tecnologia from "../assets/tecno.png";
import descargar from "../assets/descargar.png";

export const Portafolio = () => {
  return (
    <>
      <main>
        <section>
          <div className="container-info">
            <br />
            <h1 className="welcome">Hola, Me llamo Luis Felipe Osorio</h1>
            <p>
              Ingeniero de sistemas amante por el desarrollo y la innovación
            </p>
            <img className="logos" src={logo} alt="Logo" />

            <h5 className="titles">
              <br />
              <br />
              <b> SOBRE MI </b>
            </h5>
            <p>
              Persona con actitud proactiva para el trabajo, honesta,
              responsable, dedicada, adecuado manejo del tiempo, adaptabilidad
              frente al cambio, con orientación al aprendizaje continuo, y
              excelente desempeño en el trabajo en equipo. Los compañeros de
              equipo; me perciben como una persona positiva, alegre, y con
              capacidad para resolver problemas de forma creativa.
            </p>

            <Button variant="info">
              <a href="#info">
                <b> Contáctame </b>
              </a>
            </Button>
            <br />
            <br />
            <img src={descargar} height="40px" />
            <br />
            <h5>
              <a href="/pdf/CVLuisOsorio.pdf" download>
                Descargar CV
              </a>
            </h5>
            <br />
          </div>
        </section>
        <div className="linea"/>

        <section>
          <div className="container-info">
            <h5 className="titles">EXPERIENCIA</h5>
            <h6>
              DESARROLLADOR FRONT-END <br /> 2022-2023 | GBM Colombia
            </h6>

            <p>
              Ingeniero de sistemas especialista en tecnologías de desarrollo
              como: Python, Css, Html y JavaScript, manejo de librerías y
              Framework como React.js y Angular.js en los cuales se llevó a cabo
              el desarrollo de proyectos implementando cada una de las
              tecnologías referenciadas, aplicando el uso de metodologías de
              trabajo ágil como SCRUM.
            </p>
          </div>
          <div className="container">
            <Cards title1={"HABILIDADES"} title2={"PROYECTOS"} title3={"CERTIFICADOS"} />
          </div>
        </section>
        <div className="linea"/>

        <section id="habilidades">
          <h5 className="titles">HABILIDADES</h5>
          <div className="container-info">
            <p>
              Mis habilidades estan basadas en el trabajo que he venido
              realizando tanto en el proceso de educación llevado en la
              universidad, como en el ámbito laboral. He trabajado con
              diferentes tecnologías en las cuales poseo conocimiento en el
              manejo de: HTML, CSS, JAVA, JAVASCRIPT, PYTHON, REACT, MYSQL
            </p>
          </div>

          <img className="tecnologia" src={tecnologia} />
        </section>
        <div className="linea"/>


        <section>
          <h5 className="titles">PROYECTOS</h5>

          <div className="container"></div>
        </section>

        <div className="linea"/>

        <section id="certificados">
          <h5 className="titles">CERTIFICACIONES</h5>
          <div className="container">
            <h5 className="certificados">
              CERTIFICACIÓN DE DESARROLLO FRONT-END
              <a href="/pdf/DesarrolladorFront.pdf" download>
                <img src={descargar} height="20px" />
                Descargar
              </a>
            </h5>
            <h5 className="certificados">
              CERTIFICAICÓN DE DESARROLLO PYTHON 3
              <a href="/pdf/Python3.pdf" download>
                <img src={descargar} height="20px" />
                Descargar
              </a>
            </h5>
            <h5 className="certificados">
              CERTIFICACIÓN DE DESARROLLO CSS
              <a href="/pdf/CSS.pdf" download>
                <img src={descargar} height="20px" />
                Descargar
              </a>
            </h5>
            <h5 className="certificados">
              CERTIFICACIÓN DE DESARROLLO WEB RESPONSIVO
              <a href="/pdf/DesarrolladorResponsive.pdf" download>
                <img src={descargar} height="20px" />
                Descargar
              </a>
            </h5>
            <h5 className="certificados">
              CERTIFICACIÓN DE METODOLOGIA SCRUM
              <a href="/pdf/Scrum.pdf" download>
                <img src={descargar} height="20px" />
                Descargar
              </a>
            </h5>
          </div>
        </section>
        <div className="linea"/>

        <section id="info">
          <h5 className="titles">CONTACTOS</h5>

          <div className="container-info">
            <p>
              Puedes contactarme vía Correo Electrónico, WhatsApp y LinkedIn.
              También puedes ver mi repositorio en GitHub, donde encontraras
              algunos de mis proyectos.
            </p>
            <a href="mailto:luisfelipeosorio07@gmail.com" target={"_blank"}>
              <img className="contact" src={gmail} />
            </a>

            <a href="https://github.com/Mobius4K" target={"_blank"}>
              <img className="contact" src={git} />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-felipe-osorio-herrera-687259225/"
              target={"_blank"}
            >
              <img className="contact" src={linke} />
            </a>

            <a href="https://wa.me/+573103970471" target={"_blank"}>
              <img className="contact" src={what} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
