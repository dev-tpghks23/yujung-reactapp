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

const BOT_RESPONSES = {
	'페일로그란?': {
		title: '실패를 성장의 자산으로 만드는 공간, 페일로그입니다.',
		body: '페일로그는 단순히 실수를 기록하는 것을 넘어, AI 분석을 통해 나의 행동 패턴을 파악하고 더 나은 내일을 설계하도록 돕는 실패 관리 및 성장 지원 서비스입니다.',
	},
	'사용방법': {
		title: '페로와 함께하는 3단계 성장 루틴',
		body: '① 실패 기록: 자신이 겪은 실패를 자세하게 기록하세요.\n② 분석받기: 기록을 분석해 실패의 원인과 핵심을 보여줍니다.\n③ 성장하기: 분석결과를 확인하고, 다음엔 어떻게 할지 계획해 보세요.',
	},
	'주요 기능 소개': {
		title: '페일로그는 이런 기능을 제공합니다.',
		body: '• AI 원인 분석: 기록된 텍스트를 분석해 구체적인 실패 원인을 도출합니다.\n• 실패 데이터 대시보드: 나의 실패 패턴을 시각화하여 객관적인 자기 객관화를 돕습니다.\n• 재도전 기록: 실패 분석 결과를 바탕으로 재도전의 방향을 기록합니다.',
	},
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
	const bottomRef               = useRef(null);
	const inputRef                = useRef(null);

	useEffect(() => {
		if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, open]);

	const sendMessage = (text) => {
		const msg = text?.trim() || input.trim();
		if (!msg) return;

		setMessages(prev => [
			...prev,
			{ id: Date.now(), role: 'user', text: msg, time: getTime() },
		]);
		setInput('');
		inputRef.current?.focus();

		const preset = BOT_RESPONSES[msg];
		setTimeout(() => {
			setMessages(prev => [
				...prev,
				{
					id: Date.now() + 1,
					role: 'bot',
					title: preset?.title || null,
					text: preset
						? preset.body
						: `"${msg}"에 대한 답변을 준비 중입니다. 잠시만 기다려 주세요!`,
					time: getTime(),
				},
			]);
		}, 800);
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
												<React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
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
						<div ref={bottomRef} />
					</S.ChatArea>

					<S.InputArea>
						<S.InputWrap $focused={focused}>
							<S.InputInner>
								<S.Input
									ref={inputRef}
									value={input}
									placeholder="대화를 시작해보세요!"
									onChange={(e) => setInput(e.target.value)}
									onKeyDown={handleKeyDown}
									onFocus={() => setFocused(true)}
									onBlur={() => setFocused(false)}
								/>
								<S.SendBtn onClick={() => sendMessage()} aria-label="전송">
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