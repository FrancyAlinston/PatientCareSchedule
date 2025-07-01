#!/bin/bash

echo "Patient Care Schedule Server Setup"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo ""
echo "Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
    echo ""
    echo "🚀 Starting the server..."
    echo "   The server will be available at: http://localhost:3000"
    echo "   Open patient-care-horizontal-schedule.html in your browser"
    echo ""
    npm start
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
