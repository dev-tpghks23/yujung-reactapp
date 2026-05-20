import React, { useState, useRef, useEffect } from 'react';
import botIconSvg from './chatbot_icon/Group 1838.svg';
import sendIconSvg from './chatbot_icon/Group 446.svg';
import S from './ChatbotContainerStyle';
import theme from '../../styles/theme';

const QUICK_REPLIES = ['페일로그란?', '사용방법', '주요 기능 소개'];

const getTime = () => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

const INIT_MESSAGES = [
    {
        id: 1,
        role: 'bot',
        text: '안녕하세요!\n페일로그 AI 챗봇 페로입니다.\n무엇을 도와드릴까요?',
        quickReplies: QUICK_REPLIES,
        time: getTime(),
    },
];

const ChatbotContainer = () => {
    const [open, setOpen]         = useState(false);
    const [input, setInput]       = useState('');
    const [focused, setFocused]   = useState(false);
    const [messages, setMessages] = useState(INIT_MESSAGES);
    const [loading, setLoading]   = useState(false);
    const bottomRef               = useRef(null);
    const inputRef                = useRef(null);

    useEffect(() => {
        if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, open]);

    const sendMessage = async (text) => {
        const msg = text?.trim() || input.trim();
        if (!msg || loading) return;

        // 유저 메시지 추가
        setMessages(prev => [
            ...prev,
            { id: Date.now(), role: 'user', text: msg, time: getTime() },
        ]);
        setInput('');
        setLoading(true);
        inputRef.current?.focus();

        try {
            const res = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ aiChatContent: msg }),
            });

            if (!res.ok) throw new Error('서버 오류');

            const data = await res.json();

            setMessages(prev => [
                ...prev,
                {
                    id: Date.now() + 1,
                    role: 'bot',
                    text: data.aiChatContent,
                    time: getTime(),
                },
            ]);

        } catch (e) {
            setMessages(prev => [
                ...prev,
                {
                    id: Date.now() + 1,
                    role: 'bot',
                    text: '죄송합니다. 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.',
                    time: getTime(),
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {open && (
                <S.ChatWindow>
                    <S.Header>
                        <S.HeaderTitle>AI Chat</S.HeaderTitle>
                        <S.CloseBtn onClick={() => setOpen(false)} aria-label="닫기">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 1L11 11M11 1L1 11" stroke={theme.PALETTE.black} strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                        </S.CloseBtn>
                    </S.Header>

                    <S.ChatArea>
                        {messages.map((msg) =>
                            msg.role === 'bot' ? (
                                <S.BotRow key={msg.id}>
                                    <S.BotAvatarWrap>
                                        <img src={botIconSvg} alt="페로" width={24} height={24} />
                                    </S.BotAvatarWrap>
                                    <S.BotContent>
                                        <S.BotName>페로</S.BotName>
                                        <S.BotBubble>
                                            {msg.title && (
                                                <S.BotBubbleTitle>{msg.title}</S.BotBubbleTitle>
                                            )}
                                            {msg.text.split('\n').map((line, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {line}{i < arr.length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                            {msg.quickReplies && (
                                                <S.QuickReplies>
                                                    {msg.quickReplies.map((q) => (
                                                        <S.QuickReplyBtn key={q} onClick={() => sendMessage(q)}>
                                                            {q}
                                                        </S.QuickReplyBtn>
                                                    ))}
                                                </S.QuickReplies>
                                            )}
                                        </S.BotBubble>
                                        <S.MsgTime>{msg.time}</S.MsgTime>
                                    </S.BotContent>
                                </S.BotRow>
                            ) : (
                                <S.UserRow key={msg.id}>
                                    <S.UserContent>
                                        <S.UserBubble>{msg.text}</S.UserBubble>
                                        <S.MsgTime $right>{msg.time}</S.MsgTime>
                                    </S.UserContent>
                                </S.UserRow>
                            )
                        )}

                        {/* 로딩 중 표시 */}
                        {loading && (
                            <S.BotRow>
                                <S.BotAvatarWrap>
                                    <img src={botIconSvg} alt="페로" width={24} height={24} />
                                </S.BotAvatarWrap>
                                <S.BotContent>
                                    <S.BotName>페로</S.BotName>
                                    <S.BotBubble>답변을 생성 중입니다...</S.BotBubble>
                                </S.BotContent>
                            </S.BotRow>
                        )}

                        <div ref={bottomRef} />
                    </S.ChatArea>

                    <S.InputArea>
                        <S.InputWrap $focused={focused}>
                            <S.InputInner>
                                <S.Input
                                    ref={inputRef}
                                    value={input}
                                    placeholder={loading ? '답변 생성 중...' : '대화를 시작해보세요!'}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
                                    disabled={loading}
                                />
                                <S.SendBtn onClick={() => sendMessage()} aria-label="전송" disabled={loading}>
                                    <img src={sendIconSvg} alt="전송" width={16} height={16} />
                                </S.SendBtn>
                            </S.InputInner>
                        </S.InputWrap>
                    </S.InputArea>
                </S.ChatWindow>
            )}

            <S.Fab onClick={() => setOpen((v) => !v)} aria-label="챗봇 열기">
                <img src={botIconSvg} alt="chatbot" width={32} height={32} />
            </S.Fab>
        </>
    );
};

export default ChatbotContainer;