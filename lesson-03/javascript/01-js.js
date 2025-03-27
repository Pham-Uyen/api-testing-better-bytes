const result = "win";

// Cách 1: Sử dụng if ..... else
if (result === "win") {
    console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
} else if (result === "draw") {
    console.log("Trận đấu hoà, thật đáng tiếc!");
} else if (result === "lose") {
    console.log("Thua rồi, nhưng đừng bỏ cuộc!");
} else {
    console.log("Giá trị result chưa được định nghĩa!");
};

// Cách 2: Sử dụng switch case: 
switch (result) {
    case "win": 
        console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
        break;
    case "draw": 
        console.log("Trận đấu hoà, thật đáng tiếc!");
        break;
    case "lose": 
        console.log("Thua rồi, nhưng đừng bỏ cuộc!");
        break;
    default: 
        console.log("Giá trị result chưa được định nghĩa!");
}