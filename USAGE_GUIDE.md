# 🏥 Patient Care Schedule - Quick Start Guide

## ✅ Server is Running Successfully!

Your Patient Care Schedule server is now running on **http://localhost:3001**

## 🚀 How to Use the System:

### 1. **Access the Application**
- Open your browser and go to: **http://localhost:3001/patient-care-horizontal-schedule.html**
- The page should load without errors

### 2. **Set Up Your Staff and Patients**

#### Add Health Care Workers:
1. In the "Health Care Workers" section, click **"Add Health Care Worker"**
2. Enter staff names (e.g., "John Smith", "Sarah Johnson")
3. Add as many as you need

#### Add Patients:
1. In the "Patient Names" section, click **"Add Patient"**
2. Enter patient names (e.g., "Patient A", "Patient B")
3. Select staff-to-patient ratio (1:1, 2:1, or 3:1)

#### Add Security Staff (Optional):
1. In the "Security Staff" section, click **"Add Security Staff"**
2. Enter security staff name
3. Maximum of 1 security staff allowed

#### Add Nurses in Charge:
1. Fill in "Nurse in Charge 1" and "Nurse in Charge 2" fields

### 3. **Generate the Schedule**
1. Once you've added staff and patients, click **"Generate Schedule"**
2. The system will create the initial schedule automatically
3. You'll see three tables:
   - **Patient Care Schedule** (shows which staff are assigned to which patients)
   - **Staff Schedule** (shows each staff member's assignments and breaks)
   - **Staff Break Hours** (shows break times)

### 4. **🎯 Use the Popup to Manually Adjust Assignments**

#### To Change Staff Assignments:
1. **Click on any patient cell** in the Patient Care Schedule table
2. A popup will appear showing:
   - **Currently Assigned Staff** (if any)
   - **Available Staff** (those not on break or overloaded)
   - **Unavailable Staff** (with reasons why they can't be assigned)

#### In the Popup:
- **Blue buttons** = Available staff (click to assign)
- **Red buttons** = Currently assigned staff (click to remove)
- **Gray text** = Unavailable staff (shows reason)
- **"Remove All Staff"** = Clears all assignments for that patient/time
- **"Cancel"** = Closes popup without changes

### 5. **Real-time Features**
- ✅ **Automatic saving** - All changes are saved to the server automatically
- ✅ **Visual feedback** - Success/error messages appear when you make changes
- ✅ **Smart filtering** - Only shows available staff based on breaks and workload
- ✅ **Instant updates** - Schedule tables update immediately after changes

### 6. **Additional Features**

#### Shift Management:
- Use **"Switch to Night Shift"** to toggle between day (8AM-8PM) and night (8PM-8AM) shifts

#### Dark/Light Mode:
- Click the **🌙/☀️** button to toggle between light and dark themes

#### Reset:
- Use **"Reset"** button to clear all data and start over

## 🔧 Troubleshooting:

### If the popup doesn't open:
1. Make sure you've generated a schedule first
2. Ensure you've added both staff and patients
3. Try clicking directly on the staff initials or "UNASSIGNED" text

### If no staff appear in the popup:
1. Check that you've added staff in the setup sections
2. Verify the staff aren't all on break at that time
3. Make sure staff aren't already assigned to too many patients

### Server Issues:
- If you get connection errors, make sure the server is running with `npm start`
- The server should show "Server running on: http://localhost:3001"

## 📊 Understanding the Schedule:

- **Yellow cells** = Unassigned patients (need staff)
- **Colored cells** = Staff initials (click to modify)
- **BREAK/2ND BREAK** = Staff on break
- **SECURITY** = Security duties
- **FREE** = Staff available but not assigned

## 🎯 Pro Tips:

1. **Start small** - Add 2-3 staff and 2-3 patients to test the system
2. **Use the debug button** - "Debug: Fill Random Names" can populate test data
3. **Check statistics** - Scroll down to see staff workload and rotation stats
4. **Save often** - The system auto-saves, but generating a new schedule updates everything

---

**🎉 Your Patient Care Schedule is ready to use!**

Visit: **http://localhost:3001/patient-care-horizontal-schedule.html**
