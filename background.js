function sendNotification() {
    chrome.storage.sync.get("focusMessage", ({ focusMessage }) => {
        notificationId = "focusReminderNotification_" + Math.floor(Math.random()*9999)
        chrome.notifications.create(notificationId, {
          title: "✅ Don't forget your focus:",
          message: focusMessage,
          type: "basic",
          iconUrl: "/images/get_started16.png",
        });

        chrome.notifications.onClicked.addListener(() => {
            chrome.notifications.clear(notificationId);
        })
    });

    
}
chrome.alarms.onAlarm.addListener(sendNotification);