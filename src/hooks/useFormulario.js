import { useState } from "react";

const useFormulario = (inicial) => {
//como usas useState devuleve [] no {} tenias {formulario, setFormulario } 
  const [ formulario, setFormulario ] = useState(inicial);

  const handleChange = (e) => {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });

  };

  return [formulario, handleChange];
};

export default useFormulario;