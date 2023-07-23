import {PETS_BASE_URL} from '../constants';

async function getPets(cursor: number) {
  try {
    const response = await fetch(
      `${PETS_BASE_URL}/breed/hound/images/random/${cursor}`,
    );
    if (response?.ok) {
      const pets = await response?.json();
      if (pets?.status === 'success') {
        return pets?.message;
      }
    }
  } catch (error: any) {
    console.error('Get pets catch: ', error?.message);
  }
}

export {getPets};
