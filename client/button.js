$(function() {
  function init() {
		$('[data-behaviour="custom-upload-input"]').on('change', updateButton);
  };

  function updateButton(e) {
		var inputValue = $(e.currentTarget).val().split( '\\' ).pop()
		$('[data-element="custom-upload-button"]').text(inputValue)
		e.preventDefault;
		console.log(inputValue)
  };

  init()
});
