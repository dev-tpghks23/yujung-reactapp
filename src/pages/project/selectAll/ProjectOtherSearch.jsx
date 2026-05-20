import ArrowUpIcon from '../project_icon/la_arrow-up.svg';
import S from './ProjectOtherSearchStyle';

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectOtherSearch = () => (
	<S.SearchRow>
		<S.CommunityTitle>다른 사람들과 성장과정을 공유하고 경험해보세요.</S.CommunityTitle>
		<S.SearchBoxWrap>
			<S.SearchBox>
				<S.SearchInput placeholder="다양한 성장 과정을 탐색해보세요." />
				<S.SearchBtn><S.ArrowIcon src={ArrowUpIcon} alt="search" /></S.SearchBtn>
			</S.SearchBox>
		</S.SearchBoxWrap>
	</S.SearchRow>
);

export default ProjectOtherSearch;