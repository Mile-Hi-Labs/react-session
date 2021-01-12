import { BaseAdapter } from '@mile-hi-labs/react-data';
import Pluralize from 'pluralize';

class AppAdapter extends BaseAdapter {
	static userId = null;

	static buildURL(modelName, id) {
		let url = super.buildURL(modelName, id);

		if (this.userId && id) {
			return this.baseURL() + `/users/${this.userId}/${modelName}/${id}`;
		}
		if (this.userId) {
			return this.baseURL() + `/users/${this.userId}/${modelName}`;
		}
		return url;
	}

}

export default AppAdapter;
