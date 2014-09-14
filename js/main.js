
var Expect = function(options) {
	
	var currentFormData,
		wrapper = options.wrapper || $(".expectApp"),
		dataObject = {},
		self = this;


	wrapper.find("form").on("submit", function(event){
		event.preventDefault();

  		var formData = $(this).serializeArray();
  		console.log(formData);
	});

	wrapper.find(".showForm").on("click", function(event){
		event.preventDefault();

		$("form").css("display", "block");
		$(this).hide();
	});

	var populateObject = function() {

	}


}

var expectApp = new Expect({
	"wrapper" : $(".expectApp")
});
