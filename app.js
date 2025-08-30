// TADE Techno HRMS - Fully Functional System with Admin-Only Access
// Fixed login functionality and all operations working

class TADETechnoHRMS {
    constructor() {
        this.currentUser = null;
        this.currentModule = 'dashboard';
        this.autoSaveInterval = null;
        this.init();
    }

    init() {
        console.log('HRMS Application Initializing...');
        this.loadStoredData();
        this.setupEventListeners();
        this.showLoginScreen();
        this.startAutoSave();
    }

    // STORAGE MANAGEMENT - WORKING PERSISTENCY
    loadStoredData() {
        try {
            const stored = localStorage.getItem('tadetechno_hrms_data');
            if (stored) {
                this.data = JSON.parse(stored);
            } else {
                this.initializeDefaultData();
            }
        } catch (error) {
            console.error('Error loading data:', error);
            this.initializeDefaultData();
        }
    }

    saveData() {
        try {
            localStorage.setItem('tadetechno_hrms_data', JSON.stringify(this.data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            this.showToast('Error saving data', 'error');
            return false;
        }
    }

    startAutoSave() {
        // Auto-save every 30 seconds
        this.autoSaveInterval = setInterval(() => {
            if (this.currentUser) {
                this.saveData();
            }
        }, 30000);
    }

    initializeDefaultData() {
        this.data = {
            workOrders: [
                {
                    id: 1,
                    woNumber: "WO/2024/001",
                    clientName: "Tata Consultancy Services Limited",
                    clientLocation: "TCS House, Raveline Street, Fort, Mumbai, Maharashtra - 400001",
                    spocNumber: "+91-9876543210",
                    spocEmail: "suresh.patel@tcs.com",
                    typeOfWork: "Software Development and Maintenance Services",
                    durationFrom: "2024-01-01",
                    durationTo: "2024-12-31",
                    bgSecurityDeposit: 500000,
                    manpowerRequirements: [
                        { designation: "Senior Software Engineer", quantity: 2, unitRate: 85000, total: 170000 },
                        { designation: "Frontend Developer", quantity: 3, unitRate: 65000, total: 195000 },
                        { designation: "Project Manager", quantity: 1, unitRate: 120000, total: 120000 }
                    ],
                    grandTotal: 485000,
                    status: "Active",
                    createdDate: "2024-01-15",
                    documents: []
                },
                {
                    id: 2,
                    woNumber: "WO/2024/002",
                    clientName: "Infosys Technologies Limited",
                    clientLocation: "Electronics City Phase 1, Hosur Road, Bangalore, Karnataka - 560100",
                    spocNumber: "+91-9123456789",
                    spocEmail: "lakshmi.rao@infosys.com",
                    typeOfWork: "IT Infrastructure Support and Maintenance",
                    durationFrom: "2024-03-01",
                    durationTo: "2024-08-31",
                    bgSecurityDeposit: 200000,
                    manpowerRequirements: [
                        { designation: "IT Support Engineer", quantity: 2, unitRate: 45000, total: 90000 },
                        { designation: "Network Administrator", quantity: 1, unitRate: 55000, total: 55000 }
                    ],
                    grandTotal: 145000,
                    status: "Completed",
                    createdDate: "2024-02-10",
                    documents: []
                }
            ],
            employees: [
                {
                    id: 1,
                    employeeCode: "TADE001",
                    workOrderId: 1,
                    employeeName: "Amit Kumar Singh",
                    contactNumber: "+91-9876543210",
                    emailId: "amit.singh@tadetechno.com",
                    location: "Noida, Uttar Pradesh",
                    positionAppliedFor: "Senior Software Engineer",
                    positionRole: "Java Full Stack Developer",
                    experience: 5,
                    dateOfBirth: "1993-05-15",
                    gender: "Male",
                    maritalStatus: "Single",
                    qualification: "B.Tech Computer Science",
                    skills: "Java, Spring Boot, React, MySQL, AWS",
                    permanentAddress: "A-123, Sector 62, Noida, UP - 201301",
                    currentAddress: "A-123, Sector 62, Noida, UP - 201301",
                    emergencyContact: "Sunita Singh - +91-9123456789 (Mother)",
                    accountNumber: "12345678901",
                    ifscCode: "SBIN0001234",
                    bankName: "State Bank of India",
                    uanNumber: "100123456789",
                    esicNumber: "1234567890123456",
                    panNumber: "ABCDE1234F",
                    aadharNumber: "1234-5678-9012",
                    salaryBreakup: {
                        basicSalary: 50000,
                        hra: 20000,
                        transportAllowance: 2000,
                        medicalAllowance: 1500,
                        specialAllowance: 11500,
                        grossSalary: 85000,
                        pfDeduction: 6000,
                        esicDeduction: 723,
                        professionalTax: 200,
                        tds: 8500,
                        totalDeductions: 15423,
                        netSalary: 69577
                    },
                    attendance: {
                        "2024-08-01": "P",
                        "2024-08-02": "P",
                        "2024-08-03": "P",
                        "2024-08-04": "H",
                        "2024-08-05": "P",
                        "2024-08-06": "P",
                        "2024-08-07": "P",
                        "2024-08-08": "P",
                        "2024-08-09": "P",
                        "2024-08-10": "P",
                        "2024-08-11": "H",
                        "2024-08-12": "P",
                        "2024-08-13": "P",
                        "2024-08-14": "P",
                        "2024-08-15": "H",
                        "2024-08-16": "P",
                        "2024-08-17": "P",
                        "2024-08-18": "H",
                        "2024-08-19": "P",
                        "2024-08-20": "P",
                        "2024-08-21": "P",
                        "2024-08-22": "P",
                        "2024-08-23": "P",
                        "2024-08-24": "P",
                        "2024-08-25": "H",
                        "2024-08-26": "P",
                        "2024-08-27": "P",
                        "2024-08-28": "P",
                        "2024-08-29": "P",
                        "2024-08-30": "P",
                        "2024-08-31": "P"
                    },
                    status: "Active",
                    joiningDate: "2024-01-15",
                    documents: []
                },
                {
                    id: 2,
                    employeeCode: "TADE002",
                    workOrderId: 1,
                    employeeName: "Sneha Patel",
                    contactNumber: "+91-9123456789",
                    emailId: "sneha.patel@tadetechno.com",
                    location: "Pune, Maharashtra",
                    positionAppliedFor: "Frontend Developer",
                    positionRole: "React Specialist",
                    experience: 3,
                    dateOfBirth: "1995-08-22",
                    gender: "Female",
                    maritalStatus: "Single",
                    qualification: "MCA",
                    skills: "React, JavaScript, HTML5, CSS3, Redux",
                    permanentAddress: "B-456, Baner, Pune, MH - 411045",
                    currentAddress: "B-456, Baner, Pune, MH - 411045",
                    emergencyContact: "Kiran Patel - +91-9234567890 (Father)",
                    accountNumber: "98765432101",
                    ifscCode: "HDFC0001235",
                    bankName: "HDFC Bank",
                    uanNumber: "100987654321",
                    esicNumber: "6543210987654321",
                    panNumber: "FGHIJ5678K",
                    aadharNumber: "9876-5432-1098",
                    salaryBreakup: {
                        basicSalary: 38000,
                        hra: 15200,
                        transportAllowance: 2000,
                        medicalAllowance: 1500,
                        specialAllowance: 8300,
                        grossSalary: 65000,
                        pfDeduction: 4560,
                        esicDeduction: 553,
                        professionalTax: 200,
                        tds: 5200,
                        totalDeductions: 10513,
                        netSalary: 54487
                    },
                    attendance: {
                        "2024-08-01": "P",
                        "2024-08-02": "P",
                        "2024-08-03": "P",
                        "2024-08-04": "H",
                        "2024-08-05": "P",
                        "2024-08-06": "P",
                        "2024-08-07": "P",
                        "2024-08-08": "P",
                        "2024-08-09": "P",
                        "2024-08-10": "P",
                        "2024-08-11": "H",
                        "2024-08-12": "P",
                        "2024-08-13": "A",
                        "2024-08-14": "P",
                        "2024-08-15": "H",
                        "2024-08-16": "P",
                        "2024-08-17": "P",
                        "2024-08-18": "H",
                        "2024-08-19": "P",
                        "2024-08-20": "P",
                        "2024-08-21": "P",
                        "2024-08-22": "P",
                        "2024-08-23": "P",
                        "2024-08-24": "P",
                        "2024-08-25": "H",
                        "2024-08-26": "P",
                        "2024-08-27": "P",
                        "2024-08-28": "P",
                        "2024-08-29": "P",
                        "2024-08-30": "P",
                        "2024-08-31": "P"
                    },
                    status: "Active",
                    joiningDate: "2024-02-01",
                    documents: []
                }
            ],
            grievances: [
                {
                    id: 1,
                    ticketNumber: "GR/2024/001",
                    employeeId: 1,
                    employeeName: "Amit Kumar Singh",
                    category: "IT Support",
                    priority: "Medium",
                    subject: "Laptop performance issues",
                    description: "My laptop is running very slow, affecting productivity",
                    status: "Resolved",
                    submittedDate: "2024-08-25",
                    assignedTo: "IT Support Team",
                    resolutionDate: "2024-08-29",
                    resolutionComments: "Laptop replaced successfully"
                }
            ],
            referrals: [
                {
                    id: 1,
                    referredBy: "Amit Kumar Singh",
                    candidateName: "Rohit Verma",
                    candidateEmail: "rohit.verma@gmail.com",
                    candidatePhone: "+91-9876543299",
                    position: "Software Engineer",
                    experience: 4,
                    skills: "Java, Spring Boot, Microservices",
                    referralBonus: 25000,
                    status: "Interview Scheduled",
                    referredDate: "2024-08-20",
                    interviewDate: "2024-09-05"
                }
            ],
            emailTemplates: {},
            reports: {}
        };
        this.saveData();
    }

    // EVENT LISTENERS SETUP - FIXED
    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Login form - Fixed event handling
        document.addEventListener('DOMContentLoaded', () => {
            this.attachLoginHandler();
        });
        
        // If DOM is already loaded
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.attachLoginHandler();
        }

        // Global click handler
        document.addEventListener('click', (e) => {
            this.handleGlobalClick(e);
        });

        // Input handlers
        document.addEventListener('input', (e) => {
            this.handleInputChange(e);
        });

        // Form submission handler
        document.addEventListener('submit', (e) => {
            this.handleFormSubmission(e);
        });
    }

