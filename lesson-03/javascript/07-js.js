const rank = "gold";

// Cách 1: Sử dụng if ..... else
if (rank === "bronze") {
    console.log("Bạn đang ở cấp bậc thấp nhất!");
} else if (rank === "silver") {
    console.log("Bạn đã có một số lợi ích!");
} else if (rank === "gold") {
    console.log("Bạn nhận được nhiều phần thưởng hơn!");
} else if (rank === "diamond") {
    console.log("Bạn thuộc top người chơi xuất sắc!");
} else {
    console.log("Thứ hạng không hợp lệ!");
};

// Cách 2: Sử dụng switch case: 
switch (rank) {
    case "bronze":
        console.log("Bạn đang ở cấp bậc thấp nhất!");
        break;
    case "silver":
        console.log("Bạn đã có một số lợi ích!");
        break;
    case "gold":
        console.log("Bạn nhận được nhiều phần thưởng hơn!");
        break;
    case "diamond":
        console.log("Bạn thuộc top người chơi xuất sắc!");
        break;
    default:
        console.log("Thứ hạng không hợp lệ!");
};