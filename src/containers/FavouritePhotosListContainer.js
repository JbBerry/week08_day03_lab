import { connect } from 'react-redux';
import FavouritePhotosList from '../components/FavouritePhotosList';

const mapStateToProps = (state) => {
  return {
    photos: state.photosData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favourite: (id) => {
      dispatch({
        type: 'FAVOURITE',
        id
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePhotosList);
