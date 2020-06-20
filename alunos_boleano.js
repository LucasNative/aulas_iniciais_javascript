// Boolean exercise "average of class" + "flunkeds"

const classA = [
    {
        name: 'Mel',
        age: 18,
        grade: 2.9
    },
    {
        name: 'May',
        age: 25,
        grade: 9.9
    },
    {
        name: 'Thais',
        age: 30,
        grade: 10
    },
    {
        name: 'Ramon',
        age: 18,
        grade: 10
    }
]

const classB = [
    {
        name: 'Caio',
        age: 20,
        grade: 4.2
    },
    {
        name: 'Thales',
        age: 32,
        grade: 5.9
    },
    {
        name: 'Alan',
        age: 27,
        grade: 4
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade

    }

    const average = sum / students.length
    return average

}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendResult(average, clazz) {
    if (average >= 5) {
        console.log(`${clazz} average is ${average}, congrats!`)
    } else {
        console.log(`${clazz} average is ${average}, more luck next time.`)
    }
}

sendResult(average1, 'class A')
sendResult(average2, 'class B')

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)

    }
}

studentsflunkeds(classA)
studentsflunkeds(classB)