import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import { getAllRegions } from '../../../redux/regionsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeFromDuration,
  changeToDuration,
  selectRegion,
  addTag,
  removeTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeFromDuration: value => dispatch(changeFromDuration(value)),
  changeToDuration: value => dispatch(changeToDuration(value)),
  selectRegion: value => dispatch(selectRegion(value)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
