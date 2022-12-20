import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import * as React from 'react';
import { expect as expect1 } from 'chai';
import ProductSection from './ProductSection.index';

configure({ adapter: new Adapter() });

describe("Product Section in homepage", () => {
  const testItems = [
    {
      "id": 3,
      "title": "product 3",
      "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      "imageUrl": "/images/dynamic/products/pl (2).webp",
      "date": new Date(),
      "isFave": false
    },
  ]
  it("renders", () => {
    mount(<ProductSection productList={testItems} />);
    
  });

  it("should render product items", () => {
    const wrapper = shallow(<ProductSection productList={testItems} />);

  });
});
