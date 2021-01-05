
const classA = [
    {
        name: "Mayk",
        grade: 1.8

    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: 'Novo Aluno',
        grade: 10

    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Ciclano",
        grade: 0
    }, {
        name: 'Novo Aluno',
        grade: 5
    }
]


function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {

        sum = sum + students[i].grade
        return sum
    }
    console.log(i)
    const average = sum / students.length
    return average

}


function sendMessage(average, turma) {

    if (average > 5) {
        console.log(`${turma} Average: ${average}. Congrats`)
    } else {
        console.log(` ${turma} Average: ${average}. Is not good`)
    }
}

// Marcar student como flunked se a grade for menor que 5

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

markAsFlunked(classA)

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)


sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')


studentsReprovados(classA)
studentsReprovados(classB)
