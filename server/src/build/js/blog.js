$(document).ready(function () {
    var template = `<div class="col-md-4 col-sm-6">
                                <!-- Blog Single -->
                                <div class="blog-single pb-30">
                                    <div class="blog-img">
                                        <img src="img/blog/1.png" alt="" />
                                        <h2>16<span>MAR</span></h2>
                                    </div>
                                    <div class="blog-content mt-20">
                                        <div class="blog-cnt-top">
                                            <h5><a href="blog-details.html?id=${5}">Modern Architecture Design</a></h5>
                                            <span>By Jhon Deo, 07 am</span>
                                        </div>
                                        <p>Modern best Architect agency perspiciatis unde omniste natus error sit volutatem accusantium doloremque gftium, totam rem aperiam perspiciatis unde omnis iste natuserr</p>
                                    </div>
                                </div>
                                <!-- Blog Single -->
                    </div>`;
    for (var x = 0; x < 10; x++) {
        $('#blog-container').append(template);
    }
});