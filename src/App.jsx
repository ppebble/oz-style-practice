import styled from 'styled-components';
import { contents } from './assets/data/data';
import Content from './components/Content';
import Header from './components/Header';

const Main = styled.main`
	display: flex;
	flex-direction: column;
`;

const Section = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px 40px;
`;

function App() {
	return (
		<Main>
			<Header />
			<Section>
				{contents.map((el) => (
					<Content key={el.id} content={el} />
				))}
			</Section>
		</Main>
	);
}
export default App;
