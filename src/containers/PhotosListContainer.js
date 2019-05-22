import { connect } from 'react-redux';
import PhotosList from '../components/PhotosList';

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

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);
