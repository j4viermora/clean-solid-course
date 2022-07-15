(() => {
  // Ejemplo
  // Bad
  // Archivos a evaluar - files to evaluate
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];

  // Archivos marcados para borrar - files to delete
  const arhivos = fs.map((f) => f.f);

  // God
  const fileToEvalue = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];
  const fileToDelete = fileToEvalue.map((file) => file.flagged);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  // bad
  const ddmmyyyy = new Date();
  // good
  const currentDate = new Date();

  // días transcurridos - elapsed time in days
  //bad
  const d: number = 23;
  // good
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  // bad
  const dir = 33;
  // good
  const numberOfFilesInDirectory: number = 33;

  // primer nombre - first name
  //bad
  const nombre = 'Fernando';
  //good
  const firstName = 'Fernando';

  // primer apellido - last name
  // bad
  const apellido = 'Herrera';
  // good
  const lastName = 'Herrera';

  // días desde la última modificación - days since modification
  const dsm = 12;
  const daysSinceModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
  const maxClassesPerStudent = 6;
})();
