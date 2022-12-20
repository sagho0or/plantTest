import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import * as React from 'react';
import { expect as expect1 } from 'chai';
import ProductSection from './Products.index';

configure({ adapter: new Adapter() });

describe("product page ", () => {
  const getProducts = ()=>{};
  const testItems =  {
      data: [
        {
          "id": 3,
          "title": "title",
          "summary": "<p>description..</p>",
          "imageUrl": "/images/dynamic/product/1.jpg",
          "linkUrl": "/test",
          "creationDate": new Date()
        }
      ],
      isLoading: false
  }

  it("renders", () => {
    mount(<ProductSection getProducts={getProducts} productsList={testItems}/>);
    
  });
});
