const app = require('express')();
const faker = require('faker');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const GetPerson = (page, size) => {
  const start = (page - 1) * size + 1;
  const arr = Array.from({ length: size }, (_, i) => i + start);
  const persons = [];
  arr.map(idx => {
    const person = {
      id: idx,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobTitle: faker.name.jobTitle(),
      phone: faker.phone.phoneNumber()
    };
    persons.push(person);
  });
  return persons;
};

app.get('/data', (req, res) => {
  const { page = 1, size = 10 } = req.query;
  const persons = GetPerson(+page, +size);
  res.send(persons);
});

const PORT = 777;
app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
