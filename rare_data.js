// RED-THREAD: Federated Rare Donor Network (Sorted by Logistics Hubs)
const GlobalRareNetwork = [
    // --- APOLLO HOSPITALS (Greams Road Area) ~20-22km from Saveetha ---
    { id: "RH-B01", name: "Arun Kumar", blood_group: "H-Type (Bombay)", contact: "+91 9840011221", lat: 13.0607, lng: 80.2511, source_hospital: "Apollo Greams Road", status: "Eligible" },
    { id: "RH-B07", name: "Sowmya K", blood_group: "H-Type (Bombay)", contact: "+91 9445511007", lat: 13.0610, lng: 80.2520, source_hospital: "Apollo Greams Road", status: "Eligible" },
    { id: "RH-B13", name: "Manoj T", blood_group: "H-Type (Bombay)", contact: "+91 9333344413", lat: 13.0595, lng: 80.2505, source_hospital: "Apollo Greams Road", status: "On-Cooldown" },
    { id: "RH-B19", name: "Suresh Y", blood_group: "H-Type (Bombay)", contact: "+91 9999900019", lat: 13.0620, lng: 80.2530, source_hospital: "Apollo Greams Road", status: "Eligible" },
    { id: "RH-A02", name: "Kiran Dev", blood_group: "AB-", contact: "+91 9123498762", lat: 13.0600, lng: 80.2500, source_hospital: "Apollo Greams Road", status: "Eligible" },
    { id: "RH-A08", name: "Rohit B", blood_group: "AB-", contact: "+91 9331144558", lat: 13.0615, lng: 80.2515, source_hospital: "Apollo Greams Road", status: "Eligible" },
    { id: "RH-A14", name: "Arvind H", blood_group: "AB-", contact: "+91 9991100114", lat: 13.0605, lng: 80.2525, source_hospital: "Apollo Greams Road", status: "Eligible" },
    { id: "RH-O05", name: "Faizal M", blood_group: "O-Negative", contact: "+91 9112233445", lat: 13.0590, lng: 80.2490, source_hospital: "Apollo Greams Road", status: "Eligible" },
    { id: "RH-O11", name: "Logesh S", blood_group: "O-Negative", contact: "+91 9778899001", lat: 13.0625, lng: 80.2540, source_hospital: "Apollo Greams Road", status: "Eligible" },

    // --- SRMC PORUR (Porur Area) ~10km from Saveetha ---
    { id: "RH-B04", name: "Deepa S", blood_group: "H-Type (Bombay)", contact: "+91 9884412344", lat: 13.0358, lng: 80.1448, source_hospital: "SRMC Porur", status: "Eligible" },
    { id: "RH-B10", name: "Vijay L", blood_group: "H-Type (Bombay)", contact: "+91 9000088810", lat: 13.0360, lng: 80.1450, source_hospital: "SRMC Porur", status: "Eligible" },
    { id: "RH-B16", name: "Pooja W", blood_group: "H-Type (Bombay)", contact: "+91 9666677716", lat: 13.0350, lng: 80.1440, source_hospital: "SRMC Porur", status: "Eligible" },
    { id: "RH-A04", name: "Abhishek C", blood_group: "AB-", contact: "+91 9001122334", lat: 13.0370, lng: 80.1460, source_hospital: "SRMC Porur", status: "Eligible" },
    { id: "RH-A09", name: "Latha M", blood_group: "AB-", contact: "+91 9441155669", lat: 13.0345, lng: 80.1435, source_hospital: "SRMC Porur", status: "Eligible" },
    { id: "RH-A15", name: "Maya S", blood_group: "AB-", contact: "+91 9001122335", lat: 13.0380, lng: 80.1470, source_hospital: "SRMC Porur", status: "Eligible" },
    { id: "RH-O01", name: "Sanjay Raj", blood_group: "O-Negative", contact: "+91 9962233441", lat: 13.0355, lng: 80.1445, source_hospital: "SRMC Porur", status: "Eligible" },
    { id: "RH-O07", name: "Hemant L", blood_group: "O-Negative", contact: "+91 9334455667", lat: 13.0365, lng: 80.1455, source_hospital: "SRMC Porur", status: "Eligible" },
    { id: "RH-O13", name: "Omkar R", blood_group: "O-Negative", contact: "+91 9990011223", lat: 13.0340, lng: 80.1430, source_hospital: "SRMC Porur", status: "Eligible" },

    // --- MIOT INTERNATIONAL (Manapakkam) ~14km from Saveetha ---
    { id: "RH-B03", name: "Rajesh V", blood_group: "H-Type (Bombay)", contact: "+91 9123456783", lat: 13.0223, lng: 80.1856, source_hospital: "MIOT International", status: "Eligible" },
    { id: "RH-B08", name: "Naveen P", blood_group: "H-Type (Bombay)", contact: "+91 9600022338", lat: 13.0225, lng: 80.1860, source_hospital: "MIOT International", status: "Eligible" },
    { id: "RH-B14", name: "Divya B", blood_group: "H-Type (Bombay)", contact: "+91 9444455514", lat: 13.0210, lng: 80.1850, source_hospital: "MIOT International", status: "Eligible" },
    { id: "RH-B20", name: "Ishani U", blood_group: "H-Type (Bombay)", contact: "+91 9010101020", lat: 13.0230, lng: 80.1870, source_hospital: "MIOT International", status: "Eligible" },
    { id: "RH-A01", name: "Priya Dharshini", blood_group: "AB-", contact: "+91 9710055441", lat: 13.0220, lng: 80.1852, source_hospital: "MIOT International", status: "Eligible" },
    { id: "RH-A07", name: "Anjali S", blood_group: "AB-", contact: "+91 9221133447", lat: 13.0215, lng: 80.1845, source_hospital: "MIOT International", status: "On-Cooldown" },
    { id: "RH-A13", name: "Keerthi D", blood_group: "AB-", contact: "+91 9881199003", lat: 13.0235, lng: 80.1880, source_hospital: "MIOT International", status: "Eligible" },
    { id: "RH-O06", name: "Gauri T", blood_group: "O-Negative", contact: "+91 9223344556", lat: 13.0228, lng: 80.1858, source_hospital: "MIOT International", status: "On-Cooldown" },
    { id: "RH-O12", name: "Nandhini K", blood_group: "O-Negative", contact: "+91 9889900112", lat: 13.0218, lng: 80.1848, source_hospital: "MIOT International", status: "Eligible" },

    // --- GLOBAL HEALTH CITY (Perumbakkam) ~26km from Saveetha (OUTSIDE 20km) ---
    { id: "RH-B02", name: "Meera Nair", blood_group: "H-Type (Bombay)", contact: "+91 9444055662", lat: 12.8996, lng: 80.1934, source_hospital: "Global Health City", status: "On-Cooldown" },
    { id: "RH-B09", name: "Anitha J", blood_group: "H-Type (Bombay)", contact: "+91 9841122339", lat: 12.9000, lng: 80.1940, source_hospital: "Global Health City", status: "On-Cooldown" },
    { id: "RH-B15", name: "Harish Q", blood_group: "H-Type (Bombay)", contact: "+91 9555566615", lat: 12.8980, lng: 80.1920, source_hospital: "Global Health City", status: "Eligible" },
    { id: "RH-A06", name: "Varun K", blood_group: "AB-", contact: "+91 9443322116", lat: 12.9010, lng: 80.1950, source_hospital: "Global Health City", status: "Eligible" },
    { id: "RH-A12", name: "Prashanth F", blood_group: "AB-", contact: "+91 9771188992", lat: 12.8970, lng: 80.1910, source_hospital: "Global Health City", status: "Eligible" },
    { id: "RH-O03", name: "Bharath K", blood_group: "O-Negative", contact: "+91 9001199883", lat: 12.9005, lng: 80.1938, source_hospital: "Global Health City", status: "Eligible" },
    { id: "RH-O09", name: "Jatin V", blood_group: "O-Negative", contact: "+91 9556677889", lat: 12.8990, lng: 80.1930, source_hospital: "Global Health City", status: "Eligible" },
    { id: "RH-O15", name: "Quentin X", blood_group: "O-Negative", contact: "+91 9112233445", lat: 12.9015, lng: 80.1955, source_hospital: "Global Health City", status: "Eligible" },

    // --- MGM HEALTHCARE (Nelson Manickam Rd) ~18km from Saveetha ---
    { id: "RH-B06", name: "Karthik R", blood_group: "H-Type (Bombay)", contact: "+91 9003311226", lat: 13.0664, lng: 80.2327, source_hospital: "MGM Healthcare", status: "Eligible" },
    { id: "RH-B12", name: "Sneha G", blood_group: "H-Type (Bombay)", contact: "+91 9222233312", lat: 13.0670, lng: 80.2330, source_hospital: "MGM Healthcare", status: "Eligible" },
    { id: "RH-B18", name: "Swathi R", blood_group: "H-Type (Bombay)", contact: "+91 9888899918", lat: 13.0660, lng: 80.2320, source_hospital: "MGM Healthcare", status: "Eligible" },
    { id: "RH-A05", name: "Shruti P", blood_group: "AB-", contact: "+91 9887766555", lat: 13.0675, lng: 80.2340, source_hospital: "MGM Healthcare", status: "Eligible" },
    { id: "RH-A11", name: "Tanvi J", blood_group: "AB-", contact: "+91 9661177881", lat: 13.0655, lng: 80.2315, source_hospital: "MGM Healthcare", status: "On-Cooldown" },
    { id: "RH-O02", name: "Rithika S", blood_group: "O-Negative", contact: "+91 9840001122", lat: 13.0665, lng: 80.2325, source_hospital: "MGM Healthcare", status: "On-Cooldown" },
    { id: "RH-O08", name: "Ishwarya P", blood_group: "O-Negative", contact: "+91 9445566778", lat: 13.0662, lng: 80.2322, source_hospital: "MGM Healthcare", status: "Eligible" },
    { id: "RH-O14", name: "Pavithra G", blood_group: "O-Negative", contact: "+91 9001122334", lat: 13.0668, lng: 80.2335, source_hospital: "MGM Healthcare", status: "On-Cooldown" },

    // --- FORTIS MALAR (Adyar) ~24km from Saveetha (OUTSIDE 20km) ---
    { id: "RH-B05", name: "Vikram Seth", blood_group: "H-Type (Bombay)", contact: "+91 9776655445", lat: 13.0067, lng: 80.2570, source_hospital: "Fortis Malar", status: "On-Cooldown" },
    { id: "RH-B11", name: "Rahul M", blood_group: "H-Type (Bombay)", contact: "+91 9111122211", lat: 13.0070, lng: 80.2580, source_hospital: "Fortis Malar", status: "Eligible" },
    { id: "RH-B17", name: "Ganesh E", blood_group: "H-Type (Bombay)", contact: "+91 9777788817", lat: 13.0060, lng: 80.2560, source_hospital: "Fortis Malar", status: "On-Cooldown" },
    { id: "RH-A03", name: "Monica G", blood_group: "AB-", contact: "+91 9550011223", lat: 13.0075, lng: 80.2590, source_hospital: "Fortis Malar", status: "On-Cooldown" },
    { id: "RH-A10", name: "Dinesh K", blood_group: "AB-", contact: "+91 9551166770", lat: 13.0065, lng: 80.2575, source_hospital: "Fortis Malar", status: "Eligible" },
    { id: "RH-O04", name: "Emily D", blood_group: "O-Negative", contact: "+91 9771100224", lat: 13.0072, lng: 80.2585, source_hospital: "Fortis Malar", status: "Eligible" },
    { id: "RH-O10", name: "Kavya N", blood_group: "O-Negative", contact: "+91 9667788990", lat: 13.0068, lng: 80.2568, source_hospital: "Fortis Malar", status: "On-Cooldown" }
];