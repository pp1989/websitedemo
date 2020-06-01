function category() {

    axios.get('https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories')
        .then((response) => {
            var mainContainer = document.getElementById("categ");

            for (var i = 0; i <= (response.data.data).length; i++) {
                console.log(response.data.data[i])
                var div = document.createElement("div");
                div.innerHTML = 'Details:> ' + response.data.data[i].name + ' ' + response.data.data[i].slug + ' ' + response.data.data[i].icon_url + ' ' + response.data.data[i].brands_name + ' ' + response.data.data[i].brands_slug;
                mainContainer.appendChild(div);
            }

        })
}