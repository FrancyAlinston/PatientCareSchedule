// Quick validation script to test conflict detection
// This can be run in the browser console to verify our fixes

function testConflictDetection() {
    console.log("=== Testing Schedule Conflict Detection ===");

    // Check if the validateScheduleForConflicts function exists
    if (typeof validateScheduleForConflicts === 'function') {
        console.log("✅ validateScheduleForConflicts function found");
    } else {
        console.error("❌ validateScheduleForConflicts function NOT found");
        return false;
    }

    // Check if the enhanced isStaffAlreadyAssignedIncludingOBS exists
    if (typeof isStaffAlreadyAssignedIncludingOBS === 'function') {
        console.log("✅ isStaffAlreadyAssignedIncludingOBS function found");
    } else {
        console.error("❌ isStaffAlreadyAssignedIncludingOBS function NOT found");
        return false;
    }

    // Test with a mock conflict scenario
    const mockSchedule = {
        "04:00-05:00": {
            patientAssignments: {
                "MS": ["JB", "AN"],
                "KMH": ["JB", "CS"],  // JB assigned to both MS and KMH - CONFLICT!
                "OBS": ["DS"]
            }
        }
    };

    console.log("Testing mock conflict scenario...");
    const result = validateScheduleForConflicts(mockSchedule, ["04:00-05:00"]);

    if (result === false) {
        console.log("✅ Conflict detection working - correctly identified JB double assignment");
        return true;
    } else {
        console.error("❌ Conflict detection failed - did not catch JB double assignment");
        return false;
    }
}

// Test the isStaffAlreadyAssignedIncludingOBS function specifically
function testStaffConflictCheck() {
    console.log("=== Testing Staff Conflict Check Function ===");

    const mockSchedule = {
        "04:00-05:00": {
            patientAssignments: {
                "MS": ["JB"],
                "KMH": ["CS"],
                "OBS": ["DS"]
            }
        }
    };

    // Test 1: JB should be detected as already assigned to MS
    const test1 = isStaffAlreadyAssignedIncludingOBS("JB", "04:00-05:00", mockSchedule);
    console.log("Test 1 - JB assigned to MS, checking if detected:", test1 ? "✅ PASS" : "❌ FAIL");

    // Test 2: AN should NOT be detected as assigned (available)
    const test2 = isStaffAlreadyAssignedIncludingOBS("AN", "04:00-05:00", mockSchedule);
    console.log("Test 2 - AN not assigned, should be available:", test2 ? "❌ FAIL" : "✅ PASS");

    // Test 3: DS should be detected as assigned to OBS
    const test3 = isStaffAlreadyAssignedIncludingOBS("DS", "04:00-05:00", mockSchedule);
    console.log("Test 3 - DS assigned to OBS, checking if detected:", test3 ? "✅ PASS" : "❌ FAIL");

    return test1 && !test2 && test3;
}

// Run tests
console.log("Starting validation tests...");
const conflictTest = testConflictDetection();
const staffTest = testStaffConflictCheck();

if (conflictTest && staffTest) {
    console.log("🎉 ALL TESTS PASSED - Schedule conflict detection is working!");
} else {
    console.error("🚨 TESTS FAILED - Schedule conflict detection needs attention");
}
