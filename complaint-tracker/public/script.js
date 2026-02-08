/* NAVIGATION */
function goUser() {
  window.location.href = "index.html";
}

function goAdmin() {
  window.location.href = "admin.html";
}

/* STUDENT */
function submitComplaint() {
  fetch("/complaints", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      subject: subject.value,
      description: desc.value
    })
  })
    .then(res => res.json())
    .then(() => {
      alert("Complaint Submitted");
      name.value = "";
      email.value = "";
      subject.value = "";
      desc.value = "";
    });
}

/* ---------------- ADMIN ---------------- */

let allComplaints = [];

/* Load complaints when admin page opens */
if (window.location.pathname.includes("admin")) {
  loadComplaints();
}

function loadComplaints() {
  fetch("/complaints")
    .then(res => res.json())
    .then(data => {
      allComplaints = data;
      updateDashboard();
      renderComplaints(allComplaints); // show all by default
    });
}

/* Dashboard counts */
function updateDashboard() {
  totalCount.innerText = allComplaints.length;
  pendingCount.innerText = allComplaints.filter(c => c.status === "pending").length;
  resolvedCount.innerText = allComplaints.filter(c => c.status === "resolved").length;
  rejectedCount.innerText = allComplaints.filter(c => c.status === "rejected").length;
}

/* Filter buttons */
function filterStatus(status) {
  if (status === "all") {
    renderComplaints(allComplaints);
  } else {
    const filtered = allComplaints.filter(c => c.status === status);
    renderComplaints(filtered);
  }
}

/* Render complaint cards */
function renderComplaints(data) {
  if (data.length === 0) {
    list.innerHTML = "<p>No complaints found.</p>";
    return;
  }

  list.innerHTML = data.map(c => `
    <div class="card">
      <b>${c.subject}</b>
      <p>${c.description}</p>
      <small>Status: <b>${c.status}</b></small><br><br>

      <select onchange="updateStatus(${c.id}, this.value)">
        <option value="pending" ${c.status === "pending" ? "selected" : ""}>Pending</option>
        <option value="resolved" ${c.status === "resolved" ? "selected" : ""}>Resolved</option>
        <option value="rejected" ${c.status === "rejected" ? "selected" : ""}>Rejected</option>
      </select>

      <button onclick="deleteComplaint(${c.id})">Delete</button>
    </div>
  `).join("");
}

/* Update status */
function updateStatus(id, status) {
  fetch(`/complaints/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  }).then(loadComplaints);
}

/* Delete complaint */
function deleteComplaint(id) {
  fetch(`/complaints/${id}`, { method: "DELETE" })
    .then(loadComplaints);
}