const event = "cybermonday";

// Cách 1: Sử dụng if ..... else
if (event === "blackfriday") {
    console.log("Giảm 50% toàn bộ sản phẩm!");
} else if (event === "cybermonday") {
    console.log("Giảm 40% cho sản phẩm công nghệ!");
} else if (event === "christmas") {
    console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!")
} else {
    console.log("Chương trình không hợp lệ!");
};

// Cách 2: Sử dụng switch case: 
switch (event) {
    case "blackfriday":
        console.log("Giảm 50% toàn bộ sản phẩm!");
        break;
    case "cybermonday":
        console.log("Giảm 40% cho sản phẩm công nghệ!");
        break;
    case "christmas":
        console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
        break;
    default:
        console.log("Chương trình không hợp lệ!");
}