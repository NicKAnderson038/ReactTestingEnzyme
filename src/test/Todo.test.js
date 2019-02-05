import React from 'react';
import Todo from '../components/Todo'

import { shallow } from './enzyme.config'

describe('Checking todo main component', ()=>{

    let wrapper;
    beforeEach(()=> wrapper = shallow(<Todo/>))

    it('should have loaded todo and checked with toHaveLength() method', ()=>{
        wrapper.instance()
        expect(wrapper).toHaveLength(1)
    })

    it('should have loaded todo and checked with find() method', ()=>{
        wrapper.instance()
        expect(wrapper.find('[data-test="input-box"]'))
    })

    it('should have css pseudo class focus() on ref this.inputBox', ()=> {
        const mockObj = { focus: jest.fn() };
        const inst = wrapper.instance();
        inst.inputBox = mockObj;
        inst.handleClearItem();
        expect(mockObj.focus).toHaveBeenCalled();
    })


})