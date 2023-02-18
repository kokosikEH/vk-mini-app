import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import {
	FormLayout, 
	Panel, 
	PanelHeader, 
	PanelHeaderBack, 
	FormItem,
	Input,
	IconButton,
	File,
	Button,

} from '@vkontakte/vkui';
import {

	Icon24Camera,
} from '@vkontakte/icons';

import persik from '../img/persik.png';
import './Persik.css';

const CreateComm = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Создать коммьюнити
			
		</PanelHeader>
		
		
      	
        
		<FormLayout>
      <FormItem top="📝 Пример с кликабельной иконкой" >
        <Input
          
          type="text"
          placeholder="Ну ведь брокколи это вкусно и полезно 😢"
          defaultValue="Брокколи 🥦"
        />
		
      </FormItem>
	  <FormItem top="Загрузите ваше фото">
        <File before={<Icon24Camera role="presentation" />} size="m">
          Открыть галерею
        </File>
      </FormItem>
	  <FormItem>
              <Button size="l" stretched onClick={props.go} data-to="comm">
                Зарегистрироваться
              </Button>
            </FormItem>
    </FormLayout>
    
		на этой странице вы сможете создать коммьюнити
	</Panel>
	
);

CreateComm.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CreateComm;
