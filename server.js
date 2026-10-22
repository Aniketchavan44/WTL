const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let students = [
    { id: 1, name: 'Aniket', age: 20, course: 'Computer Engineering' },
    { id: 2, name: 'Rahul', age: 21, course: 'Computer Engineering' },
    { id: 3, name: 'Amit', age: 20, course: 'IT' }
];

app.get('/', (req, res) => {
    res.send('Welcome to Student Management API');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const student = {
        id: students.length ? Math.max(...students.map(s => s.id)) + 1 : 1,
        name: req.body.name,
        age: Number(req.body.age),
        course: req.body.course
    };

    if (!student.name || !Number.isFinite(student.age) ||
        student.age <= 0 || !student.course) {
        return res.status(400).json({ message: 'Enter valid student details' });
    }

    students.push(student);
    res.status(201).json({
        message: 'Student added successfully',
        student
    });
});

app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }

    const { name, age, course } = req.body;

    if (!name || age === undefined || !course ||
        !Number.isFinite(Number(age)) || Number(age) <= 0) {
        return res.status(400).json({ message: 'Enter valid student details' });
    }

    student.name = name;
    student.age = Number(age);
    student.course = course;

    res.json({ message: 'Student updated successfully', student });
});

app.delete('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: 'Student not found' });
    }

    const deleted = students.splice(index, 1)[0];
    res.json({ message: 'Student deleted successfully', student: deleted });
});

app.listen(PORT, () => {
    c


});