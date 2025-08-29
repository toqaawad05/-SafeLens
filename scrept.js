  const url = document.getElementById("urlInput").value;
  const resultBox = document.getElementById("result");

  if (!url) {
    resultBox.textContent = "⚠️ Please enter a URL!";
    resultBox.style.color = "orange";
    return;
  }

  if (url.startsWith("https")) {
    resultBox.textContent = "✅ Safe Link";
    resultBox.style.color = "green";
  } else if (url.includes("free") || url.includes("win") || url.includes("offer")) {
    resultBox.textContent = "⚠️ Suspicious Link";
    resultBox.style.color = "orange";
  } else {
    resultBox.textContent = "❌ Unsafe Link";
    resultBox.style.color = "red";
  };
