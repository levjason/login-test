import { environment } from '../../environments';

const dotaApi = environment.apis.dota;
const heroesApi = `${dotaApi}/packages`;

const pathValues = {
  dotaApi,
  heroesApi,
};

export { pathValues };
