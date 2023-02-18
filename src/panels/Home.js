import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import {
	AdaptivityProvider,
	ConfigProvider,
	AppRoot,
	SplitLayout,
	SplitCol,
	View,
	SimpleCell,
	CardScroll,
	Card,
	ContentCard,
  } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Залупа</PanelHeader>
		{fetchedUser &&
		<Group >
			<Cell>
				Привет, 
				{` ${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary"><h1>Мои NFT</h1></Header>}>
			<CardScroll size="s">
			
			<ContentCard
				onClick={go} data-to="persik"
				src="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
				alt="Picture of person's left hand with pink paint"
				subtitle="unsplash"
				header="Person's left hand with pink paint"
				text="Five hours of makeup and paint to achieve the human anatomy photoshoot. Thank you Steph and Shay. See more and official credit on @jawfox.photography."
				caption="Photo by Alexander Jawfox on Unsplash"
				maxHeight={200}			  
				>
					<div style={{ paddingBottom: '66%' }} />
				</ContentCard>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>
			</CardScroll>
    	</Group>

		<Group header={
		<Header 
			mode="secondary" 
			before="Мои коммьюнити" 
			aside={

			<Button 
				stretched size="l" 
				mode="secondary" 
				onClick={go} 
				data-to="create"
			>
				Создать коммьюнити
			</Button>}
		>
			<h1>Мои коммьюнити</h1>
			</Header>
		}>
			<CardScroll size="s">
			
			<ContentCard
				onClick={go} data-to="persik"
				src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
				alt="Picture of brown and gray mountains under blue sky during daytime photo"
				subtitle="unsplash"
				header="brown and gray mountains under blue sky during daytime photo"
				text="Mountain changji"
				caption="Photo by Siyuan on Unsplash"
				maxHeight={150}
				>
					<div style={{ paddingBottom: '66%' }} />
					
				</ContentCard>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>
			</CardScroll>
    	</Group>

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
