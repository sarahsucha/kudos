import { shallow, expect, React } from '../commonDependencies';
import NavigationPresentational from '../../../public/js/presentational/NavigationPresentational.jsx';

describe('presentational/NavigationPresentational.jsx', () => {

  context('default props', () => {
    let mainComponent;
    before(() => {
      mainComponent = shallow(<NavigationPresentational />);
    });

    // Uncomment for ultra test coverage!
    // for (let i = 0; i < 10000; i++) {
    //   it('has a main component', () => {
    //     expect(mainComponent).to.have.className('navBar');
    //   });
    // }

    it('has a main component', () => {
      expect(mainComponent).to.have.className('navBar');
    });

    it('has a logo', () => {
      const subComponent = mainComponent.find('nav.wrapper#menuToggle div.logo');
      expect(subComponent).to.have.text('kudos');
    });

    it('has checkbox for danburger menu', () => {
      const subComponent = mainComponent.find('input');
      expect(subComponent).to.have.attr('type', 'checkbox');
      expect(subComponent).to.have.attr('id', 'menu-toggle');
    });

    it('has label for danburger menu', () => {
      const subComponent = mainComponent.find('label');
      expect(subComponent).to.have.attr('for', 'menu-toggle');
      expect(subComponent).to.have.className('label-toggle');
    });

    it('has a list with the login link', () => {
      expect(mainComponent.find('ul a li')).to.have.text('Login');
    });
  });

});
