// Simulated health data for demonstration purposes
const healthData = {
    heartRate: 75,
    steps: 5000,
    sleep: 7,
};

// Update UI with initial data
updateUI();

// Function to update UI with health data
function updateUI() {
    document.getElementById('heartRateValue').textContent = healthData.heartRate + ' BPM';
    document.getElementById('stepsValue').textContent = healthData.steps + ' steps';
    document.getElementById('sleepValue').textContent = healthData.sleep + ' hours';

    // Update insights
    updateInsights();
}

// Function to update insights based on health data
function updateInsights() {
    // Example insights (replace with real logic)
    document.getElementById('heartRateInsight').textContent = getHeartRateInsight();
    document.getElementById('stepsInsight').textContent = getStepsInsight();
    document.getElementById('sleepInsight').textContent = getSleepInsight();
}

// Function to simulate updating health data (replace with real-time data fetching)
function updateHealthData() {
    // Simulate data update
    healthData.heartRate = Math.floor(Math.random() * 30) + 70; // Random value between 70 and 100
    healthData.steps += Math.floor(Math.random() * 1000); // Random value between 0 and 1000
    healthData.sleep = Math.floor(Math.random() * 3) + 6; // Random value between 6 and 8

    // Update UI with new data
    updateUI();
}

// Function to provide heart rate insight
function getHeartRateInsight() {
    // Example logic (replace with real insights)
    return healthData.heartRate > 80 ? 'Your heart rate is high. Take a moment to relax.' : 'Your heart rate is within a healthy range.';
}

// Function to provide steps insight
function getStepsInsight() {
    // Example logic (replace with real insights)
    return healthData.steps < 5000 ? 'Consider taking more steps today.' : 'Great job! Youve met your step goal.';
}

// Function to provide sleep insight 
function getSleepInsight() {
    // Example logic (replace with real insights)
    return healthData.sleep < 7 ? 'Try to get more sleep for better overall health.' : 'You had a good night\'s sleep!';
}

// Simulate data update every 5 seconds (replace with real-time data fetching)
setInterval(updateHealthData, 5000);