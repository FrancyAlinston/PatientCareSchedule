#!/bin/bash
# Script to update live site after merging changes

echo "🔄 Updating live site (index.html) from main app file..."

# Copy the main file to index.html for GitHub Pages
cp patient-care-horizontal-schedule.html index.html

echo "🔒 Converting to sessionStorage for live demo (data clears on browser close)..."

# Replace all localStorage references with sessionStorage in index.html
sed -i 's/localStorage\.getItem/sessionStorage.getItem/g' index.html
sed -i 's/localStorage\.setItem/sessionStorage.setItem/g' index.html
sed -i 's/localStorage\.removeItem/sessionStorage.removeItem/g' index.html
sed -i 's/localStorage\.clear/sessionStorage.clear/g' index.html

# Update function names and comments
sed -i 's/saveToLocalStorage/saveToSessionStorage/g' index.html
sed -i 's/loadFromLocalStorage/loadFromSessionStorage/g' index.html

# Update comments to reflect session storage
sed -i 's/localStorage/sessionStorage/g' index.html
sed -i 's/Local Storage/Session Storage/g' index.html

# Update console messages
sed -i 's/Data saved to localStorage/DEMO: Data saved to sessionStorage (clears when browser closes)/g' index.html
sed -i 's/Data loaded successfully from localStorage/DEMO: Data loaded successfully from sessionStorage (temporary)/g' index.html
sed -i 's/No data found in localStorage/DEMO: No data found in sessionStorage (data clears on new session)/g' index.html
sed -i 's/Error saving to localStorage/Error saving to sessionStorage/g' index.html
sed -i 's/Error loading from localStorage/Error loading from sessionStorage/g' index.html

# Update error messages
sed -i 's/Your browser storage might be full or restricted/Session storage might be restricted. This is a demo - data is temporary./g' index.html
sed -i 's/Failed to save your changes\./Failed to save your changes. This is a demo - data is temporary./g' index.html
sed -i 's/Failed to load your saved data\./Failed to load your saved data. This is a demo with temporary storage./g' index.html

echo "📢 Adding demo banner..."

# Add demo banner if not already present
if ! grep -q "LIVE DEMO" index.html; then
    # Insert demo banner after <body> tag
    sed -i '/<body>/a \    <!-- DEMO BANNER -->\n    <div style="background: linear-gradient(90deg, #ff6b6b, #4ecdc4); color: white; text-align: center; padding: 8px; font-weight: bold; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">\n        🌐 LIVE DEMO - Data clears when you close browser | <a href="https://github.com/FrancyAlinston/PatientCareSchedule/releases" style="color: white; text-decoration: underline;">Download for permanent storage</a>\n    </div>' index.html
    echo "   ✅ Demo banner added"
else
    echo "   ℹ️  Demo banner already exists"
fi

echo "🧹 Adding data reset on page refresh..."

# Add script to clear sessionStorage on page load (after existing onload)
if ! grep -q "sessionStorage.clear()" index.html; then
    # Find the window.onload function and add sessionStorage.clear() at the beginning
    sed -i '/window\.onload = function() {/a \    // Clear any previous session data for fresh demo experience\n    sessionStorage.clear();\n    console.log("DEMO: Session storage cleared for fresh start");' index.html
    echo "   ✅ Data reset on refresh added"
else
    echo "   ℹ️  Data reset already implemented"
fi

# Stage and commit the changes
git add index.html

echo ""
echo "📋 Changes made to index.html:"
echo "   🔄 Synced with patient-care-horizontal-schedule.html"
echo "   🔒 Converted localStorage → sessionStorage"
echo "   📢 Added demo banner"
echo "   🧹 Added data reset on page refresh"
echo "   💬 Updated all messages for demo context"
echo ""

git commit -m "🌐 Auto-update live site with session storage

- Synced index.html with patient-care-horizontal-schedule.html
- Converted all localStorage to sessionStorage for privacy
- Added demo banner with download link
- Implemented data reset on page refresh
- Updated all messages for demo context
- Live site now clears data on browser close AND refresh"

echo "✅ Live site updated! Push to deploy:"
echo "   git push origin Stable"
echo ""
echo "🌐 Live site will have:"
echo "   • Data clears when browser closes (sessionStorage)"
echo "   • Data clears on page refresh (for clean demos)"
echo "   • Demo banner with download link"
echo "   • All demo-appropriate messaging"
