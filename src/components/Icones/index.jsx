import PropTypes from 'prop-types';
import { FaAngular,  FaCss3, FaHtml5, FaNodeJs, } from 'react-icons/fa';
import { FaReact } from "react-icons/fa";
import { SlMustache } from "react-icons/sl";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Icones({ languages }) {
  
  function getLanguageIcon(language) {
    switch(language.toLowerCase()) {
      case 'html': return <FaHtml5 />;
      case 'css': return <FaCss3 />;
      case 'react': return <FaReact />;
      case 'angular': return <FaAngular />;
      case 'node': return <FaNodeJs />;
      case 'mongo': return <SiMongodb/>;
      case 'mustache': return <SlMustache/>;
      case 'javascript': return <IoLogoJavascript />;
      case 'typescript': return <SiTypescript />;
      default: return <FaReact />;
    }
  } 

  return(
    <div>
      {languages.map((language, index) => (
        <>
        <span key={index} title={language}  >
          {getLanguageIcon(language)}
        </span>
        </>
      ))}
    </div>
  );
}

Icones.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Icones;
