# 🔧 Site Core Working Rules - Patient Care Schedule System

## 📋 **OVERVIEW**
This document defines the **mandatory core working rules** that must be followed for coding and system development in the Patient Care Schedule Management System.

---

## 🚨 **CRITICAL SAFETY RULES (LEVEL 1 - MANDATORY)**

### **1. PATIENT SAFETY RULES**
- ❗ **RULE**: Patients cannot be left alone or unassigned at ANY time
- ❗ **RULE**: Every patient must have the exact staff ratio required (1:1, 2:1, or 3:1)
- ❗ **RULE**: OBS (Ward Observation) requires exactly ONE staff member at a time
- ❗ **RULE**: All patient assignments must pass final validation before schedule completion

**Code Implementation**: 
- `validateScheduleCompleteness()` function MUST be called after generation
- Emergency assignment protocols activate if normal assignment fails
- Console errors logged for any unassigned patients

### **2. STAFF CONFLICT PREVENTION**
- ❗ **RULE**: Staff CANNOT be assigned to multiple patients/duties simultaneously
- ❗ **RULE**: All assignments must check `isStaffAlreadyAssignedIncludingOBS()` before assignment
- ❗ **RULE**: Conflict validation runs automatically after schedule generation
- ❗ **RULE**: Manual assignments through popup must prevent conflicts

**Code Implementation**:
```javascript
// MANDATORY before any assignment:
if (!isStaffAlreadyAssignedIncludingOBS(staffName, time, schedule)) {
    // Proceed with assignment
} else {
    // PREVENT assignment and show conflict error
}
```

### **3. INPUT VALIDATION RULES**
- ❗ **RULE**: Security staff is mandatory (cannot generate schedule without it)
- ❗ **RULE**: All staff names must be unique (no duplicates allowed)
- ❗ **RULE**: All patient names must be unique (no duplicates allowed)
- ❗ **RULE**: At least one health care worker required
- ❗ **RULE**: At least one patient required

---

## 🔒 **SECURITY & DUTY RULES (LEVEL 2 - BUSINESS LOGIC)**

### **4. SECURITY-ONLY DUTIES**
- 🔐 **RULE**: Only security staff can be assigned KITCHEN duties
- 🔐 **RULE**: Only security staff can be assigned TAKE OUT BINS duties
- 🔐 **RULE**: Security duties must be assigned during restricted hours (first & last 2 hours)
- 🔐 **RULE**: All security-only duties must be assigned (no "Not Assigned" allowed)

**Code Implementation**:
```javascript
const securityOnlyDuties = ["KITCHEN", "TAKE OUT BINS"];
// MUST assign to securityStaff only, cycle through if needed
```

### **5. BREAK SCHEDULING RULES**
- 🔐 **RULE**: Nurses in charge do NOT get scheduled breaks (marked as "N/A")
- 🔐 **RULE**: Day shift: 30-min break (9:00-13:00) + 1-hour break (14:00-17:00)
- 🔐 **RULE**: Night shift: 2-hour continuous breaks in blocks (00:00-02:00, 02:00-04:00, 04:00-06:00)
- 🔐 **RULE**: Break scheduling must consider minimum staffing requirements

### **6. NIGHT SHIFT SPECIFIC RULES**
- 🔐 **RULE**: Cleaning duties only assigned during night shift (`!isDayShift`)
- 🔐 **RULE**: Security duties active during first 2 hours (20:00-22:00) and last 2 hours (06:00-08:00)
- 🔐 **RULE**: Staff continuity allowed during first 2 hours (20:00-22:00) for transition

---

## ⚖️ **FAIR ASSIGNMENT RULES (LEVEL 3 - OPTIMIZATION)**

### **7. STAFF ROTATION & WORKLOAD**
- ⚖️ **RULE**: Staff rotation should be fair based on `staffPatientHistory`
- ⚖️ **RULE**: Avoid assigning same staff to same patient for 3+ consecutive hours
- ⚖️ **RULE**: Exception: First 2 hours of night shift allow continuity (reduced penalties)
- ⚖️ **RULE**: Security staff deprioritized for patient care (unless emergency)

**Code Implementation**:
```javascript
// Continuity penalties:
if (isEarlyNightShift) { // 20:00-22:00
    continuityPenalty = reduced; // Allow continuity
} else {
    continuityPenalty = standard; // Encourage rotation
}
```

### **8. WORKLOAD CALCULATION**
- ⚖️ **RULE**: ALL assignments count toward work hours (patients + OBS + duties)
- ⚖️ **RULE**: OBS assignments MUST increment `staffStats[staff].workHours++`
- ⚖️ **RULE**: Patient assignments MUST increment work hours
- ⚖️ **RULE**: Work hour calculations used for fair rotation

---

## 🎨 **USER INTERFACE RULES (LEVEL 4 - PRESENTATION)**

### **9. CONSISTENT STAFF COLORS**
- 🎨 **RULE**: Each staff member gets unique color assigned via `getStaffColor()`
- 🎨 **RULE**: Colors must be consistent across ALL tables and displays
- 🎨 **RULE**: 32-color palette provides unique colors for staff
- 🎨 **RULE**: Colors persist throughout entire session

### **10. CLEAN TABLE DESIGN**
- 🎨 **RULE**: No decorative background colors in patient assignment cells
- 🎨 **RULE**: Only functional colors (status, security duties, breaks)
- 🎨 **RULE**: Staff names/initials show in their unique colors only
- 🎨 **RULE**: OBS cells use same clean design as patient cells

### **11. INTERACTIVE ASSIGNMENT**
- 🎨 **RULE**: All patient cells clickable for manual reassignment
- 🎨 **RULE**: Popup assignment must validate conflicts before allowing
- 🎨 **RULE**: Clear error messages for user when conflicts attempted
- 🎨 **RULE**: Real-time updates without page reload

