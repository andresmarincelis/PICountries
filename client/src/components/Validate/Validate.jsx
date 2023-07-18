const validate = (form) => {
    const errors = {};
  
    if (form.name === "") {
      errors.name = "Debes ponerle nombre a la actividad, es un campo obligatorio";
    }
  
    if (!form.dificultad) {
      errors.dificultad = "Dificultad es un campo obligatorio";
    } else if (isNaN(form.dificultad) || form.dificultad < 1 || form.dificultad > 5) {
      errors.dificultad = "Selecciona un grado de dificultad válido (Entre 1 a 5)";
    } 
  
    if (!form.duracion) {
      errors.duracion = "Debes ingresar cuantas horas dura la actividad (Máximo 24hrs)";
    } else if (isNaN(form.duracion) || form.duracion < 1 || form.duracion > 24) {
      errors.duracion = "Selecciona un tiempo de duración válido (Máximo 24 hrs)"
    }
  
    if (!form.temporada) {
      errors.temporada = "Selecciona una temporada, no puede quedar este campo vacío";
    }
  
    if (!form.pais.length) {
      errors.pais = "Debes asociar por lo menos un pais a la actividad que quieres crear";
    }
  
    return errors;
  };
  
  export default validate;
  