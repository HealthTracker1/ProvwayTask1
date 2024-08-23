document.getElementById("addToCart").addEventListener("click", function() {
    const selectedSize = document.getElementById("size").value;
    const selectedColor = document.getElementById("color").value;
    alert(`Item added to cart! Size: ${selectedSize}, Colour: ${selectedColor}`);
});