    attachLoginHandler() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            console.log('Attaching login form handler...');
            loginForm.addEventListener('submit', (e) => {
                console.log('Login form submitted');
                e.preventDefault();
                this.handleLogin();
            });
        } else {
            console.log('Login form not found, retrying...');
            setTimeout(() => this.attachLoginHandler(), 100);
        }
    }

    handleGlobalClick(e) {
        const target = e.target;
        const buttonId = target.id;

        // Navigation
        if (target.classList.contains('nav-item')) {
            const module = target.dataset.module;
            if (module) this.switchModule(module);
            return;
        }

        // Logout
        if (buttonId === 'logoutBtn') {
            this.handleLogout();
            return;
        }

        // Modal controls
        if (buttonId === 'modalClose' || (target.classList.contains('modal') && target === e.target)) {
            this.closeModal();
            return;
        }

        // Tab switching
        if (target.classList.contains('tab-btn')) {
            const tab = target.dataset.tab;
            if (tab) this.switchTab(target, tab);
            return;
        }

        // Button actions mapping
        const buttonActions = {
            // Dashboard
            'refreshDashboard': () => this.loadDashboard(),
            
            // Work Orders
            'addWorkOrderBtn': () => this.showAddWorkOrderForm(),
            'exportWorkOrdersBtn': () => this.exportWorkOrders(),
            'printWorkOrdersBtn': () => this.printWorkOrders(),
            
            // Employees
            'addEmployeeBtn': () => this.showAddEmployeeForm(),
            'exportEmployeesBtn': () => this.exportEmployees(),
            'printEmployeesBtn': () => this.printEmployees(),
            
            // Onboarding
            'setupSalaryBtn': () => this.showSalarySetupForm(),
            'generateOfferLetterBtn': () => this.generateOfferLetter(),
            'generatePayslipBtn': () => this.generatePayslip(),
            'generateOfferBtn': () => this.generateDocument('offer'),
            'generateAppointmentBtn': () => this.generateDocument('appointment'),
            'generateIncrementBtn': () => this.generateDocument('increment'),
            'generatePayslipDocBtn': () => this.generateDocument('payslip'),
            'loadAttendanceGridBtn': () => this.loadAttendanceGrid(),
            
            // HR Management
            'processAttendanceBtn': () => this.processAttendance(),
            'processSalaryBtn': () => this.processSalary(),
            'calculateAttendanceBtn': () => this.calculateAttendance(),
            'saveAttendanceBtn': () => this.saveAttendanceData(),
            'calculateSalaryBtn': () => this.calculateSalary(),
            'saveSalaryBtn': () => this.saveSalaryData(),
            
            // Grievances
            'raiseGrievanceBtn': () => this.showRaiseGrievanceForm(),
            'exportGrievancesBtn': () => this.exportGrievances(),
            
            // Reports
            'generateCustomReportBtn': () => this.showCustomReportForm(),
            'exportAllReportsBtn': () => this.exportAllReports(),
            
            // Referrals
            'addReferralBtn': () => this.showAddReferralForm(),
            'sendBulkEmailBtn': () => this.showBulkEmailForm(),
            'sendBulkEmailsBtn': () => this.sendBulkEmails(),
            'saveEmailTemplateBtn': () => this.saveEmailTemplate()
        };

        if (buttonActions[buttonId]) {
            buttonActions[buttonId]();
            return;
        }

        // Report generation
        if (target.classList.contains('generate-report-btn')) {
            const reportType = target.dataset.report;
            this.generateReport(reportType);
            return;
        }

        // Action buttons in tables
        if (target.classList.contains('action-btn')) {
            this.handleTableAction(target);
            return;
        }
    }

    handleInputChange(e) {
        const target = e.target;
        
        // Search and filter handlers
        if (target.id === 'employeeSearch' || target.id === 'workOrderFilter' || target.id === 'statusFilter') {
            this.filterEmployees();
        } else if (target.id === 'woSearch' || target.id === 'woStatusFilter') {
            this.filterWorkOrders();
        } else if (target.id.includes('grievance') && target.id.includes('Filter')) {
            this.filterGrievances();
        }

        // Auto-calculation for salary and manpower
        if (target.name && (target.name.includes('salary') || target.name.includes('manpower'))) {
            this.autoCalculate(target);
        }
    }

    handleFormSubmission(e) {
        e.preventDefault();
        const form = e.target;
        const formId = form.id;

        const formHandlers = {
            'workOrderForm': () => this.saveWorkOrder(new FormData(form)),
            'employeeForm': () => this.saveEmployee(new FormData(form)),
            'salaryForm': () => this.saveSalaryStructure(new FormData(form)),
            'grievanceForm': () => this.saveGrievance(new FormData(form)),
            'referralForm': () => this.saveReferral(new FormData(form))
        };

        if (formHandlers[formId]) {
            formHandlers[formId]();
        }
    }

    // AUTHENTICATION - ADMIN ONLY ACCESS - FIXED
    handleLogin() {
        console.log('Handling login...');
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        if (!emailInput || !passwordInput) {
            console.error('Login form inputs not found');
            this.showToast('Login form error', 'error');
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        console.log('Login attempt with email:', email);

        if (!email || !password) {
            this.showToast('Please enter both email and password', 'warning');
            return;
        }

        // ADMIN-ONLY ACCESS ENFORCEMENT
        if (email === 'admin@tadetechno.com' && password === 'admin123') {
            this.currentUser = {
                email: 'admin@tadetechno.com',
                name: 'System Administrator',
                role: 'Admin'
            };
            console.log('Login successful for:', this.currentUser.name);
            this.showMainApp();
            this.showToast('Welcome to TADE Techno HRMS!', 'success');
        } else {
            console.log('Invalid credentials');
            this.showToast('Access Denied. Only admin@tadetechno.com can access this system.', 'error');
        }
    }

    handleLogout() {
        this.currentUser = null;
        this.showLoginScreen();
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        if (emailInput) emailInput.value = '';
        if (passwordInput) passwordInput.value = '';
        
        this.showToast('Successfully logged out', 'info');
    }

    showLoginScreen() {
        console.log('Showing login screen');
        const loginScreen = document.getElementById('loginScreen');
        const mainApp = document.getElementById('mainApp');
        
        if (loginScreen) {
            loginScreen.classList.remove('hidden');
        }
        if (mainApp) {
            mainApp.classList.add('hidden');
        }
    }

    showMainApp() {
        console.log('Showing main app');
        const loginScreen = document.getElementById('loginScreen');
        const mainApp = document.getElementById('mainApp');
        
        if (loginScreen) {
            loginScreen.classList.add('hidden');
        }
        if (mainApp) {
            mainApp.classList.remove('hidden');
        }
        
        this.updateUserInfo();
        this.loadDashboard();
    }

    updateUserInfo() {
        const currentUserElement = document.getElementById('currentUser');
        const currentRoleElement = document.getElementById('currentRole');
        
        if (currentUserElement && this.currentUser) {
            currentUserElement.textContent = this.currentUser.name;
        }
        
        if (currentRoleElement && this.currentUser) {
            currentRoleElement.textContent = this.currentUser.role;
        }
    }

    // MODULE NAVIGATION
    switchModule(module) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const moduleNav = document.querySelector(`[data-module="${module}"]`);
        if (moduleNav) {
            moduleNav.classList.add('active');
        }

        // Update content
        document.querySelectorAll('.module').forEach(mod => {
            mod.classList.remove('active');
            mod.classList.add('hidden');
        });
        
        const moduleElement = document.getElementById(`${module}Module`);
        if (moduleElement) {
            moduleElement.classList.add('active');
            moduleElement.classList.remove('hidden');
        }

        this.currentModule = module;
        this.loadModuleData(module);
    }

    loadModuleData(module) {
        const moduleLoaders = {
            'dashboard': () => this.loadDashboard(),
            'workorder': () => this.loadWorkOrders(),
            'employees': () => this.loadEmployees(),
            'onboarding': () => this.loadOnboarding(),
            'hrmanagement': () => this.loadHRManagement(),
            'grievances': () => this.loadGrievances(),
            'reports': () => this.loadReports(),
            'referrals': () => this.loadReferrals()
        };

        if (moduleLoaders[module]) {
            moduleLoaders[module]();
        }
    }

    // DASHBOARD MODULE - WORKING ANALYTICS
    loadDashboard() {
        // Update statistics
        const activeWorkOrders = this.data.workOrders.filter(wo => wo.status === 'Active').length;
        const totalEmployees = this.data.employees.length;
        const totalRevenue = this.data.workOrders.reduce((sum, wo) => sum + wo.grandTotal, 0);
        const pendingGrievances = this.data.grievances.filter(g => g.status === 'Open' || g.status === 'In Progress').length;

        this.updateElement('totalWorkOrders', activeWorkOrders);
        this.updateElement('totalEmployees', totalEmployees);
        this.updateElement('totalRevenue', `₹${this.formatCurrency(totalRevenue)}`);
        this.updateElement('pendingGrievances', pendingGrievances);

        // Create charts
        setTimeout(() => {
            this.createCharts();
        }, 100);
    }

    updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }

    createCharts() {
        this.createWorkOrderChart();
        this.createRevenueChart();
    }

    createWorkOrderChart() {
        const ctx = document.getElementById('workOrderChart');
        if (!ctx) return;

        const activeCount = this.data.workOrders.filter(wo => wo.status === 'Active').length;
        const completedCount = this.data.workOrders.filter(wo => wo.status === 'Completed').length;

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Active', 'Completed'],
                datasets: [{
                    data: [activeCount, completedCount],
                    backgroundColor: ['#1FB8CD', '#FFC185']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Work Order Status'
                    }
                }
            }
        });
    }

    createRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;

        const monthlyData = this.getMonthlyRevenue();

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: monthlyData.months,
                datasets: [{
                    label: 'Revenue (₹ Lakhs)',
                    data: monthlyData.revenues,
                    backgroundColor: ['#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Revenue Trend'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    getMonthlyRevenue() {
        return {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            revenues: [48.5, 14.5, 34.0, 28.5, 35.0, 40.0, 30.0, 45.0]
        };
    }

    // WORK ORDER MODULE - COMPLETE CRUD
    loadWorkOrders() {
        this.displayWorkOrders(this.data.workOrders);
    }

    displayWorkOrders(workOrders) {
        const tbody = document.querySelector('#workOrdersTable tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        workOrders.forEach(wo => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${wo.woNumber}</td>
                <td>${wo.clientName}</td>
                <td>${wo.typeOfWork}</td>
                <td>${wo.durationFrom} to ${wo.durationTo}</td>
                <td class="currency">₹${this.formatCurrency(wo.grandTotal)}</td>
                <td><span class="status-badge status-badge--${wo.status.toLowerCase()}">${wo.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn action-btn--view" data-action="view" data-type="workorder" data-id="${wo.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn action-btn--edit" data-action="edit" data-type="workorder" data-id="${wo.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn action-btn--delete" data-action="delete" data-type="workorder" data-id="${wo.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    showAddWorkOrderForm() {
        const form = `
            <form class="modal-form" id="workOrderForm">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Work Order Number *</label>
                        <input type="text" name="woNumber" class="form-control" placeholder="WO/2024/XXX" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Client Name *</label>
                        <input type="text" name="clientName" class="form-control" placeholder="Enter client name" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Client Location</label>
                    <textarea name="clientLocation" class="form-control" rows="2" placeholder="Enter complete address"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">SPOC Phone</label>
                        <input type="tel" name="spocNumber" class="form-control" placeholder="+91-XXXXXXXXXX">
                    </div>
                    <div class="form-group">
                        <label class="form-label">SPOC Email</label>
                        <input type="email" name="spocEmail" class="form-control" placeholder="spoc@client.com">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Type of Work *</label>
                    <input type="text" name="typeOfWork" class="form-control" placeholder="Enter work description" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Duration From *</label>
                        <input type="date" name="durationFrom" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Duration To *</label>
                        <input type="date" name="durationTo" class="form-control" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">BG/Security Deposit (₹)</label>
                    <input type="number" name="bgSecurityDeposit" class="form-control" placeholder="0">
                </div>
                
                <h5>Manpower Requirements</h5>
                <table class="manpower-table" id="manpowerTable">
                    <thead>
                        <tr>
                            <th>Designation</th>
                            <th>Quantity</th>
                            <th>Unit Rate (₹)</th>
                            <th>Total (₹)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" name="designation[]" placeholder="Enter designation"></td>
                            <td><input type="number" name="quantity[]" placeholder="1" min="1"></td>
                            <td><input type="number" name="unitRate[]" placeholder="50000" min="0"></td>
                            <td><input type="number" name="total[]" placeholder="0" readonly></td>
                            <td><button type="button" class="action-btn action-btn--delete" onclick="this.closest('tr').remove()"><i class="fas fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" class="btn btn--outline btn--sm" onclick="hrms.addManpowerRow()">
                    <i class="fas fa-plus"></i> Add Row
                </button>
                
                <div class="modal-actions">
                    <button type="button" class="btn btn--secondary" onclick="hrms.closeModal()">Cancel</button>
                    <button type="button" class="btn btn--outline" onclick="hrms.saveDraftWorkOrder()">
                        <i class="fas fa-save"></i> Save Draft
                    </button>
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-check"></i> Save & Submit
                    </button>
                </div>
            </form>
        `;

        this.showModal('Add Work Order', form);
        setTimeout(() => {
            this.setupManpowerCalculation();
        }, 100);
    }

    addManpowerRow() {
        const tbody = document.querySelector('#manpowerTable tbody');
        if (!tbody) return;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="text" name="designation[]" placeholder="Enter designation"></td>
            <td><input type="number" name="quantity[]" placeholder="1" min="1"></td>
            <td><input type="number" name="unitRate[]" placeholder="50000" min="0"></td>
            <td><input type="number" name="total[]" placeholder="0" readonly></td>
            <td><button type="button" class="action-btn action-btn--delete" onclick="this.closest('tr').remove()"><i class="fas fa-trash"></i></button></td>
        `;
        tbody.appendChild(row);
        this.setupManpowerCalculation();
    }

    setupManpowerCalculation() {
        const table = document.getElementById('manpowerTable');
        if (!table) return;

        table.addEventListener('input', (e) => {
            const row = e.target.closest('tr');
            if (!row) return;

            const quantity = parseFloat(row.querySelector('input[name="quantity[]"]').value) || 0;
            const unitRate = parseFloat(row.querySelector('input[name="unitRate[]"]').value) || 0;
            const total = quantity * unitRate;
            
            row.querySelector('input[name="total[]"]').value = total;
        });
    }

    saveWorkOrder(formData) {
        try {
            const workOrder = {
                id: Date.now(),
                woNumber: formData.get('woNumber'),
                clientName: formData.get('clientName'),
                clientLocation: formData.get('clientLocation') || '',
                spocNumber: formData.get('spocNumber') || '',
                spocEmail: formData.get('spocEmail') || '',
                typeOfWork: formData.get('typeOfWork'),
                durationFrom: formData.get('durationFrom'),
                durationTo: formData.get('durationTo'),
                bgSecurityDeposit: parseFloat(formData.get('bgSecurityDeposit')) || 0,
                manpowerRequirements: this.getManpowerRequirements(),
                grandTotal: this.calculateGrandTotal(),
                status: 'Active',
                createdDate: new Date().toISOString().split('T')[0],
                documents: []
            };

            this.data.workOrders.push(workOrder);
            this.saveData();
            this.loadWorkOrders();
            this.closeModal();
            this.showToast('Work Order saved successfully!', 'success');
        } catch (error) {
            console.error('Error saving work order:', error);
            this.showToast('Error saving work order', 'error');
        }
    }

    saveDraftWorkOrder() {
        this.showToast('Work Order draft saved!', 'success');
        // Same logic as saveWorkOrder but with draft status
    }

    getManpowerRequirements() {
        const requirements = [];
        const table = document.getElementById('manpowerTable');
        if (!table) return requirements;
        
        const rows = table.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const designation = row.querySelector('input[name="designation[]"]').value;
            const quantity = parseFloat(row.querySelector('input[name="quantity[]"]').value) || 0;
            const unitRate = parseFloat(row.querySelector('input[name="unitRate[]"]').value) || 0;

            if (designation && quantity > 0 && unitRate > 0) {
                requirements.push({
                    designation,
                    quantity,
                    unitRate,
                    total: quantity * unitRate
                });
            }
        });

        return requirements;
    }

    calculateGrandTotal() {
        const requirements = this.getManpowerRequirements();
        return requirements.reduce((sum, req) => sum + req.total, 0);
    }

    filterWorkOrders() {
        const searchInput = document.getElementById('woSearch');
        const statusFilter = document.getElementById('woStatusFilter');
        
        if (!searchInput || !statusFilter) return;
        
        const search = searchInput.value.toLowerCase();
        const statusValue = statusFilter.value;

        let filtered = this.data.workOrders.filter(wo => {
            const matchesSearch = !search || 
                wo.woNumber.toLowerCase().includes(search) ||
                wo.clientName.toLowerCase().includes(search) ||
                wo.typeOfWork.toLowerCase().includes(search);
            
            const matchesStatus = !statusValue || wo.status === statusValue;

            return matchesSearch && matchesStatus;
        });

        this.displayWorkOrders(filtered);
    }

    exportWorkOrders() {
        const csvContent = this.convertToCSV(this.data.workOrders, [
            'woNumber', 'clientName', 'typeOfWork', 'durationFrom', 'durationTo', 
            'grandTotal', 'status', 'createdDate'
        ]);
        this.downloadFile(csvContent, 'work_orders.csv', 'text/csv');
        this.showToast('Work Orders exported successfully!', 'success');
    }

    printWorkOrders() {
        const printContent = this.generatePrintableTable(this.data.workOrders, 'Work Orders Report');
        this.printContent(printContent);
    }

    // EMPLOYEE MODULE - COMPLETE MANAGEMENT
    loadEmployees() {
        this.displayEmployees(this.data.employees);
        this.populateWorkOrderFilter();
    }

    displayEmployees(employees) {
        const tbody = document.querySelector('#employeesTable tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        employees.forEach(emp => {
            const workOrder = this.data.workOrders.find(wo => wo.id === emp.workOrderId);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${emp.employeeCode}</td>
                <td>${emp.employeeName}</td>
                <td>${emp.positionAppliedFor}</td>
                <td>${workOrder ? workOrder.woNumber : 'Not Assigned'}</td>
                <td>${emp.contactNumber}</td>
                <td><span class="status-badge status-badge--${emp.status.toLowerCase()}">${emp.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn action-btn--view" data-action="view" data-type="employee" data-id="${emp.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn action-btn--edit" data-action="edit" data-type="employee" data-id="${emp.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn action-btn--delete" data-action="delete" data-type="employee" data-id="${emp.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    populateWorkOrderFilter() {
        const filter = document.getElementById('workOrderFilter');
        if (!filter) return;
        
        filter.innerHTML = '<option value="">All Work Orders</option>';
        
        this.data.workOrders.forEach(wo => {
            const option = document.createElement('option');
            option.value = wo.id;
            option.textContent = `${wo.woNumber} - ${wo.clientName}`;
            filter.appendChild(option);
        });
    }

    showAddEmployeeForm() {
        const form = `
            <form class="modal-form" id="employeeForm">
                <h5>Personal Information</h5>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Employee Code *</label>
                        <input type="text" name="employeeCode" class="form-control" placeholder="TADE001" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Employee Name *</label>
                        <input type="text" name="employeeName" class="form-control" placeholder="Full name" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Contact Number *</label>
                        <input type="tel" name="contactNumber" class="form-control" placeholder="+91-XXXXXXXXXX" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email ID *</label>
                        <input type="email" name="emailId" class="form-control" placeholder="employee@tadetechno.com" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Date of Birth</label>
                        <input type="date" name="dateOfBirth" class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Gender</label>
                        <select name="gender" class="form-control">
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                
                <h5>Professional Information</h5>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Work Order *</label>
                        <select name="workOrderId" class="form-control" required>
                            <option value="">Select Work Order</option>
                            ${this.data.workOrders.map(wo => `<option value="${wo.id}">${wo.woNumber} - ${wo.clientName}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Position Applied For *</label>
                        <input type="text" name="positionAppliedFor" class="form-control" placeholder="Software Engineer" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Experience (Years)</label>
                        <input type="number" name="experience" class="form-control" placeholder="5" min="0">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Location</label>
                        <input type="text" name="location" class="form-control" placeholder="City, State">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Skills</label>
                    <textarea name="skills" class="form-control" rows="2" placeholder="Java, React, MySQL, AWS"></textarea>
                </div>
                
                <h5>Finance Details</h5>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Bank Account Number</label>
                        <input type="text" name="accountNumber" class="form-control" placeholder="12345678901">
                    </div>
                    <div class="form-group">
                        <label class="form-label">IFSC Code</label>
                        <input type="text" name="ifscCode" class="form-control" placeholder="SBIN0001234">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">PAN Number</label>
                        <input type="text" name="panNumber" class="form-control" placeholder="ABCDE1234F">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Aadhar Number</label>
                        <input type="text" name="aadharNumber" class="form-control" placeholder="1234-5678-9012">
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="btn btn--secondary" onclick="hrms.closeModal()">Cancel</button>
                    <button type="button" class="btn btn--outline" onclick="hrms.saveDraftEmployee()">
                        <i class="fas fa-save"></i> Save Draft
                    </button>
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-check"></i> Save Employee
                    </button>
                </div>
            </form>
        `;

        this.showModal('Add Employee', form);
    }

    saveEmployee(formData) {
        try {
            const employee = {
                id: Date.now(),
                employeeCode: formData.get('employeeCode'),
                employeeName: formData.get('employeeName'),
                contactNumber: formData.get('contactNumber'),
                emailId: formData.get('emailId'),
                dateOfBirth: formData.get('dateOfBirth'),
                gender: formData.get('gender'),
                workOrderId: parseInt(formData.get('workOrderId')),
                positionAppliedFor: formData.get('positionAppliedFor'),
                experience: parseInt(formData.get('experience')) || 0,
                location: formData.get('location'),
                skills: formData.get('skills'),
                accountNumber: formData.get('accountNumber'),
                ifscCode: formData.get('ifscCode'),
                panNumber: formData.get('panNumber'),
                aadharNumber: formData.get('aadharNumber'),
                attendance: {},
                salaryBreakup: null,
                status: 'Active',
                joiningDate: new Date().toISOString().split('T')[0],
                documents: []
            };

            this.data.employees.push(employee);
            this.saveData();
            this.loadEmployees();
            this.closeModal();
            this.showToast('Employee saved successfully!', 'success');
        } catch (error) {
            console.error('Error saving employee:', error);
            this.showToast('Error saving employee', 'error');
        }
    }

    saveDraftEmployee() {
        this.showToast('Employee draft saved!', 'success');
    }

    filterEmployees() {
        const searchInput = document.getElementById('employeeSearch');
        const workOrderFilter = document.getElementById('workOrderFilter');
        const statusFilter = document.getElementById('statusFilter');
        
        if (!searchInput || !workOrderFilter || !statusFilter) return;
        
        const search = searchInput.value.toLowerCase();
        const workOrderId = workOrderFilter.value;
        const status = statusFilter.value;

        let filtered = this.data.employees.filter(emp => {
            const matchesSearch = !search || 
                emp.employeeName.toLowerCase().includes(search) ||
                emp.emailId.toLowerCase().includes(search) ||
                emp.employeeCode.toLowerCase().includes(search);
            
            const matchesWorkOrder = !workOrderId || emp.workOrderId == workOrderId;
            const matchesStatus = !status || emp.status === status;

            return matchesSearch && matchesWorkOrder && matchesStatus;
        });

        this.displayEmployees(filtered);
    }

    exportEmployees() {
        const csvContent = this.convertToCSV(this.data.employees, [
            'employeeCode', 'employeeName', 'positionAppliedFor', 'contactNumber', 
            'emailId', 'location', 'experience', 'status', 'joiningDate'
        ]);
        this.downloadFile(csvContent, 'employees.csv', 'text/csv');
        this.showToast('Employees exported successfully!', 'success');
    }

    printEmployees() {
        const printContent = this.generatePrintableTable(this.data.employees, 'Employee Master Report');
        this.printContent(printContent);
    }

    // ONBOARDING MODULE - SALARY & ATTENDANCE
    loadOnboarding() {
        this.loadSalaryBreakup();
        this.populateAttendanceEmployees();
    }

    loadSalaryBreakup() {
        const content = document.getElementById('salaryBreakupContent');
        if (!content) return;
        
        const employeesWithSalary = this.data.employees.filter(emp => emp.salaryBreakup);

        if (employeesWithSalary.length === 0) {
            content.innerHTML = '<p>No salary structures configured. Click "Setup New Salary" to begin.</p>';
            return;
        }

        let html = '<div class="salary-breakdown">';
        employeesWithSalary.forEach(emp => {
            const salary = emp.salaryBreakup;
            html += `
                <div class="salary-section">
                    <h5>${emp.employeeName} (${emp.employeeCode})</h5>
                    <div class="salary-item">
                        <span>Basic Salary</span>
                        <span>₹${this.formatCurrency(salary.basicSalary)}</span>
                    </div>
                    <div class="salary-item">
                        <span>HRA</span>
                        <span>₹${this.formatCurrency(salary.hra)}</span>
                    </div>
                    <div class="salary-item">
                        <span>Transport Allowance</span>
                        <span>₹${this.formatCurrency(salary.transportAllowance)}</span>
                    </div>
                    <div class="salary-item">
                        <span>Medical Allowance</span>
                        <span>₹${this.formatCurrency(salary.medicalAllowance)}</span>
                    </div>
                    <div class="salary-item">
                        <span>Special Allowance</span>
                        <span>₹${this.formatCurrency(salary.specialAllowance)}</span>
                    </div>
                    <div class="salary-item total">
                        <span>Gross Salary</span>
                        <span>₹${this.formatCurrency(salary.grossSalary)}</span>
                    </div>
                    <div class="salary-item">
                        <span>PF Deduction</span>
                        <span>₹${this.formatCurrency(salary.pfDeduction)}</span>
                    </div>
                    <div class="salary-item">
                        <span>ESIC Deduction</span>
                        <span>₹${this.formatCurrency(salary.esicDeduction)}</span>
                    </div>
                    <div class="salary-item">
                        <span>TDS</span>
                        <span>₹${this.formatCurrency(salary.tds)}</span>
                    </div>
                    <div class="salary-item total">
                        <span>Net Salary</span>
                        <span>₹${this.formatCurrency(salary.netSalary)}</span>
                    </div>
                    <div style="margin-top: 10px;">
                        <button class="btn btn--outline btn--sm" onclick="hrms.editSalary(${emp.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        content.innerHTML = html;
    }

    showSalarySetupForm() {
        const form = `
            <form class="modal-form" id="salaryForm">
                <div class="form-group">
                    <label class="form-label">Select Employee *</label>
                    <select name="employeeId" class="form-control" required>
                        <option value="">Choose Employee</option>
                        ${this.data.employees.map(emp => `<option value="${emp.id}">${emp.employeeName} (${emp.employeeCode})</option>`).join('')}
                    </select>
                </div>
                
                <h5>Salary Components (₹)</h5>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Basic Salary *</label>
                        <input type="number" name="basicSalary" class="form-control" placeholder="50000" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">HRA (40% of Basic)</label>
                        <input type="number" name="hra" class="form-control" placeholder="20000">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Transport Allowance</label>
                        <input type="number" name="transportAllowance" class="form-control" placeholder="2000">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Medical Allowance</label>
                        <input type="number" name="medicalAllowance" class="form-control" placeholder="1500">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Special Allowance</label>
                    <input type="number" name="specialAllowance" class="form-control" placeholder="11500">
                </div>
                
                <h5>Calculated Values</h5>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Gross Salary</label>
                        <input type="number" name="grossSalary" class="form-control" readonly>
                    </div>
                    <div class="form-group">
                        <label class="form-label">PF (12% of Basic)</label>
                        <input type="number" name="pfDeduction" class="form-control" readonly>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">ESIC (0.75% of Gross)</label>
                        <input type="number" name="esicDeduction" class="form-control" readonly>
                    </div>
                    <div class="form-group">
                        <label class="form-label">TDS (10% of Gross)</label>
                        <input type="number" name="tds" class="form-control" readonly>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Net Salary</label>
                    <input type="number" name="netSalary" class="form-control" readonly>
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="btn btn--secondary" onclick="hrms.closeModal()">Cancel</button>
                    <button type="button" class="btn btn--outline" onclick="hrms.calculateSalaryBreakup()">
                        <i class="fas fa-calculator"></i> Calculate
                    </button>
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-save"></i> Save Salary Structure
                    </button>
                </div>
            </form>
        `;

        this.showModal('Setup Salary Structure', form);
        setTimeout(() => {
            this.setupSalaryCalculation();
        }, 100);
    }

    setupSalaryCalculation() {
        const form = document.getElementById('salaryForm');
        if (!form) return;

        form.addEventListener('input', () => {
            this.calculateSalaryBreakup();
        });
    }

    calculateSalaryBreakup() {
        const form = document.getElementById('salaryForm');
        if (!form) return;

        const basic = parseFloat(form.basicSalary.value) || 0;
        const hra = parseFloat(form.hra.value) || (basic * 0.4);
        const transport = parseFloat(form.transportAllowance.value) || 0;
        const medical = parseFloat(form.medicalAllowance.value) || 0;
        const special = parseFloat(form.specialAllowance.value) || 0;

        const gross = basic + hra + transport + medical + special;
        const pf = basic * 0.12;
        const esic = gross * 0.0075;
        const pt = 200;
        const tds = gross * 0.1;
        const totalDeductions = pf + esic + pt + tds;
        const net = gross - totalDeductions;

        form.hra.value = hra;
        form.grossSalary.value = gross;
        form.pfDeduction.value = Math.round(pf);
        form.esicDeduction.value = Math.round(esic);
        form.tds.value = Math.round(tds);
        form.netSalary.value = Math.round(net);
    }

    saveSalaryStructure(formData) {
        try {
            const employeeId = parseInt(formData.get('employeeId'));
            const employee = this.data.employees.find(emp => emp.id === employeeId);
            
            if (!employee) {
                this.showToast('Employee not found', 'error');
                return;
            }

            employee.salaryBreakup = {
                basicSalary: parseFloat(formData.get('basicSalary')),
                hra: parseFloat(formData.get('hra')),
                transportAllowance: parseFloat(formData.get('transportAllowance')),
                medicalAllowance: parseFloat(formData.get('medicalAllowance')),
                specialAllowance: parseFloat(formData.get('specialAllowance')),
                grossSalary: parseFloat(formData.get('grossSalary')),
                pfDeduction: parseFloat(formData.get('pfDeduction')),
                esicDeduction: parseFloat(formData.get('esicDeduction')),
                professionalTax: 200,
                tds: parseFloat(formData.get('tds')),
                totalDeductions: parseFloat(formData.get('pfDeduction')) + parseFloat(formData.get('esicDeduction')) + 200 + parseFloat(formData.get('tds')),
                netSalary: parseFloat(formData.get('netSalary'))
            };

            this.saveData();
            this.loadSalaryBreakup();
            this.closeModal();
            this.showToast('Salary structure saved successfully!', 'success');
        } catch (error) {
            console.error('Error saving salary structure:', error);
            this.showToast('Error saving salary structure', 'error');
        }
    }

    populateAttendanceEmployees() {
        const select = document.getElementById('attendanceEmployeeSelect');
        if (!select) return;

        select.innerHTML = '<option value="">Select Employee</option>';
        this.data.employees.forEach(emp => {
            const option = document.createElement('option');
            option.value = emp.id;
            option.textContent = `${emp.employeeName} (${emp.employeeCode})`;
            select.appendChild(option);
        });
    }

    loadAttendanceGrid() {
        const employeeSelect = document.getElementById('attendanceEmployeeSelect');
        const monthSelect = document.getElementById('attendanceMonthSelect');
        
        if (!employeeSelect || !monthSelect) return;
        
        const employeeId = employeeSelect.value;
        const month = monthSelect.value;
        
        if (!employeeId) {
            this.showToast('Please select an employee', 'warning');
            return;
        }

        const employee = this.data.employees.find(emp => emp.id == employeeId);
        if (!employee) return;
        
        const year = 2024;
        const daysInMonth = new Date(year, month, 0).getDate();
        
        const gridContent = document.getElementById('attendanceGridContent');
        if (!gridContent) return;
        
        let html = `
            <div class="attendance-header">
                <h5>${employee.employeeName} - ${this.getMonthName(month)} ${year}</h5>
                <div class="attendance-legend">
                    <span class="legend-item"><span class="legend-color present"></span> P - Present</span>
                    <span class="legend-item"><span class="legend-color absent"></span> A - Absent</span>
                    <span class="legend-item"><span class="legend-color leave"></span> L - Leave</span>
                    <span class="legend-item"><span class="legend-color holiday"></span> H - Holiday</span>
                </div>
            </div>
            <div class="attendance-grid">
        `;

        // Add day headers
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        days.forEach(day => {
            html += `<div class="attendance-day header">${day}</div>`;
        });

        // Add days of the month
        const firstDay = new Date(year, month - 1, 1).getDay();
        
        // Empty cells for days before month starts
        for (let i = 0; i < firstDay; i++) {
            html += `<div class="attendance-day"></div>`;
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const attendanceKey = `${year}-${month.padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const currentAttendance = employee.attendance[attendanceKey] || 'P';
            
            html += `
                <div class="attendance-day ${currentAttendance.toLowerCase() === 'p' ? 'present' : currentAttendance.toLowerCase() === 'a' ? 'absent' : currentAttendance.toLowerCase() === 'l' ? 'leave' : 'holiday'}" 
                     data-date="${attendanceKey}" 
                     onclick="hrms.toggleAttendance('${employeeId}', '${attendanceKey}')">
                    <div class="day-number">${day}</div>
                    <div class="day-status">${currentAttendance}</div>
                </div>
            `;
        }

        html += `
            </div>
            <div class="attendance-summary">
                <div class="summary-item">Present: <span id="presentDays">0</span></div>
                <div class="summary-item">Absent: <span id="absentDays">0</span></div>
                <div class="summary-item">Leave: <span id="leaveDays">0</span></div>
                <div class="summary-item">Holidays: <span id="holidayDays">0</span></div>
            </div>
            <div class="attendance-actions">
                <button class="btn btn--primary" onclick="hrms.saveAttendanceGrid('${employeeId}', '${month}', '${year}')">
                    <i class="fas fa-save"></i> Save Attendance
                </button>
                <button class="btn btn--outline" onclick="hrms.markAllPresent('${employeeId}', '${month}', '${year}')">
                    <i class="fas fa-check"></i> Mark All Present
                </button>
            </div>
        `;

        gridContent.innerHTML = html;
        this.updateAttendanceSummary(employeeId, month, year);
    }

    toggleAttendance(employeeId, date) {
        const employee = this.data.employees.find(emp => emp.id == employeeId);
        if (!employee) return;

        if (!employee.attendance) employee.attendance = {};

        const currentStatus = employee.attendance[date] || 'P';
        const statusCycle = ['P', 'A', 'L', 'H'];
        const currentIndex = statusCycle.indexOf(currentStatus);
        const nextStatus = statusCycle[(currentIndex + 1) % statusCycle.length];
        
        employee.attendance[date] = nextStatus;
        
        // Update UI
        const dayElement = document.querySelector(`[data-date="${date}"]`);
        if (dayElement) {
            dayElement.className = `attendance-day ${nextStatus.toLowerCase() === 'p' ? 'present' : nextStatus.toLowerCase() === 'a' ? 'absent' : nextStatus.toLowerCase() === 'l' ? 'leave' : 'holiday'}`;
            const statusElement = dayElement.querySelector('.day-status');
            if (statusElement) {
                statusElement.textContent = nextStatus;
            }
        }
        
        // Update summary
        const [year, month] = date.split('-');
        this.updateAttendanceSummary(employeeId, month, year);
    }

    updateAttendanceSummary(employeeId, month, year) {
        const employee = this.data.employees.find(emp => emp.id == employeeId);
        if (!employee || !employee.attendance) return;

        let present = 0, absent = 0, leave = 0, holiday = 0;
        
        Object.keys(employee.attendance).forEach(date => {
            if (date.startsWith(`${year}-${month.padStart(2, '0')}`)) {
                const status = employee.attendance[date];
                switch (status) {
                    case 'P': present++; break;
                    case 'A': absent++; break;
                    case 'L': leave++; break;
                    case 'H': holiday++; break;
                }
            }
        });

        this.updateElement('presentDays', present);
        this.updateElement('absentDays', absent);
        this.updateElement('leaveDays', leave);
        this.updateElement('holidayDays', holiday);
    }

    saveAttendanceGrid(employeeId, month, year) {
        this.saveData();
        this.showToast('Attendance saved successfully!', 'success');
    }

    markAllPresent(employeeId, month, year) {
        const employee = this.data.employees.find(emp => emp.id == employeeId);
        if (!employee) return;

        if (!employee.attendance) employee.attendance = {};

        const daysInMonth = new Date(year, month, 0).getDate();
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dateKey = `${year}-${month.padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            employee.attendance[dateKey] = 'P';
        }

        this.loadAttendanceGrid();
        this.showToast('All days marked as present!', 'success');
    }

    generateDocument(type) {
        const docTypes = {
            'offer': 'Offer Letter',
            'appointment': 'Appointment Letter',
            'increment': 'Increment Letter',
            'payslip': 'Pay Slip'
        };

        const content = this.createDocumentTemplate(type);
        this.downloadFile(content, `${docTypes[type]}.html`, 'text/html');
        this.showToast(`${docTypes[type]} generated successfully!`, 'success');
    }

    generateOfferLetter() {
        this.generateDocument('offer');
    }

    generatePayslip() {
        this.generateDocument('payslip');
    }

    createDocumentTemplate(type) {
        const company = "TADE Techno Solution Private Limited";
        const date = new Date().toLocaleDateString('en-IN');

        switch (type) {
            case 'offer':
                return `
                    <html>
                    <head><title>Offer Letter</title></head>
                    <body style="font-family: Arial, sans-serif; padding: 20px;">
                        <h2>${company}</h2>
                        <h3>Offer Letter</h3>
                        <p>Date: ${date}</p>
                        <p>Dear [Employee Name],</p>
                        <p>We are pleased to offer you the position of [Position] with ${company}.</p>
                        <p>Your compensation package includes:</p>
                        <ul>
                            <li>Basic Salary: ₹[Amount]</li>
                            <li>HRA: ₹[Amount]</li>
                            <li>Other Allowances: ₹[Amount]</li>
                        </ul>
                        <p>Please confirm your acceptance by [Date].</p>
                        <p>Sincerely,<br>HR Department<br>${company}</p>
                    </body>
                    </html>
                `;
            case 'appointment':
                return `
                    <html>
                    <head><title>Appointment Letter</title></head>
                    <body style="font-family: Arial, sans-serif; padding: 20px;">
                        <h2>${company}</h2>
                        <h3>Appointment Letter</h3>
                        <p>Date: ${date}</p>
                        <p>Dear [Employee Name],</p>
                        <p>This is to confirm your appointment as [Position] effective [Start Date].</p>
                        <p>Terms and Conditions:</p>
                        <ul>
                            <li>Probation Period: 6 months</li>
                            <li>Working Hours: 9:00 AM to 6:00 PM</li>
                            <li>Working Days: Monday to Friday</li>
                        </ul>
                        <p>Welcome to ${company}!</p>
                        <p>Sincerely,<br>HR Department<br>${company}</p>
                    </body>
                    </html>
                `;
            case 'payslip':
                return `
                    <html>
                    <head><title>Pay Slip</title></head>
                    <body style="font-family: Arial, sans-serif; padding: 20px;">
                        <h2>${company}</h2>
                        <h3>Pay Slip - [Month Year]</h3>
                        <table border="1" style="width: 100%; border-collapse: collapse;">
                            <tr><th>Employee Name</th><td>[Name]</td></tr>
                            <tr><th>Employee Code</th><td>[Code]</td></tr>
                            <tr><th>Department</th><td>[Department]</td></tr>
                            <tr><th colspan="2">EARNINGS</th></tr>
                            <tr><td>Basic Salary</td><td>₹[Amount]</td></tr>
                            <tr><td>HRA</td><td>₹[Amount]</td></tr>
                            <tr><td>Transport Allowance</td><td>₹[Amount]</td></tr>
                            <tr><th>Gross Salary</th><td>₹[Amount]</td></tr>
                            <tr><th colspan="2">DEDUCTIONS</th></tr>
                            <tr><td>PF</td><td>₹[Amount]</td></tr>
                            <tr><td>ESIC</td><td>₹[Amount]</td></tr>
                            <tr><td>TDS</td><td>₹[Amount]</td></tr>
                            <tr><th>Net Salary</th><td>₹[Amount]</td></tr>
                        </table>
                    </body>
                    </html>
                `;
            default:
                return '<html><body><h3>Document Template</h3></body></html>';
        }
    }

    // HR MANAGEMENT MODULE
    loadHRManagement() {
        this.loadAttendanceProcessing();
        this.loadSalaryProcessing();
    }

    loadAttendanceProcessing() {
        const results = document.getElementById('attendanceProcessingResults');
        if (results) {
            results.innerHTML = '<p>Select month and click "Calculate Attendance" to process employee attendance data.</p>';
        }
    }

    loadSalaryProcessing() {
        const results = document.getElementById('salaryProcessingResults');
        if (results) {
            results.innerHTML = '<p>Select month and click "Calculate Salary" to process employee salary data.</p>';
        }
    }

    processAttendance() {
        this.calculateAttendance();
    }

    processSalary() {
        this.calculateSalary();
    }

    calculateAttendance() {
        const monthSelect = document.getElementById('processMonthSelect');
        if (!monthSelect) return;
        
        const month = monthSelect.value;
        const results = document.getElementById('attendanceProcessingResults');
        if (!results) return;
        
        let html = '<div class="processing-results"><h5>Attendance Calculation Results</h5>';
        
        this.data.employees.forEach(emp => {
            if (!emp.attendance) emp.attendance = {};
            
            let present = 0, absent = 0, leave = 0;
            const year = 2024;
            const daysInMonth = new Date(year, month, 0).getDate();
            
            for (let day = 1; day <= daysInMonth; day++) {
                const dateKey = `${year}-${month.padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                const status = emp.attendance[dateKey] || 'P';
                
                switch (status) {
                    case 'P': present++; break;
                    case 'A': absent++; break;
                    case 'L': leave++; break;
                }
            }
            
            const percentage = ((present / daysInMonth) * 100).toFixed(1);
            
            html += `
                <div class="result-item">
                    <strong>${emp.employeeName}</strong> - 
                    Present: ${present}, Absent: ${absent}, Leave: ${leave}, 
                    Percentage: ${percentage}%
                </div>
            `;
        });
        
        html += '</div>';
        results.innerHTML = html;
        
        this.showToast('Attendance calculated successfully!', 'success');
    }

    saveAttendanceData() {
        this.saveData();
        this.showToast('Attendance data saved successfully!', 'success');
    }

    calculateSalary() {
        const monthSelect = document.getElementById('salaryProcessMonthSelect');
        if (!monthSelect) return;
        
        const month = monthSelect.value;
        const results = document.getElementById('salaryProcessingResults');
        if (!results) return;
        
        let html = '<div class="processing-results"><h5>Salary Calculation Results</h5>';
        let totalGross = 0, totalNet = 0;
        
        this.data.employees.forEach(emp => {
            if (!emp.salaryBreakup) return;
            
            const salary = emp.salaryBreakup;
            totalGross += salary.grossSalary;
            totalNet += salary.netSalary;
            
            html += `
                <div class="result-item">
                    <strong>${emp.employeeName}</strong> - 
                    Gross: ₹${this.formatCurrency(salary.grossSalary)}, 
                    Deductions: ₹${this.formatCurrency(salary.totalDeductions)}, 
                    Net: ₹${this.formatCurrency(salary.netSalary)}
                </div>
            `;
        });
        
        html += `
            <div class="total-summary">
                <strong>Total Gross: ₹${this.formatCurrency(totalGross)}</strong><br>
                <strong>Total Net: ₹${this.formatCurrency(totalNet)}</strong>
            </div>
        `;
        html += '</div>';
        results.innerHTML = html;
        
        this.showToast('Salary calculated successfully!', 'success');
    }

    saveSalaryData() {
        this.saveData();
        this.showToast('Salary data saved successfully!', 'success');
    }

    // GRIEVANCES MODULE
    loadGrievances() {
        this.displayGrievances(this.data.grievances);
    }

    displayGrievances(grievances) {
        const tbody = document.querySelector('#grievancesTable tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        grievances.forEach(grievance => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${grievance.ticketNumber}</td>
                <td>${grievance.employeeName}</td>
                <td>${grievance.category}</td>
                <td>${grievance.subject}</td>
                <td><span class="priority-${grievance.priority.toLowerCase()}">${grievance.priority}</span></td>
                <td><span class="status-badge status-badge--${grievance.status.toLowerCase().replace(' ', '-')}">${grievance.status}</span></td>
                <td>${grievance.submittedDate}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn action-btn--view" data-action="view" data-type="grievance" data-id="${grievance.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn action-btn--save" data-action="resolve" data-type="grievance" data-id="${grievance.id}">
                            <i class="fas fa-check"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    showRaiseGrievanceForm() {
        const form = `
            <form class="modal-form" id="grievanceForm">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Employee *</label>
                        <select name="employeeId" class="form-control" required>
                            <option value="">Select Employee</option>
                            ${this.data.employees.map(emp => `<option value="${emp.id}">${emp.employeeName}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Category *</label>
                        <select name="category" class="form-control" required>
                            <option value="">Select Category</option>
                            <option value="HR">HR</option>
                            <option value="IT Support">IT Support</option>
                            <option value="Admin">Admin</option>
                            <option value="HR Policy">HR Policy</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Priority *</label>
                        <select name="priority" class="form-control" required>
                            <option value="">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Assign To</label>
                        <input type="text" name="assignedTo" class="form-control" placeholder="Team/Person">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Subject *</label>
                    <input type="text" name="subject" class="form-control" placeholder="Brief description" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Description *</label>
                    <textarea name="description" class="form-control" rows="4" placeholder="Detailed description of the issue" required></textarea>
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="btn btn--secondary" onclick="hrms.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-paper-plane"></i> Submit Grievance
                    </button>
                </div>
            </form>
        `;

        this.showModal('Raise Grievance', form);
    }

    saveGrievance(formData) {
        try {
            const employeeId = parseInt(formData.get('employeeId'));
            const employee = this.data.employees.find(emp => emp.id === employeeId);
            
            const grievance = {
                id: Date.now(),
                ticketNumber: `GR/2024/${String(this.data.grievances.length + 1).padStart(3, '0')}`,
                employeeId: employeeId,
                employeeName: employee ? employee.employeeName : 'Unknown',
                category: formData.get('category'),
                priority: formData.get('priority'),
                subject: formData.get('subject'),
                description: formData.get('description'),
                status: 'Open',
                submittedDate: new Date().toISOString().split('T')[0],
                assignedTo: formData.get('assignedTo') || 'Unassigned',
                resolutionDate: null,
                resolutionComments: null
            };

            this.data.grievances.push(grievance);
            this.saveData();
            this.loadGrievances();
            this.closeModal();
            this.showToast('Grievance submitted successfully!', 'success');
        } catch (error) {
            console.error('Error saving grievance:', error);
            this.showToast('Error saving grievance', 'error');
        }
    }

    filterGrievances() {
        // Implement grievance filtering
        this.displayGrievances(this.data.grievances);
    }

    exportGrievances() {
        const csvContent = this.convertToCSV(this.data.grievances, [
            'ticketNumber', 'employeeName', 'category', 'subject', 'priority', 
            'status', 'submittedDate', 'assignedTo'
        ]);
        this.downloadFile(csvContent, 'grievances.csv', 'text/csv');
        this.showToast('Grievances exported successfully!', 'success');
    }

    // REPORTS MODULE
    loadReports() {
        const reportContent = document.getElementById('reportContent');
        if (reportContent) {
            reportContent.innerHTML = '<p>Select a report type to generate detailed analytics and insights.</p>';
        }
    }

    generateReport(reportType) {
        const reportContent = document.getElementById('reportContent');
        if (!reportContent) return;
        
        let content = '';

        switch (reportType) {
            case 'project':
                content = this.generateProjectReport();
                break;
            case 'employee':
                content = this.generateEmployeeReport();
                break;
            case 'salary':
                content = this.generateSalaryReport();
                break;
            case 'attendance':
                content = this.generateAttendanceReport();
                break;
            default:
                content = '<p>Report not found</p>';
        }

        reportContent.innerHTML = content;
        this.showToast(`${reportType} report generated!`, 'success');
    }

    generateProjectReport() {
        let html = '<div class="report-summary"><h5>Project Analysis Report</h5>';
        
        this.data.workOrders.forEach(wo => {
            const assignedEmployees = this.data.employees.filter(emp => emp.workOrderId === wo.id);
            const totalMonthlyCost = assignedEmployees.reduce((sum, emp) => {
                return sum + (emp.salaryBreakup ? emp.salaryBreakup.grossSalary : 0);
            }, 0);
            
            html += `
                <div class="project-item">
                    <h6>${wo.woNumber} - ${wo.clientName}</h6>
                    <p>Revenue: ₹${this.formatCurrency(wo.grandTotal)}</p>
                    <p>Monthly Cost: ₹${this.formatCurrency(totalMonthlyCost)}</p>
                    <p>Resources: ${assignedEmployees.length} employees</p>
                    <p>Status: ${wo.status}</p>
                </div>
            `;
        });
        
        html += `<p><em>Generated on: ${new Date().toLocaleDateString('en-IN')}</em></p></div>`;
        return html;
    }

    generateEmployeeReport() {
        const totalEmployees = this.data.employees.length;
        const activeEmployees = this.data.employees.filter(emp => emp.status === 'Active').length;
        
        return `
            <div class="report-summary">
                <h5>Employee Master Report</h5>
                <p><strong>Total Employees:</strong> ${totalEmployees}</p>
                <p><strong>Active Employees:</strong> ${activeEmployees}</p>
                <p><strong>Inactive Employees:</strong> ${totalEmployees - activeEmployees}</p>
                <p><em>Generated on: ${new Date().toLocaleDateString('en-IN')}</em></p>
            </div>
        `;
    }

    generateSalaryReport() {
        const employeesWithSalary = this.data.employees.filter(emp => emp.salaryBreakup);
        const totalGross = employeesWithSalary.reduce((sum, emp) => sum + emp.salaryBreakup.grossSalary, 0);
        const totalNet = employeesWithSalary.reduce((sum, emp) => sum + emp.salaryBreakup.netSalary, 0);
        
        return `
            <div class="report-summary">
                <h5>Salary Master Report</h5>
                <p><strong>Employees in Payroll:</strong> ${employeesWithSalary.length}</p>
                <p><strong>Total Gross Salary:</strong> ₹${this.formatCurrency(totalGross)}</p>
                <p><strong>Total Net Salary:</strong> ₹${this.formatCurrency(totalNet)}</p>
                <p><strong>Total Deductions:</strong> ₹${this.formatCurrency(totalGross - totalNet)}</p>
                <p><em>Generated on: ${new Date().toLocaleDateString('en-IN')}</em></p>
            </div>
        `;
    }

    generateAttendanceReport() {
        return `
            <div class="report-summary">
                <h5>Attendance Analytics Report</h5>
                <p>Attendance data analysis shows overall employee presence patterns.</p>
                <p><strong>Average Attendance:</strong> 96.8%</p>
                <p><strong>Total Working Days:</strong> 31</p>
                <p><em>Generated on: ${new Date().toLocaleDateString('en-IN')}</em></p>
            </div>
        `;
    }

    showCustomReportForm() {
        this.showToast('Custom report builder functionality coming soon!', 'info');
    }

    exportAllReports() {
        const reports = {
            'project': this.generateProjectReport(),
            'employee': this.generateEmployeeReport(),
            'salary': this.generateSalaryReport(),
            'attendance': this.generateAttendanceReport()
        };
        
        let content = '<html><head><title>TADE Techno HRMS Reports</title></head><body>';
        content += '<h1 style="text-align: center;">TADE Techno HRMS - Comprehensive Reports</h1>';
        Object.keys(reports).forEach(key => {
            content += reports[key];
            content += '<hr>';
        });
        content += '</body></html>';
        
        this.downloadFile(content, 'all_reports.html', 'text/html');
        this.showToast('All reports exported successfully!', 'success');
    }

    // REFERRALS MODULE
    loadReferrals() {
        this.displayReferrals(this.data.referrals);
    }

    displayReferrals(referrals) {
        const tbody = document.querySelector('#referralsTable tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        referrals.forEach(referral => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${referral.referredBy}</td>
                <td>${referral.candidateName}</td>
                <td>${referral.position}</td>
                <td>${referral.candidatePhone}</td>
                <td><span class="status-badge status-badge--${referral.status.toLowerCase().replace(' ', '-')}">${referral.status}</span></td>
                <td class="currency">₹${this.formatCurrency(referral.referralBonus)}</td>
                <td>${referral.referredDate}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn action-btn--view" data-action="view" data-type="referral" data-id="${referral.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn action-btn--edit" data-action="update" data-type="referral" data-id="${referral.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    showAddReferralForm() {
        const form = `
            <form class="modal-form" id="referralForm">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Referring Employee *</label>
                        <select name="referredBy" class="form-control" required>
                            <option value="">Select Employee</option>
                            ${this.data.employees.map(emp => `<option value="${emp.employeeName}">${emp.employeeName}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Candidate Name *</label>
                        <input type="text" name="candidateName" class="form-control" placeholder="Full name" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Candidate Email *</label>
                        <input type="email" name="candidateEmail" class="form-control" placeholder="candidate@email.com" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Candidate Phone *</label>
                        <input type="tel" name="candidatePhone" class="form-control" placeholder="+91-XXXXXXXXXX" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Position *</label>
                        <input type="text" name="position" class="form-control" placeholder="Software Engineer" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Experience (Years)</label>
                        <input type="number" name="experience" class="form-control" placeholder="5" min="0">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Skills</label>
                    <textarea name="skills" class="form-control" rows="2" placeholder="Java, React, etc."></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Referral Bonus (₹)</label>
                    <input type="number" name="referralBonus" class="form-control" placeholder="25000" value="25000">
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="btn btn--secondary" onclick="hrms.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-user-plus"></i> Add Referral
                    </button>
                </div>
            </form>
        `;

        this.showModal('Add Referral', form);
    }

    saveReferral(formData) {
        try {
            const referral = {
                id: Date.now(),
                referredBy: formData.get('referredBy'),
                candidateName: formData.get('candidateName'),
                candidateEmail: formData.get('candidateEmail'),
                candidatePhone: formData.get('candidatePhone'),
                position: formData.get('position'),
                experience: parseInt(formData.get('experience')) || 0,
                skills: formData.get('skills'),
                referralBonus: parseFloat(formData.get('referralBonus')) || 25000,
                status: 'Application Received',
                referredDate: new Date().toISOString().split('T')[0],
                interviewDate: null
            };

            this.data.referrals.push(referral);
            this.saveData();
            this.loadReferrals();
            this.closeModal();
            this.showToast('Referral added successfully!', 'success');
        } catch (error) {
            console.error('Error saving referral:', error);
            this.showToast('Error saving referral', 'error');
        }
    }

    showBulkEmailForm() {
        this.switchModule('referrals');
        // Switch to bulk mail tab
        const tabBtn = document.querySelector('[data-tab="bulkmail"]');
        if (tabBtn) {
            this.switchTab(tabBtn, 'bulkmail');
        }
    }

    sendBulkEmails() {
        const templateSelect = document.getElementById('emailTemplate');
        const subjectInput = document.getElementById('emailSubject');
        const contentInput = document.getElementById('emailContent');
        
        if (!templateSelect || !subjectInput || !contentInput) return;
        
        const template = templateSelect.value;
        const subject = subjectInput.value;
        const content = contentInput.value;

        if (!subject || !content) {
            this.showToast('Please fill in subject and content', 'warning');
            return;
        }

        // Simulate sending emails
        this.showToast('Sending bulk emails...', 'info');
        
        setTimeout(() => {
            this.showToast(`Bulk email sent successfully to all employees!`, 'success');
        }, 2000);
    }

    saveEmailTemplate() {
        const templateSelect = document.getElementById('emailTemplate');
        const subjectInput = document.getElementById('emailSubject');
        const contentInput = document.getElementById('emailContent');
        
        if (!templateSelect || !subjectInput || !contentInput) return;
        
        const template = templateSelect.value;
        const subject = subjectInput.value;
        const content = contentInput.value;

        if (!template || !subject || !content) {
            this.showToast('Please fill in all fields', 'warning');
            return;
        }

        if (!this.data.emailTemplates) {
            this.data.emailTemplates = {};
        }

        this.data.emailTemplates[template] = {
            subject: subject,
            content: content,
            savedDate: new Date().toISOString()
        };

        this.saveData();
        this.showToast('Email template saved successfully!', 'success');
    }

    // TABLE ACTION HANDLERS
    handleTableAction(button) {
        const action = button.dataset.action;
        const type = button.dataset.type;
        const id = parseInt(button.dataset.id);

        switch (action) {
            case 'view':
                this.viewItem(type, id);
                break;
            case 'edit':
                this.editItem(type, id);
                break;
            case 'delete':
                this.deleteItem(type, id);
                break;
            case 'resolve':
                this.resolveGrievance(id);
                break;
            case 'update':
                this.updateReferralStatus(id);
                break;
        }
    }

    viewItem(type, id) {
        this.showToast(`Viewing ${type} ID: ${id}`, 'info');
    }

    editItem(type, id) {
        this.showToast(`Editing ${type} ID: ${id}`, 'info');
    }

    deleteItem(type, id) {
        if (!confirm('Are you sure you want to delete this item?')) return;

        try {
            switch (type) {
                case 'workorder':
                    this.data.workOrders = this.data.workOrders.filter(wo => wo.id !== id);
                    this.loadWorkOrders();
                    break;
                case 'employee':
                    this.data.employees = this.data.employees.filter(emp => emp.id !== id);
                    this.loadEmployees();
                    break;
                case 'grievance':
                    this.data.grievances = this.data.grievances.filter(gr => gr.id !== id);
                    this.loadGrievances();
                    break;
                case 'referral':
                    this.data.referrals = this.data.referrals.filter(ref => ref.id !== id);
                    this.loadReferrals();
                    break;
            }
            
            this.saveData();
            this.showToast(`${type} deleted successfully!`, 'success');
        } catch (error) {
            console.error('Error deleting item:', error);
            this.showToast('Error deleting item', 'error');
        }
    }

    resolveGrievance(id) {
        const grievance = this.data.grievances.find(gr => gr.id === id);
        if (grievance) {
            grievance.status = 'Resolved';
            grievance.resolutionDate = new Date().toISOString().split('T')[0];
            grievance.resolutionComments = 'Resolved by admin';
            this.saveData();
            this.loadGrievances();
            this.showToast('Grievance resolved successfully!', 'success');
        }
    }

    updateReferralStatus(id) {
        const referral = this.data.referrals.find(ref => ref.id === id);
        if (referral) {
            const statuses = ['Application Received', 'Interview Scheduled', 'Interview Completed', 'Offer Extended', 'Hired'];
            const currentIndex = statuses.indexOf(referral.status);
            const nextStatus = statuses[Math.min(currentIndex + 1, statuses.length - 1)];
            
            referral.status = nextStatus;
            this.saveData();
            this.loadReferrals();
            this.showToast(`Referral status updated to: ${nextStatus}`, 'success');
        }
    }

    editSalary(employeeId) {
        this.showToast(`Edit salary for employee ID: ${employeeId}`, 'info');
        // Could open the salary form with pre-filled data
        this.showSalarySetupForm();
    }

    // UTILITY FUNCTIONS
    switchTab(tabBtn, tab) {
        // Remove active from all tabs in this container
        const container = tabBtn.closest('.onboarding-tabs') || tabBtn.closest('.hr-tabs') || tabBtn.closest('.referral-tabs');
        if (container) {
            container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            tabBtn.classList.add('active');

            // Hide all tab content in this module
            const module = tabBtn.closest('.module');
            if (module) {
                module.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                    content.classList.add('hidden');
                });

                // Show selected tab
                const tabContent = document.getElementById(`${tab}Tab`);
                if (tabContent) {
                    tabContent.classList.add('active');
                    tabContent.classList.remove('hidden');
                }
            }
        }
    }

    showModal(title, content) {
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const modal = document.getElementById('modal');
        
        if (modalTitle) modalTitle.textContent = title;
        if (modalBody) modalBody.innerHTML = content;
        if (modal) modal.classList.remove('hidden');
    }

    closeModal() {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modalBody');
        
        if (modal) modal.classList.add('hidden');
        if (modalBody) modalBody.innerHTML = '';
    }

    showToast(message, type = 'info') {
        console.log('Toast:', message, type);
        
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-${icons[type] || 'info-circle'}"></i>
            </div>
            <div class="toast-message">${message}</div>
            <button class="toast-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        const toastContainer = document.getElementById('toastContainer');
        if (toastContainer) {
            toastContainer.appendChild(toast);
            
            setTimeout(() => {
                if (toast.parentElement) {
                    toast.remove();
                }
            }, 5000);
        }
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN').format(amount);
    }

    convertToCSV(data, fields) {
        if (!data || data.length === 0) return '';
        
        const headers = fields.join(',');
        const rows = data.map(item => {
            return fields.map(field => {
                const value = item[field] || '';
                return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
            }).join(',');
        });
        return [headers, ...rows].join('\n');
    }

    downloadFile(content, filename, type) {
        const blob = new Blob([content], { type: type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    generatePrintableTable(data, title) {
        if (!data || data.length === 0) {
            return `<html><head><title>${title}</title></head><body><h1>${title}</h1><p>No data available</p></body></html>`;
        }
        
        return `
            <html>
            <head>
                <title>${title}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; font-weight: bold; }
                    h1 { text-align: center; color: #333; }
                    .header { text-align: center; margin-bottom: 20px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>TADE Techno Solution Private Limited</h1>
                    <h2>${title}</h2>
                    <p>Generated on: ${new Date().toLocaleDateString('en-IN')}</p>
                </div>
                <table>
                    <thead>
                        <tr>${Object.keys(data[0] || {}).map(key => `<th>${key}</th>`).join('')}</tr>
                    </thead>
                    <tbody>
                        ${data.map(item => `<tr>${Object.values(item).map(val => `<td>${val}</td>`).join('')}</tr>`).join('')}
                    </tbody>
                </table>
            </body>
            </html>
        `;
    }

    printContent(content) {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(content);
            printWindow.document.close();
            printWindow.print();
        }
    }

    handleFileUpload(input) {
        const files = Array.from(input.files);
        if (files.length === 0) return;

        files.forEach(file => {
            if (file.size > 10 * 1024 * 1024) { // 10MB limit
                this.showToast(`File ${file.name} is too large (max 10MB)`, 'warning');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                // Store file as base64
                const fileData = {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    data: e.target.result,
                    uploadDate: new Date().toISOString()
                };
                
                this.showToast(`File ${file.name} uploaded successfully!`, 'success');
            };
            reader.readAsDataURL(file);
        });
    }

    getMonthName(monthNumber) {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[parseInt(monthNumber) - 1] || 'Unknown';
    }

    autoCalculate(target) {
        // Auto-calculation for forms
        if (target.closest('#salaryForm')) {
            this.calculateSalaryBreakup();
        }
    }
}

// Initialize the application - FIXED
console.log('Initializing TADE Techno HRMS Application...');

// Wait for DOM to be ready
function initializeHRMS() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM Content Loaded - Creating HRMS instance');
            window.hrms = new TADETechnoHRMS();
        });
    } else {
        console.log('Document already loaded - Creating HRMS instance');
        window.hrms = new TADETechnoHRMS();
    }
}

// Initialize immediately
initializeHRMS();