const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'data', 'schedules.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Ensure data directory exists
async function ensureDataDirectory() {
    try {
        await fs.access(path.dirname(DATA_FILE));
    } catch {
        await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    }
}

// Load data from file
async function loadData() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist or is invalid, return default structure
        return {
            schedules: {},
            settings: {
                staff: [],
                patients: [],
                securityStaff: [],
                nurseInCharge1: '',
                nurseInCharge2: '',
                isDayShift: true,
                isDarkMode: false
            }
        };
    }
}

// Save data to file
async function saveData(data) {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// Routes

// Get all data
app.get('/api/data', async (req, res) => {
    try {
        const data = await loadData();
        res.json(data);
    } catch (error) {
        console.error('Error loading data:', error);
        res.status(500).json({ error: 'Failed to load data' });
    }
});

// Save settings (staff, patients, preferences)
app.post('/api/settings', async (req, res) => {
    try {
        const data = await loadData();
        data.settings = { ...data.settings, ...req.body };
        await saveData(data);
        res.json({ success: true, message: 'Settings saved successfully' });
    } catch (error) {
        console.error('Error saving settings:', error);
        res.status(500).json({ error: 'Failed to save settings' });
    }
});

// Save schedule
app.post('/api/schedule', async (req, res) => {
    try {
        const { scheduleId, schedule } = req.body;
        const data = await loadData();

        if (!scheduleId) {
            return res.status(400).json({ error: 'Schedule ID is required' });
        }

        data.schedules[scheduleId] = {
            schedule,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        await saveData(data);
        res.json({ success: true, message: 'Schedule saved successfully' });
    } catch (error) {
        console.error('Error saving schedule:', error);
        res.status(500).json({ error: 'Failed to save schedule' });
    }
});

// Get specific schedule
app.get('/api/schedule/:id', async (req, res) => {
    try {
        const data = await loadData();
        const schedule = data.schedules[req.params.id];

        if (!schedule) {
            return res.status(404).json({ error: 'Schedule not found' });
        }

        res.json(schedule);
    } catch (error) {
        console.error('Error loading schedule:', error);
        res.status(500).json({ error: 'Failed to load schedule' });
    }
});

// Delete schedule
app.delete('/api/schedule/:id', async (req, res) => {
    try {
        const data = await loadData();

        if (!data.schedules[req.params.id]) {
            return res.status(404).json({ error: 'Schedule not found' });
        }

        delete data.schedules[req.params.id];
        await saveData(data);
        res.json({ success: true, message: 'Schedule deleted successfully' });
    } catch (error) {
        console.error('Error deleting schedule:', error);
        res.status(500).json({ error: 'Failed to delete schedule' });
    }
});

// List all schedules
app.get('/api/schedules', async (req, res) => {
    try {
        const data = await loadData();
        const schedulesList = Object.keys(data.schedules).map(id => ({
            id,
            createdAt: data.schedules[id].createdAt,
            updatedAt: data.schedules[id].updatedAt
        }));
        res.json(schedulesList);
    } catch (error) {
        console.error('Error listing schedules:', error);
        res.status(500).json({ error: 'Failed to list schedules' });
    }
});

// Reset all data
app.post('/api/reset', async (req, res) => {
    try {
        const defaultData = {
            schedules: {},
            settings: {
                staff: [],
                patients: [],
                securityStaff: [],
                nurseInCharge1: '',
                nurseInCharge2: '',
                isDayShift: true,
                isDarkMode: false
            }
        };
        await saveData(defaultData);
        res.json({ success: true, message: 'All data reset successfully' });
    } catch (error) {
        console.error('Error resetting data:', error);
        res.status(500).json({ error: 'Failed to reset data' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve the main application at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'patient-care-horizontal-schedule.html'));
});

// Serve test page
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test-ajax.html'));
});

// API routes info
app.get('/api', (req, res) => {
    res.json({
        message: 'Patient Care Schedule API',
        version: '2.0.0',
        endpoints: {
            'GET /api/health': 'Health check',
            'GET /api/data': 'Load all data',
            'POST /api/settings': 'Save settings',
            'POST /api/schedule': 'Save schedule',
            'GET /api/schedule/:id': 'Load specific schedule',
            'DELETE /api/schedule/:id': 'Delete schedule',
            'GET /api/schedules': 'List all schedules',
            'POST /api/reset': 'Reset all data'
        },
        documentation: 'See README.md for full documentation'
    });
});

// 404 handler for unknown routes
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        availableRoutes: {
            '/': 'Main application',
            '/test': 'AJAX test page',
            '/api': 'API documentation',
            '/api/*': 'API endpoints'
        }
    });
});

// Start server
async function startServer() {
    await ensureDataDirectory();
    app.listen(PORT, () => {
        console.log('🏥 Patient Care Schedule Server');
        console.log('================================');
        console.log(`🌐 Server running on: http://localhost:${PORT}`);
        console.log(`📱 Main App: http://localhost:${PORT}/`);
        console.log(`🔧 Test Page: http://localhost:${PORT}/test`);
        console.log(`💾 Data stored in: ${DATA_FILE}`);
        console.log('================================');
        console.log('Press Ctrl+C to stop the server');
    });
}

startServer().catch(console.error);
