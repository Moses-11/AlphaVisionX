// ===== AlphaVisionX Access Control =====

const allowedKeys = [
    "AVX-CLIENT-001",
    "AVX-CLIENT-002",
    "AVX-CLIENT-003",
    "AVX-CLIENT-004",
    "AVX-CLIENT-005",
    "AVX-CLIENT-006",
    "AVX-CLIENT-007",
    "AVX-CLIENT-008"
];

const params = new URLSearchParams(window.location.search);
const userKey = params.get("key");

if (!userKey || !allowedKeys.includes(userKey)) {
    window.location.href = "payment.html";
}