//TESTING ACCESS CONTROL
const allowedKeys = [
    "ATL-CLIENT-1077"
];

const params = new URLSearchParams(window.location.search);
const userKey = params.get("key");

if (!userKey || !allowedKeys.includes(userKey)) {
    window.location.href = "payment.html";
}
