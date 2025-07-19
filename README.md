# Patient Care Schedule Management System

**Version 3.0.0** | Last Updated: July 19, 2025

## Overview

The Patient Care Schedule Management System is a **fully standalone** web-based application designed to automate staff scheduling for healthcare facilities. This tool creates balanced shift allocations for healthcare workers while ensuring patients always have proper coverage, breaks are distributed fairly, and special duties are assigned appropriately.

**🆕 NEW: Completely standalone - no server or external dependencies required!**

## Key Features

- **Fully Standalone**: No server, internet connection, or external dependencies required
- **Local Storage**: All data is saved in your browser's local storage for persistence
- **Offline Ready**: Works completely offline once loaded in your browser

- **Interactive Staff Management**: Real-time staff reassignment with visual feedback and clickable cells
- **Shift Management**: Switch between day shift (8AM-8PM) and night shift (8PM-8AM) scheduling
- **Staff Assignment**: Schedule healthcare workers, security staff, and nurses in charge
- **Patient Coverage**: Ensure patients are never left unattended, with configurable staff-to-patient ratios (1:1, 2:1, 3:1)
- **OBS (Ward Observation)**: Special assignment for observation duties with one-staff-at-a-time rule
- **Break Scheduling**: Automatically assign and manage staff breaks with smart interruption handling
- **Night Shift Duties**: Automatically distribute cleaning duties during night shifts with interactive reassignment
- **Staff Rotation Tracking**: Monitor how frequently staff members work with specific patients to ensure fair rotation
- **Light/Dark Mode**: Toggle between light and dark display modes with adaptive color schemes
- **Manual Override**: Click any cell to manually reassign staff with intuitive popup interface

## ⚠️ Important Rules

- **IMPORTANT**: Patients cannot be left alone or unassigned at any time
- **IMPORTANT**: Night shift cleaning duties can only be allocated 2 hours after start and 2 hours before end of shift
- **IMPORTANT**: All staff should be assigned at least one cleaning duty during night shift
- **IMPORTANT**: Kitchen and kitchen-related duties can be assigned to one person
- **IMPORTANT**: Security staff handles specific security duties during restricted hours (first and last 2 hours)

## Features

### Interactive Staff Assignment
- Click on any patient time slot to reassign staff with an intuitive popup interface
- Click on cleaning duty assignments during night shift to reassign duties
- Real-time updates to schedule without page reloads
- Visual feedback with color-coded cells showing assignment status
- Staff workload indicators in assignment popups
- Optimized for touchscreen and desktop interfaces

### OBS (Ward Observation) Management
- Special patient category for observation duties
- One staff member assigned at a time (unlike regular patients)
- Easy reassignment through clicking the OBS time slots
- Clear visual distinction from regular patient assignments

### Day Shift Scheduling
- Automatic 30-minute break assignment between 9:00-13:00
- Automatic 1-hour second break assignment between 14:00-17:00
- Fair distribution of patient assignments based on workload and rotation history

### Night Shift Scheduling
- Automatic 2-hour continuous break assignments at staggered times (00:00, 02:00, 04:00)
- Interactive cleaning duty distribution among available staff
- Click on cleaning duties in the summary table to reassign duties
- Security duty assignments during critical hours (first and last 2 hours)
- Adaptive color scheme for cleaning duties table that matches light/dark mode

### Statistics and Reporting
- Staff workload analysis with visual indicators
- Break scheduling summary with timing details
- Patient care continuity tracking with alerts for excessive consecutive hours
- Staff rotation history visualization to ensure fairness

## How to Use

1. **Open the Application**: Simply open `patient-care-horizontal-schedule.html` in any web browser
2. **Enter Staff Information**: Add healthcare worker names, patient names, and security staff
3. **Configure Patient Care**: Select staff-to-patient ratios for each patient (1:1, 2:1, or 3:1)
4. **Choose Shift Type**: Toggle between day shift or night shift using the toggle button
5. **Generate Initial Schedule**: Click "Generate Schedule" to create the automated assignment
6. **Review and Adjust**: Check patient care assignments, staff schedules, and break times
7. **Manual Adjustments**: Click on any patient cell to manually reassign staff
8. **Night Shift Duties**: For night shifts, click on cleaning duty assignments to redistribute
9. **Monitor Statistics**: Review staff rotation history and workload balance at the bottom

