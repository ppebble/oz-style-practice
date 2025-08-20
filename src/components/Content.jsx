import styled from 'styled-components';

const tagColor = '#d7fa00';
const gray = 'rgb(160, 160, 160)';

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 5px;
`;

const ContentImage = styled.img`
	width: 300px;
	border-radius: 10px;
	margin-bottom: 3px;
	min-height: 225px;
`;

const Tag = styled.span`
	font-size: 12px;
	font-weight: 400;
	color: ${tagColor};
	border: 1px solid ${tagColor};
	padding: 4px 5px;
	border-radius: 3px;
`;

const Title = styled.div`
	font-size: 18px;
	font-weight: 600;
`;

const Subtitle = styled.p`
	font-size: 12px;
	font-weight: 400;
	color: ${gray};
`;

export default function Content({ content }) {
	return (
		<ContentContainer>
			<ContentImage src={content.img} alt={content.title} />
			<Tag>모집중</Tag>
			<Title>{content.title}</Title>
			<Subtitle>{content.subtitle}</Subtitle>
		</ContentContainer>
	);
}
