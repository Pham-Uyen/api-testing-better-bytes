const mode = "light";

// Cách 1: Sử dụng if ..... else
if (mode === "dark") {
    console.log("Chế độ tối đã được bật!");
} else if (mode === "light") {
    console.log("Chế độ sáng đã được bật!");
} else {
    console.log("Mode không hợp lệ!");
};

// Cách 2: Sử dụng switch case: 
switch (mode) {
    case "dark":
        console.log("Chế độ tối đã được bật!");
        break;
    case "light":
        console.log("Chế độ sáng đã được bật!");
        break;
    default:
        console.log("Mode không hợp lệ!");
}