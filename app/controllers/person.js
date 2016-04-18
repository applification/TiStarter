var args = arguments[0] || {};

// onOpen of Window filter collection and bind data to view
function init() { // eslint-disable-line no-unused-vars
	// Filter collection by Id passed over from selected item in list
  var person = Alloy.Collections.randomuserme.where({
    id: args.modelId
  });

	// Ssome crazy stuff you have to do to get collection as a JSON object
  person = JSON.stringify(person);
  person = JSON.parse(person);
  person = person[0]; // Get first person in collection array

  // Bind as normal to view
  $.winPerson.title = person.Fullname;
  $.title.text = 'Title: ' + person.Title;
  $.fullName.text = 'Name: ' + person.Firstname + ' ' + person.Lastname;
  $.email.text = 'Email: ' + person.Email;
  $.password.text = 'Password: ' + person.Password;
  $.profilephoto.image = person.ProfilePhoto;
}
