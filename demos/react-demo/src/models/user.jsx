import AppModel from 'models/app';

class User extends AppModel {
	constructor(type, props = {}) {
		super(type, props);

		// Attrs
		this.photo = props.photo;
		this.name = props.name;
		this.email = props.email;
		this.token = props.token;


		// Relationships
		this.books = this.hasMany('book', props.books);
	}

	get firstName() {
		return this.name && this.name.split(' ')[0];
	}

	get lastName() {
		return this.name && this.name.split(' ')[1];
	}

}

export default User;
