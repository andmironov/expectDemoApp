
var Expect = function(options) {
	
	var currentFormData = {},
		wrapper = options.wrapper || $(".expectApp"),
		dataObject = {},
		targetElement = wrapper.find("ul.expectations"),
		localStorageItemName = "expectApp",
		self = this;


	wrapper.find("form").on("submit", function(event){
		event.preventDefault();

  		currentFormData = $(this).serializeArray();
  		populateDataObject(dataObject, currentFormData);
  		saveToLocalStorage(dataObject, localStorageItemName);
	});

	wrapper.find(".showForm").on("click", function(event){
		event.preventDefault();

		$("form").css("display", "block");
		$(this).hide();
	});

	var populateDataObject = function(dataObject, currentFormData) {

	}

	var showData = function(dataObject, targetElement) {

	}

	var saveToLocalStorage = function(dataObject, localStorageItemName) {
		localStorage.setItem( localStorageItemName, dataObject );
	}


}

var expectApp = new Expect({
	"wrapper" : $(".expectApp")
});
