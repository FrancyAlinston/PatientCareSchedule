#!/bin/bash
# Alias for update-live-site.sh
# Quick execution script for updating the live site

echo "🚀 Executing live site update..."
echo ""

# Run the main update script
./update-live-site.sh

echo ""
echo "📋 To deploy to live site:"
echo "   git push origin Stable"
echo ""
echo "🌐 GitHub Pages will automatically update at:"
echo "   https://francyalinston.github.io/PatientCareSchedule/"
