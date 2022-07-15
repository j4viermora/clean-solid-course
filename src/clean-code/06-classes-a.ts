(() => {
    type Gender = 'male' | 'female';


    class Person {


        public name: string;
        public gender: Gender;
        public birthdate: Date;


        constructor(

            name: string, gender: Gender, birthdate: Date

        ) {

            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate


        }


    }



    const newPerson = new Person('Javier', 'male', new Date('1997-10-21'))

    console.log({ newPerson })



})()