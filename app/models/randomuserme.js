exports.definition = {
  config: {
    columns: {
      id: 'TEXT PRIMARY KEY',
      Title: 'text',
      Firstname: 'text',
      Lastname: 'text',
      Fullname: 'text',
      ProfilePhoto: 'text',
      ProfileThumb: 'text',
      Email: 'text',
      Password: 'text'
    },
    URL: 'http://api.randomuser.me/?results=10',
    debug: 0,
    useStrictValidation: 0, // validates each item if all columns are present
    adapter: {
      type: 'sqlrest',
      collection_name: 'randomuserme',
      idAttribute: 'id',
      db_name: 'tistarter'
    },
    // optional
    headers: {},
    // delete all models on fetch
    deleteAllOnFetch: true,
    parentNode: function parentNode(data) {
      var persons = [];

      _.each(data.results, function results(_entry) {
        var entry = {};

        entry.id = _entry.login.salt;
        entry.Title = _entry.name.title;
        entry.Firstname = _entry.name.first;
        entry.Lastname = _entry.name.last;

        entry.Fullname = entry.Firstname + ' ' + entry.Lastname;

        entry.ProfilePhoto = _entry.picture.large;
        entry.ProfileThumb = _entry.picture.thumbnail;

        entry.Email = _entry.email;
        entry.Password = _entry.login.password;

        persons.push(entry);
      });

      return persons;
    }
  },
  extendModel: function extendModel(Model) {
    _.extend(Model.prototype, {});
    return Model;
  },
  extendCollection: function extendCollection(Collection) {
    _.extend(Collection.prototype, {});
    return Collection;
  }
};
