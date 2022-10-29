const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1100;

let user = {
    username: "jordan",
    password: "password",
    email: "jordan@email.com",
    courses: {
        course: {
            classId: "ABC123",
            courseName: "Dancing with Wolves",
            startDate: "1/01/2022",
            endDate: "5/10/2022"

        },
        course1: {
            classId: "DEF456",
            courseName: "Kung Fu Panda",
            startDate: "1/01/2022",
            endDate: "5/10/2022"

        },
        course2: {
            classId: "GHI789",
            courseName: "Robotic Maintenance",
            startDate: "1/01/2022",
            endDate: "5/10/2022"

        }
    }

}


app.get('/getUser', (req, res) => {
    try {
        return res.status(200).json(user);
        
    }
    catch {
        return res.status(500);
    }
});

app.post('/addUser', (req, res) => {
    try {
        let userVar = req.body.object.user;

        console.log(userVar);
        return res.status(200).json(`Added user ${req.body.object.user.username} successfully`);
    }
    catch {
        return res.status(500);
    }
});

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});