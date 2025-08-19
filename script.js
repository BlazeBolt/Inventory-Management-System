function fetchProducts() {
    fetch('fetch.php')
      .then(res => res.json())
      .then(data => {
        let rows = '';
        if (data.length === 0) {
          rows = `<tr><td colspan="4">No products found.</td></tr>`;
        } else {
          data.forEach(p => {
            rows += `<tr>
              <td>${p.name}</td>
              <td>${p.quantity}</td>
              <td>₹${parseFloat(p.price).toFixed(2)}</td>
              <td>
                <button class="delete-btn" onclick="deleteProduct(${p.id})">Delete</button>
              </td>
            </tr>`;
          });
        }
        document.getElementById('product-table').innerHTML = rows;
      })
      .catch(err => console.error("Error fetching products:", err));
  }
  
  function addProduct() {
    const name = document.getElementById('name').value.trim();
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
  
    if (!name || !quantity || !price) {
      alert("Please fill in all fields.");
      return;
    }
  
    fetch('add.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `name=${encodeURIComponent(name)}&quantity=${quantity}&price=${price}`
    })
      .then(response => {
        if (response.ok) {
          document.getElementById('name').value = '';
          document.getElementById('quantity').value = '';
          document.getElementById('price').value = '';
          fetchProducts();
        } else {
          alert("Failed to add product.");
        }
      })
      .catch(err => console.error("Error adding product:", err));
  }
  
  function deleteProduct(id) {
    if (!confirm("Are you sure you want to delete this product?")) return;
  
    fetch('delete.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `id=${id}`
    })
      .then(response => {
        if (response.ok) {
          fetchProducts();
        } else {
          alert("Failed to delete product.");
        }
      })
      .catch(err => console.error("Error deleting product:", err));
  }
  
  window.onload = fetchProducts;
  