
const alumnos = [{ dni: 40345901, name: 'Jose Prieto' }, { dni: 34783256, name: 'Mariana Yael' }, {dni: 23476890, name: 'Juana Bruno'}];

function encontrarAlumno(dniAlumnos){
    const nombreAlumno = alumnos.find(x => x.dni === dniAlumnos);
    
    if (nombreAlumno === undefined || nombreAlumno<8){
        return alert('El DNI no forma parte de nuestro grupo de alumnos.')
    }
    else{
        return alert( "Hola " + nombreAlumno.name + " " + "estas en la lista de alumnos!");
    }
    }

encontrarAlumno(parseInt(prompt('Por favor ingrese su numero de DNI')));