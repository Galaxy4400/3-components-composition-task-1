import PropTypes from 'prop-types';
import { FieldLayout } from './field-layout';

export function Field(props) {
	return <FieldLayout {...props} />;
}

Field.propTypes = {
	cells: PropTypes.array,
	onClick: PropTypes.func,
	winPattern: PropTypes.array,
};
