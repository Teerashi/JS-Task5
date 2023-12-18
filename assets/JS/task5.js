//num 1

const arr1 = ['true', false, 2345, null];

const newarr1 = arr1.map(function (element, index) {
    return `Item with index ${index} has value ${element}`;
});

//arr1

//newarr1

//num2

const arr2 = [
    {firstName: 'Test',
    lastName: 'Testovich',
    age: 27,
    gender:'male,'
    },

    {firstName:'User',
    lastName: 'Userenko',
    age: 12,
    gender:'male'
    },

    {firstName: '‘Test`ya',
    lastName: 'Testovna',
    age: 16,
    gender: 'female'
    },

    {
    firstName: 'Logina',
    lastName: 'Consol`evna',
    age: 42,
    gender: 'female'
    },

    {firstName: 'Undefined',
    lastName: 'Undefined',
    age: 99
    },

    {firstName: 'Null',
    lastName: 'Nullochyk',
    gender: 'male'
    }
];

const newarr2 = arr2.filter((obj) => obj.age >= 18);

//arr2[1] or [0]...

//newarr2[0] or [1]...

//num3

const arr3 = [
    {firstName: 'Test',
    lastName: 'Testovich',
    age: 27,
    gender:'male,'
    },

    {firstName:'User',
    lastName: 'Userenko',
    age: 12,
    gender:'male'
    },

    {firstName: '‘Test`ya',
    lastName: 'Testovna',
    age: 16,
    gender: 'female'
    },

    {
    firstName: 'Logina',
    lastName: 'Consol`evna',
    age: 42,
    gender: 'female'
    },

    {firstName: 'Undefined',
    lastName: 'Undefined',
    age: 99
    },

    {firstName: 'Null',
    lastName: 'Nullochyk',
    gender: 'male'
    }
];

findFirstFemaleObj = (array) => array.findIndex((obj) => obj.gender === 'female');

//findFirstFemaleObj(arr3); //2

//arr3[2]; 