const score = 90;

// Cách 1: Sử dụng if ..... else
if (score >= 0 && score < 40) {
    console.log("Xếp hạng: Newbie");
} else if (score >= 40 && score < 70) {
    console.log("Xếp hạng: Intermediate" );
} else if (score >= 70 && score < 90) {
    console.log("Xếp hạng: Pro" );
} else if (score >= 90 && score <= 100) {
    console.log("Xếp hạng: Legend" );
} else {
    console.log("Điểm không hợp lệ!");
};

// Cách 2: Sử dụng switch case: 
switch (true) {
    case (score >= 0 && score < 40):
        console.log("Xếp hạng: Newbie");
        break;
    case (score >= 40 && score < 70):
        console.log("Xếp hạng: Intermediate");
        break;
    case (score >= 70 && score < 90):
        console.log("Xếp hạng: Pro");
        break;
    case (score >= 90 && score <= 100):
        console.log("Xếp hạng: Legend");
        break;
    default:
        console.log("Điểm không hợp lệ!");
};