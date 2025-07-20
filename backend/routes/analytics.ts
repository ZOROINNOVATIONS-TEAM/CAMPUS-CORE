//analytics routes
/**
 * @openapi
 * /api/analytics/:
 *   get:
 *     summary: Get analytics data
 *     description: Fetches system-wide analytics data.
 *     tags:
 *       - Analytics
 *     responses:
 *       200:
 *         description: Analytics data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties: true
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unexpected error occurred"
 */
import express from 'express';
import { getAnalyticsData, generateReport } from '../lib/analytics';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await getAnalyticsData();
    res.json(data || { error: "No analytics data found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/report', async (req, res) => {
  try {
    const report = await generateReport();
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;