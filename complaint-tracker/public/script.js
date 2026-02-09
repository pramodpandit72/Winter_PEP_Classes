const goUser = () => window.location.href = "index.html";
const goAdmin = () => window.location.href = "admin.html";

function submitComplaint() {
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const descInput = document.getElementById("desc");

  fetch("/complaints", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      subject: subjectInput.value,
      description: descInput.value
    })
  })
    .then(res => res.json())
    .then(() => {
      alert("Complaint Submitted");
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      descInput.value = "";
    });
}

let allComplaints = [];

if (window.location.pathname.includes("admin")) {
  loadComplaints();
}

function loadComplaints() {
  fetch("/complaints")
    .then(res => res.json())
    .then(data => {
      allComplaints = data;
      updateDashboard();
      renderComplaints(allComplaints); 
    });
}

function updateDashboard() {
  totalCount.innerText = allComplaints.length;
  pendingCount.innerText = allComplaints.filter(c => c.status === "pending").length;
  resolvedCount.innerText = allComplaints.filter(c => c.status === "resolved").length;
  rejectedCount.innerText = allComplaints.filter(c => c.status === "rejected").length;
}

function filterStatus(status) {
  if (status === "all") {
    renderComplaints(allComplaints);
  } else {
    const filtered = allComplaints.filter(c => c.status === status);
    renderComplaints(filtered);
  }
}

function renderComplaints(data) {
  if (data.length === 0) {
    list.innerHTML = "<p style='text-align:center;color:#666;'>No complaints found.</p>";
    return;
  }

  list.innerHTML = data.map(c => {
    const statusClass = c.status === 'resolved' ? 'status-resolved' : 
                        c.status === 'rejected' ? 'status-rejected' : 'status-pending';
    return `
    <div class="card">
      <p><strong>Subject:</strong> ${c.subject}</p>
      <p><strong>Name:</strong> ${c.name}</p>
      <p><strong>Email:</strong> ${c.email}</p>
      <p><strong>Description:</strong> ${c.description}</p>
      <p><strong>Status:</strong> <span class="${statusClass}">${c.status.toUpperCase()}</span></p>

      <select onchange="updateStatus(${c.id}, this.value)" style="padding:8px; border-radius:6px;border:1px solid #ddd;margin-right:10px;">
        <option value="pending" ${c.status === "pending" ? "selected" : ""}>Pending</option>
        <option value="resolved" ${c.status === "resolved" ? "selected" : ""}>Resolved</option>
        <option value="rejected" ${c.status === "rejected" ? "selected" : ""}>Rejected</option>
      </select>

      <button class="delete-btn" onclick="deleteComplaint(${c.id})">Delete</button>
    </div>
  `}).join("");
}

function updateStatus(id, status) {
  fetch(`/complaints/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  }).then(loadComplaints);
}

function deleteComplaint(id) {
  fetch(`/complaints/${id}`, { method: "DELETE" })
    .then(loadComplaints);
}