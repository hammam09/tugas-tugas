    /** STATE MANAGEMENT Sederhana **/
    let appState = [];

    // DOM Elements
    const studentForm = document.getElementById('studentForm');
    const tableBody = document.getElementById('tableBody');
    const emptyState = document.getElementById('emptyState');
    const emptyStateText = document.getElementById('emptyStateText');
    
    // Summary DOM Elements
    const statTotal = document.getElementById('stat-total');
    const statAvgAge = document.getElementById('stat-avg-age');
    const statClasses = document.getElementById('stat-classes');
    const toastContainer = document.getElementById('toastContainer');

    // Filter DOM Elements
    const filterAge = document.getElementById('filterAge');
    const filterMajor = document.getElementById('filterMajor');

    /* FUNGSI UTILITAS: Mengupdate UI Summary Cards & Empty State */
    function updateDashboardSummary() {
        const total = appState.length;
        statTotal.textContent = total;

        if (total === 0) {
            statAvgAge.textContent = '0';
            statClasses.textContent = '0';
            emptyStateText.textContent = "Belum ada data siswa. Gunakan formulir di samping untuk menambahkan.";
            emptyState.style.display = 'flex';
        } else {
            emptyState.style.display = 'none';
            
            // Hitung Rata-rata Umur
            const sumAge = appState.reduce((sum, item) => sum + item.age, 0);
            statAvgAge.textContent = (sumAge / total).toFixed(1);

            // Hitung Unique Classes
            const uniqueClasses = new Set(appState.map(item => item.class.toLowerCase().trim()));
            statClasses.textContent = uniqueClasses.size;
        }

        // Jalankan filter ulang jika ada penambahan/perubahan agar sinkron
        applyFilters();
    }

    /**
     * FUNGSI FILTER: Menyaring Tampilan Tabel secara Dinamis (Real-time DOM API)
     */
    function applyFilters() {
        const selectedAgeGroup = filterAge.value;
        const searchMajorKeyword = filterMajor.value.toLowerCase().trim();

        let visibleRowsCount = 0;

        // Iterasi baris tabel langsung di DOM
        const rows = tableBody.querySelectorAll('tr');
        rows.forEach(row => {
            const id = row.getAttribute('data-id');
            const student = appState.find(item => item.id === id);

            if (!student) return;

            // Logika Penyaringan Usia
            let matchesAge = false;
            if (selectedAgeGroup === 'all') {
                matchesAge = true;
            } else if (selectedAgeGroup === 'under15' && student.age < 15) {
                matchesAge = true;
            } else if (selectedAgeGroup === '15-17' && student.age >= 15 && student.age <= 17) {
                matchesAge = true;
            } else if (selectedAgeGroup === 'above17' && student.age > 17) {
                matchesAge = true;
            }

            // Logika Penyaringan Jurusan (Berdasarkan teks Kolom Kelas)
            const matchesMajor = student.class.toLowerCase().includes(searchMajorKeyword);

            // Terapkan ke DOM: Sembunyikan atau Tampilkan baris secara spesifik tanpa me-render ulang
            if (matchesAge && matchesMajor) {
                row.style.display = '';
                visibleRowsCount++;
            } else {
                row.style.display = 'none';
            }
        });

        // Tangani Empty State khusus jika hasil filter tidak ditemukan
        if (appState.length > 0) {
            if (visibleRowsCount === 0) {
                emptyStateText.textContent = "Tidak ditemukan data siswa yang cocok dengan filter.";
                emptyState.style.display = 'flex';
            } else {
                emptyState.style.display = 'none';
            }
        }
    }

    // Pasang event listener untuk Filter Input
    filterAge.addEventListener('change', applyFilters);
    filterMajor.addEventListener('input', applyFilters);

    /**
     * FUNGSI UTILITAS: Pemicu Toast Notification
     */
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = 'fa-circle-check';
        if (type === 'danger') icon = 'fa-circle-xmark';
        if (type === 'warning') icon = 'fa-triangle-exclamation';

        toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => toast.remove(), 3300);
    }

    /**
     * VALIDASI FORM INPUT
     */
    function validateForm(name, age, sClass) {
        let isValid = true;
        document.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));

        if (!name.trim()) {
            document.getElementById('group-name').classList.add('error');
            isValid = false;
        }
        if (!age || parseInt(age) <= 0) {
            document.getElementById('group-age').classList.add('error');
            isValid = false;
        }
        if (!sClass.trim()) {
            document.getElementById('group-class').classList.add('error');
            isValid = false;
        }

        return isValid;
    }

    /**
     * FUNGSI TAMBAH DATA (CREATE)
     */
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameInput = document.getElementById('studentName');
        const ageInput = document.getElementById('studentAge');
        const classInput = document.getElementById('studentClass');

        if (!validateForm(nameInput.value, ageInput.value, classInput.value)) return;

        const id = Date.now().toString(); 
        const studentData = {
            id: id,
            name: nameInput.value.trim(),
            age: parseInt(ageInput.value),
            class: classInput.value.trim()
        };

        appState.push(studentData);

        const tr = document.createElement('tr');
        tr.setAttribute('data-id', id);
        tr.innerHTML = `
            <td class="cell-name">${studentData.name}</td>
            <td class="cell-age">${studentData.age}</td>
            <td class="cell-class">${studentData.class}</td>
            <td style="text-align: center;">
                <div class="action-group" style="justify-content: center;">
                    <button class="btn btn-action btn-edit" data-action="edit"><i class="fa-solid fa-pen"></i> Edit</button>
                    <button class="btn btn-action btn-delete" data-action="delete"><i class="fa-solid fa-trash"></i> Hapus</button>
                </div>
            </td>
        `;

        tableBody.appendChild(tr);

        studentForm.reset();
        updateDashboardSummary();
        showToast(`Berhasil menambahkan data ${studentData.name}`);
    });

    /**
     * EVENT DELEGATION
     */
    tableBody.addEventListener('click', function(e) {
        const targetBtn = e.target.closest('button');
        if (!targetBtn) return;

        const action = targetBtn.getAttribute('data-action');
        const tr = targetBtn.closest('tr');
        const studentId = tr.getAttribute('data-id');

        if (action === 'delete') {
            deleteRow(tr, studentId);
        } else if (action === 'edit') {
            switchToEditMode(tr, studentId);
        } else if (action === 'cancel') {
            switchToViewMode(tr, studentId);
        } else if (action === 'save') {
            saveInlineEdit(tr, studentId);
        }
    });

    /**
     * FUNGSI HAPUS DATA (DELETE)
     */
    function deleteRow(tr, id) {
        const studentIndex = appState.findIndex(item => item.id === id);
        if (studentIndex === -1) return;

        const studentName = appState[studentIndex].name;
        appState.splice(studentIndex, 1);
        tr.remove();

        updateDashboardSummary();
        showToast(`Data ${studentName} telah dihapus`, 'danger');
    }

    /**
     * FUNGSI MODAL INLINE: Ubah ke Mode Edit
     */
    function switchToEditMode(tr, id) {
        const student = appState.find(item => item.id === id);
        if (!student) return;

        const nameCell = tr.querySelector('.cell-name');
        const ageCell = tr.querySelector('.cell-age');
        const classCell = tr.querySelector('.cell-class');
        const actionCell = tr.querySelectorAll('td')[3];

        nameCell.innerHTML = `<input type="text" class="form-control edit-name" value="${student.name}">`;
        ageCell.innerHTML = `<input type="number" class="form-control edit-age" value="${student.age}" min="1">`;
        classCell.innerHTML = `<input type="text" class="form-control edit-class" value="${student.class}">`;

        actionCell.innerHTML = `
            <div class="action-group" style="justify-content: center;">
                <button class="btn btn-action btn-save" data-action="save"><i class="fa-solid fa-check"></i> Simpan</button>
                <button class="btn btn-action btn-cancel" data-action="cancel"><i class="fa-solid fa-xmark"></i> Batal</button>
            </div>
        `;
    }

    /**
     * FUNGSI MODAL INLINE: Mengembalikan ke Mode View
     */
    function switchToViewMode(tr, id) {
        const student = appState.find(item => item.id === id);
        if (!student) return;

        tr.querySelector('.cell-name').textContent = student.name;
        tr.querySelector('.cell-age').textContent = student.age;
        tr.querySelector('.cell-class').textContent = student.class;

        const actionCell = tr.querySelectorAll('td')[3];
        actionCell.innerHTML = `
            <div class="action-group" style="justify-content: center;">
                <button class="btn btn-action btn-edit" data-action="edit"><i class="fa-solid fa-pen"></i> Edit</button>
                <button class="btn btn-action btn-delete" data-action="delete"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        `;
    }

    /**
     * FUNGSI SIMPAN PEMBARUAN INLINE (UPDATE)
     */
    function saveInlineEdit(tr, id) {
        const student = appState.find(item => item.id === id);
        if (!student) return;

        const inputName = tr.querySelector('.edit-name');
        const inputAge = tr.querySelector('.edit-age');
        const inputClass = tr.querySelector('.edit-class');

        if (!inputName.value.trim() || !inputAge.value || parseInt(inputAge.value) <= 0 || !inputClass.value.trim()) {
            showToast('Gagal memperbarui. Pastikan semua kolom terisi dengan benar!', 'warning');
            return;
        }

        student.name = inputName.value.trim();
        student.age = parseInt(inputAge.value);
        student.class = inputClass.value.trim();

        switchToViewMode(tr, id);
        updateDashboardSummary();
        showToast('Data siswa berhasil diperbarui');
    }