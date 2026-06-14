import GeminiIcon from '../project_icon/material-icon-theme_gemini-ai.svg';
import LightBulbIcon from '../project_icon/35202510_light_bulb.svg';
import PaperPlaneIcon from '../project_icon/Group 446.svg';
import S from './ProjectDetailSuggestionStyle';
import { useNavigate } from 'react-router-dom';
import { goToMemberProfile } from '../../../utils/profileNavigation';

const ProjectDetailSuggestion = ({ suggestion, setSuggestion, suggestions, recommendedSuggestions = [], onSubmit, onAddFromSuggestion, isOwner }) => {
    const navigate = useNavigate();

    const hasRealSuggestions = suggestions.length > 0;
    const hasRecommended = !hasRealSuggestions && recommendedSuggestions.length > 0;

    const renderSuggestionItem = (s, isRecommended = false) => (
        <S.SuggestionItem key={(isRecommended ? 'rec-' : '') + s.id}>
            <S.SuggestionAvatarWrap
                onClick={() => goToMemberProfile(navigate, s.memberId)}
                style={{ cursor: 'pointer' }}
            >
                <S.SuggestionAvatarImg
                    src={s.memberProfileImageUrl || '/assets/picture/default-profile.png'}
                    alt={s.memberNickname}
                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/picture/default-profile.png'; }}
                />
            </S.SuggestionAvatarWrap>
            <S.SuggestionItemContent>
                <S.SuggestionUser
                    onClick={() => goToMemberProfile(navigate, s.memberId)}
                    style={{ cursor: 'pointer' }}
                >
                    {s.memberNickname}
                    {isRecommended && (
                        <span style={{
                            marginLeft: '6px',
                            fontSize: '10px',
                            fontWeight: 600,
                            color: '#7c5cfc',
                            background: '#f0ebff',
                            borderRadius: '4px',
                            padding: '1px 6px',
                            verticalAlign: 'middle',
                        }}>AI 추천</span>
                    )}
                </S.SuggestionUser>
                <S.SuggestionItemText>{s.suggestionTitle}</S.SuggestionItemText>
            </S.SuggestionItemContent>
            {isOwner && (
                <S.AddListBtn onClick={() => onAddFromSuggestion(s.suggestionTitle)}>+</S.AddListBtn>
            )}
        </S.SuggestionItem>
    );

    return (
        <S.Section $mt="60px">
        <S.SectionTitle>Suggestion</S.SectionTitle>
        <S.SuggestionBox>
            <S.SuggestionLeft>
                {isOwner ? (
                    // 내 프로젝트 - 안내 문구
                    <S.OwnerGuideWrap>
                        <S.OwnerGuideIcon>
                            <img src={LightBulbIcon} alt="전구 아이콘" width={40} height={40} />
                        </S.OwnerGuideIcon>
                        <S.OwnerGuideTitle>다른 사용자들의 제안을 확인하세요</S.OwnerGuideTitle>
                        <S.OwnerGuideDesc>
                            + 버튼을 눌러 마음에 드는 제안을<br />내 체크리스트에 바로 추가할 수 있어요
                        </S.OwnerGuideDesc>
                    </S.OwnerGuideWrap>
                ) : (
                    // 다른 사람 프로젝트 - 기존 입력 폼
                    <>
                        <S.SuggestionHeader>
                            <S.SuggestionIcon>
                                <img src={GeminiIcon} alt="gemini icon" width={28} height={28} />
                            </S.SuggestionIcon>
                            <S.SuggestionPrompt>당신의 체크리스트를 공유해주세요.</S.SuggestionPrompt>
                        </S.SuggestionHeader>
                        <S.SuggestionDesc>작은 조언과 피드백이 큰 성장의 밑거름이 됩니다.</S.SuggestionDesc>
                        <S.SuggestionInput
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            placeholder="제안을 입력해보세요."
                        />
                        <S.SuggestionSubmitBtn onClick={onSubmit}>
                            <S.PaperPlaneIcon src={PaperPlaneIcon} alt="제안 남기기" />
                            제안 남기기
                        </S.SuggestionSubmitBtn>
                    </>
                )}
            </S.SuggestionLeft>

            <S.SuggestionRight>
                {hasRealSuggestions && suggestions.map((s) => renderSuggestionItem(s, false))}

                {hasRecommended && (
                    <>
                        <div style={{
                            fontSize: '12px',
                            color: '#9ca3af',
                            marginBottom: '8px',
                            paddingBottom: '8px',
                            borderBottom: '1px dashed #e5e7eb',
                        }}>
                            아직 제안이 없어요. 비슷한 목표를 가진 사용자들의 제안을 먼저 확인해보세요.
                        </div>
                        {recommendedSuggestions.map((s) => renderSuggestionItem(s, true))}
                    </>
                )}

                {!hasRealSuggestions && !hasRecommended && (
                    <div style={{ color: '#9ca3af', fontSize: '14px', padding: '20px 0' }}>
                        아직 제안이 없습니다.
                    </div>
                )}
            </S.SuggestionRight>
        </S.SuggestionBox>
    </S.Section>
    );
};

export default ProjectDetailSuggestion;