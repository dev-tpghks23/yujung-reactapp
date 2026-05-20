import theme from '../../../styles/theme';
import S from './ProjectDetailActionStyle';

// ─────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────
const AiBadge = () => (
	<S.AiBadge>
		<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
			<circle cx="14" cy="14" r="14" fill="url(#ai_grad_action)" />
			<text x="14" y="19" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">AI</text>
			<defs>
				<linearGradient id="ai_grad_action" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
					<stop stopColor={theme.PALETTE.primary.main} />
					<stop offset="1" stopColor={theme.PALETTE.third.main} />
				</linearGradient>
			</defs>
		</svg>
		AI
	</S.AiBadge>
);

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectDetailAction = ({ actions }) => (
	<S.Section $mt="60px">
		<S.SectionTitleRow>
			<S.SectionTitle>행동 추천 <AiBadge /></S.SectionTitle>
		</S.SectionTitleRow>
		<S.ActionGrid>
			{actions.map((action) => (
				<S.ActionCard key={action.id}>
					<S.ActionDot />
					<S.ActionContent>
						<S.ActionTitle>{action.title}</S.ActionTitle>
						<S.ActionDesc>{action.desc}</S.ActionDesc>
					</S.ActionContent>
				</S.ActionCard>
			))}
		</S.ActionGrid>
	</S.Section>
);

export default ProjectDetailAction;