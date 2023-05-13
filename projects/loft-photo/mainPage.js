import pages from './pages';
import model from './model';

export default {
  async getNextPhoto() {
    const { friend, id, url } = await model.getNextPhoto();
    this.setFriendAndPhoto(friend, id, url);
  },

  setFriendAndPhoto(friend, id, url) {
    const photoComponent = document.querySelector('.component-photo');
    const headerPhotoComponent = document.querySelector('.component-header-photo');
    const headerNameComponent = document.querySelector('.component-header-name');

    photoComponent.style.backgroundImage = `url(${url})`;
    headerPhotoComponent.style.backgroundImage = `url('${friend.photo_50}')`;
    headerNameComponent.innerText = `${friend.first_name ?? ''} ${
      friend.last_name ?? ''
    }`;
  },

  handleEvents() {
    let startFrom;

    document.querySelector('.component-photo').addEventListener('touchstart', (e) => {
      e.preventDefault();
      startFrom = { y: e.changedTouches[0].pageY };
    });

    document.querySelector('.component-photo').addEventListener('touchend', async (e) => {
      const direction = e.changedTouches[0].pageY - startFrom.y;

      if (direction < 0) {
        await this.getNextPhoto();
      }
    });
  },
};
