const express = require('express');

const router = express.Router();
const StudentHttpHandler = require('../handlers/student');

const StudentServiceFactory = require('../db/factory');
const StudentController = require('../controllers/student');

const studentService = StudentServiceFactory.create('fake', 'connectionString');
const studentController = new StudentController(studentService);
const studentHandler = new StudentHttpHandler(studentController);

// Set up routes
router.get('/getAllStudents', studentHandler.getStudents.bind(studentHandler));
router.get('/getStudentsWithStatus', studentHandler.getStudentsWithStatus.bind(studentHandler));

module.exports = router;