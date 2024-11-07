const loadingText = document.getElementById("loading");

document.getElementById("get-solution").addEventListener("click", async () => {
  const today = new Date().toISOString().split("T")[0];
  const url = `https://www.nytimes.com/svc/wordle/v2/${today}.json`;
  const solutionText = document.getElementById("solution");

  loadingText.style.display = "block";
  solutionText.innerText = ""; // Clear previous solution

  try {
    const response = await fetch(url);
    const data = await response.json();
    solutionText.innerText = `Today's solution: ${data.solution}`;
    solutionText.style.color = "#4caf50"; // Green for success
  } catch (error) {
    console.error("Error fetching solution:", error);
    solutionText.innerText = "Error fetching solution.";
    solutionText.style.color = "red"; // Red for errors
  } finally {
    loadingText.style.display = "none";
  }
});