### Manual Staff Assignment
- **Patient Assignments**: Click any cell in the patient schedule table
- **Cleaning Duties**: Click on "Assigned To" cells in the Night Shift Cleaning Duties Summary
- **OBS Assignment**: Click on OBS time slots to assign/reassign observation staff

## Advanced Features

### Staff Continuity Management
The system monitors how long each staff member continuously works with the same patient and provides warnings when the duration exceeds recommended limits. This promotes patient safety and prevents staff fatigue.

### Dynamic Staff Rotation
The scheduling algorithm considers staff rotation history to ensure fair distribution of patient assignments over time, preventing staff from working with the same patients repeatedly.

### Security Staff Integration
Security personnel have specialized schedules that incorporate both security duties during critical hours and patient care during other times, maximizing resource utilization.

## Technical Details

- **Single File Application**: Everything is contained in one HTML file
- **No Dependencies**: No external libraries, CDNs, or server required
- **Inline jQuery**: Minimal jQuery implementation built into the file
- **Local Storage**: All data persists in browser localStorage
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Cross-Platform**: Compatible with all modern operating systems
- **Offline First**: Works completely offline once loaded

## Installation

**No installation required!**

1. Download the `patient-care-horizontal-schedule.html` file
2. Open it in any modern web browser
3. Start using the application immediately

The application is completely self-contained and portable.

## Browser Compatibility

- Chrome: Full support
- Firefox: Full support
- Safari: Full support
- Edge: Full support
- Opera: Full support
- Internet Explorer: Not supported

## License

MIT License - Copyright (c) 2025 FrancyAlinston

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgments

This project was created to help healthcare facilities optimize their staffing schedules while maintaining high standards of patient care.

## Change Log

### Version 3.0.0 (July 19, 2025)
- **🎉 MAJOR UPDATE**: Converted to fully standalone single HTML file
- **Removed all external dependencies**: No server, CDN, or internet required
- **Merged Alpha and Beta branches**: Combined all features into one stable version
- **Improved cleaning duties**: Interactive reassignment with adaptive color scheme
- **Enhanced OBS management**: Better observation duty assignment interface
- **jQuery inline**: Replaced external jQuery CDN with minimal inline implementation
- **Adaptive theming**: All tables now follow consistent light/dark mode color schemes
- **Removed obsolete files**: Cleaned up server.js, api.js, package.json, node_modules
- **Performance optimizations**: Faster loading and better responsiveness

### Version 2.0.0 (July 1, 2025)
- Added server-side data storage
- Implemented AJAX backend support
- Real-time synchronization features
- Connection status indicators

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

## File Structure

```
PatientCareSchedule/
├── .gitignore                                # Git ignore file for clean repository
├── patient-care-horizontal-schedule.html    # Main application file (standalone)
├── README.md                                 # This documentation
└── Documentation/                            # Additional documentation files
    ├── ASSIGNMENT_ENHANCEMENTS.md
    ├── BACKUP_SYSTEM.md
    ├── MASTER_BACKUP_COMPLETE.md
    ├── MASTER_BACKUP_DOCUMENTATION.md
    ├── OBS_IMPLEMENTATION_SUMMARY.md
    └── UNASSIGNED_FIX_SUMMARY.md
```

## Data Persistence

All application data is stored in your browser's localStorage, including:
- Staff names and roles
- Patient names and care ratios
- Generated schedules
- User preferences (dark mode, shift type)
- Staff rotation history

**Note**: Data persists between browser sessions but is specific to each browser/device.

## Troubleshooting

### Application Won't Load
- Ensure you're using a modern web browser (Chrome, Firefox, Safari, Edge)
- Check that JavaScript is enabled in your browser
- Try opening the file in a different browser

### Data Not Saving
- Check that localStorage is enabled in your browser
- Ensure you're not in private/incognito mode
- Clear browser cache and try again

### Schedule Generation Issues
- Verify all required fields are filled (staff, patients, security staff)
- Ensure staff count meets or exceeds patient care requirements
- Check for duplicate names in staff or patient lists