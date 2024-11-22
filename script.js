// Detect Deadlock
document.getElementById("detect-btn").addEventListener("click", () => {
    const processId = document.getElementById("process-id").value;
    const resourceId = document.getElementById("resource-id").value;

    if (!processId || !resourceId) {
        document.getElementById("detection-result").innerText = "⚠️ Please provide valid inputs.";
        document.getElementById("detection-result").style.color = "red";
        return;
    }

    // Simulate AI detection (randomized for demo)
    const isDeadlock = Math.random() > 0.5;
    const message = isDeadlock
        ? "🔴 Deadlock Detected! Immediate action is required."
        : "✅ No Deadlock Detected. System is running smoothly.";

    document.getElementById("detection-result").innerText = message;
    document.getElementById("detection-result").style.color = isDeadlock ? "red" : "green";

    // Generate graph
    generateDeadlockGraph(isDeadlock);
});

// Prevent Deadlock
document.querySelectorAll(".ai-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
        const action = event.target.dataset.action;

        let message;
        if (action === "Analyze Patterns") {
            message = "🧠 AI analyzed historical data and found potential deadlock patterns.";
        } else if (action === "Recommend Actions") {
            message = "📋 Recommended actions: Avoid circular wait, use priority scheduling.";
        }

        document.getElementById("prevention-result").innerText = message;
        document.getElementById("prevention-result").style.color = "blue";
    });
});

// Resolve Deadlock
document.getElementById("resolve-btn").addEventListener("click", () => {
    const strategy = document.getElementById("strategy-selection").value;

    let message;
    if (strategy === "Thread Termination") {
        message = "⚠️ Deadlock resolved using the 'Thread Termination' strategy. Terminated a conflicting thread.";
    } else if (strategy === "Resource Preemption") {
        message = "🔄 Deadlock resolved using 'Resource Preemption'. Resources reassigned.";
    } else if (strategy === "Priority Adjustment") {
        message = "⬆️ Deadlock resolved using 'Priority Adjustment'. Increased process priority.";
    } else if (strategy === "Rollback Strategy") {
        message = "🔄 Deadlock resolved using 'Rollback Strategy'. Rolled back processes to a safe state.";
    } else {
        message = "⬆️ Deadlock resolved using 'Boost Priority'. Increased priority to resolve the deadlock.";
    }

    document.getElementById("resolution-result").innerText = message;
    document.getElementById("resolution-result").style.color = "green";
});

// Graph visualization using Chart.js
function generateDeadlockGraph(isDeadlock) {
    const ctx = document.getElementById("deadlock-graph").getContext("2d");

    const data = {
        labels: ["Process 1", "Process 2", "Process 3", "Process 4"],
        datasets: [{
            label: 'Resource Allocation',
            data: [isDeadlock ? 70 : 30, isDeadlock ? 40 : 50, isDeadlock ? 60 : 20, 10],
            backgroundColor: isDeadlock ? 'rgba(255, 99, 132, 0.2)' : 'rgba(75, 192, 192, 0.2)',
            borderColor: isDeadlock ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'pie',
        data: data,
    };

    new Chart(ctx, config);
}

// Historical Graph for resource allocation
function generateHistoricalGraph() {
    const ctx = document.getElementById("historical-graph").getContext("2d");

    const data = {
        labels: ["Time 1", "Time 2", "Time 3", "Time 4"],
        datasets: [{
            label: 'Resource Allocation Over Time',
            data: [10, 20, 30, 40],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'line',
        data: data,
    };

    new Chart(ctx, config);
}

generateHistoricalGraph();
