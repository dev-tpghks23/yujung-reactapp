import styled from 'styled-components';

export const S = {};

S.Container = styled.div`
    display: flex;
    flex-direction: column;
`;

S.ContentArea = styled.div`
    /* Additional spacing if needed */
`;

S.BottomLinkWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    padding: 0 0 40px 0; /* Add bottom padding for safety */
`;

S.BottomLink = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    text-decoration: none;
    padding-bottom: 4px;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.PALETTE.third.main};
    }
`;

S.ArrowIcon = styled(({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9795 12.5L3.22949 12.5M15.7295 18.75L21.9795 12.5L15.7295 6.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
))`
    margin-left: 8px;
    transition: transform 0.2s, color 0.2s;

    ${S.BottomLink}:hover & {
        transform: translateX(4px);
    }
`;
