// 1. XMLHttpRequest object बनाओ
const xhr = new XMLHttpRequest();

// 2. Request को open करो (GET method, और URL)
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// 3. जब response आए तो क्या करना है?
xhr.onload = function () {
  if (xhr.status === 200) {
    // Success - data मिला
    const data = JSON.parse(xhr.responseText); // JSON को object में बदला
    document.getElementById("result").textContent = JSON.stringify(
      data,
      null,
      2
    );
  } else {
    // अगर कुछ error हो
    document.getElementById("result").textContent = "Error fetching data.";
  }
};

// 4. Error handling (optional)
xhr.onerror = function () {
  document.getElementById("result").textContent = "Network error.";
};

// 5. Request को भेज दो
xhr.send();
