# Patient Care Schedule Generator

**Version 1.5.0** | Last Updated: June 23, 2025

## Overview

The Patient Care Schedule Generator is a web-based application designed to automate staff scheduling for healthcare facilities. This tool creates balanced shift allocations for healthcare workers while ensuring patients always have proper coverage, breaks are distributed fairly, and special duties are assigned appropriately.

## Key Features

- **Shift Management**: Switch between day shift (8AM-8PM) and night shift (8PM-8AM) scheduling
- **Staff Assignment**: Schedule healthcare workers, security staff, and nurses in charge
- **Patient Coverage**: Ensure patients are never left unattended, with configurable staff-to-patient ratios (1:1, 2:1, 3:1)
- **Break Scheduling**: Automatically assign and manage staff breaks with smart interruption handling if staffing becomes critical
=======
# Patient Care Schedule Management System

**Version 2.0.0** | Last Updated: July 1, 2025

## Overview

The Patient Care Schedule Management System is a web-based application with AJAX backend support designed to automate staff scheduling for healthcare facilities. This tool creates balanced shift allocations for healthcare workers while ensuring patients always have proper coverage, breaks are distributed fairly, and special duties are assigned appropriately.

**🆕 NEW: Now with server-side data storage and real-time synchronization!**

## Key Features

- **AJAX Backend**: Data is now stored on a server instead of localStorage
- **Real-time Sync**: All changes are automatically saved to the server
- **Connection Status**: Real-time server connection indicator

- **Interactive Staff Management**: Real-time staff reassignment with visual feedback
- **Shift Management**: Switch between day shift (8AM-8PM) and night shift (8PM-8AM) scheduling
- **Staff Assignment**: Schedule healthcare workers, security staff, and nurses in charge
- **Patient Coverage**: Ensure patients are never left unattended, with configurable staff-to-patient ratios (1:1, 2:1, 3:1)
- **Break Scheduling**: Automatically assign and manage staff breaks with smart interruption handling
>>>>>>> Beta
- **Night Shift Duties**: Automatically distribute cleaning duties during night shifts
- **Staff Rotation Tracking**: Monitor how frequently staff members work with specific patients to ensure fair rotation
- **Light/Dark Mode**: Toggle between light and dark display modes for different environments
- **Local Storage**: Save schedules and preferences in browser storage for easy access

## ⚠️ Important Rules

- **IMPORTANT**: Patients cannot be left alone or unassigned at any time
- **IMPORTANT**: Night shift cleaning duties can only be allocated 2 hours after start and 2 hours before end of shift
- **IMPORTANT**: All staff should be assigned at least one cleaning duty during night shift
- **IMPORTANT**: Kitchen and kitchen-related duties can be assigned to one person
<<<<<<< HEAD
- **IMPORTANT**: Security staff handles specific security duties during restricted hours

## Features

### Day Shift Scheduling
- Automatic 30-minute break assignment between 9:00-13:00
- Automatic 1-hour second break assignment between 14:00-17:00
- Fair distribution of patient assignments

### Night Shift Scheduling
- Automatic 2-hour continuous break assignments
=======
- **IMPORTANT**: Security staff handles specific security duties during restricted hours (first and last 2 hours)

## Features

### Interactive Staff Assignment
- Click on any patient time slot to reassign staff
- Real-time updates to schedule without page reloads
- Visual feedback when making staff changes
- Optimized for touchscreen and desktop interfaces

### Day Shift Scheduling
- Automatic 30-minute break assignment between 9:00-13:00
- Automatic 1-hour second break assignment between 14:00-17:00
- Fair distribution of patient assignments based on workload and rotation history

### Night Shift Scheduling
- Automatic 2-hour continuous break assignments at staggered times
>>>>>>> Beta
- Cleaning duty distribution among available staff
- Security duty assignments during critical hours (first and last 2 hours)

### Statistics and Reporting
<<<<<<< HEAD
- Staff workload analysis
- Break scheduling summary
- Patient care coverage tracking
- Staff rotation history visualization
=======
- Staff workload analysis with visual indicators
- Break scheduling summary with timing details
- Patient care continuity tracking with alerts for excessive consecutive hours
- Staff rotation history visualization to ensure fairness
>>>>>>> Beta

