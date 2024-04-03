
// Ex1 
// Viết chương trình khai báo 3 số ngẫu nhiên.
// xây dựng hàm kiểm tra chẵn lẻ và gọi hàm với mỗi số đã khai báo
// In kết quả ra màn hình console.

function checkNumber(number) {
    if (number % 2 == 0) {
        console.log(number + " là số chẵn");
    } else {
        console.log(number + " là số lẻ");
    }
}

checkNumber(5);
checkNumber(6);
checkNumber(4);