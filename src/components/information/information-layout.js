import css from './information.module.scss';

export function InformationLayout({ children }) {
	return <div className={css['info']}>{children}</div>;
}
