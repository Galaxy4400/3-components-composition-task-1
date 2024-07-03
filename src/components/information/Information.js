import PropTypes from 'prop-types';
import { InformationLayout } from './information-layout';
import { getTitle } from './helpers';

export function Information(props) {
	return <InformationLayout>{getTitle(props)}</InformationLayout>;
}

Information.propTypes = {
	isGameDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.number,
};
