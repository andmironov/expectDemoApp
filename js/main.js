
var Expect = function(options) {
	
	var currentFormData = {},
		wrapper = options.wrapper || $(".expectApp"),
		targetElement = wrapper.find("ul.expectations"),
		localStorageItemName = "expectApp",
		self = this;


	this.init = function() {
		this.dataObject = getDataFromLocalStorage(localStorageItemName);
	}

	wrapper.find("form").on("submit", function(event){
		event.preventDefault();

  		currentFormData = $(this).serializeArray();
		populateDataObject(currentFormData);
  		saveDataToLocalStorage(localStorageItemName);

  		showData(targetElement);
	});

	wrapper.find(".showForm").on("click", function(event){
		event.preventDefault();

		$("form").css("display", "block");
		$(this).hide();
	});

	var populateDataObject = function(currentFormData) {
	
		var newObject = {};
		currentFormData.forEach(function(item){
			newObject[item.name] = item.value;
  		});

		self.dataObject = newObject;
	
	}

	var showData = function(targetElement) {
		

			targetElement.append(
				"<li>" +
				"<h5 class='user_name'>" +
				self.dataObject.user_name +
				"</h5>" +
				"<p>" +
				self.dataObject.prediction_text +
				"</p>"
			);
	
	}

	var saveDataToLocalStorage = function(localStorageItemName) {
		localStorage.setItem(localStorageItemName, self.dataObject);
	}

	var getDataFromLocalStorage = function(localStorageItemName) {
		if(localStorage.getItem(localStorageItemName)) {
			return localStorage.getItem(localStorageItemName);
		} else {
			return new Array();
		}
	}
}

var expectApp = new Expect({
	"wrapper" : $(".expectApp")
});
expectApp.init();

