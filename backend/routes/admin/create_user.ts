import express from 'express';
const router = express.Router();

router.post('/admin/create_user', (req, res) => {
  
  res.status(501).json({ message: 'Create user endpoint not implemented yet' });
});

export default router;
