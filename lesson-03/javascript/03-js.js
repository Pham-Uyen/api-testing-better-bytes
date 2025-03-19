const platform = "prime";

// Cách 1: Sử dụng if ..... else
if (platform === "netflix") {
    console.log("Bạn có thể xem 'Stranger Things'!");
} else if (platform === "disney+") {
    console.log("Thử ngay 'Loki' trên Disney+!");
} else if (platform === "hbo") {
    console.log("Xem 'Game of Thrones' ngay nào!");
} else if (platform === "prime") {
    console.log("Bạn có thể xem 'The Boys'!");
} else {
    console.log("Nền tảng không hợp lệ!");
};

// Cách 2: Sử dụng switch case: 
switch (platform) {
    case "netflix":
        console.log("Bạn có thể xem 'Stranger Things'!");
        break;
    case "disney+":
        console.log("Thử ngay 'Loki' trên Disney+!");
        break;
    case "hbo":
        console.log("Xem 'Game of Thrones' ngay nào!");
        break;
    case "prime":
        console.log("Bạn có thể xem 'The Boys'!");
        break;
    default:
        console.log("Nền tảng không hợp lệ!");
};