## How to Use

1. Enter healthcare worker names, patient names, and security staff information
<<<<<<< HEAD
2. Select staff-to-patient ratios for each patient
3. Choose between day shift or night shift
4. Click "Generate Schedule" to create the assignment schedule
5. View patient care assignments, staff schedule, and break times
6. Check statistics and staff rotation history

## Technical Details

- Built with pure HTML, CSS, and JavaScript
- No external libraries or frameworks required
- Works in any modern web browser
- Stores data in browser localStorage
=======
2. Select staff-to-patient ratios for each patient (1:1, 2:1, or 3:1)
3. Choose between day shift or night shift using the toggle button
4. Click "Generate Schedule" to create the initial assignment schedule
5. Review the patient care assignments, staff schedule, and break times
6. Click on any patient cell to manually reassign staff as needed
7. Check statistics and staff rotation history at the bottom of the page

## Advanced Features

### Staff Continuity Management
The system monitors how long each staff member continuously works with the same patient and provides warnings when the duration exceeds recommended limits. This promotes patient safety and prevents staff fatigue.

### Dynamic Staff Rotation
The scheduling algorithm considers staff rotation history to ensure fair distribution of patient assignments over time, preventing staff from working with the same patients repeatedly.

### Security Staff Integration
Security personnel have specialized schedules that incorporate both security duties during critical hours and patient care during other times, maximizing resource utilization.

## Technical Details

- Built with HTML, CSS, and JavaScript
- Uses jQuery for enhanced user interaction
- AJAX-like interface for real-time updates without page reloads
- Works in any modern web browser
- Stores data in browser localStorage for persistence
>>>>>>> Beta
- Responsive design for different screen sizes

## Installation

No installation required. Simply open the HTML file in a web browser to use the application.

<<<<<<< HEAD
=======
## Browser Compatibility

- Chrome: Full support
- Firefox: Full support
- Safari: Full support
- Edge: Full support
- Opera: Full support
- Internet Explorer: Not supported

>>>>>>> Beta
## License

MIT License - Copyright (c) 2025 FrancyAlinston

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgments

<<<<<<< HEAD
This project was created to help healthcare facilities optimize their staffing schedules while maintaining high standards of patient care.
=======
This project was created to help healthcare facilities optimize their staffing schedules while maintaining high standards of patient care.

## Change Log

### Version 1.5.0 (June 23, 2025)
- Added interactive staff reassignment functionality
- Implemented real-time updates to schedule
- Fixed continuity tracking algorithm
- Improved dark mode styling
- Enhanced staff rotation visualization

### Version 1.0.0 (March 15, 2025)
- Initial release
- Basic scheduling functionality
- Day and night shift support
- Staff break management
- Patient assignment algorithm

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### 3. Open the Application

Open `patient-care-horizontal-schedule.html` in your web browser. The application will automatically connect to the server.

## API Endpoints

- `GET /api/data` - Load all data (settings + schedules)
- `POST /api/settings` - Save settings (staff, patients, preferences)
- `POST /api/schedule` - Save a specific schedule
- `GET /api/schedule/:id` - Load a specific schedule
- `DELETE /api/schedule/:id` - Delete a schedule
- `GET /api/schedules` - List all schedules
- `POST /api/reset` - Reset all data
- `GET /api/health` - Health check

## Data Storage

Data is stored in `data/schedules.json` file on the server. The structure includes:

```json
{
  "schedules": {
    "schedule_id": {
      "schedule": {...},
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  },
  "settings": {
    "staff": [],
    "patients": [],
    "securityStaff": [],
    "nurseInCharge1": "",
    "nurseInCharge2": "",
    "isDayShift": true,
    "isDarkMode": false
  }
}
```

## Connection Status

- 🟢 **Connected**: Successfully connected to server
- 🔴 **Disconnected**: Cannot reach server

## Error Handling

The application includes comprehensive error handling for:
- Network connectivity issues
- Server errors
- Data validation errors
- Automatic retry mechanisms
>>>>>>> Beta
