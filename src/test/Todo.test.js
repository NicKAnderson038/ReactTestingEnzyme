import React from 'react';
import Todo from '../components/Todo'

import { shallow } from './enzyme.config'

describe('Checking todo main component', ()=>{


    it('testing if todo is loaded', ()=>{
        const wrapper = shallow(<Todo/>)
        wrapper.instance()
        expect(wrapper)
    })




})