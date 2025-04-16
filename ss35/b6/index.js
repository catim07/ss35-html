let categories = [
    { id: "DM001", name: "Quần áo", status: "active" },
    { id: "DM002", name: "Kính mắt", status: "inactive" },
    { id: "DM003", name: "Giày dép", status: "active" },
    { id: "DM004", name: "Thời trang nam", status: "inactive" },
    { id: "DM005", name: "Thời trang nữ", status: "inactive" },
    { id: "DM006", name: "Hoa quả", status: "inactive" },
    { id: "DM007", name: "Rau", status: "active" },
    { id: "MD008", name: "Điện thoại", status: "inactive" },
];
function renderTable() {
    const tbody = document.getElementById("categoryTable");
    const filter = document.getElementById("statusFilter").value;
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    tbody.innerHTML = "";

    for (let i = 0; i < categories.length; i++) {
        const cat = categories[i];
        const nameMatch = cat.name.toLowerCase().includes(keyword);

        if (filter === "all") {
            if (nameMatch) {
                addRow(cat);
            }
        } else if (filter === "active") {
            if (cat.status === "active" && nameMatch) {
                addRow(cat);
            }
        } else if (filter === "inactive") {
            if (cat.status === "inactive" && nameMatch) {
                addRow(cat);
            }
        }
    }

    function addRow(cat) {
        const statusText = cat.status === "active"
            ? `<span class="badge-dot dot-active"></span> <span class="status-active">Đang hoạt động</span>`
            : `<span class="badge-dot dot-inactive"></span> <span class="status-inactive">Ngừng hoạt động</span>`;

        tbody.innerHTML += `
            <tr>
                <td>${cat.id}</td>
                <td>${cat.name}</td>
                <td>${statusText}</td>
                <td>
                    <i class="bi bi-trash text-danger"></i>
                    <i class="bi bi-pencil text-warning ms-2"></i>
                </td>
            </tr>
        `;
    }
}


renderTable();