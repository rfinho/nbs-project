import axios from 'axios'

const IMAGE_URL = 'images/';

class ImageService {

    executeGetService() {
        return axios.get(IMAGE_URL);
    }

    executePostService(image) {
        return axios.post(IMAGE_URL, image);
    }

    executePutService(imageID, image) {
        return axios.put(IMAGE_URL + imageID, image);
    }

    executeDeleteService(id) {
        return axios.delete(IMAGE_URL + "/" + id);
    }


}

export default new ImageService()