const student = {
  name: 'kevin',
  address: {
    street: '123 Happy Street',
    city: 'Miami',
    state: 'FL'
  },
  sayMyName() {
    console.log(this.name);
  }

  //  sayMyName:() =>{
  //   console.log(this.name)
  // }
};

const {
  address: { street, city, state }
} = student;

console.log(street, city, state);

const state = {
  formSignup: {
    username: 'sandra',
    email: 'sandra@sandra.com',
    password: '12lalala'
  }
};

const {
  formSignup: { username, email, password }
} = state;
