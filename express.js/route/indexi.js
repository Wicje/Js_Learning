


import express from 'express';
import {allStudents, newStudent, upDateStudents, deleteStudents} from 
'../controllers/student.js';


const router = express.Router();


router.get('/all', allStudents);
router.post('/create', newStudent);
router.put('/update', upDateStudents);
router.delete('/delete', deleteStudents);

export default router;
