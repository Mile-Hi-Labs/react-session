import { BaseModel } from '@mile-hi-labs/react-data';
import Moment from 'moment';

class AppModel extends BaseModel {
	constructor(type, props = {}) {
		super(type, props);

		// Attrs
		this.icon = 'info';
		this.createdAt = props.createdAt;
		this.updatedAt = props.updatedAt;
	}


	// Computed
	get displayCreatedAt() {
		return this.createdAt && Moment(this.createdAt).format('MMM Do, YYYY @ hh:mma')
	}

	get displayUpdatedAt() {
		return this.createdAt && Moment(this.createdAt).format('MMM Do, YYYY @ hh:mma')
	}
}

export default AppModel;
