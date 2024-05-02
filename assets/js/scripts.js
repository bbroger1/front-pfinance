const API_BASE_URL = "http://127.0.0.1:5000/pfinance";

function fillModal() {
  var categorySelect = document.getElementById("category");
  fetch(`${API_BASE_URL}/categories`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.data.forEach(function (category) {
        var option = document.createElement("option");
        option.text = category.name;
        option.value = category.id;
        categorySelect.add(option);
      });
    });
}

document.getElementById("category").addEventListener("change", function () {
  var categoryId = this.value;
  fetch(`${API_BASE_URL}//subcategories/` + categoryId)
    .then((response) => response.json())
    .then((data) => {
      var subCategorySelect = document.getElementById("subCategory");
      subCategorySelect.innerHTML = "";
      // Adiciona a opção 'Selecione'
      var defaultOption = document.createElement("option");
      defaultOption.text = "Selecione";
      subCategory.add(defaultOption);
      // Adiciona as subcategorias
      data.data.forEach(function (subcategory) {
        var option = document.createElement("option");
        option.text = subcategory.name;
        subCategorySelect.add(option);
      });
    });
});
