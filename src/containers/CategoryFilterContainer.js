import { connect } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter';

const mapStateToProps = (state) => {
  return {
    photos: state.photosData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favourite: (category) => {
      dispatch({
        type: 'FILTER',
        category
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
