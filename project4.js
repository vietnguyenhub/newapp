    var postAPI = 'https://gnews.io/api/v4/top-headlines?&lang=en&token=4ae571f36bcc219d2f881dfd2d4b1752';
    // sử dụng fetch lấy api chuyển về dạng json
    fetch(postAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        // map dạng json về dạng chuỗi để in ra thông tin
        console.log(json)
        var htmls = (json.articles).map(function(post){ 
            return `<div class="row no-gutters" style= "margin: 30px;">
                         <div class="col-auto">
                            <img src="${post.image}" width="700px" height="500px" class="img-fluid">
                        </div>
                        <div class="col">
                         <div class="card-block px-2">
                                 <h3 class="card-title"><a href="${post.url}" target= "_blank" style ="color:blue;" style ="text-decoration:none">${post.title}</a></h3>
                                 <p class="card-text">${post.publishedAt}</p>
                                 <p class="card-text">${post.content}</p>
                        </div>
                        </div>
                     </div>`
        });
        document.getElementById("header").innerHTML = htmls;
    });

    function timkiem(){
        var keyword = document.getElementById("keyword").value;
        document.getElementById("keyword").value ="";

        fetch('https://gnews.io/api/v4/search?q=' + keyword + '&token=4ae571f36bcc219d2f881dfd2d4b1752')
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        var htmls = (posts.articles).map(function(post){
            return `<div class="row no-gutters" style= "margin: 30px;">
                        <div class="col-auto">
                            <img src="${post.image}" width="700px" height="500px" class="img-fluid">
                        </div>
                        <div class="col">
                            <div class="card-block px-2">
                                <h3 class="card-title"><a href="${post.url}" target= "_blank" style ="color:blue;" style ="text-decoration:none">${post.title}</a></h3>
                                <p class="card-text">${post.publishedAt}</p>
                                <p class="card-text">${post.content}</p>
                             </div>
                         </div>
                    </div>`
        });
        var html = htmls.join('');
        document.getElementById("header").innerHTML = html;
    });
  }

