const products = [
  {
    name: "Product 1",
    category: "Electronics",
    price: 799.99,
    available: true,
  },
  {
    name: "Product 2",
    category: "Books",
    price: 19.99,
    available: true,
  },
  {
    name: "Product 3",
    category: "Home & Kitchen",
    price: 49.99,
    available: false, //We set Home and Kitchen to false so they not show on UI when we select that category.
  },
  {
    name: "Product 4",
    category: "Toys & Games",
    price: 29.99,
    available: true,
  },
  {
    name: "Product 5",
    category: "Electronics",
    price: 599.99,
    available: true,
  },
  {
    name: "Product 6",
    category: "Books",
    price: 9.99,
    available: true,
  },
];

// Getting the the fields by their ID : -

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("category");
const availableFilterProducts = document.getElementById("available");

// Create a function to apply filter on specific criteria :-

function FilterApplyOnProducts() {
  // getting their values here :-

  const categorySelect = categoryFilter.value;
  // console.log(categorySelect);
  const isAvailable = availableFilterProducts.value;

  //   Filtering the products based on selected criteria :

  const filteredProducts = products.filter((product) => {
    if (categorySelect !== "All" && product.category !== categorySelect) {
      return false;
    }
    if (isAvailable && !product.available) {
      return false;
    }

    return true;
  });

  // Display Filtered products :-
  displayproducts(filteredProducts);
}

// Function to display products to show on UI :-
function displayproducts(DisplayTheProductsOnUI) {
  const tbody = document.getElementById("productList"); // Get the tbody element
  tbody.innerHTML = ""; // Clear previous rows

  DisplayTheProductsOnUI.forEach((product) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${product.name}</td>
    <td>${product.category}</td>
    <td>$${product.price.toFixed(2)}</td>
    <td>${product.available ? "Yes" : "No"}</td>
  `;
    tbody.appendChild(tr);
  });
}

categoryFilter.addEventListener("change", FilterApplyOnProducts);
availableFilterProducts.addEventListener("change", FilterApplyOnProducts);

// Initializing the list:
displayproducts(products);
