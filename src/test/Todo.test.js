import React from 'react';
import Todo from '../components/Todo'

import { shallow } from './enzyme.config'

describe('Checking todo main component', ()=>{
    
    let wrapper;
    beforeEach(()=> wrapper = shallow(<Todo/>))

    it('testing if todo is loaded', ()=>{
        wrapper.instance()
        expect(wrapper).toHaveLength(1)
    })

    it('testing if todo is loaded', ()=>{
        wrapper.instance()
        expect(wrapper.find('[data-test="input-box"]'))
    })

    it('focus was activated', ()=> {
        const mockObj = { focus: jest.fn() };
        const inst = wrapper.instance();
        inst.inputBox = mockObj;
        inst.handleClearItem();
        expect(mockObj.focus).toHaveBeenCalled();
    })


})