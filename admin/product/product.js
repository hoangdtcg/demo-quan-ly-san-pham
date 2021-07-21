let products = loadData(PRODUCT);
let current = -1;
//CRUD
// Hiển thị ra toàn bộ sản phẩm
function displayAllProduct() {
    let str = '';
    for (let i = 0; i < products.length; i++) {
        // str += "<tr>" +
        //     "<th scope='row'>" + (i + 1) + "</th>" +
        //     "<td>" + products[i][0] + "</td>" +
        //     "<td>" + products[i][1] + "</td>" +
        //     "<td>" + products[i][2] + "</td>" +
        //     "</tr>";

        str += `<tr>
                    <th scope="row">${i+1}</th>
                    <td><img style="height:200px" src=${products[i][3]}></td>
                    <td>${products[i][0]}</td>
                    <td>${products[i][1]}</td>
                    <td>${products[i][2]}</td>
                    <td><button type="button" class="btn btn-success" onclick= "showProduct(${i})">Xem</button>
                    <td><button type="button" class="btn btn-warning" onclick= "editProduct(${i})">Sửa</button>
                    <td><button type="button" class="btn btn-danger" onclick= "deleteProduct(${i})">Xóa</button>
                    </td>
                </tr>`;
    }
    document.getElementById('product-list').innerHTML = str;
    saveData(PRODUCT, products);
}

//Thêm mới sản phẩm - Create
function createProduct() {
    let name = document.getElementById('name-product').value;
    let price = document.getElementById('price-product').value;
    let madein = document.getElementById('madein-product').value;
    let image = document.getElementById('image-product').value;

    let product = [name, price, madein, image];
    products.push(product);
    displayAllProduct();
    clearForm('create-product');
}

//Chi tiết thông tin 1 sản phẩm - Read
function showProduct(index) {
    showForm('show-detail');
    document.getElementById('card-name').innerHTML = products[index][0];
    document.getElementById('card-price').innerHTML = products[index][1];
    document.getElementById('card-madein').innerHTML = products[index][2];
    document.getElementById('card-image').src = products[index][3];
}

//Cập nhật thông tin sản phẩm - Update
function updateProduct() {
    let name = document.getElementById('name-update').value;
    let price = document.getElementById('price-update').value;
    let madein = document.getElementById('madein-update').value;
    let image = document.getElementById('image-update').value;

    products[current][0] = name;
    products[current][1] = price;
    products[current][2] = madein;
    products[current][3] = image;

    // let product = [name, price, madein];
    // products[index] = product;
    displayAllProduct();
    current = -1;
    hideForm('update-product');
}

//Hiển thị form update
function editProduct(index) {
    showForm('update-product');
    document.getElementById('name-update').value = products[index][0];
    document.getElementById('price-update').value = products[index][1];
    document.getElementById('madein-update').value = products[index][2];
    document.getElementById('image-update').value = products[index][3];
    current = index;
}

//Xóa 1 sản phẩm - Delete
function deleteProduct(index) {
    products.splice(index, 1);
    displayAllProduct();
}

function showForm(id) {
    document.getElementById(id).style.display = "block";
}

function hideForm(id) {
    document.getElementById(id).style.display = "none";
}

function clearForm(id) {
    document.getElementById(id).reset();
}

displayAllProduct();