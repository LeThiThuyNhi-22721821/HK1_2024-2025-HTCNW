function setMasp(masp) {
    localStorage.setItem("masp", masp);
    console.log("Mã sản phẩm được lưu:", masp); // Dòng kiểm tra
    window.location.href = "ChiTietSanPham.html";
}