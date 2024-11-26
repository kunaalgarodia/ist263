function ImagesOff() {
    document.getElementById('merch3_1').style.display = 'none';
    document.getElementById('merch3_2').style.display = 'none';
    document.getElementById('merch3_3').style.display = 'none';
}
function Merch1On() {
    document.getElementById('merch3_1').style.display = 'block';
}
function Merch2On() {
    document.getElementById('merch3_2').style.display = 'block';
}
function Merch3On() {
    document.getElementById('merch3_3').style.display = 'block';
}
function AddToCart() {
    event.preventDefault();
    document.getElementById("messages").innerHTML = "Your item was added to the cart!";
}