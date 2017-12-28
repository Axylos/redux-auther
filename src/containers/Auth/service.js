import apiService from '../../utils/api.service';

export const getFoo = apiService.bind(null, '/foo');

