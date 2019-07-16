let Product = function (name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    }
};
let App = function () {
    this.products = [];
    this.index = function () {
        document.getElementById('total-product').innerHTML = this.products.length + "product";
        let html = "";

        if (this.products.length > 0) {
            for (let i = 0; i < this.products.length; i++) {
                html += "<tr>";
                html += "<td>" + this.products[i].getName() + "</td>";
                html += "<td><button onclick='app.delete(" + i + ")'>Delete</button></td>";
                html += "<td><button onclick='app.edit(" + i + ")'>Update</button></td>";
                html += "</tr>";
            }
            document.getElementById("list").innerHTML = html;
        } else {
            html += "<tr>";
            html += "<td colspan='3'>Khong co san pham nao</td>";
            html += "<tr>";
            document.getElementById("list").innerHTML = html;
        }

    };
    this.add = function () {
        let name = document.getElementById('name').value;
        let product = new Product(name);
        this.products.push(product);
        document.getElementById('name').value = "";
        this.index();
    };
    this.delete = function (index) {
        this.products.splice(index, 1);
        this.index();
    };
    this.edit = function (index) {
        let editName = prompt('Nhap ten can sua: ');
        this.products[index].setName(editName);
        this.index();
    }

};
let app = new App();
app.index();