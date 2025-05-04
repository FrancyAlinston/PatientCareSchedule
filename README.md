# Patient Care Schedule Generator

## Overview

The Patient Care Schedule Generator is a web-based application designed to automate staff scheduling for healthcare facilities. This tool creates balanced shift allocations for healthcare workers while ensuring patients always have proper coverage, breaks are distributed fairly, and special duties are assigned appropriately.

## Key Features

- **Shift Management**: Switch between day shift (8AM-8PM) and night shift (8PM-8AM) scheduling
- **Staff Assignment**: Schedule healthcare workers, security staff, and nurses in charge
- **Patient Coverage**: Ensure patients are never left unattended, with configurable staff-to-patient ratios (1:1, 2:1, 3:1)
- **Break Scheduling**: Automatically assign and manage staff breaks with smart interruption handling if staffing becomes critical
- **Night Shift Duties**: Automatically distribute cleaning duties during night shifts
- **Staff Rotation Tracking**: Monitor how frequently staff members work with specific patients to ensure fair rotation
- **Light/Dark Mode**: Toggle between light and dark display modes for different environments
- **Local Storage**: Save schedules and preferences in browser storage for easy access

## ⚠️ Important Rules

- **IMPORTANT**: Patients cannot be left alone or unassigned at any time
- **IMPORTANT**: Night shift cleaning duties can only be allocated 2 hours after start and 2 hours before end of shift
- **IMPORTANT**: All staff should be assigned at least one cleaning duty during night shift
- **IMPORTANT**: Kitchen and kitchen-related duties can be assigned to one person
- **IMPORTANT**: Security staff handles specific security duties during restricted hours

## How to Use

1. Enter healthcare worker names, patient names, and security staff information
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
- Responsive design for different screen sizes

## Installation

No installation required. Simply open the HTML file in a web browser to use the application.

```
git clone https://github.com/yourusername/PatientCareSchedule.git
cd PatientCareSchedule
open patient-care-horizontal-schedule.html
```

## Features

### Day Shift Scheduling
- Automatic 30-minute break assignment between 9:00-13:00
- Automatic 1-hour second break assignment between 14:00-17:00
- Fair distribution of patient assignments

### Night Shift Scheduling
- Automatic 2-hour continuous break assignments
- Cleaning duty distribution among available staff
- Security duty assignments during critical hours (first and last 2 hours)

### Statistics and Reporting
- Staff workload analysis
- Break scheduling summary
- Patient care coverage tracking
- Staff rotation history visualization

## License

MIT License - See LICENSE file for details.

## Acknowledgments

This project was created to help healthcare facilities optimize their staffing schedules while maintaining high standards of patient care.