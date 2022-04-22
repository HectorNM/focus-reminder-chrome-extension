let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");

let focusMessageEl = document.getElementById("focusMessage");
let reminderIntervalNumberEl = document.getElementById("reminderIntervalNumber");

startButton.addEventListener("click", async () => {
    let focusMessage = focusMessageEl.value;
    chrome.storage.sync.set({ focusMessage })

    let frequencyValue = parseInt(reminderIntervalNumberEl.value);
    chrome.storage.sync.set({ frequencyValue });
    chrome.alarms.create('focusReminderAlarm', {
        periodInMinutes: frequencyValue,
    })
});

chrome.storage.sync.get("focusMessage", ({ focusMessage }) => {
    focusMessageEl.value = focusMessage;
});

chrome.storage.sync.get("frequencyValue", ({ frequencyValue }) => {
    reminderIntervalNumberEl.value = frequencyValue;
});


stopButton.addEventListener("click", async () => {
    chrome.alarms.clearAll();
})