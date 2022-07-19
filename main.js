
const alumnos = [{ dni: 40345901, name: 'Jose Prieto' }, { dni: 34783256, name: 'Mariana Yael' }, {dni: 23476890, name: 'Juana Bruno'}];

function encontrarAlumno(dniAlumnos){
    const nombreAlumno = alumnos.find(x => x.dni === dniAlumnos);
    
    if (nombreAlumno === undefined || nombreAlumno<8){
        const noLista = alumnos.map((el) => el.name)
        return alert(" Hola! Esta es nuestra lista de alumnos, si apareces en la lista, pero tu nombre esta mal escrito notificanos! Los alumnos son: " + noLista.join(", ")+".")
    }
    else{
        return alert( "Hola " + nombreAlumno.name + " " + "estas en la lista de alumnos!");
    }

    
    }

encontrarAlumno(parseInt(prompt('Por favor ingrese su numero de DNI')));


