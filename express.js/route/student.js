import express from 'express';

const router = express.Router();

router.get('/all', (req, res) => {
  res.send('All Student');
});
router.post('/create', (req, res) => {
  res.send('Sign in New Student');
});
router.put('/update', (req, res) => {
  res.send('Update Student ID');
});
router.delete('/delete', (req, res) => {
  res.send('Remove Student from DB');
});

export default router;





















