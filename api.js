// AJAX utility functions for Patient Care Schedule
class ScheduleAPI {
    constructor(baseURL = 'http://localhost:3001/api') {
        this.baseURL = baseURL;
    }

    // Generic AJAX request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`API request failed: ${endpoint}`, error);
            throw error;
        }
    }

    // Load all data (settings + schedules)
    async loadData() {
        return await this.request('/data');
    }

    // Save settings (staff, patients, preferences)
    async saveSettings(settings) {
        return await this.request('/settings', {
            method: 'POST',
            body: JSON.stringify(settings)
        });
    }

    // Save schedule
    async saveSchedule(scheduleId, schedule) {
        return await this.request('/schedule', {
            method: 'POST',
            body: JSON.stringify({ scheduleId, schedule })
        });
    }

    // Load specific schedule
    async loadSchedule(scheduleId) {
        return await this.request(`/schedule/${scheduleId}`);
    }

    // Delete schedule
    async deleteSchedule(scheduleId) {
        return await this.request(`/schedule/${scheduleId}`, {
            method: 'DELETE'
        });
    }

    // List all schedules
    async listSchedules() {
        return await this.request('/schedules');
    }

    // Reset all data
    async resetData() {
        return await this.request('/reset', {
            method: 'POST'
        });
    }

    // Health check
    async healthCheck() {
        return await this.request('/health');
    }
}

// Export for use in the main application
window.ScheduleAPI = ScheduleAPI;
