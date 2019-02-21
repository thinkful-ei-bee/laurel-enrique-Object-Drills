function makeStudentsReport(data) {
    for (let i = 0; i < data.length; i++) {
        let object = data[i];
        let name = object.name;
        let grade = object.grade;
        let string = `${name}: ${grade}`;
        stringsArr.push(string);
    }
    return stringsArr;
    console.log(stringsArr);
}
const stringsArr = [];

//function makeStudentsReport(data) { return data.map(x => ${ x.name }: ${ x.grade });

const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    return students.map(x => {
      return {
        name: x.name,
        status: "In Summer School",
        course: x.course,
      };
    });
  }

function findById(items, idNum) {
    for (i = 0; i < items.length; i++) {
        if (idNum === items[i].id) {
            return items[i];
        }
    }
}
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  if(Object.keys(object).length !== expectedKeys.length){
    return false;
  }
  for (var i in expectedKeys){
    if(!Object.keys(object).find(key => key === expectedKeys[i])){
      return false;
    }
  }
  return true;
}