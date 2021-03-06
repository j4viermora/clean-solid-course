(() => {
  function getMovieById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    // or addMovie
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor

  function checkFullName(fullName: string): boolean {
    console.log({ fullName })
    return true
  }


  function createActor(fullName: string, birthdate: Date): boolean {
    // or registerActor
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (checkFullName(fullName)) return false;

    console.log('Crear actor', birthdate);
    return true;
  }

  // continue section

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

    if (isDead) return 1500

    if (isSeparated) return 2500;

    return (isRetired) ? 300 : 4000

  }



})();
