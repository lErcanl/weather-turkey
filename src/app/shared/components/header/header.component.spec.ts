import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
  let fixture: HeaderComponent;
  let routerMock: any;

  beforeEach(() => {
    routerMock = jest.fn();
    fixture = new HeaderComponent(routerMock);
  });

  it('navigation', () => {
    console.log("try to write a navigation test but i couldn't make it.");
  });
});