---

## 🛠️ **TECHNICAL IMPLEMENTATION RULES (LEVEL 5 - ARCHITECTURE)**

### **12. ASSIGNMENT ORDER (CRITICAL)**
```javascript
// MANDATORY EXECUTION ORDER:
1. assignBreaks(allStaff, staffStats, patients);
2. assignSecurityDuties(securityStaff, staffStats);
3. assignObservationDuties(staff, securityStaff, nurseInCharge1, nurseInCharge2, staffStats);
4. if (!isDayShift) assignCleaningDuties(...);
5. assignPatients(staff, patients, staffStats, continuousAssignmentTracker);
6. validateScheduleCompleteness(schedule, patients);
7. validateScheduleForConflicts(schedule, timeSlots);
```

### **13. DATA STRUCTURE RULES**
- 🛠️ **RULE**: Schedule object structure: `schedule[time].patientAssignments[patient] = [staff]`
- 🛠️ **RULE**: Staff breaks structure: `schedule[time].staffBreaks[staff] = "BREAK_TYPE"`
- 🛠️ **RULE**: Always initialize arrays/objects before assignment
- 🛠️ **RULE**: Maintain `staffPatientHistory` for rotation tracking

### **14. ERROR HANDLING RULES**
- 🛠️ **RULE**: All assignment functions must include conflict prevention
- 🛠️ **RULE**: Emergency protocols for impossible assignments
- 🛠️ **RULE**: Comprehensive console logging for debugging
- 🛠️ **RULE**: User-friendly error messages via `showError()`

### **15. VALIDATION FUNCTIONS (MANDATORY)**
```javascript
// REQUIRED VALIDATION FUNCTIONS:
- validateInputs() // Before schedule generation
- isStaffAlreadyAssignedIncludingOBS() // Before each assignment
- validateScheduleCompleteness() // After generation
- validateScheduleForConflicts() // After generation
- checkStaffSufficiency() // Warn about staffing issues
```

---

## 📊 **PERFORMANCE & OPTIMIZATION RULES**

### **16. MULTI-PASS ASSIGNMENT**
- 📊 **RULE**: Patient assignment uses 3-pass system (optimal → includes breaks → emergency)
- 📊 **RULE**: Earlier passes prioritize fully available staff
- 📊 **RULE**: Emergency pass allows conflicts but logs warnings
- 📊 **RULE**: Exit early if all patients assigned in earlier passes

### **17. MEMORY & STATE MANAGEMENT**
- 📊 **RULE**: Global `window.schedule` for popup access
- 📊 **RULE**: `window.originalStaffStats` for regeneration reference
- 📊 **RULE**: Local storage persistence (downloaded version)
- 📊 **RULE**: Session storage for live demo version

---

## 🔍 **TESTING & VALIDATION REQUIREMENTS**

### **18. AUTOMATED TESTING**
- 🔍 **RULE**: Conflict detection must be testable via `validate-schedule-fix.js`
- 🔍 **RULE**: Mock scenarios for double-assignment testing
- 🔍 **RULE**: Console validation messages for manual verification
- 🔍 **RULE**: Final schedule must pass all validation functions

### **19. MANUAL TESTING PROTOCOLS**
- 🔍 **RULE**: Generate schedule and verify no conflicts in patient table
- 🔍 **RULE**: Verify all security duties assigned (no "Not Assigned")
- 🔍 **RULE**: Verify break assignments appear correctly
- 🔍 **RULE**: Test manual assignment popup conflict prevention

---

## ⚡ **VERSION CONTROL & DOCUMENTATION**

### **20. VERSION TRACKING**
- ⚡ **RULE**: Update version number for ANY rule changes
- ⚡ **RULE**: Document all changes in `SECURITY_CLEANING_RULE_UPDATE.md`
- ⚡ **RULE**: Critical fixes get immediate version increment
- ⚡ **RULE**: Version format: `v3.1.X` with descriptive suffix

### **21. CODE COMMENTS**
- ⚡ **RULE**: Mark critical functions with `// CRITICAL:` prefix
- ⚡ **RULE**: Document rule violations with `// RULE VIOLATION:` prefix  
- ⚡ **RULE**: Mark emergency protocols with `// EMERGENCY:` prefix
- ⚡ **RULE**: Include rule references in function headers

---

## 🚦 **RULE VIOLATION SEVERITY LEVELS**

### **🚨 CRITICAL (System Breaking)**
- Patient safety violations (unassigned patients)
- Staff double-assignment conflicts
- Security vulnerabilities

### **⚠️ HIGH (Business Logic Breaking)**  
- Security duty assignment failures
- Break scheduling violations
- Input validation bypasses

### **⚡ MEDIUM (Optimization Issues)**
- Unfair staff rotation
- Work hour calculation errors
- Performance degradation

### **💡 LOW (UI/UX Issues)**
- Color consistency problems
- Visual design inconsistencies
- Minor usability issues

---

## 📝 **RULE ENFORCEMENT CHECKLIST**

Before any code deployment, verify:
- [ ] No patient left unassigned (Level 1)
- [ ] No staff double-assignments (Level 1)
- [ ] Security duties properly assigned (Level 2)
- [ ] Break rules followed (Level 2)
- [ ] Fair rotation implemented (Level 3)
- [ ] Work hours calculated correctly (Level 3)
- [ ] UI consistency maintained (Level 4)
- [ ] Assignment order correct (Level 5)
- [ ] All validations pass (Level 5)
- [ ] Version incremented (Level 6)

**Remember: These rules ensure patient safety, legal compliance, and system reliability. No exceptions without documented approval.**
