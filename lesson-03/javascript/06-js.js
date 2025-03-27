const fastFood = "burger";

// Cách 1: Sử dụng if ..... else
if (fastFood === "burger") {
    console.log("Giá: 5$");
} else if (fastFood === "pizza") {
    console.log("Giá: 8$");
} else if (fastFood === "sushi") {
    console.log("Giá: 12$" )
} else if (fastFood === "taco") {
    console.log("Giá: 6$");
} else {
    console.log("Món ăn không hợp lệ!");
};

// Cách 2: Sử dụng switch case: 
switch (fastFood) {
    case "burger":
        console.log("Giá: 5$");
        break;
    case "pizza":
        console.log("Giá: 8$");
        break;
    case "sushi":
        console.log("Giá: 12$" );
        break;
    case "taco":
        console.log("Giá: 6$");
        break;
    default:
        console.log("Món ăn không hợp lệ!");
};