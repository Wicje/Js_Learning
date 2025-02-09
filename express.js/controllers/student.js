




import express from 'express';

const allStudents = (req, res) => {
  res.send ('all Students');
};



const newStudent = (req, res) => {
  res.send('Create new Student');
};

const upDateStudents = (req, res) => {
  res.send('Update User');
};

const deleteStudents = (req, res) => {
  res.send('Delete Students');
};


export {allStudents, newStudent, upDateStudents, deleteStudents};
