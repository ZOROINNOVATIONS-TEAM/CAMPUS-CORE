import express from 'express';
import { getAllRoles, createRole } from '../../controllers/admin/roleController';
import { admin_only } from '../../lib/middlewares';

const router = express.Router();

router.get('/admin/roles', admin_only, getAllRoles);
router.post('/admin/roles', admin_only, createRole);

export default router;